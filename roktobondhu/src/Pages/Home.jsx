import React from "react";
import FirstPage from "../components/First_Page/First_Page";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <FirstPage></FirstPage>
      <Footer></Footer>
    </div>
  );
};

export default Home;
