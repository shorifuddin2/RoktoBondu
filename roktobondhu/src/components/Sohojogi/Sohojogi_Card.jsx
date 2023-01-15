import React from "react";

const Sohojogi_Card = ({ data }) => {
  const { name, number } = data;
  return (
    <div className=" shadow-md rounded-md border border-[#f6f6f6] w-[30%] flex justify-center flex-col items-center p-5  ">
      <h2 className=" text-center text-[16px] text-gray-600 font-semibold">
        {name}
      </h2>
      <p className=" text-center text-[16px] text-gray-600">{number}</p>
    </div>
  );
};

export default Sohojogi_Card;
