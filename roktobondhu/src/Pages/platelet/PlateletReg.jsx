import React from 'react';
import useDays from '../../hooks/useDays';
import useDistrict from '../../hooks/useDistrict';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './PlateletReg.css'
import { useState } from 'react';

const PlateletReg = () => {
    const [districts] = useDistrict()
    const [days] = useDays()
    const [male, setMale] = useState(null)
    const [female, setFemale] = useState(null)
 
const handleReg =async(e)=>{
e.preventDefault()
    const plateletRegSubmit = {
        name:e.target.name.value,
        plateletDistrict:e.target.plateletDistrict.value,
        plateletAddress:e.target.plateletAddress.value,
        permanentDistrict:e.target.permanentDistrict.value,
        permanentAddress:e.target.permanentAddress.value,
        email:e.target.email.value,
        mobileNumber:e.target.mobileNumber.value,
        bloodGroup:e.target.bloodGroup.value,
        lastBloodDay:e.target.lastBloodDay.value,
        lastBloodMonth:e.target.lastBloodMonth.value,
        lastBloodYear:e.target.lastBloodYear.value,
        gender:male||female,
        dateOfBirth:e.target.dateOfBirth.value,
        password:e.target.password.value,
        confirmPassword:e.target.confirmPassword.value,
       }
      console.log(plateletRegSubmit)

       try{
        const data = await axios.post('http://localhost:5000/api/v1/platelet',plateletRegSubmit);
        
        if(data.status===400){
            return;
        //   return toast.error(data.data.error)
        }
        
        // toast.success(data.data.message)
         
       }catch(error){
        console.log(error)
       }
         
    //   e.target.reset()
}
   

    return (
        <div className='shadow-lg mb-44'>
      
             <div>
             <h1 className='text-center lg:w-full md:w-full sm:w-full'><p className='bg-primary text-base-100 py-5 lg:px-32 md:px-32 sm:px-5  lg:text-2xl md:text-2xl sm:text-xl '>
             প্লাটিলেট ডোনার রেজিস্ট্রেশন ফরম</p></h1>

             <form onSubmit={handleReg} className=' mt-16 p-5'>
             <div className=''> 
                  <div>
                     <h5 className='text-black'>নাম<span className='text-primary'>*</span></h5>
                  </div>
                   <div>
                       <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-full xs:w-full sm:h-10 md:h-10 xs:h-10' name="name" required  placeholder='নাম' />
                   </div>
                   <div className='mt-5'>
                      <fieldset className='field_set'>
                         <legend className='text-black mx-2'>যেখানে প্লাটিলেট দিতে পারবেন
                         </legend>
                                <div className='ml-3 mt-5'>
                                    <h5 className='text-black'>জেলা<span className='text-primary'>*</span></h5>
                                </div>
                                <div className='mx-3'>
                                <label className='custom-select icon-upper icon-down mt-4'>
                                    <select className='platelet-group pl-2 border rounded text-black lg:w-[540px] lg:h-10 md:h-10 md:w-[540px] sm:w-[400px] xs:w-[260px] sm:h-10 xs:h-10' name="plateletDistrict">
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
                                        <input type="text" className='border pl-3 rounded lg:w-[540px] lg:h-10 md:h-10 md:w-[540px] sm:w-[400px] xs:w-[260px] sm:h-10 xs:h-10' name="plateletAddress" required  placeholder='ঠিকানা' />
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
                                <select className='platelet-group pl-2 border rounded text-black lg:w-[540px] lg:h-10 md:h-10 md:w-[540px] sm:w-[400px] xs:w-[260px] sm:h-10 xs:h-10' name="permanentDistrict">
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
                                        <input type="text" className='border pl-3 rounded lg:w-[540px] lg:h-10 md:h-10 md:w-[540px] sm:w-[400px] xs:w-[260px] sm:h-10 xs:h-10' name="permanentAddress" required  placeholder='ঠিকানা' />
                                    </div>
                      </fieldset>
                                     <div className=' mt-5'>
                                        <h5 className='text-black'>ইমেইল ঠিকানা (যদি থাকে)</h5>
                                    </div>
                                    <div className=' mt-4 mb-5'>
                                        <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-full xs:w-full sm:h-10 md:h-10 xs:h-10' name="email" required  placeholder='ইমেইল' />
                                    </div>

                                    <div className='mt-5'>
                                        <h5 className='text-black'>মোবাইল নাম্বার ( ইংরেজি )<span className='text-primary'>*</span></h5>
                                    </div>
                                    <div className='mt-4 mb-5'>
                                        <input type="text" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-full xs:w-full sm:h-10 md:h-10 xs:h-10' name="mobileNumber" required  placeholder='মোবাইল নাম্বার' />
                                    </div>
                                    <div className='mt-5'>
                                        <h5 className='text-black'>রক্তের গ্রুপ<span className='text-primary'>*</span></h5>
                                    </div>
                                    <div className='mt-4 mb-5'>
                                    <label className='custom-select icon-upper icon-down'>
                                        <select className='platelet-group pl-2 border rounded text-black lg:w-[572px] lg:h-10 md:h-10 md:w-[570px] sm:w-[520px] xs:w-[290px] sm:h-10 xs:h-10' name='bloodGroup'>
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
                                            <select className='platelet-group pl-2 border rounded text-black  lg:w-[190px] lg:h-10 md:h-10 sm:h-10 xs:h-10 md:w-[190px] sm:w-[173px] xs:w-[95px] sm:h-10 xs:h-10' name='lastBloodDay'>
                                              {
                                                days.map(day => <option key={day.id}>{day.day}</option>)
                                              }
                                            </select>
                                            </label>
                                        </div>
                                        <div>
                                            <label className='custom-select icon-upper icon-down'>
                                            <select className='platelet-group pl-2 border rounded text-black lg:w-[190px] lg:h-10 md:h-10 sm:h-10 xs:h-10 md:w-[190px] sm:w-[173px] xs:w-[95px]' name='lastBloodMonth'>
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
                                            <select className='platelet-group pl-2 border rounded text-black lg:w-[190px] lg:h-10 md:h-10 sm:h-10 xs:h-10 md:w-[190px] sm:w-[170px] xs:w-[95px]' name='lastBloodYear'>
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
                                             <input onChange={(e)=>setMale(e.target.value)} type="radio" name='gender' className='radio-button' value="male"/>
                                             <span className='ml-2 text-black'>পুরুষ</span>
                                        </div>
                                        <div className='lg:ml-48 md:ml-48 sm:ml-36 xs:ml-24'>
                                             <input onChange={(e)=>setFemale(e.target.value)} type="radio" name='gender' className='' value="female"/>
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
                                        <input type="date" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-full xs:w-full sm:h-10 md:h-10 xs:h-10' name="dateOfBirth" required  placeholder='জন্ম তারিখ' />
                                    </div>
                                    <div className='mt-5'>
                                        <h5 className='text-black'>পাসওয়ার্ড<span className='text-primary'>*</span></h5>
                                    </div>
                                    <div className='mt-4 mb-5'>
                                        <input type="password" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-full xs:w-full sm:h-10 md:h-10 xs:h-10' name="password" required  placeholder='পাসওয়ার্ড'  />
                                    </div>
                                    <div className='mt-5'>
                                        <h5 className='text-black'>কনফার্ম পাসওয়ার্ড<span className='text-primary'>*</span></h5>
                                    </div>
                                    <div className='mt-4 mb-5'>
                                        <input type="password" className='border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-full xs:w-full sm:h-10 md:h-10 xs:h-10' name="confirmPassword" required  placeholder='কনফার্ম পাসওয়ার্ড'/>
                                    </div>
                                    <div className='mb-4'>
                                        <input type="submit" className='bg-primary text-base-100 px-12 rounded-full py-2 mt-3' value="রেজিস্ট্রেশন করুন"/>
                                     
                                    </div>
                            
                   </div>
                </div>
             </form>
             </div>
             {/* <ToastContainer/> */}
        </div>
    );
};

export default PlateletReg;