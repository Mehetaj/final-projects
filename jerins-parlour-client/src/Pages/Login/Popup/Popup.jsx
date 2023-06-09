import React from 'react';
import google from '../../../assets/icons/Group 573.png'
import useAuth from '../../../HOOKS/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Popup = () => {
    const {googleSignIn} = useAuth();
    const handleSignIn = () => {
            googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
            })
    }
    return (
        <div  onClick={handleSignIn} className='p-10 cursor-pointer flex justify-center items-center'>
            <div className='flex border px-6 py-2 rounded-3xl items-center gap-10'>
            <img width={30} src={google} alt="" />
            <button><p>Continue With Google</p></button>
            </div>
        </div>
    );
};

export default Popup;