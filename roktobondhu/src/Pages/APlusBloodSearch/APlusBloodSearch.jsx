import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

//importing data
import { useLocation } from "react-router-dom";

const APlusBloodSearch = () => {
  const state = useLocation().state;
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { blood_group, present_district } = state || {};
  useEffect(() => {
    if (blood_group) {
      setIsLoading(true);
      setError("");
      fetch(
        `http://localhost:4000/api/user/search?blood_group=${encodeURIComponent(
          blood_group
        )}&present_district=${present_district}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setResult(data.users);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
          setError(error.message);
        });
    }
  }, [blood_group, present_district]);

  return (
    <section>
      <Navbar />
      <button className="bg-[#ED0404] py-2 px-7 ml-[28%] mt-4 lg:ml-[40%] lg:mt-8 lg:py-2.5 lg:px-16 rounded-3xl lg:rounded-full font-black text-base lg:text-lg text-white">
        {blood_group} রক্তবন্ধুর তালিকা
      </button>
      {result.length > 0 ? (
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
            {result.map((dt, i) => (
              <tr key={dt._id} className="text-black text-sm">
                {" "}
                <td className="p-2 font-bold "> {i + 1} </td>{" "}
                <td className="p-2"> {dt.name} </td>{" "}
                <td className="p-2">
                  {" "}
                  <p>{dt.present_address}</p> <p>{dt.present_district} </p>{" "}
                </td>{" "}
                <td className="p-2"> {dt.number} </td>{" "}
                <td className="p-2"> {dt.lastDonationDate} </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-black text-xl min-h-screen mt-3">
          {isLoading ? (
            "Loading..."
          ) : error ? (
            <span className="text-red-500">{error}</span>
          ) : (
            "No Record Found"
          )}
        </p>
      )}
      <Footer />
    </section>
  );
};

export default APlusBloodSearch;
