import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
    const products = useLoaderData();
    
    return (
        <div>
            <div>
                <h2 className='text-2xl text-center text-secondary my-10'>A treasure of used phone collection at reasonable price.</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    products.map(product => <Item 
                        key={product._id}
                        product={product}
                    ></Item>)
                }
            </div>
            
        </div>
    );
};

export default Items;