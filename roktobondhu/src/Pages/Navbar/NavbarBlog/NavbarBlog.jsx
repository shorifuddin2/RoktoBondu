import React from "react";
import { Link } from "react-router-dom";
import LogoBlog from "../../../Image/index.png";
import "./NavbarBlog.css";

const NavbarBlog = () => {
  return (
    <div>
      <div className="navbar  bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 mx-20 shadow bg-base-100 rounded-box w-100 text-red-500 font-bold"
            >
              <li className="blog m-2 "><Link className="text-center mx-auto" to="/blog">ব্লগ</Link></li>
              <li className="hover px-5 py-2"><Link className="text-center mx-auto" to="/">রক্তবন্ধু খুঁজুন</Link></li>
              <li className="hover px-5 py-2"><Link className="text-center mx-auto" to="/blogs/ক্যাম্পেইন-নিউজ">ক্যাম্পেইন নিউজ</Link></li>
              <li className="hover px-5 py-2"><Link className="text-center mx-auto" to="/blogs/প্রথম-রক্তদান">প্রথম রক্তদান </Link></li>
              <li className="hover px-5 py-2"><Link className="text-center mx-auto" to="/blogs/রক্তদানের-অভিজ্ঞতা">রক্তদানের অভিজ্ঞতা </Link></li>
              <li className="hover px-5 py-2"><Link className="text-center mx-auto" to="/blogs/রক্তদানের-গল্প">রক্তদানের গল্প</Link></li>
              <li className="hover px-5 py-2"><Link className="text-center mx-auto" to="/blogs/রক্তবন্ধু গ্যালারি">রক্তবন্ধু গ্যালারি</Link></li>
            </ul>
          </div>
          <Link to="/" className="">
            <img className="w-60 h-auto p-5 mx-20" src={LogoBlog} alt="Logo" />
          </Link>
        </div>
        <div className="text-sm navbar-end mx-20 w-full p-3  hidden lg:flex">
          <ul className=" menu menu-horizontal  text-red-500 font-bold">
            <li className="blog m-2">
              <Link to="/blog">ব্লগ</Link>
            </li>
            <li className="hover m-2">
              <Link to="/">রক্তবন্ধু খুঁজুন</Link>
            </li>
            <li className="hover m-2">
              <Link to="/blogs/ক্যাম্পেইন%20নিউজ">ক্যাম্পেইন নিউজ</Link>
            </li>
            <li className="hover m-2">
              <Link to="/blogs/প্রথম-রক্তদান">প্রথম রক্তদান</Link>
            </li>
            <li className="hover m-2">
              <Link to="/blogs/রক্তদানের-অভিজ্ঞতা">রক্তদানের অভিজ্ঞতা </Link>
            </li>
            <li className="hover m-2">
              <Link to="/blogs/রক্তদানের-গল্প">রক্তদানের গল্প</Link>
            </li>
            <li className="hover m-2">
              <Link to="/blogs/রক্তবন্ধু-গ্যালারি">রক্তবন্ধু গ্যালারি</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarBlog;
