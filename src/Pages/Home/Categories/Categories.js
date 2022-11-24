import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Categories = () => {

    const {data:categories = [],} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`http://localhost:5000/categories`)
        .then(res => res.json())
    })
    return (
        <div>
            <h3>categories: {categories.length}</h3>
        </div>
    );
};

export default Categories;