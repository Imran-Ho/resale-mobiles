import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextAPI';

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
    return (
        <div>
            <h3>my orders: {orders.length}</h3>
        </div>
    );
};

export default MyOrders;