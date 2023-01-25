import React from 'react';
import useDays from '../../hooks/useDays';

const LastDonate = () => {
    const [days] = useDays()
    return (
        <div className='grid grid-cols-2'>
            <div>
                
            </div>
            <div className='border px-5 mt-5 shadow-lg border-blue-500'>
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
            </div>
        </div>
    );
};

export default LastDonate;