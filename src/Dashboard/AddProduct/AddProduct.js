import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    // imgBB key from env.local
    const imageBBHostingKey = process.env.REACT_APP_imagebb_key;
    

    const handleAddProduct = data => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image );
        const url = `https://api.imgbb.com/1/upload?key=${imageBBHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                // console.log(imgData.data.url)

            // to send imageUrl and products info to Backend

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
                seller_name: data.sellerName,
                img:imgData.data.url
                
            }

            // save doctor data to database
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
        })
    }

  

    // if(isLoading){
    //     return <Loading></Loading>
    // }

    return (
        <div className='w-2/3 p-7'>
            <h3 className='text-3xl'>Add a product</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='lg:flex'>
                    <div className='mr-3'>
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
                            <input defaultValue='Chittagong' type="location" {...register("location",)} className="input input-bordered w-full" readOnly />
                        </div>
                    </div>
                    <div>
                        
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <input placeholder='Brand name' type="category" {...register("category",)} className="input input-bordered w-full" />
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
                            <input placeholder='1 year' type="use" {...register("use",)} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Published Date</span>
                            </label>
                            <input placeholder='mm-dd-yyyy' type="publishedDate" {...register("publishedDate",)} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="sellerName" {...register("sellerName",)} className="input input-bordered w-full" />
                        </div>

                    </div>
                </div>
                <div className="form-control w-2/3">
                    <label className="label">
                        <span className="label-text">Keep your product image here</span>
                    </label>
                    <input type="file" {...register("photo", {
                        required: "photo is required."
                    })} className="input input-bordered w-full" />
                    
                </div>
                <input className='btn btn-accent w-2/3 mt-6' value='Add Product' type="submit" />

            </form>
        </div>
    );
};

export default AddProduct;