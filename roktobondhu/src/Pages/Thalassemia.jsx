import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Thalassemia = () => {
  const [isRegister, setIsRegister] = useState(null);

  const handleClick = (state) => {
    setIsRegister(state);
  };
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("districts.json");
      const json = await response.json();
      console.log(json);
      setDistricts(json);
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-[1140px] mx-auto w-full p-3">
      <h2 className="w-[max-content] text-[22px] py-[10px] px-[60px] text-white bg-red-600 rounded-full font-[700] my-5 mx-auto">
        থ্যালাসেমিয়াঃ
      </h2>
      <div className="mb-[50px]">
        <p className="text-center text-[15px] text-black my-[30px]">
          লক্ষ্য ও উদ্দেশ্যঃ থ্যালাসেমিয়া রোগিদের নির্দিষ্ট সময় অন্তর অন্তর
          রক্ত গ্রহণ করতে হয়। কারো প্রতিমাসে, অনেকের প্রায় দুই মাস তিন মাস পরপর
          রক্তের প্রয়োজন হয়। এতে তাদের সবসময়ই পরবর্তী রক্তদাতার খোঁজে
          দুশ্চিন্তাগ্রস্ত থাকতে হয়। আর্থিক ও মানষিক চাপ পরিবারের সদস্যদেরও
          অকৃত্রিম হাসি বিলীন করে দেয়। আমরা রক্তবন্ধুর মাধ্যমে তাদের তথ্যগুলো
          সংগ্রহ করতে চাই এবং প্রতিটি রোগিকে কিছু নির্দিষ্ট সংখ্যক আগ্রহী ব্লাড
          ডোনার দিয়ে যতোদূর সম্ভব চিন্তামুক্ত রাখার সামান্য উদ্যোগ গ্রহণ করেছি,{" "}
          <Link to={"/thalassemia-details"} className="text-blue-600" href="#">
            আরোও পড়ুন...
          </Link>
        </p>
      </div>
      <div className="md:flex items-start gap-8 mb-20">
        <div className="md:w-1/2 w-full max-h-[content] border border-red-600 ">
          <h3 className="md:text-[23px] text-[14px] leading-[28px] text-center bg-red-600 p-[17px] text-white font-[600]">
            আপনার এলাকার কিংবা পরিচিত যে কোন এলাকার থ্যালাসেমিয়া রোগির তথ্য দিন
          </h3>
          <div className="p-[40px] shadow-xl">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-3 text-sm text-black">
                  রোগির নামঃ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="রোগীর নাম"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="blood_group"
                  className="block mb-3 text-sm text-black"
                >
                  রক্তের গ্রুপঃ <span className="text-red-500">*</span>
                </label>
                <select
                  type="text"
                  id="blood_group"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5 "
                  required
                >
                  {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                    (opt) => (
                      <option key={opt} value={opt} className="bg-white ">
                        {opt}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="district"
                  className="block mb-3 text-sm text-black"
                >
                  জেলাঃ <span className="text-red-500">*</span>
                </label>
                <select
                  type="text"
                  id="district"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5 "
                  required
                >
                  {districts.map((district) => (
                    <option
                      className="bg-white "
                      value={district.bn_name}
                      key={district.id}
                    >
                      {district.bn_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="police_station"
                  className="block mb-3 text-sm text-black"
                >
                  থানাঃ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="police_station"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="থানা"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="village"
                  className="block mb-3 text-sm text-black"
                >
                  গ্রামের নামঃ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="village"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="গ্রামের নাম"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="guardian_name"
                  className="block mb-3 text-sm text-black"
                >
                  অভিভাবকের নামঃ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="guardian_name"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="অভিভাবকের নাম"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="contact_number"
                  className="block mb-3 text-sm text-black"
                >
                  মোবাইল নাম্বারঃ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact_number"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="মোবাইল নাম্বার"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="submit_name"
                  className="block mb-3 text-sm text-black"
                >
                  তথ্যদাতার নামঃ
                </label>
                <input
                  type="text"
                  id="submit_name"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="তথ্যদাতার নাম"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="submit_mobile"
                  className="block mb-3 text-sm text-black"
                >
                  মোবাইল নাম্বারঃ
                </label>
                <input
                  type="text"
                  id="submit_mobile"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="মোবাইল নাম্বার"
                  required
                />
              </div>
              <button className="px-[44px] py-[9px] bg-black text-white hover:bg-red-600 duration-1000 font-[700]">
                সাবমিট করুন
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:mt-0 mt-5">
          <h3 className="md:text-[23px] text-[14px] leading-[28px] text-center bg-red-600 p-[17px] text-white font-[600]">
            আপনার আশেপাশে থাকা কোন থ্যালাসেমিয়া রোগিকে রক্ত উপহার দিয়ে সহযোগিতা
            করতে চাইলে ফরম পূরণ করুন
          </h3>
          <div className="p-[40px] shadow-xl border border-red-600">
            <h2 className="text-black">
              RoktoBondhu.com এ রক্তদাতা হিসাবে রেজিস্ট্রেশন করা আছে?
            </h2>
            <div className="flex justify-center items-center gap-5 text-white my-5">
              <button
                onClick={() => handleClick("yes")}
                className="py-2 px-5 bg-green-600 hover:bg-green-700 rounded duration-500 flex items-center gap-2"
              >
                <Check />
                হ্যাঁ
              </button>
              <button
                onClick={() => handleClick("no")}
                className="py-2 px-5 bg-red-500 hover:bg-red-700 rounded duration-500 flex items-center gap-2"
              >
                <Check />
                না
              </button>
            </div>
            {isRegister === "yes" && (
              <div>
                <form action="">
                  <div className="mb-6">
                    <label
                      htmlFor="yes_mobile_number"
                      className="block mb-3 text-sm text-black"
                    >
                      রক্তবন্ধুতে রেজিস্ট্রেশনকৃত মোবাইল নাম্বারঃ
                      <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      id="yes_mobile_number"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="মোবাইল নাম্বার"
                      required
                    />
                  </div>
                  <button className="px-[44px] py-[9px] bg-black text-white hover:bg-red-600 duration-1000 font-[700]">
                    সাবমিট করুন
                  </button>
                </form>
              </div>
            )}
            {isRegister === "no" && (
              <div>
                <form>
                  <div className="mb-6">
                    <label
                      htmlFor="noRegName"
                      className="block mb-3 text-sm text-black"
                    >
                      নামঃ <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      id="noRegName"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="নাম"
                    />
                  </div>
                  <fieldset className="border-dashed border-2 border-gray-900 p-3 text-black">
                    <legend className="text-sm px-3">স্থায়ী ঠিকানা</legend>
                    <div className="mb-6">
                      <label
                        htmlFor="parmanent_district"
                        className="block mb-3 text-sm text-black"
                      >
                        জেলাঃ <span className="text-red-500">*</span>
                      </label>
                      <select
                        type="text"
                        id="parmanent_district"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5 "
                        required
                      >
                        {districts.map((district) => (
                          <option
                            className="bg-white "
                            value={district.bn_name}
                            key={district.id}
                          >
                            {district.bn_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="parmanent_address"
                        className="block mb-3 text-sm text-black"
                      >
                        ঠিকানা <span className="text-red-500"> *</span>
                      </label>
                      <input
                        type="text"
                        id="parmanent_address"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="ঠিকানা"
                      />
                    </div>
                  </fieldset>
                  <fieldset className="border-dashed border-2 border-gray-900 p-3 text-black my-6">
                    <legend className="text-sm px-3">বর্তমান ঠিকানা</legend>
                    <div className="mb-6">
                      <label
                        htmlFor="current_district"
                        className="block mb-3 text-sm text-black"
                      >
                        জেলাঃ <span className="text-red-500">*</span>
                      </label>
                      <select
                        type="text"
                        id="current_district"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5 "
                        required
                      >
                        {districts.map((district) => (
                          <option
                            className="bg-white "
                            value={district.bn_name}
                            key={district.id}
                          >
                            {district.bn_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="current_address"
                        className="block mb-3 text-sm text-black"
                      >
                        ঠিকানা <span className="text-red-500"> *</span>
                      </label>
                      <input
                        type="text"
                        id="current_address"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="ঠিকানা"
                        required
                      />
                    </div>
                  </fieldset>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-3 text-sm text-black"
                    >
                      ইমেইল ঠিকানা (যদি থাকে){" "}
                    </label>
                    <input
                      type="text"
                      id="email"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="ইমেইল"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="mobile_number"
                      className="block mb-3 text-sm text-black"
                    >
                      মোবাইল নাম্বার ( ইংরেজি ){" "}
                      <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      id="mobile_number"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="মোবাইল নাম্বার"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="reg_blood_group"
                      className="block mb-3 text-sm text-black"
                    >
                      রক্তের গ্রুপঃ <span className="text-red-500">*</span>
                    </label>
                    <select
                      type="text"
                      id="reg_blood_group"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5 "
                      required
                    >
                      {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                        (opt) => (
                          <option key={opt} value={opt} className="bg-white ">
                            {opt}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="last_donate"
                      className="block mb-3 text-sm text-black"
                    >
                      সর্বশেষ রক্ত দানের তারিখ
                      <span className="text-red-500"> *</span>
                    </label>
                    <div className="grid grid-cols-3 gap-1">
                      <select
                        type="text"
                        id="date"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5 "
                        required
                      >
                        {[...new Array(31)].map((opt, i) => (
                          <option key={i} value={i + 1} className="bg-white ">
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <select
                        type="text"
                        id="month"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5 "
                        required
                      >
                        {[
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December",
                        ].map((opt, i) => (
                          <option key={opt} value={opt} className="bg-white ">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <select
                        type="text"
                        id="year"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5 "
                        required
                      >
                        {["2017", "2018", "2019", "2020", "2022", "2023"].map(
                          (opt, i) => (
                            <option key={i} value={opt} className="bg-white ">
                              {opt}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 text-black mb-6">
                    <div className="flex items-center ">
                      <input
                        id="gender1"
                        type="radio"
                        value="male"
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                      />
                      <label
                        htmlFor="gender1"
                        className="ml-2 text-sm font-medium  "
                      >
                        পুরুষ
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="gender2"
                        type="radio"
                        value="female"
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                      />
                      <label
                        htmlFor="gender2"
                        className="ml-2 text-sm font-medium  "
                      >
                        নারী
                      </label>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-red-500">
                      নারী ডোনারদের ফোন নম্বর গোপন রাখা হবে।
                    </p>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block mb-3 text-sm text-black"
                    >
                      পাসওয়ার্ড
                      <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="পাসওয়ার্ড"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="confirm_password"
                      className="block mb-3 text-sm text-black"
                    >
                      কনফার্ম পাসওয়ার্ড
                      <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      id="confirm_password"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="কনফার্ম পাসওয়ার্ড"
                      required
                    />
                  </div>
                  <button className="px-[44px] py-[9px] bg-black text-white hover:bg-red-600 duration-1000 font-[700]">
                    রেজিস্ট্রেশন
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thalassemia;

const Check = () => {
  return (
    <svg
      width={20}
      height={20}
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
};
