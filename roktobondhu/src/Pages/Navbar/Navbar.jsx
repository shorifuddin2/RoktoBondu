import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Image/logo.png'
import './Navbar.css'


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
                        <li className='home'><Link>হোম</Link></li>
                        <li className='hover'><Link>প্লাটিলেট</Link></li>
                        <li className='hover'><Link>থ্যালাসেমিয়া</Link></li>
                        <li className='hover'><Link>ভলান্টিয়ার্স</Link></li>
                        <li className='hover'><Link>সহযোগী সংগঠন</Link></li>
                        <li className='hover'><Link>ব্লগ</Link></li>
                        <li className='hover'><Link>লগইন</Link></li>
                        <li className='hover'><Link>রেজিস্ট্রেশন</Link></li>
                    </ul>
                    </div>
                    <Link className=""><img className='w-56 p-3 h-auto ml-20 mr-24' src={Logo} alt="Logo"/></Link>
                </div>
                <div className="text-sm  navbar-end mx-20 w-full   hidden lg:flex">
                    <ul className=" menu menu-horizontal text-red-500 font-bold">
                    <li className='home m-2'><Link>হোম</Link></li>
                    <li className='hover m-2'><Link>প্লাটিলেট</Link></li>
                    <li className='hover m-2'><Link>থ্যালাসেমিয়া</Link></li>
                    <li className='hover m-2'><Link>ভলান্টিয়ার্স</Link></li>
                    <li className='hover m-2'><Link>সহযোগী সংগঠন</Link></li>
                    <li className='hover m-2'><Link to="/blog">ব্লগ</Link></li>
                    <li className='hover m-2'><Link>লগইন</Link></li>
                    <li className='hover m-2'><Link>রেজিস্ট্রেশন</Link></li>


                    </ul>

                    
                </div>
                
            </div>

            
        </div>
    );
};

export default Navbar;