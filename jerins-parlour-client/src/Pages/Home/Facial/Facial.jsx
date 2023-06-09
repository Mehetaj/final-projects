import React from 'react';
import img from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const Facial = () => {
    return (
        <div className='my-10 flex items-start justify-between'>
            <img width={580} height={381} src={img} alt="" />
            <div className='mr-64'>
                <h1 className='text-4xl font-bold mb-6'>
                    Let us handle your <br /> screen <span className='text-[#F63E7B] '>Professionally</span>.
                </h1>
                <p className=''>
                    With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general ipsum <br /> .Lorem ipsum  dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo ipsum.
                </p>

                <div className='mt-[69px] w-[70%] items-end flex justify-between'>
                    <div className='text-center'>
                        <p className='text-2xl text-[#F63E7B] font-bold '>500+</p>
                        <span>Happy Customer</span>
                    </div>
                    <div className='text-center'>
                        <p className='text-2xl text-[#F63E7B] font-bold '>16+</p>
                        <span>Total Service</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facial;