import React from "react";
import Blog_Title from "../Common/Blog_Title";
import Container from "../Common/Container";
import Blog_Button from "./Blog_Button";
import Blog_Card from "./Blog_Card";
import { bloggbtn } from "./utils";
import blogCardData from "./blog.card.json";
import Pagination from "./Pagination";

const Blogs = () => {
  console.log(blogCardData);
  return (
    <Container>
      <Blog_Title title="রক্তবন্ধু ব্লগ" />
      <div className=" flex gap-3 mt-12 flex-wrap">
        {bloggbtn.map((e) => (
          <Blog_Button data={e} />
        ))}
      </div>

      <Blog_Title title="সর্বশেষ পোষ্ট সমূহ" />
      <div className=" flex gap-8 mt-12 flex-wrap justify-between">
        {" "}
        {blogCardData.map((e) => (
          <Blog_Card data={e} />
        ))}
      </div>
      <Pagination />
    </Container>
  );
};

export default Blogs;
