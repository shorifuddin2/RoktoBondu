import React from 'react';
import { Link } from 'react-router-dom';
import LogoBlog from '../Image/index.png'

const NavbarBlog = () => {
    return (
        <div>
            <div className="navbar  bg-base-100">
                <div className="navbar-start ">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52 text-red-500 font-bold">
                    <li className='bordered'><Link>ব্লগ</Link></li>
                        
                        <li className='hover:border-b-red-500'><Link>রক্তবন্ধু খুঁজুন</Link></li>
                        <li className='hover:border-b-red-500'><Link>ক্যাম্পেইন নিউজ</Link></li>
                        <li className='hover:border-b-red-500'><Link>প্রথম রক্তদান </Link></li>
                        <li className='hover:border-b-red-500'><Link>রক্তদানের অভিজ্ঞতা </Link></li>
                        <li className='hover:border-b-red-500'><Link>রক্তদানের গল্প</Link></li>
                        <li className='hover:border-b-red-500'><Link>রক্তবন্ধু গ্যালারি</Link></li>
                        
                    </ul>
                    </div>
                    <Link className=""><img className='w-60 h-auto p-5 mx-20' src={LogoBlog} alt="Logo"/></Link>
                </div>
                <div className="text-sm navbar-end mx-20 w-full p-3  hidden lg:flex">
                    <ul className=" menu menu-horizontal  text-red-500 font-bold">
                    <li className='bordered'><Link to="/blog">ব্লগ</Link></li>
                    <li className='hover:border-b-red-500'><Link>রক্তবন্ধু খুঁজুন</Link></li>
                    <li className='hover:border-b-red-500'><Link>ক্যাম্পেইন নিউজ</Link></li>
                    <li className='hover:border-b-red-500'><Link>প্রথম রক্তদান</Link></li>
                    <li className='hover:border-b-red-500'><Link>রক্তদানের অভিজ্ঞতা </Link></li>
                    <li className='hover:border-b-red-500'><Link>রক্তদানের গল্প</Link></li>
                    <li className='hover:border-b-red-500'><Link>রক্তবন্ধু গ্যালারি</Link></li>



                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default NavbarBlog;