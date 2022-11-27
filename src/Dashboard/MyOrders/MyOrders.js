import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextAPI';


const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/booking?email=${user?.email}`

    const {data: orders, refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
        
    })

    const orderDelete = id =>{
        console.log(id)
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Order deleted successfully`)
                }
            })
    }
    return (
       
         <div>
         <div className="overflow-x-auto">
             <table className="table w-full">

                 <thead>
                     <tr>
                         <th></th>
                         <th>Image</th>
                         <th>Title</th>
                         <th>Price</th>
                         <th>Action</th>
                     </tr>
                 </thead>
                 <tbody>

                     { orders && orders?.map((order, i) => <tr
                        key={order._id}
                        >
                        <th>{i + 1}</th>
                         <td>
                             <div className="avatar">
                                 <div className="w-24 rounded-full">
                                     <img src={order.img} alt='model' />
                                 </div>
                             </div>
                         </td>
                         <td>{order.phoneModel}</td>
                         <td>$ {order.resalePrice}</td>
                         <td>
                            <button onClick={()=>orderDelete(order._id)} className='btn btn-sm mr-5'>Delete</button>
                         
                         {
                                        order.resalePrice && !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                            <button
                                                className='btn btn-sm btn-primary '
                                            >Pay</button>
                                        </Link>
                                    }
                                     {
                                        order.resalePrice && order.paid && <span
                                            className='text-primary'
                                        >Paid</span>
                                    }
                         </td>
                     </tr>
                     )}
                         

                    
                 </tbody>
             </table>
         </div>
     </div>
    );
};

export default MyOrders;