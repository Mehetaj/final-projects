import React, { useContext, useEffect, useState } from 'react';
import './Login.css'
import authentication_img from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisable] = useState(true)

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })
            })
            .catch((err) => console.log(err))
    }


    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) === true) {
            alert('Captcha matched')
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div>
                <div className='login-container'>
                    <div>
                        <div className=' flex items-center justify-around'>
                            <img className='lg:w-[648px h-[455px]' src={authentication_img} alt="" />
                            <div>
                                <form onSubmit={handleLogin}>
                                    <h2 className='text-center text-3xl font-bold my-4'>Login</h2>
                                    <div>
                                        <label className='block my-2' htmlFor="email">Email</label>
                                        <input placeholder='Type here' className='w-[536px] px-4 mb-4 h-[52px] bg-[#FFFFFF] rounded-md border-2' type="email" name="email" id="" />
                                    </div>
                                    <div>
                                        <label className='block my-2' htmlFor="password">Password</label>
                                        <input placeholder='Enter your password' className='w-[536px] px-4 mb-4 h-[52px] bg-[#FFFFFF] rounded-md border-2' type="password" name="password" id="" />
                                    </div>
                                    <div>
                                        <div className=' w-[536px] opacity-20  mb-4 h-[52px]  rounded-md  ' htmlFor="capcha">
                                            <LoadCanvasTemplate />
                                        </div>
                                        <input onBlur={handleValidateCaptcha} className='w-[536px] px-4 mt-3 h-[52px] bg-[#FFFFFF] rounded-md mb-4 border-2' type="text" name="" id="" />
                                    </div>
                                    <input disabled={false} type="submit" value="Login" className='my-4 bg-yellow-600 py-2 rounded-md text-xl text-white w-full' />
                                    <p className='text-center text-yellow-500'><small>New Here? <Link to='/signup'>Create an Account</Link>Link</small></p>
                                </form>
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;