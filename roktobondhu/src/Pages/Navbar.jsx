import React from 'react';
import Logo from '../Image/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar  bg-base-100">
                <div className="navbar-start mx-20">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className='bordered active'>হোম</a></li>
                        <li><a>প্লাটিলেট</a></li>
                        <li><a>থ্যালাসেমিয়া</a></li>
                        <li><a>ভলান্টিয়ার্স</a></li>
                        <li><a>সহযোগী সংগঠন</a></li>
                        <li><a>ব্লগ</a></li>
                        <li><a>লগইন</a></li>
                        <li><a>রেজিস্ট্রেশন</a></li>
                    </ul>
                    </div>
                    <a className=""><img className='w-40 h-auto' src={Logo} alt="Logo"/></a>
                </div>
                <div className="navbar-end mx-20 w-full hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-red-500">
                    <li><a>হোম</a></li>
                    <li><a>প্লাটিলেট</a></li>
                    <li><a>থ্যালাসেমিয়া</a></li>
                    <li><a>ভলান্টিয়ার্স</a></li>
                    <li><a>সহযোগী সংগঠন</a></li>
                    <li><a>ব্লগ</a></li>
                    <li><a>লগইন</a></li>
                    <li><a>রেজিস্ট্রেশন</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;