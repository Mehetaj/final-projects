import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensilSpoon, FaBook, FaUserAlt } from 'react-icons/fa'
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    const [cart] = useCart();


    // TODO : load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true
    const [isAdmin] = useAdmin()

    return (
        <div className="drawer  drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <Outlet />

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side  bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content">

                    {
                        isAdmin ? <>
                            <li><Link to="/dashboard/adminhome"><FaHome />Admin Home</Link></li>
                            <li><Link to="/dashboard/additem"><FaUtensilSpoon />Add Items</Link></li>
                            <li><Link to="/dashboard/manageitems"><FaWallet />Manage Items</Link></li>
                            <li><Link to="/dashboard/history"><FaBook />Manage Bookings</Link></li>
                            <li><Link to="/dashboard/allusers"><FaUserAlt /> All Users</Link></li>
                        </>
                            :
                            <>
                                <li><Link to="/dashboard/userhome"><FaHome />User Home</Link></li>
                                <li><Link to="/dashboard/reservations"><FaCalendarAlt />Reservations</Link></li>
                                <li><Link to="/dashboard/history"><FaWallet />Payment History</Link></li>
                                <li>
                                    <Link className={'flex'} to="/dashboard/mycart">
                                        My Cart
                                        <button className="flex gap-2">
                                            <FaShoppingCart className='w-6 h-6' />
                                            <div className=""><sup className='bg-green-600 rounded-full p-1'>+{cart?.length || 0}</sup></div>
                                        </button>
                                    </Link>
                                </li>
                            </>
                    }


                    <div className="divider">OR</div>
                    <li><Link to={'/'}><FaHome />Home</Link></li>
                    <li><Link to={'/menu'}>Our Menu</Link></li>
                    <li><Link to={'/order/salad'}>Order Food</Link></li>
                    <li><Link></Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;