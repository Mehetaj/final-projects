import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({item}) => {
    const {img,name, description, price} = item
    return (
        <div className='bg-base-100 rounded-xl p-10 mr-10'>
            <img className='w-[80px]' src={img} alt="" />
            <h1 className='text-2xl font-bold my-4'>{name}</h1>
            <p className=''>{description}</p>
            <div className='flex justify-between mt-6 items-center'>
            <p className='text-red-600 font-semibold'>${price}</p>
            <button className='btnp'><Link>Pay</Link></button>
            </div>
        </div>
    );
};

export default Cart;