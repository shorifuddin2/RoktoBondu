import React, { useState } from 'react';
import './Platelet.css'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import PlateletReg from './PlateletReg';
import DetailsPlateletModal from './DetailsPlateletModal';
import AllPlatelet from './AllPlatelet';
import usePlatelet from '../../hooks/usePlatelet';
import useDistrict from '../../hooks/useDistrict';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Platelet = () => {
  const [districts] = useDistrict();
  const [platelets] = usePlatelet()
  const [selectedCus, setSelectedCus] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const bloodGroup = e.target?.bloodGroup?.value;
    const district = e.target?.district?.value;

    const getPlateletCust = platelets.filter(platelet => platelet.bloodGroup === bloodGroup && platelet.district === district
    );

    if (getPlateletCust) {
      setSelectedCus(getPlateletCust);
    }

  }
  return (
    <div>
      <Navbar />
      <div className='lg:mx-28 sm:mx-10 mt-16'>
        {
          selectedCus.length > 0 ? <section>
            <h1 className='text-base-100 text-center mb-24'><span className='bg-rose-600 lg:px-10 md:px-5 sm:px-3 py-2 rounded-full lg:text-xl md:text-xl sm:text-sm font-bold'>A+ প্লাটিলেট রক্তবন্ধুর তালিকা</span></h1>
            <AllPlatelet  districts={districts} selectedCus={selectedCus}></AllPlatelet>
          </section> : <>
            <section>
              <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <form onSubmit={handleSubmit}>
                  <div>
                    <h1 className='text-primary text-2xl font-bold '>প্লাটিলেট - রক্তবন্ধু খুঁজুন ....</h1>
                    <hr className='mt-5 lg:w-96 lg:h-10 md:w-96 sm:w-60' />
                    <label className='custom-select icon-upper icon-down   mt-4'>
                      <select name='bloodGroup' className='platelet-group pl-2 border rounded text-black lg:w-96 lg:h-10 md:w-96 sm:w-60 sm:h-10'>
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
                    <label className='custom-select icon-upper icon-down mt-4'>
                      <select name="district" className='platelet-group pl-2 border rounded text-black lg:w-96 lg:h-10 md:w-96 sm:w-60 sm:h-10' >
                        {
                          districts.map(district => <option key={district.id}>{district.bn_name}</option>)
                        }

                      </select>
                    </label>
                    <div className='flex items-center relative'>
                      <div className='absolute left-5 mt-5'>
                        <MagnifyingGlassIcon className='w-5 h-5 text-xl text-base-100 font-bold' />
                      </div>
                      <div>
                        <input type="submit" value='খুঁজুন' className='bg-primary px-10 text-base-100 font-bold rounded-full btn mt-5' />

                      </div>
                    </div>
                  </div>
                </form>
                <div className='flex items-center justify-center sm:mt-5'>
                  <div>
                    <div className='lg:flex md:flex sm:flex-none items-center gap-x-5'>
                      <h5 className='text-black mt-4'>প্লাটিলেট ডোনার হতে চাইলে</h5>
                      <div>
                        <button className='bg-secondary text-base-100 px-8 rounded-full py-2 sm:mt-3'>রেজিস্ট্রেশন করুন</button>
                      </div>
                    </div>
                    <div className='flex flex-col items-center mt-10'>
                      <h5 className='text-black text-center'>পুরাতুন রক্তবন্ধু প্লাটিলেট দিতে চাইলে লগইন করে</h5>
                      <div className='mt-2'>
                        <button className=' text-base-100 px-8 rounded-full py-2' style={{ backgroundColor: '#dc3545' }}>প্রোফাইল আপডেট করুন</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className='border shadow-lg border-primary mt-96'>
                <h1 className='text-base-100 bg-primary text-center py-4'>একটু জেনে নিন...</h1>
                <div className='text-black lg:p-10 md:p-10 sm:p-5'>
                  <p>যারা শুধু প্লাটিলেট/অণুচক্রিকা প্রদান করেন আমরা জানি ১৫ দিন পরপর প্লাটিলেট দেয়া যায়। কিন্তু আমাদের আবহাওয়া পরিবেশ ও খাদ্যাভ্যাস এবং জীবনাচরণের ভিত্তিতে মাসে ১ বার দেয়াই উত্তম। সে হিসেবে রক্তবন্ধুতে ৩০ দিন পরপর প্লাটিলেট দিতে প্রস্তুত প্লাটিলেট দাতাদের লিস্টে দেখানো হবে। ৩০ দিনের কম হলে নাম কাটা অবস্থায় দেখা যাবে। তবে কারো শরীর স্বাস্থ্য ভালো হলে এবং খুব জরুরি রোগির ক্ষেত্রে ১৫-২০ দিন পরই চাইলে দিতে পারেন। ঢাকা, কুমিল্লা, সিলেট ও চট্টগ্রাম এর বাইরে যেহেতু এফেরেসিস এর মাধ্যমে শুধু প্লাটিলেট দেয়ার সুযোগ নেই তাই আপাতত এই চারটি জেলা যুক্ত করা হলো। আশেপাশের জেলার যারা এই চারটি লোকেশনে প্লাটিলেট দিতে পারবেন তারাও রেজিস্ট্রেশন করুন। প্রতিবার প্লাটিলেট দেয়ার পর লগইন করে তারিখ আপডেট করে দিবেন। অন্যকোন জেলায় এফেরেসিস মেশিনের মাধ্যমে শুধু প্লাটিলেট/অণুচক্রিকা নেয়ার ব্যবস্থা চালু হলে আমাদের জানাবেন, আমরা সেই জেলা যুক্ত করে দিবো।</p>
                  <p className='mt-8'><span className='font-bold'>প্লাটিলেট ডোনারের যোগ্যতাঃ</span> বয়স কমপক্ষে ১৮, ওজন ৬০ কেজি ও ভেইন বা রগ স্পষ্ট/ তুলনামূলক মোটা হতে হবে। হিমোগ্লোবিন কমপক্ষে ১২.৫ ও প্লাটিলেট কাউন্ট ন্যূনতম ২,২০,০০০ (দুই লক্ষ বিশ হাজার) হতে হবে। যা হাসপাতালে চেক করে নেয়া হবে।</p>
                  <h5 className='text-center mt-8'><button className='rounded hover:bg-primary bg-primary text-base-100 px-5 py-2 cursor-pointer'>
                    <label htmlFor="my-modal-3" className='cursor-pointer'>বিস্তারিত জানতে ক্লিক করুন</label>
                  </button></h5>
                  <DetailsPlateletModal />

                </div>
              </div>
            </section>
            <section className='flex justify-center mt-16'>
              <PlateletReg></PlateletReg>

            </section>
          </>
        }
      </div>
      <Footer />
    </div>
  );
};

export default Platelet;
