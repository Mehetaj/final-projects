import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Facial from '../Facial/Facial';
import Testimonals from '../Testimonals/Testimonals';
import Message from '../Message/Message';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Facial />
            <Testimonals />
            <Message />
        </div>
    );
};

export default Home;