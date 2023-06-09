import React from 'react';

const Message = () => {
    return (
        <div className='mt-20 w-1/2 mx-auto'>
            <h1 className='text-4xl text-center font-bold'>
                Let us handle your 
                <br />
                project, professionally.
            </h1>

            <div className='flex justify-around items-center gap-10 mt-6'>
                <input placeholder='First Name'    className='w-[368px] form-control border-none focus:border-none h-[56px] bg-[#FFFFFF] rounded-lg' type="text" />
                <input placeholder='Last Name'     className='w-[368px] form-control border-none focus:border-none h-[56px] bg-[#FFFFFF] rounded-lg' type="text" />
            </div>
            <div className='flex justify-around items-center gap-10 mt-6'>
                <input placeholder='Email Address' className='w-[368px] form-control border-none focus:border-none h-[56px] bg-[#FFFFFF] rounded-lg' type="text" />
                <input placeholder='Phone Number'  className='w-[368px] form-control border-none focus:border-none h-[56px] bg-[#FFFFFF] rounded-lg' type="text" />
            </div>
            <div className='flex justify-start  mt-6'>
                <input placeholder='Your Message'  className='w-[368px] form-control border-none focus:border-none h-[56px] bg-[#FFFFFF] rounded-lg' type="text" />
            </div>
            <div className=' flex justify-center items-center'>
            <button className='btnp mt-6'>Send Message</button>
            </div>
        </div>
    );
};

export default Message;