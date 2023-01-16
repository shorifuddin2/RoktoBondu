import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Image/logo.png'
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className="navbar  bg-base-100">
                    <Link className=""><img className='w-56 p-3 h-auto ml-20 mr-24' src={Logo} alt="Logo"/></Link>
                <div className="navbar-end m-5">
                <div class="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />Menu</svg>
                    </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-red-500">
                            
                        <li className=' home'><Link className='text-center mx-auto'>হোম</Link></li>
                        <li className='hover'><Link className='text-center mx-auto'>প্লাটিলেট</Link></li>
                        <li className='hover'><Link className='text-center mx-auto'>থ্যালাসেমিয়া</Link></li>
                        <li className='hover'><Link className='text-center mx-auto'>ভলান্টিয়ার্স</Link></li>
                        <li className='hover'><Link className='text-center mx-auto'>সহযোগী সংগঠন</Link></li>
                        <li className='hover'><Link className='text-center mx-auto'>ব্লগ</Link></li>
                        <li className='hover'><Link className='text-center mx-auto'>লগইন</Link></li>
                        <li className='hover'><Link className='text-center mx-auto'>রেজিস্ট্রেশন</Link></li>
                    </ul>
                    </div>

                    
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