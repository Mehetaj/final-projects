import React, { useContext } from 'react';
import frame from '../../../assets/login/Frame.png'
import plus from '../../../assets/login/plus.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data);
        const { name, photo, email, password } = data
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Create account successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')
                }
                updateUserProfile(name,photo)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='flex items-center justify-between'>
            <div className='w-[50%] h-[100vh] bg-[#07332F]'>
                <div className=''>
                    <img className='' src={plus} alt="" />
                </div>
                <div>
                    <div className=''>
                        <img className='' src={frame} alt="" />
                    </div>
                </div>
            </div>

            <div className="mx-auto border p-10 rounded-lg">
                <h2 className='text-3xl text-center font-bold my-4'>Sign Up to Doc House</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-8'>
                        <label className='block my-2' htmlFor="name">Name</label>
                        <input className='w-[360px] input h-[56px] bg-[#F3F3F3] rounded-lg px-6  focus:border-green-500' type="text" placeholder='Enter Your Name' {...register("name", { required: true })} />
                    </div>
                    <div className='mt-8'>
                        <label className='block my-2' htmlFor="name">Photo URL</label>
                        <input className='w-[360px] input h-[56px] bg-[#F3F3F3] rounded-lg px-6  focus:border-green-500' type="url" placeholder='Enter Your Photo' {...register("photo", { required: true })} />
                    </div>
                    <div className='mt-8'>
                        <label className='block my-2' htmlFor="name">Email</label>
                        <input className='w-[360px] input h-[56px] bg-[#F3F3F3] rounded-lg px-6  focus:border-green-500' type="email" placeholder='Enter Your Email' {...register("email", { required: true })} />
                    </div>
                    <div className='mt-8'>
                        <label className='block my-2' htmlFor="name">Password</label>
                        <input className='w-[360px] input h-[56px] bg-[#F3F3F3] rounded-lg px-6  focus:border-green-500' type="password" placeholder='Enter Your Password' {...register("password", { required: true })} />
                    </div>
                    <input type="submit" value="Create Account" className='btnp w-full text-white' />

                    <p className='text-center mt-6'><small>Already registered? Go to <Link to='/login' className='text-orange-500 font-bold'>SIGN IN</Link></small></p>
                </form>
            </div>


        </div>
    );
};

export default Signup;