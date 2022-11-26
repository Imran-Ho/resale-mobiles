import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MyProducts = () => {
    const navigate = useNavigate();
    const { data: addedProducts, isLoading, refetch } = useQuery({
        queryKey: ['addedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addedProducts')
            const data = await res.json();
            return data;
        }
    })
    // console.log(addedProducts)



    // for product advertisement
    const forAdvertise = productForAdvertise =>{
        console.log(productForAdvertise)
        
        fetch('http://localhost:5000/advertisement', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json',
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(productForAdvertise)
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result)
                toast.success(`product added successfully for advertisement`)
                navigate('/')
            })
    }



    // added product deleting action here
    const deletingAction = id =>{
        
        fetch(`http://localhost:5000/addedProducts/${id}`,{
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch()
                toast.success(`added product deleted successfully`)
            }
        })
    }
    return (
        <div>
            <h2>my product:{addedProducts?.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Model Name</th>
                                <th>Resale Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {addedProducts && addedProducts?.map((addedProduct, i) => <tr
                                key={addedProduct._id}
                                >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={addedProduct.img} alt='seller' />
                                        </div>
                                    </div>
                                </td>
                                <td>{addedProduct.title}</td>
                                <td>$ {addedProduct.resale_price}</td>
                                <td>
                                {
                                       addedProduct.resale_price && !addedProduct.paid && <span
                                            className='text-info'
                                        >Unsold</span>
                                    }
                                     {
                                        addedProduct.resale_price && addedProduct.paid && <span
                                            className='text-primary'
                                        >Sold</span>
                                    }
                                </td>
                                <td>
                                    <button onClick={()=>forAdvertise(addedProduct)} className='btn btn-sm btn-info mr-3'>Click for Ad</button>
                                    <button onClick={()=>deletingAction(addedProduct._id)} className='btn btn-sm btn-warning'>Delete</button>
                                </td>
                            </tr>
                            )}



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;