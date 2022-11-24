import React from 'react';
import phones from '../../../sources/phones.avif'

const Banner = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={phones} className="rounded-lg shadow-2xl lg:w-1/2"  alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Resale Hut of <br /> Used Phones </h1>
                        <p className="py-6">An authentic place for every products <br /> which led with the satisfaction of valued clients.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;