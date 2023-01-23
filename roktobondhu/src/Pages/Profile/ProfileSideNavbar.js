import React from 'react';
import { Outlet } from 'react-router-dom';

const ProfileSideNavbar = () => {
    return (
        <div className='mx-48 mt-16'>
               <Outlet/>
         <div>
             <ul className=' p-5'>
                <li className='text-blue-500 cursor-pointer'>Last DonateDate</li>
                <li className='text-blue-500 cursor-pointer mt-3'>Edit Profile</li>
                <li className='text-blue-500 cursor-pointer mt-3'>Change Password</li>
            </ul>
         </div>
         
        </div>
    );
};

export default ProfileSideNavbar;