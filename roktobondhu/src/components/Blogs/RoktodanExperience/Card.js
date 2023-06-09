import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ d }) => {
    console.log(d)
    const navigate = useNavigate();
  const { title, author, date, description, _id, img } = d;
    return (
        <div className="w-[350px] mx-auto relative h-[537px] bg-white shadow-lg overflow-hidden mb-[30px]">
            <div className="w-full h-[200px] ">
                <img src={img} className="w-full h-full" alt="" />
            </div>
            <div className="card-text p-8">
                <h2 className=" text-[18px] font-bold ">{title}</h2>
                <h5 className="text-[14px] mt-2 text-[#606060]">
                    <span>Author: {author} | </span> <span>{date}</span>
                </h5>
                <p className=" text-[#212529] leading-6 text-[14px] mt-3">{description}</p>
            </div>
            <div
                onClick={() => navigate(`/blogs/রক্তদানের-অভিজ্ঞতা/${_id}`)}
                className="card-tbn hover:bg-black rounded-full absolute bottom-6 mx-8 py-2 text-white px-6 bg-red-600 inline-block"
            >
                বিস্তারিত...
            </div>
        </div>
    );
};

export default Card;