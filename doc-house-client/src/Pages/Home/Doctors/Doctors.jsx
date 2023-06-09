import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setDoctors(data)
        })
    },[])


    return (
        <div className='my-20 container mx-auto'>
            <SectionTitle title={'Our Expert Doctors'} subTitle={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    doctors.map((doctor,i) => <Doctor key={i} doctor={doctor}/>)
                }
            </div>
        </div>
    );
};

export default Doctors;