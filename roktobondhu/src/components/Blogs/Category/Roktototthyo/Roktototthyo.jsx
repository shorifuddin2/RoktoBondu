import React from "react";
import Blog_Title from "../../../Common/Blog_Title";
import Container from "../../../Common/Container";
import data from "./Roktototthyo.card.json";
import Roktotothyo_Card from "./Roktototthyo_Card";
import Pagination from "../../Pagination";
const Roktototthyo = () => {
  return (
    <Container>
      <Blog_Title title="পোষ্ট সমূহ" />
      <div className=" flex gap-8 mt-12 flex-wrap justify-between">
        
        {data.map((e) => (
          <Roktotothyo_Card data={e} />
        ))}
      </div>
      <Pagination />
    </Container>
  );
};

export default Roktototthyo;
