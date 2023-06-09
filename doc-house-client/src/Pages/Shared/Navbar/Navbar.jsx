import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import navImg from '../../../assets/Group 2.png'
import nav from '../../../assets/Vector.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logout Successful',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }


  const navItems = <>
    <Link className='ml-10 '>Home</Link>
    <Link className='ml-10 '>About</Link>
    <Link to={'/appointment'} className='ml-10'>Appointment</Link>
    {
      user ? <div className='ml-10 flex gap-6 items-center lg:-mt-32'>
        <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" />
        <button onClick={handleLogout} className='btn bg-green-900 hover:bg-green-800 border-none'>Logout</button>
      </div> : 
        <Link to={'/login'} className='ml-10'>Login</Link>
      
    }
  </>

  return (
    <div className='-mt-20'>
      <div className="flex items-center justify-between  w-[80%]   text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#00000071] rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <div className='flex items-center'>
            <div>
              <img src={nav} alt="" />
            </div>
            <Link to='/' className="-10">
              <img src={navImg} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;