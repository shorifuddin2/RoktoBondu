import React from "react";
import { Link } from "react-router-dom";

const Blog_Button = ({ data }) => {
  return (
    <Link to={`/blogs/${data.link}`}>
      <button className="blog_btn hover:bg-black w-[255px] h-[43px] text-[20px] bg-red-600 text-white text-center py-1 rounded-full">
        {data.btnText}
      </button>
    </Link>
  );
};

export default Blog_Button;
