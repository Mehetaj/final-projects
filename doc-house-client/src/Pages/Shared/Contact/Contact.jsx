import React from 'react';

const Footer = () => {
    return (
        <div className='p-4 lg:p-0'>
            <div className='bg-[#07332F]  mt-10 lg:flex items-center justify-around lg:container mx-auto py-20 text-white'>
            <div className='p-10'>
                <h1 className='text-3xl font-bold my-6'>Contact With Us</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit <br />
                    voluptatem accusantium doloremque laudantium, <br />
                    totam rem aperiam, eaque ipsa quae ab illo inve ntore <br /> veritatis et quasi.</p>

                <div className='flex  my-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>

                    </span>
                    <p>+88 01750 14 14 14</p>
                </div>
                <div className='flex'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                    </span>
                    <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className='lg:p-1 p-10'>
                <div className='my-6'>
                    <input className='block mt-2 md:inline w-[267px] h-[64px] bg-green-950 ml-2 px-6' type="text" placeholder='Name' />
                    <input className='block md:inline mt-2 w-[267px] h-[64px] bg-green-950 ml-2 px-6' type="email" placeholder='Email' />
                </div>
                <div  className='my-6'>
                    <input className='w-[267px] h-[64px] bg-green-950 ml-2 px-6' type="text" placeholder='Mobile Number' />
                    <input className='w-[267px] h-[64px] mt-2 bg-green-950 ml-2 px-6' type="text" placeholder='Doctor Name' />
                </div>
                <div className='my-6'>
                    <input className='w-[267px] h-[64px] bg-green-950 ml-2 px-6' type="date" placeholder='Date' />
                    <input className='w-[267px] h-[64px] mt-2 bg-green-950 ml-2 px-6' type="time" placeholder='time' name="Time" id="" />
                </div>
            <button className='btnp mb w-[267px] lg:w-full my-5 mx-2'>Book Now</button>
            </div>
        </div>
        </div>
    );
};

export default Footer;