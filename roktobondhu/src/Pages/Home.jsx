import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Platelet from "./platelet/Platelet";

const Home = () => {
  return <div>
      <Navbar></Navbar>
      <h1>Home</h1>
      <Platelet></Platelet>
      <Footer></Footer>
  </div>;
};

export default Home;
