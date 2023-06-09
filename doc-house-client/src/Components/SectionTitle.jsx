import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-center w-full lg:w-[800px] mx-auto'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='my-6'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;