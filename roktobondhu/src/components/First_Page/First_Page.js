import React from 'react';
import './First_Page.css';

//importing font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// images
import CardImg from '../../assets/images/HomePage_images/card.png';
import FbIcon from '../../assets/images/HomePage_images/fb_icon.jpg';
import PlayStoreIcon from '../../assets/images/HomePage_images/playStore_icon.png';
import Navbar from '../../Pages/Navbar/Navbar';
import Footer from '../../Pages/Footer/Footer';

const First_Page = () => {
  return (
    <div>
      <Navbar />
      <header className="h-[665.97px] lg:h-[581.78px] relative">
        <div className="header_img-div relative w-full h-full bg-cover">
          <span className="absolute top-0 left-0 bg-black/70 w-full h-full"></span>
        </div>
        <div className='header_search_sec absolute top-0'>
          <div className='container p-5 pt-8'>
            <div className='lg:flex lg:items-center lg:ml-14'>
              {/* first-form-sec */}
              <div className='fisrt_sec lg:w-[570px] lg:mr-10'>
                <h2 className='text-xl font-bold'> রক্তবন্ধু খুঁজুন  .... </h2>
                <hr className='w-full my-2 mt-4' />
                <form action="">
                  <div className="form-group">
                    <div className="select_grouph_area">
                      <select id="blood_group" className='text-black w-[282px] lg:w-full py-2 my-2 rounded-sm pl-2'>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div>
                      <select id="district" className='text-black w-[282px] lg:w-full py-2 my-2 rounded-sm pl-2'>
                        <option value="পঞ্চগড়">পঞ্চগড়</option>
                        <option value="ঠাকুরগাঁও">ঠাকুরগাঁও</option>
                        <option value="দিনাজপুর ">দিনাজপুর </option>
                        <option value="রংপুর">রংপুর </option>
                        <option value="ঢাকা">ঢাকা</option>
                        <option value="কুড়িগ্রাম">কুড়িগ্রাম</option>
                        <option value="লালমনিরহাট">লালমনিরহাট</option>
                        <option value="নীলফামারী">নীলফামারী </option>
                        <option value="গাইবান্ধা">গাইবান্ধা</option>
                        <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                        <option value="রাজশাহী">রাজশাহী </option>
                        <option value="সিলেট"> সিলেট </option>
                        <option value="যশোর">যশোর</option>
                        <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                        <option value="কুমিল্লা">কুমিল্লা </option>
                        <option value="বরিশাল">বরিশাল</option>
                        <option value="ফরিদপুর">ফরিদপুর </option>
                        <option value="বগুড়া">বগুড়া </option>
                        <option value="পাবনা">পাবনা </option>
                        <option value="রাঙ্গামাটি">রাঙ্গামাটি </option>
                        <option value="কুষ্টিয়া">কুষ্টিয়া </option>
                        <option value="নোয়াখালী">নোয়াখালী </option>
                        <option value="খুলনা">খুলনা</option>
                        <option value="টাঙ্গাইল">টাঙ্গাইল </option>
                        <option value="ভোলা">ভোলা </option>
                        <option value="বান্দরবান">বান্দরবান </option>
                        <option value="চাঁদপুর">চাঁদপুর </option>
                        <option value="হবিগঞ্জ">হবিগঞ্জ </option>
                        <option value="লক্ষীপুর">লক্ষীপুর</option>
                        <option value="বরগুনা">বরগুনা </option>
                        <option value="ঝালকাঠি">ঝালকাঠি </option>
                        <option value="পিরোজপুর">পিরোজপুর </option>
                        <option value="পটুয়াখালী">পটুয়াখালী </option>
                        <option value="ঝিনাইদহ">ঝিনাইদহ</option>
                        <option value="নড়াইল">নড়াইল </option>
                        <option value="মাগুরা">মাগুরা </option>
                        <option value="সাতক্ষিরা">সাতক্ষিরা</option>
                        <option value="বাগেরহাট">বাগেরহাট </option>
                        <option value="চুয়াডাঙ্গা">চুয়াডাঙ্গা </option>
                        <option value="মেহেরপুর">মেহেরপুর </option>
                        <option value="সিরাজগঞ্জ">সিরাজগঞ্জ </option>
                        <option value="জয়পুরহাট">জয়পুরহাট </option>
                        <option value="নাটোর">নাটোর</option>
                        <option value="নওগাঁ">নওগাঁ </option>
                        <option value="চাঁপাইনবাবগঞ্জ">চাঁপাইনবাবগঞ্জ</option>
                        <option value="খাগড়াছড়ি">খাগড়াছড়ি </option>
                        <option value="ফেনী">ফেনী </option>
                        <option value="ব্রাহ্মণবাড়ীয়া">ব্রাহ্মণবাড়ীয়া </option>
                        <option value="সুনামগঞ্জ">সুনামগঞ্জ</option>
                        <option value="কক্সবাজার">কক্সবাজার </option>
                        <option value="মৌলভীবাজার">মৌলভীবাজার </option>
                        <option value="গোপালগঞ্জ">গোপালগঞ্জ </option>
                        <option value="শরীয়তপুর">শরীয়তপুর </option>
                        <option value="মাদারীপুর">মাদারীপুর </option>
                        <option value="রাজবাড়ী">রাজবাড়ী </option>
                        <option value="গাজীপুর">গাজীপুর </option>
                        <option value="কিশোরগঞ্জ">কিশোরগঞ্জ</option>
                        <option value="জামালপুর">জামালপুর </option>
                        <option value="শেরপুর">শেরপুর </option>
                        <option value="নেত্রকোনা">নেত্রকোনা</option>
                        <option value="মুন্সীগঞ্জ">মুন্সীগঞ্জ </option>
                        <option value="নরসিংদী">নরসিংদী </option>
                        <option value="নারায়ণগঞ্জ">নারায়ণগঞ্জ</option>
                        <option value="মানিকগঞ্জ">মানিকগঞ্জ </option>
                        <option value="অন্যান্য">অন্যান্য</option>
                      </select>
                    </div>
                    <button className='bg-[#ED0404]  py-2 px-11 border border-solid border-[1px] border-white rounded-3xl mt-3 font-bold'> <FontAwesomeIcon icon={faMagnifyingGlass} /> খুঁজুন</button>
                  </div>
                </form>
              </div>
              {/* second-form-sec */}
              <div className='second-sec mt-16 lg:mt-0 lg:w-[570px]'>
                <h2 className='text-xl font-bold'>প্লাটিলেট - রক্তবন্ধু খুঁজুন ....</h2>
                <hr className='w-full my-2 mt-4' />
                <form action="">
                  <div className="form-group">
                    <div className="select_grouph_area">
                      <select id="blood_group" className='text-black w-[282px] lg:w-full py-2 my-2 rounded-sm pl-2'>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div>
                      <select id="district" className='text-black w-[282px] lg:w-full py-2 my-2 rounded-sm pl-2'>
                        <option value="পঞ্চগড়">পঞ্চগড়</option>
                        <option value="ঠাকুরগাঁও">ঠাকুরগাঁও</option>
                        <option value="দিনাজপুর ">দিনাজপুর </option>
                        <option value="রংপুর">রংপুর </option>
                        <option value="ঢাকা">ঢাকা</option>
                        <option value="কুড়িগ্রাম">কুড়িগ্রাম</option>
                        <option value="লালমনিরহাট">লালমনিরহাট</option>
                        <option value="নীলফামারী">নীলফামারী </option>
                        <option value="গাইবান্ধা">গাইবান্ধা</option>
                        <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                        <option value="রাজশাহী">রাজশাহী </option>
                        <option value="সিলেট"> সিলেট </option>
                        <option value="যশোর">যশোর</option>
                        <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                        <option value="কুমিল্লা">কুমিল্লা </option>
                        <option value="বরিশাল">বরিশাল</option>
                        <option value="ফরিদপুর">ফরিদপুর </option>
                        <option value="বগুড়া">বগুড়া </option>
                        <option value="পাবনা">পাবনা </option>
                        <option value="রাঙ্গামাটি">রাঙ্গামাটি </option>
                        <option value="কুষ্টিয়া">কুষ্টিয়া </option>
                        <option value="নোয়াখালী">নোয়াখালী </option>
                        <option value="খুলনা">খুলনা</option>
                        <option value="টাঙ্গাইল">টাঙ্গাইল </option>
                        <option value="ভোলা">ভোলা </option>
                        <option value="বান্দরবান">বান্দরবান </option>
                        <option value="চাঁদপুর">চাঁদপুর </option>
                        <option value="হবিগঞ্জ">হবিগঞ্জ </option>
                        <option value="লক্ষীপুর">লক্ষীপুর</option>
                        <option value="বরগুনা">বরগুনা </option>
                        <option value="ঝালকাঠি">ঝালকাঠি </option>
                        <option value="পিরোজপুর">পিরোজপুর </option>
                        <option value="পটুয়াখালী">পটুয়াখালী </option>
                        <option value="ঝিনাইদহ">ঝিনাইদহ</option>
                        <option value="নড়াইল">নড়াইল </option>
                        <option value="মাগুরা">মাগুরা </option>
                        <option value="সাতক্ষিরা">সাতক্ষিরা</option>
                        <option value="বাগেরহাট">বাগেরহাট </option>
                        <option value="চুয়াডাঙ্গা">চুয়াডাঙ্গা </option>
                        <option value="মেহেরপুর">মেহেরপুর </option>
                        <option value="সিরাজগঞ্জ">সিরাজগঞ্জ </option>
                        <option value="জয়পুরহাট">জয়পুরহাট </option>
                        <option value="নাটোর">নাটোর</option>
                        <option value="নওগাঁ">নওগাঁ </option>
                        <option value="চাঁপাইনবাবগঞ্জ">চাঁপাইনবাবগঞ্জ</option>
                        <option value="খাগড়াছড়ি">খাগড়াছড়ি </option>
                        <option value="ফেনী">ফেনী </option>
                        <option value="ব্রাহ্মণবাড়ীয়া">ব্রাহ্মণবাড়ীয়া </option>
                        <option value="সুনামগঞ্জ">সুনামগঞ্জ</option>
                        <option value="কক্সবাজার">কক্সবাজার </option>
                        <option value="মৌলভীবাজার">মৌলভীবাজার </option>
                        <option value="গোপালগঞ্জ">গোপালগঞ্জ </option>
                        <option value="শরীয়তপুর">শরীয়তপুর </option>
                        <option value="মাদারীপুর">মাদারীপুর </option>
                        <option value="রাজবাড়ী">রাজবাড়ী </option>
                        <option value="গাজীপুর">গাজীপুর </option>
                        <option value="কিশোরগঞ্জ">কিশোরগঞ্জ</option>
                        <option value="জামালপুর">জামালপুর </option>
                        <option value="শেরপুর">শেরপুর </option>
                        <option value="নেত্রকোনা">নেত্রকোনা</option>
                        <option value="মুন্সীগঞ্জ">মুন্সীগঞ্জ </option>
                        <option value="নরসিংদী">নরসিংদী </option>
                        <option value="নারায়ণগঞ্জ">নারায়ণগঞ্জ</option>
                        <option value="মানিকগঞ্জ">মানিকগঞ্জ </option>
                        <option value="অন্যান্য">অন্যান্য</option>
                      </select>
                    </div>
                    <button className='bg-[#ED0404] py-2 px-11 border border-solid border-[1px] border-white rounded-3xl mt-3 font-bold'> <FontAwesomeIcon icon={faMagnifyingGlass} /> খুঁজুন</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* section-2 (after header part)*/}
      <section className='container'>
        <div className='pt-10 pl-10 lg:ml-[35%]'>
          <a href="#">
            <button className='bg-[#ED0404] hover:bg-[#000] py-2 px-5 lg:py-4 lg:px-24 rounded-3xl lg:rounded-full'>
              রক্তবন্ধু হতে রেজিস্ট্রেশন করুন
            </button>
          </a>
        </div>
        <div className='mt-7 lg:ml-[41%]'>
          <p className='text-black inline'>প্লাটিলেট ডোনার হতে চাইলে </p>
          <a href="#" >
            <button className='bg-[#28A745]  py-1 lg:py-2 px-2 lg:px-3 rounded-3xl lg:rounded-full'>
              রেজিস্ট্রেশন করুন
            </button>
          </a>
        </div>
        <div className='pl-2 mt-10 lg:flex container lg:px-48 lg:items-center'>
          <div className='lg:w-[475px]'>
            <h1 className=' text-red-500 text-2xl border-b-2 border-dotted border-red-500 w-2/3 mb-3'>রক্তবন্ধু ব্লাড কার্ড </h1>
            <p className='text-black'>এখনি ডাউনলোড করে ফেলুন আপনার কার্ডটি </p>
            <a href="#">  <button className='bg-[#28A745] py-2 px-8 border border-solid border-[1px] border-white rounded-3xl mt-3 font-bold'> কার্ড তৈরি করুন </button></a>
            <p className='text-black mt-10'>কিভাবে কার্ড তৈরি করব?</p>
            <a href="#"> <button className='bg-[#DC3545] py-2 px-8 border border-solid border-[1px] border-white rounded-3xl mt-3 font-bold'> ভিডিও টি দেখুন  </button> </a>
          </div>
          <img src={CardImg} alt="" className='w-[80%] lg:w-[45%] ml-[1.5%] mt-6' />
        </div>
      </section>
      {/* section-last */}
      <section className='bg-[#ED0404] mt-7 '>
        <div className='pl-32 py-10 lg:ml-[22%]  lg:flex lg:items-center lg:gap-8'>
          <div className='bg-[#3B5997] w-1/2 my-5 py-1 px-2 lg:pl-0 lg:p-0  lg:w-[215px] lg:h-[144px]'>
            <img src={FbIcon} alt="" className='w-full lg:w-2/3 my-5 lg:mt-12 lg:ml-9' />
          </div>
          <div className='bg-[#3B5997] w-1/2 py-5 px-2 lg:pl-0 lg:p-0 lg:w-[215px] lg:h-[144px]'>
            <img src={PlayStoreIcon} alt="" className='w-full lg:w-2/3 lg:mt-12 lg:ml-9' />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default First_Page;