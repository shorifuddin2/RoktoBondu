import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" xs:w-[320px] sm:w-[380px] md:w-[940px] lg:w-[1140px] m-auto">
      {children}
    </div>
  );
};

export default Container;
