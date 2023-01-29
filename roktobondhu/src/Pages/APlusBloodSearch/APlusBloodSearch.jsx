import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

//importing data
import Data from "../../assets/APlusBloodSearch_data/APlusBloodSearch_data.json";

const APlusBloodSearch = () => {
  return (
    <section>
      <Navbar />

      <button className="bg-[#ED0404] py-2 px-7 ml-[28%] mt-4 lg:ml-[40%] lg:mt-8 lg:py-2.5 lg:px-16 rounded-3xl lg:rounded-full font-black text-base lg:text-lg">
        A+ রক্তবন্ধুর তালিকা
      </button>
      <table className="table-auto border-separate border-spacing-x-0.5 border-spacing-y-0.5 border border-black mx-auto mt-8 lg:mb-24">
        <thead>
          <tr className="text-white bg-[#ED0404]">
            <th className="p-3"> নং </th>
            <th className="px-32"> নাম </th>
            <th className="px-44"> ঠিকানা </th>
            <th className="px-24"> যোগাযোগ </th>
            <th className="px-12"> সর্বশেষ রক্তদান </th>
          </tr>
        </thead>
        <tbody>
          {Data.map((dt) => (
            <tr className="text-black text-sm">
              {" "}
              <td className="p-2 font-bold "> {dt.num} </td>{" "}
              <td className="p-2"> {dt.name} </td>{" "}
              <td className="p-2">
                {" "}
                <p>{dt.dist_address}</p> <p>{dt.vill_address} </p>{" "}
              </td>{" "}
              <td className="p-2"> {dt.phone_number} </td>{" "}
              <td className="p-2"> {dt.last_donate_date} </td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </section>
  );
};

export default APlusBloodSearch;
