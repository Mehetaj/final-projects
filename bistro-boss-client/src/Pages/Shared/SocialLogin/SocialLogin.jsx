import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSignIN = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                if (loggedInUser) {
                    const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(() => {
                                // reset();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate(from, { replace: true })
                           
                        })
                }
            })
    }

    return (
        <div className=''>
            <div className=" divider">OR</div>
            <div className='text-center mx-auto'>
                <button onClick={handleGoogleSignIN} className='btnps justify-center flex items-center gap-6 mx-auto text-center'><FaGoogle /> Continue With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;