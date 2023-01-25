import React from "react";
import Footer from "../../../Pages/Footer/Footer";
import NavbarBlog from "../../../Pages/Navbar/NavbarBlog/NavbarBlog";
import Campaign from "./Campaign";
import campaigns from "./campaign.json";

const Campaigns = () => {
  return (
    <div>
      <NavbarBlog />
      <div className="lg:mx-[105px] md:[50px] my-10">
        <div>
          <h1 className="text-3xl text-black font-bold mt-[60px]">
            পোষ্ট সমূহ
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12 md:container mx-auto">
          {campaigns.map((campaign, index) => (
            <Campaign key={index} campaign={campaign}></Campaign>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Campaigns;
