import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const {user} = useContext(AuthContext);
    const [ , refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddtoCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = {menuItemID : _id, name,image,price,email: user?.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json()).then(data => {
                // console.log(data);
                refetch()
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Food added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        } else{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Please login to add cart',
                showConfirmButton: true,
                confirmButtonText: 'Login Now'
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }
    return (
        <div className='w-[350px] mx-auto'>

            <img className='h-[300px] w-[350px] ' src={image} alt="" />
            <p className=' absolute ml-72 font-semibold text-yellow-400 -mt-72'>$ {price}</p>
            <div className='p-4 bg-gray-100'>
                <h2 className='text-2xl font-semibold font-sans mb-3 text-center'>{name}</h2>
                <h2 className='mb-4'>{recipe}</h2>
                <div className='text-center'>
                    <button onClick={() => handleAddtoCart(item)} className='my-4 mx-auto border-b-2 px-8 text-yellow-600 border-yellow-400 bg-black py-3 shadow-lg shadow-yellow-100'>Add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;