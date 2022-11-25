import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextAPI';
import Orders from './Orders';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/booking?email=${user?.email}`

    const {data: orders } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
        
    })
    console.log(orders)
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

                     { orders && orders?.map((order, i) => <tr>
                        <th>{i + 1}</th>
                         <td>
                             <div className="avatar">
                                 <div className="w-24 rounded-full">
                                     <img src={order.img} alt='model' />
                                 </div>
                             </div>
                         </td>
                         <td>{order.phoneModel}</td>
                         <td>{order.resalePrice}</td>
                         <td>{order.resalePrice}</td>
                     </tr>
                     )}
                         

                    
                 </tbody>
             </table>
         </div>
     </div>
    );
};

export default MyOrders;