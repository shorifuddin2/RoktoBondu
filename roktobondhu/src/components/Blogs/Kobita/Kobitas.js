import React from "react";
import Footer from "../../../Pages/Footer/Footer";
import Navbar from "../../../Pages/Navbar/Navbar";
import Kobita from "./Kobita";
import poems from "../blog.card.json";
import Container from "../../Common/Container";

const Kobitas = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <div className=" md:[50px] my-10">
          <div>
            <h1 className="text-3xl text-black font-bold mt-[60px]">
              পোষ্ট সমূহ
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12 md:container mx-auto">
            {poems.map((poem, index) => (
              <Kobita key={index} poem={poem}></Kobita>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Kobitas;
