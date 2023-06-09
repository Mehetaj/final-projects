import React from 'react';
import logo from '../../../assets/logo.png'
import Popup from '../Popup/Popup';
import { Link } from 'react-router-dom';
import useAuth from '../../../HOOKS/useAuth';

const Login = () => {
    const {signIn} = useAuth()

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(data => {
            console.log(data.user);
        })
    }

    return (
        <div className='my-40 w-[570px] mx-auto'>
            <div className="flex justify-center items-center">
                <img width={175} height={68} src={logo} alt="" />
            </div>
            <div className='border mt-10'>
                <h2 className='text-3xl pl-10 pt-6 font-bold'>LOGIN HERE</h2>
                <form onSubmit={handleLogin} className='p-10'>
                    <div className='mt-6'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input name='email' type="email"  className="block w-[470px] py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer" placeholder=" " required />
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input name='password' type="password"  className="block w-[470px] py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer" placeholder=" " required />
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                    </div>
                    <input className='btnp w-full' type="submit" value="Login Now" />
                </form>
                <div className="divider w-1/2 mx-auto">OR</div>
                <Popup></Popup>
                <div className='flex justify-center -mt-14 items-center'>
                <p className='p-10'><small>Don't have an account? <Link to="/signup" className=' underline text-red-400'>Create an account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;