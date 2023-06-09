import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../HOOKS/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../../HOOKS/useAuth';

const Service = ({service}) => {
    const {img,name,description,price} = service;
    const [axiosSecure] = useAxiosSecure()
    const {user} = useAuth()
    
    const handleAddtoCart = item => {
        const { img,name,description, price } = item;
        const email = user?.email
        console.log(item);
       if (user && user.email) {
        axiosSecure.post("/carts", {img,name,description,price, email})
        .then(res => {
            console.log(res.data.insertedId);
            if (res.data.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Add to cart successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
       }
    }

    return (
        <div className='text-center p-10 w-[370px]  shadow-xl'>
            <div className=' flex justify-center items-center'>
            <img width={72} height={72} src={img} alt="" />
            </div>
            <h1 className='text-2xl font-bold mt-6'>{name}</h1>
            <p className='text-red-600 font-semibold mt-2'>$ {price}</p>
            <p className='my-5 mx-auto'>{description}</p>
            <button onClick={() => handleAddtoCart(service)} className='btnp w-full'>ADD</button>
        </div>
    );
};

export default Service;