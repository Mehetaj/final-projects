import React, { useState } from 'react';
import bookImg from '../../assets/icons/Group.png'
import bookListImg from '../../assets/icons/Group 1360.png'
import reviewImg from '../../assets/icons/Group 1368.png'
import logo from '../../assets/logo.png'
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const [isAdmin, setIsAdmin] = useState(true);

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#87cfeb1c] p-10">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <img className='mb-16' width={130} src={logo} alt="" />
                                <li><Link to="/dashboard">
                                    <img width={20} src={bookImg} alt="" />
                                    Order list
                                </Link></li>
                                <li><Link to="/dashboard">
                                    <img width={20} src={bookListImg} alt="" />
                                    Add Service
                                </Link></li>
                                <li><Link to="/dashboard/make_admin">
                                    <img width={20} src={reviewImg} alt="" />
                                    Make Admin
                                </Link></li>
                                <div className="divider w-1/2"></div>
                                <Link to={'/'} className='btnp w-[60%]'>Back to Home</Link>
                            </>
                                :
                                <>
                                    <img className='mb-16' width={130} src={logo} alt="" />
                                    <li><Link to="/dashboard/books">
                                        <img width={20} src={bookImg} alt="" />
                                        Book
                                    </Link></li>
                                    <li><Link to="/dashboard/bookinglist">
                                        <img width={20} src={bookListImg} alt="" />
                                        Booking list
                                    </Link></li>
                                    <li><Link>
                                        <img width={20} src={reviewImg} alt="" />
                                        Review
                                    </Link></li>
                                    <div className="divider w-1/2"></div>
                                    <Link to={'/'} className='btnp w-[60%]'>Back to Home</Link>
                                </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;