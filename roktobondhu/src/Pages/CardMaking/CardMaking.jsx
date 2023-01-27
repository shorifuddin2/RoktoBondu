import React from 'react';
import Navbar from '../Navbar/Navbar';

//images
import CardImg from '../../assets/images/HomePage_images/card.png';
import FbIcon from "../../assets/images/HomePage_images/fb_icon.jpg";
import PlayStoreIcon from "../../assets/images/HomePage_images/playStore_icon.png";
import Footer from '../Footer/Footer';

const CardMaking = () => {
    return (
        <div>
            <Navbar />
            <button className="bg-[#DC3545] py-2 px-8 border border-solid border-[1px] border-white rounded-3xl font-bold mt-8 ml-[30%] lg:ml-[43%] hover:bg-[#c82333] transition duration-200 ease-in">
                  Download Now
             </button>
            <img
            src={CardImg}
            alt=""
            className="w-[93.5%] lg:w-[auto] ml-[4%]  mt-6 lg:mx-auto"
          />

          <form className='p-5 lg:p-0 lg:ml-[29%] lg:mt-6'>
            <p className='mb-3 text-black'>Name:</p>
            <input type="text" placeholder='Type your Name...' className='rounded w-full lg:w-[59%] p-2 pl-3 text-black border border-gray-300'/>
            <p  className='mt-5 text-black'>Blood Group:</p>
            <label className='custom-select icon-upper icon-down   mt-4'>
                      <select name='bloodGroup' className='platelet-group pl-3 rounded text-black border border-gray-300 lg:w-[565px] lg:h-10 w-[444px] sm:h-10 h-[40px]'>
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
            <p className='mt-5 mb-3 text-black'>Mobile:</p>
            <input type="text" placeholder='Mobile Number' className='rounded w-full lg:w-[59%] p-2 pl-3 text-black border border-gray-300'/>
            <p className='mt-5 mb-3 text-black'>Address:</p>
            <input type="text" placeholder='Address' className='rounded w-full lg:w-[59%] p-2 pl-3 text-black border border-gray-300'/>
            <p className='mt-5 mb-3 text-black'>Photo</p>
            <input type="file" placeholder='Address' className='rounded w-full lg:w-[59%] p-2 pl-3 text-black border border-gray-300'/>
          </form>
             <p className='ml-[5%] lg:ml-[29%] mt-4 mb-12 text-black text-sm'>Scroll top to Check your Card.</p>   
          <section className="bg-[#ED0404] mt-7 ">
        <div className="pl-32 py-10 lg:ml-[22%]  lg:flex lg:items-center lg:gap-8">
          <div className="bg-[#3B5997] w-1/2 my-5 py-1 px-2 lg:pl-0 lg:p-0  lg:w-[215px] lg:h-[144px] border-[1px] border-solid border-white">
            <img
              src={FbIcon}
              alt=""
              className="w-full lg:w-2/3 my-5 lg:mt-12 lg:ml-9"
            />
          </div>
          <div className="bg-[#3B5997] w-1/2 py-5 px-2 lg:pl-0 lg:p-0 lg:w-[215px] lg:h-[144px] border-[1px] border-solid border-white">
            <img
              src={PlayStoreIcon}
              alt=""
              className="w-full lg:w-2/3 lg:mt-12 lg:ml-9"
            />
          </div>
        </div>
      </section>
      <Footer />
        </div>
    );
};

export default CardMaking;