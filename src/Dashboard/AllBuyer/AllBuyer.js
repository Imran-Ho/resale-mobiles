import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {

    const { data: buyers, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://project-12-server.vercel.app/buyers')
            const data = await res.json();
            return data;
        }
    })

// delete user account
    const deleteBuyer = id =>{
        
        fetch(`https://project-12-server.vercel.app/buyers/${id}`, {
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
            <h3 className='text-3xl text-center text-purple-800 my-4'>Details of All Buyers</h3>
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
                            buyers && buyers?.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.type}</td>
                                <td>
                                    <button onClick={()=>deleteBuyer(buyer._id)} className='btn btn-sm'>Delete</button>
                                </td>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;