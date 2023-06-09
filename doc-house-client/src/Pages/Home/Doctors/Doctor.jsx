import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { img, name, type, ratings, location, time, pay } = doctor;
    // console.log(doctor);
    return (
        <div className='border w-[364px] mt-4 lg:mt-0 rounded-lg mx-auto  p-6'>
            <img src={img} alt="" />
            <h2 className='text-2xl mt-4 font-semibold'>{name}</h2>
            <p>{type}</p>
            <Rating
                style={{ maxWidth: 100 }}
                className='mt-4'
                value={ratings}
                readOnly
            />

            <div className='flex mt-4 items-center gap-4'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                </span>
                <p>{location}</p>
            </div>

            <div className='flex mt-4 items-center gap-4'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>

                </span>
                <p>{time}</p>
            </div>

            <div className='flex  mt-4 items-center gap-4'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                </span>
                <p>{pay}</p>
            </div>

           <Link className='my-8'>
           <button className='btnp text-white w-[324px] '>View Profile</button>
           </Link>
        </div>
    );
};

export default Doctor;