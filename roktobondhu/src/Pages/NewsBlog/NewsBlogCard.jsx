import React from 'react';
import { useNavigate } from "react-router-dom";

const NewsBlogCard = ({ newsData }) => {

    const navigate = useNavigate();
    const { title, author, date, details, blog_id, image } = newsData || {};

    return (
        <div className="relative h-[537px]  bg-white shadow-lg overflow-hidden">
            <div className="blog_card_img w-full h-[200px]">
                <img src={image} className="w-full h-full" alt="" />
            </div>
            <div className="card-text p-8">
                <h2 className=" text-[18px] font-bold text-[#606060]">{title}</h2>
                <h5 className="text-[14px] mt-2">
                    <span>{author}</span> <span>{date}</span>
                </h5>
                <p className=" text-[#212529] leading-6 text-[14px] mt-3">{details}</p>
            </div>
            <div
                onClick={() => navigate(`/blogs/সংবাদ/${blog_id}`)}
                className="card-tbn hover:bg-black rounded-full absolute bottom-6 mx-8 py-2 text-white px-6 bg-primary inline-block cursor-pointer"
            >
                বিস্তারিত দেখুন...
            </div>
        </div>
    );
};

export default NewsBlogCard;