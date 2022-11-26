import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    // imgbb key from env.local
    // const imageBBHostingKey = process.env.REACT_APP_imagebb_key;


    // find only doctors specialty from database
    // const {data: specialties, isLoading} = useQuery({
    //     queryKey: ['specialty'],
    //     queryFn: async () =>{
    //         const res = await fetch('http://localhost:5000/appointmentSpecialty')
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    const handleAddProduct = data => {
        
        const product ={
            title: data.productName,
            original_rice: data.originalPrice,
            condition: data.condition,
            contact: data.contact,
            location: data.location,
            category: data.category,
            resale_price: data.resale,
            used_years: data.use,
            published_date: data.publishedDate,
            seller_name: data.sellerName
            
            
        }
        console.log(product)

        // save add product data to database
        fetch('http://localhost:5000/addedProducts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            toast.success(`${data.productName} is added successfully`)
            navigate('/dashboard/myProduct')
        })
    }

    // if(isLoading){
    //     return <Loading></Loading>
    // }

    return (
        <div className='w-96 p-7'>
            <h3 className='text-3xl'>Add a product</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='lg:flex'>
                    <div className='mr-5'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="product" {...register("productName")} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input type="originalPrice" {...register("originalPrice",)} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Condition</span>
                            </label>
                            <input type="condition" {...register("condition",)} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input type="contact" {...register("contact",)} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="location" {...register("location",)} className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div>
                        
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <input type="category" {...register("category",)} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Resale Price</span>
                            </label>
                            <input type="resale" {...register("resale",)} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Year of Use</span>
                            </label>
                            <input type="use" {...register("use",)} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">published Date</span>
                            </label>
                            <input type="publishedDate" {...register("publishedDate",)} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">seller Name</span>
                            </label>
                            <input type="sellerName" {...register("sellerName",)} className="input input-bordered w-full" />
                        </div>

                    </div>
                </div>
                <input className='btn btn-accent w-full mt-6' value='Add Doctor' type="submit" />

            </form>
        </div>
    );
};

export default AddProduct;