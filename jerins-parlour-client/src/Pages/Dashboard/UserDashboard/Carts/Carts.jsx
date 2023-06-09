import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../HOOKS/useAxiosSecure';
import useCart from '../../../../HOOKS/useCart';
import Cart from './Cart';

const Carts = () => {
    const [cart, refetch] = useCart()
    console.log(cart);
    return (
        <div>
            <h1 className='text-3xl font-semibold'>Service List</h1>

            <div className='grid mt-10 md:grid-cols-2'>
                {
                    cart.map(item => <Cart key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default Carts;