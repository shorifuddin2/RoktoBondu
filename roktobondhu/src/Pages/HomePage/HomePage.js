import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";

//importing font Awesome
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import data
import DistrictName from "../../assets/HomePage_data/homePage.json";

// images
import CardImg from "../../assets/images/HomePage_images/card.png";
import FbIcon from "../../assets/images/HomePage_images/fb_icon.jpg";
import PlayStoreIcon from "../../assets/images/HomePage_images/playStore_icon.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = {
      blood_group: e.target.blood_group.value,
      present_district: e.target.district.value,
    };
    navigate("/APlusBloodSearch", { state: search });
  };
  return (
    <div>
      <Navbar />
      <header className="h-[665.97px] lg:h-[581.78px] relative">
        <div className="header_img-div relative w-full h-full bg-cover">
          <span className="absolute top-0 left-0 bg-black/70 w-full h-full"></span>
        </div>
        <div className="header_search_sec absolute top-0">
          <div className="container p-5 pt-8">
            <div className="lg:flex lg:items-center lg:ml-14">
              {/* first-form-sec */}
              <div className="fisrt_sec lg:w-[570px] lg:mr-10">
                <h2 className="text-xl font-bold"> রক্তবন্ধু খুঁজুন .... </h2>
                <hr className="w-full my-2 mt-4" />
                <form onSubmit={handleSearch}>
                  <div className="form-group">
                    <div className="select_grouph_area">
                      <select
                        id="blood_group"
                        name="blood_group"
                        className="text-black w-[282px] lg:w-full py-2 my-2 rounded-sm pl-2"
                      >
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div>
                      <select
                        id="district"
                        name="district"
                        className="text-black w-[282px] lg:w-full py-2 my-2 rounded-sm pl-2"
                      >
                        {DistrictName.map((dt) => (
                          <option
                            value={dt.district}
                            key={dt.id}
                            className="text-[#ff0000] cursor-pointer"
                          >
                            {" "}
                            {dt.district}{" "}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button className="bg-[#ED0404] hover:bg-black  py-2 px-11 border border-solid border-[1px] border-white rounded-3xl mt-3 font-bold transition duration-300 ease-in">
                      <FontAwesomeIcon icon={faMagnifyingGlass} /> খুঁজুন
                    </button>
                  </div>
                </form>
              </div>
              {/* second-form-sec */}
              <div className="second-sec mt-16 lg:mt-0 lg:w-[570px]">
                <h2 className="text-xl font-bold">
                  প্লাটিলেট - রক্তবন্ধু খুঁজুন ....
                </h2>
                <hr className="w-full my-2 mt-4" />
                <form action="">
                  <div className="form-group">
                    <div className="select_grouph_area">
                      <select
                        id="blood_group"
                        className="text-black w-[282px] lg:w-full py-2 my-2 rounded-sm pl-2"
                      >
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div>
                      <select
                        id="district"
                        className="text-black w-[282px] lg:w-full py-2 my-2 rounded-sm pl-2"
                      >
                        {DistrictName.map((dt) => (
                          <option
                            key={dt.id}
                            className="text-[#ff0000] cursor-pointer"
                          >
                            {" "}
                            {dt.district}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Link to="/all-platelet-search">
                      <button className="bg-[#ED0404] hover:bg-black py-2 px-11 border border-solid border-[1px] border-white rounded-3xl mt-3 font-bold transition duration-300 ease-in">
                        <FontAwesomeIcon icon={faMagnifyingGlass} /> খুঁজুন
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* section-2 (after header part)*/}
      <section className="container pl-1  lg:pl-0">
        <div className="pt-20 pl-10 lg:pt-28 lg:ml-[35%]">
          <Link to="/Registration">
            <button className="bg-[#ED0404] hover:bg-[#000] py-3 px-14  -ml-[3%]  lg:ml-0 lg:py-4 lg:px-24 rounded-3xl lg:rounded-full transition duration-300 ease-in">
              রক্তবন্ধু হতে রেজিস্ট্রেশন করুন
            </button>
          </Link>
        </div>
        <div className="mt-7 ml-3 lg:ml-[40.5%]">
          <p className="text-black inline mr-4 lg:mr-2">
            প্লাটিলেট ডোনার হতে চাইলে{" "}
          </p>
          <Link to="/platelet">
            <button className="bg-[#28A745] text-white  py-1 lg:py-2 px-2 lg:px-3 rounded-3xl lg:rounded-full hover:bg-[#218838] transition duration-200 ease-in">
              রেজিস্ট্রেশন করুন
            </button>
          </Link>
        </div>
        <div className="pl-2 mt-28 lg:flex container lg:ml-[5%] lg:pl-0 lg:items-start">
          <div className="lg:mr-16 lg:pl-14 lg:w-[500px]">
            <h1 className=" text-red-500 text-3xl font-semibold pb-4 border-b-2 lg:border-b-[3px] border-dotted border-red-500 w-full mb-3">
              রক্তবন্ধু ব্লাড কার্ড{" "}
            </h1>
            <p className="text-black">এখনি ডাউনলোড করে ফেলুন আপনার কার্ডটি </p>
            <Link to="/Card">
              <button className="bg-[#28A745] py-2 px-8 border border-solid border-[1px] border-white rounded-3xl mt-3 font-bold hover:bg-[#218838] transition duration-200 ease-in">
                কার্ড তৈরি করুন
              </button>
            </Link>
            <p className="text-black mt-10">কিভাবে কার্ড তৈরি করব?</p>
            <a href="#">
              {" "}
              <a
                href="https://www.youtube.com/watch?v=3KCCNraVjYM&feature=youtu.be&ab_channel=AshikurRahman"
                target="blank"
              >
                <button className="bg-[#DC3545] py-2 px-8 border border-solid border-[1px] border-white rounded-3xl mt-3 font-bold hover:bg-[#c82333] transition duration-200 ease-in">
                  {" "}
                  ভিডিও টি দেখুন{" "}
                </button>{" "}
              </a>
            </a>
          </div>
          <img
            src={CardImg}
            alt=""
            className="w-[93.5%] lg:w-[auto] ml-[1.5%] mt-6 lg:ml-[2%]"
          />
        </div>
      </section>
      {/* section-last */}
      <section className="bg-[#ED0404] mt-7 ">
        <div className="pl-32 py-10 lg:ml-[22%]  lg:flex lg:items-center lg:gap-8">
          <div className="bg-[#3B5997] w-1/2 my-5 py-1 px-2 lg:pl-0 lg:p-0  lg:w-[215px] lg:h-[144px] border-[1px] border-solid border-white">
            <img
              src={FbIcon}
              alt=""
              className="w-full lg:w-2/3 my-5 lg:mt-12 lg:ml-9"
            />
          </div>
          <div className="bg-[#3B5997] w-1/2 py-5 px-2 lg:pl-0 lg:p-0 lg:w-[215px] lg:h-[144px] border-[1px] border-solid border-white">
            <img
              src={PlayStoreIcon}
              alt=""
              className="w-full lg:w-2/3 lg:mt-12 lg:ml-9"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
