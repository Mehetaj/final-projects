import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa'
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin()
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navOption = <>
        <NavLink className='ml-8 font-semibold text-sm'>Home</NavLink>
        <NavLink className='ml-8 font-semibold text-sm'>contact us</NavLink>
        <NavLink to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'} className='ml-8 font-semibold text-sm'>Dashbord</NavLink>
        <NavLink to='/menu' className='ml-8 font-semibold text-sm'>Our menu</NavLink>
        <NavLink to="/order/salad" className='ml-8 font-semibold text-sm'>Our shop</NavLink>
        <div className='ml-8'>
            <NavLink to='/dashboard'>
                <button className="flex gap-2">
                    <FaShoppingCart className='w-6 h-6' />
                    <div className=""><sup className='bg-green-600 rounded-full p-1'>+{cart?.length || 0}</sup></div>
                </button>
            </NavLink>
        </div>
        {
            user ? <>
                <div className='ml-8'>
                    <NavLink onClick={handleLogOut} className='btnp '>Log Out</NavLink>
                </div>
            </> : <>
                <NavLink to="/login" className='ml-8 font-semibold text-sm'>Login</NavLink>

            </>
        }
    </>

    return (
        <div>
            <div className="navbar bg-black max-w-screen-xl text-white z-10 fixed bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow uppercase bg-[#000000c7] rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <NavLink className="btn uppercase btn-ghost font-mono text-xl"><p>Bistro Boss <span
                        style={{ letterSpacing: '3px' }}
                        className='block text-sm italic font-serif font-thin'>Resturant</span></p></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu uppercase flex items-center menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;