import React from 'react';

const Address = () => {
    return (
        <div className='my-20 p-4 lg:flex justify-between mx-auto  text-white container'>
           <div className='bg-[#07332F] rounded-lg mt-6 p-14 w-full lg:w-[364px] h-[202px]'>
            <div className='flex items-center'>
            <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

            </span>
            <h2 className='text-2xl'>Opening Hours</h2>
            </div>
            <p className='my-4 ml-10'>Open 9.00 an to 5.00 pm <br /> Everyday</p>
           </div>
           <div className='bg-[#F7A582] rounded-lg mt-6 p-14 w-full lg:w-[364px] h-[202px]'>
            <div className='flex items-center'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</span>

            <h2 className='text-2xl'>Our Locations</h2>
            </div>
            <p className='my-4 ml-10'>Dhanmondi 17, Dhaka <br /> -1200, Bangladesh</p>
           </div>
           <div className='bg-[#07332F] rounded-lg mt-6 p-14 w-full lg:w-[364px] h-[202px]'>
            <div className='flex items-center'>
            <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
</svg>


            </span>
            <h2 className='text-2xl'>Contact Us</h2>
            </div>
            <p className='my-4 ml-10'>+88 01750 00 00 00 <br />
+88 01750 00 00 00</p>
           </div>
        </div>
    );
};

export default Address;