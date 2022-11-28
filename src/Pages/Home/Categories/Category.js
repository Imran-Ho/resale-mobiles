import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { thumbnail_url, name, id } = category
    return (
        <div>
            <div className="card w-96 bg-gray-200 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={thumbnail_url} style={{ height: '200px', width: '100%' }} alt="phone" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>See the details and Book now</p>
                        <div className="card-actions">
                        <Link to={`/category/${id}`}>
                            <button className="btn btn-md btn-primary">See More</button>
                        </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Category;