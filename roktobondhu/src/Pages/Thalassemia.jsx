import React, { useState } from "react";
import { Link } from "react-router-dom";

const Thalassemia = () => {
  const [isRegister, setIsRegister] = useState(null);

  const handleClick = (state) => {
    setIsRegister(state);
  };
  // const [districts, setDistricts] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://github.com/fahimreza-dev/bangladesh-geojson/blob/master/bd-districts.json"
  //     );
  //     const json = await response.json();
  //     console.log(json);
  //     setDistricts(json.districts);
  //   }
  //   fetchData();
  // }, []);
  const districts = [
    {
      id: "1",
      division_id: "3",
      name: "Dhaka",
      bn_name: "ঢাকা",
      lat: "23.7115253",
      long: "90.4111451",
    },
    {
      id: "2",
      division_id: "3",
      name: "Faridpur",
      bn_name: "ফরিদপুর",
      lat: "23.6070822",
      long: "89.8429406",
    },

    {
      id: "3",
      division_id: "3",
      name: "Gazipur",
      bn_name: "গাজীপুর",
      lat: "24.0022858",
      long: "90.4264283",
    },

    {
      id: "4",
      division_id: "3",
      name: "Gopalganj",
      bn_name: "গোপালগঞ্জ",
      lat: "23.0050857",
      long: "89.8266059",
    },
    {
      id: "5",
      division_id: "8",
      name: "Jamalpur",
      bn_name: "জামালপুর",
      lat: "24.937533",
      long: "89.937775",
    },
    {
      id: "6",
      division_id: "3",
      name: "Kishoreganj",
      bn_name: "কিশোরগঞ্জ",
      lat: "24.444937",
      long: "90.776575",
    },
    {
      id: "7",
      division_id: "3",
      name: "Madaripur",
      bn_name: "মাদারীপুর",
      lat: "23.164102",
      long: "90.1896805",
    },
    {
      id: "8",
      division_id: "3",
      name: "Manikganj",
      bn_name: "মানিকগঞ্জ",
      lat: "23.8644",
      long: "90.0047",
    },
    {
      id: "9",
      division_id: "3",
      name: "Munshiganj",
      bn_name: "মুন্সিগঞ্জ",
      lat: "23.5422",
      long: "90.5305",
    },
    {
      id: "10",
      division_id: "8",
      name: "Mymensingh",
      bn_name: "ময়মনসিংহ",
      lat: "24.7471",
      long: "90.4203",
    },
    {
      id: "11",
      division_id: "3",
      name: "Narayanganj",
      bn_name: "নারায়াণগঞ্জ",
      lat: "23.63366",
      long: "90.496482",
    },
    {
      id: "12",
      division_id: "3",
      name: "Narsingdi",
      bn_name: "নরসিংদী",
      lat: "23.932233",
      long: "90.71541",
    },
    {
      id: "13",
      division_id: "8",
      name: "Netrokona",
      bn_name: "নেত্রকোণা",
      lat: "24.870955",
      long: "90.727887",
    },
    {
      id: "14",
      division_id: "3",
      name: "Rajbari",
      bn_name: "রাজবাড়ি",
      lat: "23.7574305",
      long: "89.6444665",
    },
    {
      id: "15",
      division_id: "3",
      name: "Shariatpur",
      bn_name: "শরীয়তপুর",
      lat: "23.2423",
      long: "90.4348",
    },
    {
      id: "16",
      division_id: "8",
      name: "Sherpur",
      bn_name: "শেরপুর",
      lat: "25.0204933",
      long: "90.0152966",
    },
    {
      id: "17",
      division_id: "3",
      name: "Tangail",
      bn_name: "টাঙ্গাইল",
      lat: "24.2513",
      long: "89.9167",
    },
    {
      id: "18",
      division_id: "5",
      name: "Bogura",
      bn_name: "বগুড়া",
      lat: "24.8465228",
      long: "89.377755",
    },
    {
      id: "19",
      division_id: "5",
      name: "Joypurhat",
      bn_name: "জয়পুরহাট",
      lat: "25.0968",
      long: "89.0227",
    },
    {
      id: "20",
      division_id: "5",
      name: "Naogaon",
      bn_name: "নওগাঁ",
      lat: "24.7936",
      long: "88.9318",
    },
    {
      id: "21",
      division_id: "5",
      name: "Natore",
      bn_name: "নাটোর",
      lat: "24.420556",
      long: "89.000282",
    },
    {
      id: "22",
      division_id: "5",
      name: "Nawabganj",
      bn_name: "নবাবগঞ্জ",
      lat: "24.5965034",
      long: "88.2775122",
    },
    {
      id: "23",
      division_id: "5",
      name: "Pabna",
      bn_name: "পাবনা",
      lat: "23.998524",
      long: "89.233645",
    },
    {
      id: "24",
      division_id: "5",
      name: "Rajshahi",
      bn_name: "রাজশাহী",
      lat: "24.3745",
      long: "88.6042",
    },
    {
      id: "25",
      division_id: "5",
      name: "Sirajgonj",
      bn_name: "সিরাজগঞ্জ",
      lat: "24.4533978",
      long: "89.7006815",
    },
    {
      id: "26",
      division_id: "6",
      name: "Dinajpur",
      bn_name: "দিনাজপুর",
      lat: "25.6217061",
      long: "88.6354504",
    },
    {
      id: "27",
      division_id: "6",
      name: "Gaibandha",
      bn_name: "গাইবান্ধা",
      lat: "25.328751",
      long: "89.528088",
    },
    {
      id: "28",
      division_id: "6",
      name: "Kurigram",
      bn_name: "কুড়িগ্রাম",
      lat: "25.805445",
      long: "89.636174",
    },
    {
      id: "29",
      division_id: "6",
      name: "Lalmonirhat",
      bn_name: "লালমনিরহাট",
      lat: "25.9923",
      long: "89.2847",
    },
    {
      id: "30",
      division_id: "6",
      name: "Nilphamari",
      bn_name: "নীলফামারী",
      lat: "25.931794",
      long: "88.856006",
    },
    {
      id: "31",
      division_id: "6",
      name: "Panchagarh",
      bn_name: "পঞ্চগড়",
      lat: "26.3411",
      long: "88.5541606",
    },
    {
      id: "32",
      division_id: "6",
      name: "Rangpur",
      bn_name: "রংপুর",
      lat: "25.7558096",
      long: "89.244462",
    },
    {
      id: "33",
      division_id: "6",
      name: "Thakurgaon",
      bn_name: "ঠাকুরগাঁও",
      lat: "26.0336945",
      long: "88.4616834",
    },
    {
      id: "34",
      division_id: "1",
      name: "Barguna",
      bn_name: "বরগুনা",
      lat: "22.0953",
      long: "90.1121",
    },
    {
      id: "35",
      division_id: "1",
      name: "Barishal",
      bn_name: "বরিশাল",
      lat: "22.7010",
      long: "90.3535",
    },
    {
      id: "36",
      division_id: "1",
      name: "Bhola",
      bn_name: "ভোলা",
      lat: "22.685923",
      long: "90.648179",
    },
    {
      id: "37",
      division_id: "1",
      name: "Jhalokati",
      bn_name: "ঝালকাঠি",
      lat: "22.6406",
      long: "90.1987",
    },
    {
      id: "38",
      division_id: "1",
      name: "Patuakhali",
      bn_name: "পটুয়াখালী",
      lat: "22.3596316",
      long: "90.3298712",
    },
    {
      id: "39",
      division_id: "1",
      name: "Pirojpur",
      bn_name: "পিরোজপুর",
      lat: "22.5841",
      long: "89.9720",
    },
    {
      id: "40",
      division_id: "2",
      name: "Bandarban",
      bn_name: "বান্দরবান",
      lat: "22.1953275",
      long: "92.2183773",
    },
    {
      id: "41",
      division_id: "2",
      name: "Brahmanbaria",
      bn_name: "ব্রাহ্মণবাড়িয়া",
      lat: "23.9570904",
      long: "91.1119286",
    },
    {
      id: "42",
      division_id: "2",
      name: "Chandpur",
      bn_name: "চাঁদপুর",
      lat: "23.2332585",
      long: "90.6712912",
    },
    {
      id: "43",
      division_id: "2",
      name: "Chattogram",
      bn_name: "চট্টগ্রাম",
      lat: "22.335109",
      long: "91.834073",
    },
    {
      id: "44",
      division_id: "2",
      name: "Cumilla",
      bn_name: "কুমিল্লা",
      lat: "23.4682747",
      long: "91.1788135",
    },
    {
      id: "45",
      division_id: "2",
      name: "Cox's Bazar",
      bn_name: "কক্স বাজার",
      lat: "21.4272",
      long: "92.0058",
    },
    {
      id: "46",
      division_id: "2",
      name: "Feni",
      bn_name: "ফেনী",
      lat: "23.0159",
      long: "91.3976",
    },
    {
      id: "47",
      division_id: "2",
      name: "Khagrachari",
      bn_name: "খাগড়াছড়ি",
      lat: "23.119285",
      long: "91.984663",
    },
    {
      id: "48",
      division_id: "2",
      name: "Lakshmipur",
      bn_name: "লক্ষ্মীপুর",
      lat: "22.942477",
      long: "90.841184",
    },
    {
      id: "49",
      division_id: "2",
      name: "Noakhali",
      bn_name: "নোয়াখালী",
      lat: "22.869563",
      long: "91.099398",
    },
    {
      id: "50",
      division_id: "2",
      name: "Rangamati",
      bn_name: "রাঙ্গামাটি",
      lat: "22.7324",
      long: "92.2985",
    },
    {
      id: "51",
      division_id: "7",
      name: "Habiganj",
      bn_name: "হবিগঞ্জ",
      lat: "24.374945",
      long: "91.41553",
    },
    {
      id: "52",
      division_id: "7",
      name: "Maulvibazar",
      bn_name: "মৌলভীবাজার",
      lat: "24.482934",
      long: "91.777417",
    },
    {
      id: "53",
      division_id: "7",
      name: "Sunamganj",
      bn_name: "সুনামগঞ্জ",
      lat: "25.0658042",
      long: "91.3950115",
    },
    {
      id: "54",
      division_id: "7",
      name: "Sylhet",
      bn_name: "সিলেট",
      lat: "24.8897956",
      long: "91.8697894",
    },
    {
      id: "55",
      division_id: "4",
      name: "Bagerhat",
      bn_name: "বাগেরহাট",
      lat: "22.651568",
      long: "89.785938",
    },
    {
      id: "56",
      division_id: "4",
      name: "Chuadanga",
      bn_name: "চুয়াডাঙ্গা",
      lat: "23.6401961",
      long: "88.841841",
    },
    {
      id: "57",
      division_id: "4",
      name: "Jashore",
      bn_name: "যশোর",
      lat: "23.16643",
      long: "89.2081126",
    },
    {
      id: "58",
      division_id: "4",
      name: "Jhenaidah",
      bn_name: "ঝিনাইদহ",
      lat: "23.5448176",
      long: "89.1539213",
    },
    {
      id: "59",
      division_id: "4",
      name: "Khulna",
      bn_name: "খুলনা",
      lat: "22.815774",
      long: "89.568679",
    },
    {
      id: "60",
      division_id: "4",
      name: "Kushtia",
      bn_name: "কুষ্টিয়া",
      lat: "23.901258",
      long: "89.120482",
    },
    {
      id: "61",
      division_id: "4",
      name: "Magura",
      bn_name: "মাগুরা",
      lat: "23.487337",
      long: "89.419956",
    },
    {
      id: "62",
      division_id: "4",
      name: "Meherpur",
      bn_name: "মেহেরপুর",
      lat: "23.762213",
      long: "88.631821",
    },
    {
      id: "63",
      division_id: "4",
      name: "Narail",
      bn_name: "নড়াইল",
      lat: "23.172534",
      long: "89.512672",
    },
    {
      id: "64",
      division_id: "4",
      name: "Satkhira",
      bn_name: "সাতক্ষীরা",
      lat: "22.7185",
      long: "89.0705",
    },
  ];

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
                      htmlFor="submit_mobile"
                      className="block mb-3 text-sm text-black"
                    >
                      রক্তবন্ধুতে রেজিস্ট্রেশনকৃত মোবাইল নাম্বারঃ
                      <span className="text-red-500"> *</span>
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
            )}
            {isRegister === "no" && (
              <div>
                <form>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-3 text-sm text-black"
                    >
                      নামঃ <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="নাম"
                    />
                  </div>
                  <fieldset className="border-dashed border-2 border-gray-900 p-3 text-black">
                    <legend className="text-sm px-3">স্থায়ী ঠিকানা</legend>
                    <div className="mb-6">
                      <label
                        htmlFor="parmanent_address"
                        className="block mb-3 text-sm text-black"
                      >
                        জেলাঃ <span className="text-red-500">*</span>
                      </label>
                      <select
                        type="text"
                        id="parmanent_address"
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
                        htmlFor="submit_name"
                        className="block mb-3 text-sm text-black"
                      >
                        ঠিকানা <span className="text-red-500"> *</span>
                      </label>
                      <input
                        type="text"
                        id="submit_name"
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
                      htmlFor="submit_mobile"
                      className="block mb-3 text-sm text-black"
                    >
                      মোবাইল নাম্বার ( ইংরেজি ){" "}
                      <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      id="submit_mobile"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="মোবাইল নাম্বার"
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
                        id="gender"
                        type="radio"
                        value="male"
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                      />
                      <label
                        for="gender"
                        className="ml-2 text-sm font-medium  "
                      >
                        পুরুষ
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        checked
                        id="gender"
                        type="radio"
                        value="female"
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                      />
                      <label
                        for="gender"
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
                      type="confirm_password"
                      id="submit_mobile"
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
