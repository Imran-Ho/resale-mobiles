import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {thumbnail_url, name, id} = category
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={thumbnail_url} style={{height: '200px', width: '100%'}} alt="phone" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>See the details and buy now</p>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${id}`}>
                        <button  className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;