import React from "react";
import Blog_Title from "../../../Common/Blog_Title";
import Container from "../../../Common/Container";
import data from "./First-roktodan.card.json";
import Blog_Card from "./First-roktodan_Card";
import Pagination from "../../Pagination";
import NavbarBlog from "../../../../Pages/Navbar/NavbarBlog/NavbarBlog";
const Roktodaner = () => {
  return (
    <div>
      <NavbarBlog></NavbarBlog>
      <Container>
        <Blog_Title title="পোষ্ট সমূহ" />
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12 md:container mx-auto ">

          {data.map((e) => (
            <Blog_Card data={e} />
          ))}
        </div>
        <Pagination />
      </Container>
    </div>
  );
};

export default Roktodaner;
