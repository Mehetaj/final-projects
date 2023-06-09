import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/UseMenu';

const PopularMenu = () => {

    const [menu] = useMenu();

    const popular = menu.filter(item => item.category === 'popular')


    return (
        <section className='my-12'>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
            <div className='grid p-10 md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem item={item} key={item._id} />)
                }
            </div>
                <div className='flex justify-center my-4 '>
                <button className='btnp'>View Full Menu</button>
                </div>
        </section>
    );
};

export default PopularMenu;