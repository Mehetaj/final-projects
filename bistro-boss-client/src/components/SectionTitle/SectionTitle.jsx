import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=' text-center mx-auto md:w-full  my-8'>
            <p className='text-yellow-500 italic mb-3  border-b-2  '>--- {subHeading} ---</p>
            
            <p className='text-3xl border-b-2 py-4'>{heading}</p>
           
        </div>
    );
};

export default SectionTitle;