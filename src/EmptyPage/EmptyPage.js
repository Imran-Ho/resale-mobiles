import React from 'react';
import empty from '../../src/sources/e404.png'

const EmptyPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img  src={empty} alt="" />
        </div>
    );
};

export default EmptyPage;