import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import campaign from './campaign.json'

const CampaignDetails = () => {
    const param = useParams().campaignId;
    let detail = campaign.find(p => ((p.id) === parseInt(param)));
    let campaignLayout = campaign.filter(p => p.id < 4);
    const { title, date, img, author, descr } = detail;
    // const myPoem = poem.split(",");
    return (
        <div className='lg:mx-[120px] md:[50px] my-12 mx-5'>
            <h1 className='text-xl text-black border-[#212529] border-b pb-5'>{title}
            </h1>
            <h5 className="text-[14px] mt-2 text-black">
                <span>{author}</span> | <span>{date}</span>
            </h5>
            <div className='mt-12'>
                <img src={img} alt="" />
            </div>


            <div>
                <div className="mt-5">
                    <span className="text-[14px] text-black font-bold">শেয়ার করুন</span>
                    <div className=" flex">
                        <AiFillFacebook size={30} color="#3b36dd" />
                        <FaTwitterSquare size={30} color="#188cff" />
                        <FaLinkedin size={30} color="#173b8e" />
                        <FaWhatsappSquare size={30} color="#35e45e" />
                    </div>
                </div>
                <div className='text-black'>
                    <h1 className='text-2xl py-5'>{title}</h1>
                    <p className='text-justify'>{descr}</p>
                </div>
        
                <div className="mt-5">
                    <span className="text-[14px] text-black font-bold">শেয়ার করুন</span>
                    <div className=" flex">
                        <AiFillFacebook size={30} color="#3b36dd" />
                        <FaTwitterSquare size={30} color="#188cff" />
                        <FaLinkedin size={30} color="#173b8e" />
                        <FaWhatsappSquare size={30} color="#35e45e" />
                    </div>
                </div>

                <div className="comment mt-10">
                    <p className=" text-[#252525] font-semibold pb-3 flex justify-between border-b border-[#bebebe]">
                        <span>0 comment</span>
                        <select name="sort" id="cars">
                            <option value="Short by ">Short by </option>
                            <option value="saab">Newest</option>
                            <option value="mercedes">Older</option>
                        </select>
                    </p>
                    <div className="profile-box mt-6 flex gap-4">
                        <img className=" w-14 h-12" src="/blogimg/avt.jpg" alt="" />
                        <textarea
                            id="message"
                            rows="2"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                        ></textarea>
                    </div>
                    {/* <div className='text-end bg-slate-100 ml-[70px] h-10 pr-2'>
                        <button className='bg-slate-400 text-white mt-1 p-1'>Login to post</button>
                    </div> */}
                    <div className='flex content-center text-sm'>
                        <AiFillFacebook size={18} color="#3b36dd" />
                        <Link className='text-[blue] ml-1'>Facebook Comments Plugin</Link>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12 md:container mx-auto">
                {
                    campaignLayout.map((layout, index) => <div
                        key={index}
                        className=" bg-white shadow-lg rounded-lg relative">

                        <img src={layout.img} className="w-full md:h-[200px] sm:h-[250px] rounded-t-lg" alt="" />

                        <div className="p-8">
                            <h2 className=" text-[18px] font-bold text-[#606060]">{layout.title.slice(0,50)}</h2>
                            <h5 className="text-[14px] mt-2">
                                <span>{layout.author}</span> | <span>{layout.date}</span>
                            </h5>
                            <p className=" text-[#212529] leading-6 text-[14px] mt-3 pb-12">{layout.desc.slice(0, 100)}</p>
                        </div>
                        <button className="border text-sm font-semibold p-2 mb-3
                     hover:bg-black rounded-full py1- text-white px-6 mx-8 bg-red-700 absolute bottom-3"
                        >
                            বিস্তারিত...
                        </button>
                    </div>)
                }
            </div>
        </div>
       
    );
};

export default CampaignDetails;