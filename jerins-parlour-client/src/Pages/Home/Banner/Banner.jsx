import React from 'react';
import img from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <div className='flex justify-around items-center my-[50px]'>
            <div>
                <h1 className='text-6xl mb-6 font-bold '>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>

                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>

                <button className='btnp mt-6'>
                    Get an Appointment
                </button>
            </div>
            <img width={484} height={478} src={img} alt="" />
        </div>
    );
};

export default Banner;