import React from "react";
import Sohojogi_Card from "../components/Sohojogi/Sohojogi_Card";
import data from "../components/Sohojogi/sohojodi.card.json";
import Container from "../components/Common/Container";
const Sohojogi = () => {
  return (
    <Container>
      <div className="w-full flex justify-center">
        <h1 className=" bg-red-600 mt-16 font-bold inline-block rounded-full px-10 py-4 text-white">
          সহযোগী সংগঠন
        </h1>
      </div>

      <div className=" flex gap-10 flex-wrap mt-14">
        {data.map((e) => (
          <Sohojogi_Card data={e} />
        ))}
      </div>
    </Container>
  );
};

export default Sohojogi;
