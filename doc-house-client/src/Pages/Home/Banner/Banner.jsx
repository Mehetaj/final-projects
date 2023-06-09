import React from 'react';
import bannerImg from '../../../assets/Group 34991.png'
import './Banner.css'


const Banner = () => {
    return (
        <div className=' -mt-64 bg-fixed'>
            
            <div className="bg-image-for-banner p-10 lg:p-1 pt-20 lg:pt-0 lg:flex items-center justify-around">

<div className='text-white'>
    <h1 className='my-6 text-6xl'>
    Your Best Medical <br /> Help Center
    </h1>
    <p>Lorem Ipsum is simply dummy text they are printing typesetting <br />
     has been the industry’s stardard.</p>

     <button className='btnp'>All service</button>
</div>

<div>
    <img src={bannerImg} alt="" />
</div>
</div>
        </div>
    );
};

export default Banner;