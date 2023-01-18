import React, { useState, useEffect } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { galleryBlogData } from '../GalleryBlog/GalleryBlogData';
import NewsBlogCard from './NewsBlogCard';

const NewsBlogDetails = () => {

    const { id } = useParams();
    const [blogData, setBlogData] = useState("");
    const [leatestData, setLeatestData] = useState([]);

    useEffect(() => {
        let res = galleryBlogData.find((e) => e.blog_id === id);
        setBlogData(res);
        setLeatestData(galleryBlogData.filter((e) => e.blog_id !== id));
    }, [id]);

    const {
        title,
        author,
        date,
        image,
        details_description1,
        details_description2,
        details_description3,
        details_description4,
        details_description5,
        details_description6,
        details_description7,
    } = blogData;
    return (
        <div className='galleryBlogContainer mb-20'>
            <div className="mt-14">
                <h1 className=" text-[25px] leading-8 border-[#212529] border-b pb-5 text-[#212529]">
                    {title}
                </h1>
                <h5 className="text-[14px] mt-2 text-[#178e33]">
                    <span>{author}</span> <span>{date}</span>
                </h5>
                <div className="image w-full h-full mt-12">
                    <img src={image} className=" h-full" alt="" />
                </div>

                <div className="share mt-6">
                    <span className="text-[14px] text-black font-bold">শেয়ার করুন</span>
                    <div className=" flex">
                        <AiFillFacebook size={30} color="#3b36dd" />
                        <FaTwitterSquare size={30} color="#188cff" />
                        <FaLinkedin size={30} color="#173b8e" />
                        <FaWhatsappSquare size={30} color="#35e45e" />
                    </div>
                </div>

                <div className="details mt-10">
                    <p className=" text-[15px] leading-8 text-[#212121]">
                        {details_description1}
                    </p>
                    <p className=" text-[15px] mt-2 leading-8 text-[#212121]">
                        {details_description2}
                    </p>
                    <p className=" text-[15px] mt-2 leading-8 text-[#212121]">
                        {details_description3}
                    </p>
                    <p className=" text-[15px] mt-2 leading-8 text-[#212121]">
                        {details_description4}
                    </p>
                    <p className=" text-[15px] mt-2 leading-8 text-[#212121]">
                        {details_description5}
                    </p>
                    <p className=" text-[15px] mt-2 leading-8 text-[#212121]">
                        {details_description6}
                    </p>
                    <p className=" text-[15px] mt-2 leading-8 text-[#212121]">
                        {details_description7}
                    </p>
                </div>
                <div className="comment mt-10">
                    <p className=" text-[#252525] font-semibold pb-3 flex justify-between border-b border-[#bebebe]">
                        <span>1 comment</span>
                        <select name="sort" id="cars">
                            <option value="Short by ">Short by </option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </p>
                    <div className="profile-box mt-6 flex gap-4">
                        <img className=" w-14 h-12" src="/blogimg/avt.jpg" alt="" />
                        <textarea
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                        ></textarea>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <img className=" w-14 h-12" src="/blogimg/avt1.jpg" alt="" />
                        <div>
                            <h3 className=" text-[15px] text-blue-800 font-semibold">
                                Akram Chowdhury
                            </h3>
                            <p className=" text-[13px] text-gray-500 font-medium">
                                মাশা-আল্লাহ! <br /> সত্যিাকারে একজন সুপার হিরো বিপ্লব ভাই🌸
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <img className=" w-14 h-12" src="/blogimg/avt1.jpg" alt="" />
                        <div>
                            <h3 className=" text-[15px] text-blue-800 font-semibold">
                                Akram Chowdhury
                            </h3>
                            <p className=" text-[13px] text-gray-500 font-medium">
                                বেশ কিছু দারুন তথ্য জানলাম❤️
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <img className=" w-14 h-12" src="/blogimg/avt1.jpg" alt="" />
                        <div>
                            <h3 className=" text-[15px] text-blue-800 font-semibold">
                                Abdur Rahman
                            </h3>
                            <p className=" text-[13px] text-gray-500 font-medium">
                                Sohel Rana 💝💝💝
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" relative">
                    <h1 className="blog_title after: content-[''] after:absolute after:-bottom-6 after:left-0 after:w-[100px] after:h-[5px] after:bg-red-600">
                        {" "}
                        পোষ্ট সমূহ
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {" "}
                    {leatestData?.map(newsData => <NewsBlogCard newsData={newsData} />)}
                </div>
            </div>
        </div>
    );
};

export default NewsBlogDetails;