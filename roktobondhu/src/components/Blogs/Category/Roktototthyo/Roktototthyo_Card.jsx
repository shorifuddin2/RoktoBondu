import React from "react";
import { useNavigate } from "react-router-dom";


const Roktototthyo_Card = ({ data }) => {
  const navigate = useNavigate();
  const { title, author, date, details, id, img } = data;
  return (
    <div className=" w-[350px] relative h-[537px]  bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="blog_card_img w-full h-[200px] ">
        <img src={img} className="w-full h-full" alt="" />
      </div>
      <div className="card-text p-8">
        <h2 className=" text-[18px] font-bold text-[#606060]">{title}</h2>
        <h5 className="text-[14px] mt-2">
          <span>{author}</span> <span>{date}</span>
        </h5>
        <p className=" text-[#212529] leading-6 text-[14px] mt-3">{details}</p>
      </div>
      <div
        onClick={() => navigate(`/blogs/category/roktototthoy/${id}`)}
        className="card-tbn hover:bg-black rounded-full absolute bottom-6 mx-8 py-2 text-white px-6 bg-primary inline-block"
      >
        বিস্তারিত দেখুন...
      </div>
    </div>
  );
};

export default Roktototthyo_Card;
