import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import chair from '../../assets/doctors/chair 1.png'
import SectionTitle from '../../Components/SectionTitle';

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <div>
            <div className='flex container mx-auto items-center'>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="Pp"
                />
                <img src={chair} alt="" />
            </div>
            <div className='mt-20'>
            <SectionTitle title={'Please select a service.'} subTitle={'Available Services on April 30, 2022'}/>
            </div>
        </div>
    );
};

export default Appointment;