import React from 'react';

const Item = ({product}) => {

    const {img, location, original_price, published_date, resale_price, seller_name, title, used_years, } = product;
    return (
        <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} style={{height:'200px', width: '100%'}} alt="mobile" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Model Name: {title}</h2>
                        <h3 className='text-2xl font-bold'>Seller Name: {seller_name}</h3>
                        <p className='text-1xl font-bold'>Location: {location}</p>
                        <p className='text-1xl font-bold'>Original Price:$ {original_price}</p>
                        <p className='text-1xl font-bold'>Resale Price:$ {resale_price}</p>
                        <p className='text-1xl font-bold'>Used: {used_years} {used_years > 1 ? 'years' : 'year'}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Item;