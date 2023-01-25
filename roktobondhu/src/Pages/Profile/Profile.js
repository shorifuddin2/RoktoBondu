import React from 'react';
import useDays from '../../hooks/useDays';
import useDistrict from '../../hooks/useDistrict';

const Profile = () => {
    const [districts] = useDistrict()
   
    return (
       <div className='grid grid-cols-2 '>
            <div>
               
            </div>
           <div>
           <div className='shadow-lg mb-44 border-blue-500 border'>
      
                    <div>
                    
                    <form className=' mt-16 p-5'>
                    <div className=''> 
                        <div>
                            <h5 className='text-black'>নাম<span className='text-primary'>*</span></h5>
                        </div>
                            <div>
                                <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required  placeholder='নাম' id="" />
                            </div>
                        
                            <div className='mt-6'>
                            <fieldset className='field_set'>
                                <legend className='text-black mx-2'>স্থায়ী ঠিকানা
                                </legend>
                                        <div className='ml-3 mt-5'>
                                            <h5 className='text-black'>জেলা<span className='text-primary'>*</span></h5>
                                        </div>
                                        <div className='ml-3'>
                                    <label className='custom-select icon-upper icon-down mt-4'>
                                        <select className='platelet-group pl-2 border rounded text-black lg:w-[540px] lg:h-10 md:w-full sm:w-60 sm:h-10'>
                                        {
                                            districts.map(district =><option key={district.id}>{district.bn_name}</option>)
                                        }
                                        </select>
                                        </label>
                                        </div>
                                            <div className='ml-3 mt-5'>
                                                <h5 className='text-black'>ঠিকানা<span className='text-primary'>*</span></h5>
                                            </div>
                                            <div className='ml-3 mt-4 mb-5'>
                                                <input type="text" className='border pl-3 rounded lg:w-[540px] lg:h-10 md:w-full sm:w-60 sm:h-10' name="name" required  placeholder='ঠিকানা' id="" />
                                            </div>
                            </fieldset>
                            <fieldset className='field_set mt-5'>
                                <legend className='text-black mx-2'>বর্তমান ঠিকানা
                                </legend>
                                        <div className='ml-3 mt-5'>
                                            <h5 className='text-black'>জেলা<span className='text-primary'>*</span></h5>
                                        </div>
                                        <div className='ml-3'>
                                    <label className='custom-select icon-upper icon-down mt-4'>
                                        <select className='platelet-group pl-2 border rounded text-black lg:w-[540px] lg:h-10 md:w-full sm:w-60 sm:h-10'>
                                        {
                                            districts.map(district =><option key={district.id}>{district.bn_name}</option>)
                                        }
                                        </select>
                                        </label>
                                        </div>
                                            <div className='ml-3 mt-5'>
                                                <h5 className='text-black'>ঠিকানা<span className='text-primary'>*</span></h5>
                                            </div>
                                            <div className='ml-3 mt-4 mb-5'>
                                                <input type="text" className='border pl-3 rounded lg:w-[540px] lg:h-10 md:w-full sm:w-60 sm:h-10' name="name" required  placeholder='ঠিকানা' id="" />
                                            </div>
                            </fieldset>
                                            <div className=' mt-5'>
                                                <h5 className='text-black'>ইমেইল ঠিকানা (যদি থাকে)</h5>
                                            </div>
                                            <div className=' mt-4 mb-5'>
                                                <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required  placeholder='ইমেইল' id="" />
                                            </div>

                                            
                                            <div className='flex items-center'>
                                                <div>
                                                    <input type="radio" name='gender' className='radio-button'/>
                                                    <span className='ml-2 text-black'>পুরুষ</span>
                                                </div>
                                                <div className='lg:ml-48 md:ml-48 sm:ml-36'>
                                                    <input type="radio" name='gender' className=''/>
                                                    <span className='ml-2 text-black'>নারী</span>
                                                </div>
                                                
                                            </div>
                                            
                                            <div className='mb-4'>
                                                <button className='bg-blue-500 text-base-100 px-8 rounded py-2 mt-3'>
                                                Update Profile
                                                </button>
                                                
                                            </div>
                                    
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
           </div>
       </div>
    );
};

export default Profile;