import React, { useContext } from 'react';
import authentication_img from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        // console.log(data);
        if (data) {
            createUser(data.email, data.password)
                .then(result => {
                    // console.log(result);
                    if (result.user) {

                        updateUserProfile(data.name, data.photo)
                            .then(() => {

                                const saveUser = { name: data.name, email: data.email }

                                fetch('http://localhost:5000/users', {
                                    method: 'POST',
                                    headers: { 'content-type': 'application/json' },
                                    body: JSON.stringify(saveUser)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.insertedId) {
                                            // reset();
                                            Swal.fire({
                                                position: 'center',
                                                icon: 'success',
                                                title: 'Your work has been saved',
                                                showConfirmButton: false,
                                                timer: 1500
                                            });
                                            navigate('/')
                                        }
                                    })
                            })
                    }
                })
        }
    }

    return (





        < div >
            <Helmet>
                <title>Bistro Boss || Signup</title>
            </Helmet>
            <div className='login-container'>
                <div className=' flex flex-row-reverse items-center justify-around'>
                    <img className='lg:w-[648px h-[455px]' src={authentication_img} alt="" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-center text-3xl font-bold my-4'>Sign Up</h2>
                        <div>
                            <label className='block my-2' htmlFor="email">Name</label>
                            <input placeholder='Type here' className='w-[536px] px-4 mb-4 h-[52px] bg-[#FFFFFF] rounded-md border-2' type="text" {...register("name", { required: true })} name="name" id="" />
                            {errors.name && <p className='text-red-600'>Name is required</p>}
                        </div>
                        <div>
                            <label className='block my-2' htmlFor="email">Photo URL</label>
                            <input placeholder='Photo URL' className='w-[536px] px-4 mb-4 h-[52px] bg-[#FFFFFF] rounded-md border-2' type="text" {...register("photo")} name="" id="" />
                        </div>
                        <div>
                            <label className='block my-2' htmlFor="password">Email</label>
                            <input placeholder='Enter your password' className='w-[536px] px-4 mb-4 h-[52px] bg-[#FFFFFF] rounded-md border-2' {...register("email",
                                { required: true })}
                                type="email"
                                name="email"
                                id="" />
                            {errors.email && <p className='text-red-600'>Email is required</p>}
                        </div>
                        <div>
                            <label
                                className='block my-2' htmlFor="password">
                                Password
                            </label>
                            <input
                                placeholder='Enter your password'
                                className='w-[536px] px-4 mb-4 h-[52px] bg-[#FFFFFF] rounded-md border-2'
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[A-Z])(?=.*[!@#&*])(?=.*[0,9])(?=.*[a-z])/
                                    })}
                                type="password"
                                name="password"
                                id="" />
                            {errors.password?.type === 'minLength'
                                &&
                                <p className='text-red-500'>Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern'
                                &&
                                <p className='text-red-500'>Password must have one uppercase one lower case, one number and one special character.</p>}
                            {errors.password?.type === 'maxLength'
                                &&
                                <p className='text-red-500'>Password must be 20 characters</p>}
                            {errors.password
                                &&
                                <p className='text-red-600'>Password is required</p>}
                        </div>
                        <input
                            type="submit"
                            value="Sign Up"
                            className='my-4 bg-yellow-600 py-2 rounded-md text-xl text-white w-full' />
                        <p
                            className='text-center text-yellow-500'>
                            <small>
                                <Link
                                    to='/login'
                                >
                                    Alrady Registered? Go to log in
                                </Link>
                            </small>
                        </p>
                    </form>
                </div>
                <SocialLogin />
            </div>
        </div >
    );
};

export default Signup;