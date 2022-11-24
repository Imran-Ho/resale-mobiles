import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Item from '../Item/Item';

const Items = () => {
    const products = useLoaderData();
    const [bookingModal, setBookingModal] = useState(null)
    
    return (
        <div>
            <div>
                <h2 className='text-2xl text-center text-secondary my-10'>A treasure of used phone collection at reasonable price.</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-10'>
                {
                    products.map(product => <Item 
                        key={product._id}
                        product={product}
                        setBookingModal={setBookingModal}
                    ></Item>)
                }
            </div>
            <div>
                {
                    bookingModal && <BookingModal
                    bookingModal={bookingModal}
                    setBookingModal={setBookingModal}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default Items;