import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Image/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar  bg-base-100">
                <div className="navbar-start ">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-red-500 font-bold">
                        <li className='bordered'><Link>হোম</Link></li>
                        <li className='hover-border-bordered'><Link>প্লাটিলেট</Link></li>
                        <li className='hover-bordered'><Link>থ্যালাসেমিয়া</Link></li>
                        <li className='hover-bordered'><Link>ভলান্টিয়ার্স</Link></li>
                        <li className='hover-bordered'><Link>সহযোগী সংগঠন</Link></li>
                        <li className='hover-bordered'><Link>ব্লগ</Link></li>
                        <li className='hover-bordered'><Link>লগইন</Link></li>
                        <li className='hover-bordered'><Link>রেজিস্ট্রেশন</Link></li>
                    </ul>
                    </div>
                    <Link className=""><img className='w-56 p-3 h-auto mx-20' src={Logo} alt="Logo"/></Link>
                </div>
                <div className="navbar-end mx-20 w-full p-5  hidden lg:flex">
                    <ul className=" menu menu-horizontal  text-red-500 font-bold">
                    <li className='bordered'><Link>হোম</Link></li>
                    <li className='hover-bordered'><Link>প্লাটিলেট</Link></li>
                    <li className='hover-bordered'><Link>থ্যালাসেমিয়া</Link></li>
                    <li className='hover-bordered'><Link>ভলান্টিয়ার্স</Link></li>
                    <li className='hover-bordered'><Link>সহযোগী সংগঠন</Link></li>
                    <li className='hover-bordered'><Link>ব্লগ</Link></li>
                    <li className='hover-bordered'><Link>লগইন</Link></li>
                    <li className='hover-bordered'><Link>রেজিস্ট্রেশন</Link></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;