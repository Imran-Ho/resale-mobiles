import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: sellers, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://project-12-server.vercel.app/sellers')
            const data = await res.json();
            return data;
        }
    })

// delete user account
    const deleteSeller = id =>{
        
        fetch(`https://project-12-server.vercel.app/sellers/${id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`seller account deleted successfully`)
                }
            })
    }

    return (
        <div>
            <h3 className='text-3xl text-center text-purple-800 my-4'>Details of All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            sellers && sellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.type}</td>
                                <td>
                                    <button onClick={()=>deleteSeller(seller._id)} className='btn btn-sm'>Delete</button>
                                </td>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;