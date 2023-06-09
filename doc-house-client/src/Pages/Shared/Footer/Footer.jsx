import React from 'react';
import logo from '../../../assets/doctors/logo.png'

const Footer = () => {
    return (
        <div className='h-[662px] w-[1440px] mx-auto my-20 flex justify-between p-40 bg-[#F3F3F3]'>
            <div>
                <div className='flex mb-8 items-center'>
                    <img src={logo} alt="" />
                    <p className='text-2xl font-semibold'><span className='text-orange-500'> Doc </span>House</p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the <br />
                    printing and typesetting industry. has been <br />
                    since the printer took.</p>

                <button className='btn font-bold text-orange-400 my-5 border-orange-400 btn-outline hover:border-orange-400 hover:bg-orange-400'>Appointment</button>
            </div>

            <div className='foot-txt'>
                <h2 className='text-2xl font-bold'>Quick Links</h2>
                <p>About Us</p>
                <p>Service</p>
                <p>Doctors</p>
                <p>Departments</p>
                <p>Online Payment</p>
                <p>Contact Us</p>
                <p>My Account</p>
            </div>
            <div className='foot-txt'>
                <h2 className='text-2xl font-bold'>Doc House Services</h2>
                <p>Pediatric Clinic</p>
                <p>Diagnosis Clinic</p>
                <p>Cardiac Clinic</p>
                <p>Laboratory Analysis</p>
                <p>Gynecological Clinic</p>
                <p>Personal Counseling</p>
                <p>Dental Clinic</p>
            </div>
            <div  className='foot-txt'>
                <h2 className='text-2xl font-bold'>Doc House Services</h2>
                <p>Monday - 10 am to 7 pm</p>
                <p>Tuesday - 10 am to 7 pm</p>
                <p>Wednesday - 10 am to 7 pm</p>
                <p>Thursday - 10 am to 7 pm</p>
                <p>Friday - 10 am to 7 pm</p>
                <p>Saturday - 10 am to 7 pm</p>
                <p>Sunday - 10 am to 7 pm</p>
            </div>
        </div>
    );
};

export default Footer;