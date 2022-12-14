import React from 'react';
import AdvertiseItems from './AdvertiseItems/AdvertiseItems';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import EmailForm from './EmailForm/EmailForm';

const Home = () => {
    return (
        <div className='lg:mx-10 sm:mx-3'>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertiseItems></AdvertiseItems>
            <EmailForm></EmailForm>
        </div>
    );
};

export default Home;