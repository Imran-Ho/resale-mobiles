import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {

    const {data:categories = [],} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`http://localhost:5000/categories`)
        .then(res => res.json())
    })
    return (
        <div>
            <div>
            <h3 className='text-3xl text-center text-primary mt-10 font-bold'>All Categories</h3>
            <p className='text=1xl text-center text-secondary mb-10'>A good choice for every Buyer gives the real taste of product</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-auto'>
                {
                    categories.map(category => <Category
                    key={category._id}
                    category={category}
                    >
                    </Category>)
                }
            </div>
        </div>
    );
};

export default Categories;