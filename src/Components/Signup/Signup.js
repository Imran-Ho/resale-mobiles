import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextAPI';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { newUserCreate, updateUserInfo } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const navigate = useNavigate();

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    if(token){
        navigate('/');
    }


    const signInHandler = data => {
        // console.log(data)
        newUserCreate(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // update name of user
                const userName = {
                    displayName: data.name
                }
                updateUserInfo(userName)
                    .then(() => {
                        // save info to database
                        saveUserInfo(data.name, data.email, data.type)
                    })
                    .catch(err => console.log(err));
                toast.success('user created successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }

    // user info save to database
    const saveUserInfo = (name, email, type) =>{
        const user = {name, email, type};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setCreatedUserEmail(email)
        })

    }


    // jwt token call
        const getEntryToken = email =>{
            fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data =>{
                if(data.accessToken){
                    localStorage.setItem('entryToken', data.accessToken);
                    navigate('/')
                }
            })
        }

    return (
        <div className='h-[600px] flex justify-center items-center border'>
            <div className='w-96 p-6'>
                <h2 className='text-3xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(signInHandler)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "Name is required."
                        })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "Email is required."
                        })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required.",
                            minLength: { value: 6, message: "at least 6 digits." },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                        })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <select {...register('type')} className="input input-bordered w-full my-3">
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>

                        <label className="label">
                            <span className="label-text">forget Password ?</span>
                        </label>
                    </div>
                    <div>

                    </div>

                    <p>{data}</p>
                    <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
                    <p>already have an account <Link className='text-secondary' to='/login'>Log in</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>Sign with google</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;