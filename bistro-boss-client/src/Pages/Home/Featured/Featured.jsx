import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-items bg-fixed my-20 pt-10 object-cover '>
            <SectionTitle 
            subHeading="check it out"
            heading="Featured Item">
            </SectionTitle>
            <div className='md:flex bg-slate-500 bg-opacity-40 items-center justify-center pb-20 pt-12 px-16'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 '>
                    <p>Aug 20, 2029</p>
                    <p className=' uppercase'>Where can i get some?</p>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima est error officiis atque ad, exercitationem cupiditate voluptatibus rem! Nemo, culpa aliquid dolorum ullam veniam nesciunt quaerat repudiandae assumenda facere id facilis voluptate molestias reiciendis labore, harum dolor cupiditate officia ex eum quidem consequuntur in. Harum architecto minima quam. Quae!</p>
                    <button className='btnp'>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;