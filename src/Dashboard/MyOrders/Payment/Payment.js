
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {

    const bookings = useLoaderData()
    console.log(bookings)
    // const navigation = useNavigation();
    const { title, resalePrice, } = bookings;

    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    return (
        <div className='text-center w-auto my-10 border'>
            <h2 className='text-3xl py-6'>Payment for {title}</h2>
            <p>Please pay <strong>$ {resalePrice}</strong> for your appointment on {} at {}</p>
            <h2 className='text-2xl text-blue-900 mt-6'>Provide Card information below.</h2>
            <div className='w-auto mx-16 mb-12 '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookings={bookings}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;