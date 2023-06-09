import React from 'react';
import Banner from '../Banner/Banner';
import Address from '../Address/Address';
import Reviews from '../Reviews/Reviews';
import Doctors from '../Doctors/Doctors';
import DocTabs from '../DocTabs/DocTabs';
import Contact from '../../Shared/Contact/Contact'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DocTabs></DocTabs>
            <Address></Address>
            <Reviews></Reviews>
            <Doctors></Doctors>
            <Contact></Contact>
        </div>
    );
};

export default Home;