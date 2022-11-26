import React from 'react';

const Advertisement = ({ advertisement, removingAction }) => {
    const {_id, title, original_rice, condition, location, resale_price, used_years, published_date, img } = advertisement;
    return (
        <div>
            <div>
                <h3 className='text-3xl text-center text-primary mt-10 font-bold'>Advertising Products</h3>
                <p className='text=1xl text-center text-secondary mb-5'>We give opportunity to put used products for advertising.</p>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">Model Name: {title}</h2>
                    <div className=''>
                        <div className=''>
                            <p className='font-bold m-2'>Original Price:$ {original_rice}</p>
                            <p className='font-bold m-2'>Condition: {condition}</p>
                            <p className='font-bold m-2'>Location: {location}</p>
                        </div>
                        <div >
                            <p className='font-bold m-2'>Resale Price:$ {resale_price}</p>
                            <p className='font-bold m-2'>Used: {used_years} {used_years > 1 ? 'years' : 'year'}</p>
                            <p className='font-bold m-2'>Published: {published_date}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <p className='text-red-600'>not want to ad product ?</p>
                        <button onClick={()=>removingAction(_id)} className="btn btn-primary">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;