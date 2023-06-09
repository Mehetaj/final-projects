import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup/Popup';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../Contexts/AuthProvider';
// import { AuthContext } from '../../../Contexts/AuthProvider'

const Signup = () => {
    const [error,setError] = useState("")

        const {createUser, updateUserProfile} = useContext(AuthContext)
    

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e?.target;
        const name = form?.name.value;
        const email = form?.email.value;
        const password = form?.password.value;
        const confirmPassword = form?.confirmPassword.value;
        console.log(name,email,password,confirmPassword);

        if (password !== confirmPassword) {
            setError("Password Not Matched")
            return
        }

        createUser(email,password)
        .then(result => {
            console.log(result.user);
            if (result.user) {
                updateUserProfile(name)
            }
        })

    }

    return (
        <div>
            <div className='my-40 w-[570px] mx-auto'>
            <div className="flex justify-center items-center">
                <img width={175} height={68} src={logo} alt="" />
            </div>
            <div className='border mt-10'>
                <h2 className='text-3xl pl-10 pt-6 font-bold'>CREATE AN ACCOUNT</h2>
                <form onSubmit={handleSignup} className='p-10'>
                    <div className='mt-6'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="name" id="" className="block w-[470px] py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer" placeholder=" " required />
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" id="" className="block w-[470px] py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer" placeholder=" " required />
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="password" id="" className="block w-[470px] py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer" placeholder=" " required />
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="confirmPassword" id="" className="block w-[470px] py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer" placeholder=" " required />
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                        </div>
                    </div>
                    <input className='btnp w-full' type="submit" value="Login Now" />
                </form>
                <div className="divider w-1/2 mx-auto">OR</div>
                <Popup></Popup>
                <div className='flex justify-center -mt-14 items-center'>
                <p className='p-10'><small>Already Have an Account?? <Link to="/login" className=' underline text-red-400'>Login</Link></small></p>
                </div>
                <div className='flex justify-center -mt-14 items-center'>
                <p className='p-10 text-red-600 animate-pulse'>{error}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;