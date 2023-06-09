import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../HOOKS/useAxiosSecure';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/services')
            .then(res => {
                setServices(res.data)
            })
    }, [])
    return (
        <div className=' my-20'>
            <h1 className='text-center font-bold text-3xl'>Our Awesome <span className=' text-[#F63E7B]'>Services</span></h1>
            <div className=' mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service service={service} key={service._id}/>)
                }
            </div>
        </div>
    );
};

export default Services;