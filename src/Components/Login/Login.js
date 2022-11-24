import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextAPI';

const Login = () => {
    const {logInWithEmail, googleSignIn} = useContext(AuthContext)
    
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const signInHandler = data =>{
        console.log(data)
        logInWithEmail(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true});
        })
        .catch(err =>{
            console.log(err)
        })

    }

// google sign in
    const googleSign = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true});
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='h-[500px] flex justify-center items-center border'>
        <div className='w-96 p-6'>
            <h2 className='text-3xl text-center'>Login</h2>
            <form onSubmit={handleSubmit(signInHandler)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input 
                    type="email" 
                    {...register("email", { 
                        required: "Email Address is required" 
                    })} className="input input-bordered w-full" />  
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"
                     {...register("password", {
                        required: "Password is required.",
                        minLength: {value: 6, message: 'Password should be more than 6 digits or longer.' }
                        })} className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <label className="label">
                        <span className="label-text">forget Password ?</span>
                    </label>  
                </div>
                
                <p>{data}</p>
                <input className='btn btn-accent w-2/3' value='Login' type="submit" />
                <div>
                    {/* {loginError && <p>{loginError}</p>} */}
                </div>
                <p>New to Resale Mobiles ? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleSign} className='btn btn-outline w-full'>Sign with google</button>
            </form>
        </div>
    </div>
    );
};

export default Login;