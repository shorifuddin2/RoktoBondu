import React from "react";
import { useNavigate } from "react-router-dom";

const Kobita = ({ poem }) => {
  const navigate = useNavigate();
  const { title, author, date, desc, id, img } = poem;
  return (
    <div className=" bg-white shadow-lg rounded-lg">
      <img
        src={img}
        className="w-full md:h-[200px] sm:h-[250px] rounded-t-lg"
        alt=""
      />

      <div className="p-8">
        <h2 className=" text-[18px] font-bold text-[#606060]">{title}</h2>
        <h5 className="text-[14px] mt-2">
          <span>{author}</span> | <span>{date}</span>
        </h5>
        <p className=" text-[#212529] leading-6 text-[14px] mt-3">{desc}</p>
      </div>
      <button
        onClick={() => navigate(`/blogs/poem/${id}`)}
        className="border text-lg font-semibold p-2 mb-3
             hover:bg-black rounded-full py-2 text-white px-6 mx-8 bg-red-600"
      >
        বিস্তারিত দেখুন...
      </button>
    </div>
  );
};

export default Kobita;
