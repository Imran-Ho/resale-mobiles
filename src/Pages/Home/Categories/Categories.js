import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';
import Loading from '../../../Loading/Loading'
const Categories = () => {

    const {data:categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`https://project-12-server.vercel.app/categories`)
        .then(res => res.json())
    })

    // if(isLoading){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <div>
            <h3 className='text-3xl text-center text-primary mt-10 font-bold'>All Categories</h3>
            <p className='text=1xl text-center text-secondary '>A good choice for every Buyer gives the real taste of product</p>
            </div>
            <hr className='my-5 border' />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
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