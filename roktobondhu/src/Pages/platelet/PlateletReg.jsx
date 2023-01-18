import React from 'react';
import useDays from '../../hooks/useDays';
import useDistrict from '../../hooks/useDistrict';


import './PlateletReg.css'

const PlateletReg = () => {
    const [districts] = useDistrict()
    const [days] = useDays()
    return (
        <div id='registration' className='shadow-lg mb-44'>
      
             <div>
             <h1 className='text-center lg:w-full md:w-full sm:w-full'><p className='bg-primary text-base-100 py-5 lg:px-32 md:px-32 sm:px-5  lg:text-2xl md:text-2xl sm:text-xl '>
             প্লাটিলেট ডোনার রেজিস্ট্রেশন ফরম</p></h1>
             <form className=' mt-16 p-5'>
             <div className=''> 
                  <div>
                     <h5 className='text-black'>নাম<span className='text-primary'>*</span></h5>
                  </div>
                   <div>
                       <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required  placeholder='নাম' id="" />
                   </div>
                   <div className='mt-5'>
                      <fieldset className='field_set'>
                         <legend className='text-black mx-2'>যেখানে প্লাটিলেট দিতে পারবেন
                         </legend>
                                <div className='ml-3 mt-5'>
                                    <h5 className='text-black'>জেলা<span className='text-primary'>*</span></h5>
                                </div>
                                <div className='ml-3'>
                                <label className='custom-select icon-upper icon-down mt-4'>
                                    <select className='platelet-group pl-2 border rounded text-black lg:w-[540px] lg:h-10 md:w-full sm:w-60 sm:h-10' >
                                        <option>ঢাকা</option>
                                        <option>চট্টগ্রাম</option>
                                        <option>সিলেট</option>
                                        <option>কুমিল্লা</option>
                                        <option>অন্যান্য</option>
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
                                     <div className=' mt-5'>
                                        <h5 className='text-black'>ইমেইল ঠিকানা (যদি থাকে)</h5>
                                    </div>
                                    <div className=' mt-4 mb-5'>
                                        <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required  placeholder='ইমেইল' id="" />
                                    </div>

                                    <div className='mt-5'>
                                        <h5 className='text-black'>মোবাইল নাম্বার ( ইংরেজি )<span className='text-primary'>*</span></h5>
                                    </div>
                                    <div className='mt-4 mb-5'>
                                        <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required  placeholder='মোবাইল নাম্বার' id="" />
                                    </div>
                                    <div className='mt-5'>
                                        <h5 className='text-black'>রক্তের গ্রুপ<span className='text-primary'>*</span></h5>
                                    </div>
                                    <div className='mt-4 mb-5'>
                                    <label className='custom-select icon-upper icon-down'>
                                        <select className='platelet-group pl-2 border rounded text-black lg:w-[572px] lg:h-10 md:w-full sm:w-64 sm:h-10'>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>A-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        </select>
                                        </label>
                                    </div>

                                    <div className='mt-5'>
                                        <h5 className='text-black'>সর্বশেষ রক্ত দানের তারিখ<span className='text-primary'>*</span></h5>
                                    </div>
                                    <div className='mt-4 mb-5 flex'>
                                        <div>
                                            <label className='custom-select icon-upper icon-down'>
                                            <select className='platelet-group pl-2 border rounded text-black  lg:w-[190px] lg:h-10 md:w-full sm:w-24 sm:h-10'>
                                              {
                                                days.map(day => <option key={day.id}>{day.day}</option>)
                                              }
                                            </select>
                                            </label>
                                        </div>
                                        <div>
                                            <label className='custom-select icon-upper icon-down'>
                                            <select className='platelet-group pl-2 border rounded text-black lg:w-[190px] lg:h-10 md:w-full sm:w-24 sm:h-10' >
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                            </select>
                                            </label>
                                        </div>
                                        <div>
                                            <label className='custom-select icon-upper icon-down'>
                                            <select className='platelet-group pl-2 border rounded text-black lg:w-[190px] lg:h-10 md:w-full sm:w-24 sm:h-10'>
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                                <option>2023</option>
                                            </select>
                                            </label>
                                        </div>
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
                                    <div className='mt-5'>
                                        <h6 className='text-primary font-bold'>নারী ডোনারদের ফোন নম্বর গোপন রাখা হবে।</h6>
                                    </div>

                                    <div className='mt-5'>
                                        <h5 className='text-black'>জন্ম তারিখঃ<span className='text-primary'>*</span></h5>
                                    </div>
                                    <div className='mt-4 mb-5'>
                                        <input type="date" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required  placeholder='জন্ম তারিখ' id="" />
                                    </div>
                                    <div className='mt-5'>
                                        <h5 className='text-black'>পাসওয়ার্ড<span className='text-primary'>*</span></h5>
                                    </div>
                                    <div className='mt-4 mb-5'>
                                        <input type="password" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required  placeholder='পাসওয়ার্ড' id="" />
                                    </div>
                                    <div className='mt-5'>
                                        <h5 className='text-black'>কনফার্ম পাসওয়ার্ড<span className='text-primary'>*</span></h5>
                                    </div>
                                    <div className='mt-4 mb-5'>
                                        <input type="password" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10' name="name" required  placeholder='কনফার্ম পাসওয়ার্ড' id="" />
                                    </div>
                                    <div className='mb-4'>
                                        <button className='bg-primary text-base-100 px-12 rounded-full py-2 mt-3'>
                                        রেজিস্ট্রেশন করুন
                                        </button>
                                        
                                    </div>
                            
                   </div>
                </div>
             </form>
             </div>
        </div>
    );
};

export default PlateletReg;