import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextAPI';
import Orders from './Orders';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/booking?email=${user?.email}`

    const {data: orders } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('entryToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
        
    })

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
                         {
                                        order.resalePrice && !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                            <button
                                                className='btn btn-primary'
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