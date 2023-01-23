import React from 'react';

const PasswordChange = () => {
    return (
        <div className='grid grid-cols-2 mt-5'>
                <div>

                </div>
                <div className='border border-blue-500 p-5 shadow-lg'>
                    <div className='mb-2'>
                        <h5 className='text-black'>Old Password<span className='text-primary'>*</span></h5>
                    </div>
                    <div>
                        <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required id="" />
                    </div>
                    <div className='mt-3 mb-2'>
                        <h5 className='text-black'>New Password<span className='text-primary'>*</span></h5>
                    </div>
                    <div>
                        <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required id="" />
                    </div>
                    <div className='mt-2'>
                        <h5 className='text-black'>Confirm New Password<span className='text-primary'>*</span></h5>
                    </div>
                    <div className='mt-3'>
                        <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required id="" />
                    </div>
                </div>
        </div>
    );
};

export default PasswordChange;