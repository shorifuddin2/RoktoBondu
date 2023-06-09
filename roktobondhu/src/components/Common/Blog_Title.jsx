import React from "react";

const Blog_Title = ({ title }) => {
  return (
    <div className=" relative">
      <h1 className="blog_title xs:after:left-[30%] sm:after:left-[30%] md:after:left-[0%]  xs:text-center sm:text-center md:text-left after: content-[''] after:absolute after:-bottom-6 after:left-0 after:w-[100px] after:h-[5px] after:bg-red-600">
        {" "}
        {title}
      </h1>
    </div>
  );
};

export default Blog_Title;
