import React from 'react';
import './Boss.css'

const Boss = () => {
    return (
        <div className=' bg-fixed flex items-center justify-center p-10 lg:px-32 boss h-[572px] my-20'>
            <div className='text-center  rounded-xl my-auto  py-10 h-[333px] bg-white'>
                <div>
                <h1 className='text-4xl font-serif '>Bistro Boss</h1>
                <p className='md:w-[70%] my-4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Boss;