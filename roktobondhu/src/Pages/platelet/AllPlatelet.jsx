import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import usePlatelet from "../../hooks/usePlatelet";
import Navbar from "../Navbar/Navbar";

const AllPlatelet = ({ selectedCus }) => {
  const [platelets] = usePlatelet();

  return (
    <>
      <Navbar />
      <div className="lg:mx-28 md:mx-16 sm:mx-24 xs:mx-5 mt-16">
        <h1 className="text-base-100 text-center mb-24">
          <span className="bg-primary lg:px-10 md:px-5 sm:px-3 py-2 rounded-full lg:text-xl md:text-xl sm:text-sm font-bold">
            {" "}
            A+ প্লাটিলেট রক্তবন্ধুর তালিকা
          </span>
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-black gap-5 mb-5">
          {platelets.map((bloodCustomer, index) => {
            return (
              <div key={index} className=" text-center">
                <span className="rounded-full bg-primary px-4 py-4 text-xl font-bold text-base-100">
                  {bloodCustomer.bloodGroup}
                </span>
                <div className="border-2 border-primary">
                  <div className=" p-5">
                    <h1>{bloodCustomer.name}</h1>
                    <p>ঠিকানা:{bloodCustomer.address}</p>
                    <p>নিজ জেলাঃ{bloodCustomer.district}</p>
                    <p>যোগাযোগ:{bloodCustomer.contact}</p>
                    <h1 className="bg-primary text-base-100 py-1">
                      সর্বশেষ রক্তদান
                    </h1>
                    <p>{bloodCustomer.lastBloodDonate}</p>
                    <p>{bloodCustomer.totalDays}দিন আগে...</p>
                  </div>
                  <div className="bg-primary flex justify-between text-base-100">
                    <div className="flex bg-primary items-center px-5 py-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-telephone-fill w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <button className=" ">কল করুন</button>
                      </div>
                    </div>
                    <div
                      className="flex items-center px-5 py-2"
                      style={{ backgroundColor: "#6f42c1" }}
                    >
                      <div>
                        <EnvelopeIcon className="w-5 h-5" />
                      </div>
                      <div className="ml-3">
                        <button className=" ">মেসেজ করুন</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllPlatelet;
