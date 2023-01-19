import React from "react";
import Blog_Title from "../Common/Blog_Title";
import Container from "../Common/Container";
import data from "./blog.card.json";
import Blog_Card from "./Blog_Card";
import Pagination from "./Pagination";
const Anuperona = () => {
  return (
    <Container>
      <Blog_Title title="পোষ্ট সমূহ" />
      <div className=" flex gap-8 mt-12 flex-wrap justify-between">
        {" "}
        {data.map((e) => (
          <Blog_Card data={e} />
        ))}
      </div>
      <Pagination />
    </Container>
  );
};

export default Anuperona;
