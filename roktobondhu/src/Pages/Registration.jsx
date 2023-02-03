import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import "./Registration.css";

const Registration = () => {
  const { register, watch, handleSubmit, reset, formState: { errors } } = useForm();
  const [districts, setDistricts] = useState([]);
  const [day, setDay] = useState([]);
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);

  useEffect(() => {
    fetch('districts.json')
      .then(res => res.json())
      .then(data => setDistricts(data))
  }, [])

  useEffect(() => {
    fetch('day.json')
      .then(res => res.json())
      .then(data => setDay(data))
  }, [])

  useEffect(() => {
    fetch('month.json')
      .then(res => res.json())
      .then(data => setMonth(data))
  }, [])

  useEffect(() => {
    fetch('year.json')
      .then(res => res.json())
      .then(data => setYear(data))
  }, [])

  const onSubmit = async (data) => {
    const { donation_day, donation_month, donation_year, ...existPropertey } = data;
    const lastDonationDate = `${donation_day}-${donation_month}-${donation_year}`
    const registration = { ...existPropertey, lastDonationDate }

    fetch('http://localhost:4000/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registration),
    })
      .then((response) => response.json())
      .then(data => {
        if (data?.token) {
          localStorage.setItem("accessToken", data?.token);
          reset();
        }
      })
  };

  return (
    <div>
      <Navbar />
      <form className="registration shadow-xl lg:w-1/2 md:w-full mt-6 mb-24 mx-10" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl text-center font-bold py-4 bg-red-600 text-white">রেজিস্ট্রেশন ফরম</h1>

        {errors.password && <p className='bg-red-300 text-black px-3 py-2 mx-10 mt-5 rounded'>{errors.password?.message}</p>}
        {errors.confirm_password && <p className='bg-red-300 text-black px-3 py-2 mx-10 mt-5 rounded'>{errors.confirm_password?.message}</p>}

        <div className="flex flex-col text-black px-10 py-5">
          <label>নাম <span className="text-red-600 text-[20px]">*</span></label>
          <input type="text" placeholder="নাম" className="input border-slate-400 rounded h-2/5 w-full my-3 py-2"
            {...register("name")} required
          />

          <fieldset className="border-2 border-dashed border-black my-3">
            <legend className="ml-4">স্থায়ী ঠিকানা</legend>

            <div className="px-4 py-3">
              <label>জেলা <span className="text-red-600 text-[20px]">*</span></label>
              <select {...register("permanent_district")} className="input border-slate-400 rounded h-2/5 w-full my-3 py-2">
                <option defaultValue="কুমিল্লা" value="কুমিল্লা">কুমিল্লা</option>
                {
                  districts.map(option => <option key={option.id} value={option.bn_name}>{option.bn_name}</option>)
                }
              </select>

              <label>ঠিকানা <span className="text-red-600 text-[20px]">*</span></label>
              <input type="text" placeholder="ঠিকানা" className="input border-slate-400 rounded h-2/5 w-full my-3 py-2"
                {...register("permanent_address")} required
              />
            </div>
          </fieldset>

          <fieldset className="border-2 border-dashed border-black my-3">
            <legend className="ml-4">বর্তমান ঠিকানা</legend>

            <div className="px-4 py-3">
              <label>জেলা <span className="text-red-600 text-[20px]">*</span></label>
              <select defaultValue="null" {...register("present_district")} className="input border-slate-400 rounded h-2/5 w-full my-3 py-2">
                <option defaultValue="কুমিল্লা" value="কুমিল্লা">কুমিল্লা</option>
                {
                  districts.map(option => <option key={option.id} value={option.bn_name}>{option.bn_name}</option>)
                }
              </select>

              <label>ঠিকানা <span className="text-red-600 text-[20px]">*</span></label>
              <input type="text" placeholder="ঠিকানা" className="input border-slate-400 rounded h-2/5 w-full my-3 py-2"
                {...register("present_address")} required
              />
            </div>
          </fieldset>

          <label className="mt-3">ইমেইল ঠিকানা (যদি থাকে)</label>
          <input type="email" placeholder="ইমেইল" className="input border-slate-400 rounded h-2/5 w-full my-3 py-2"
            {...register("email")} required
          />

          <label className="mt-3">মোবাইল নাম্বার ( ইংরেজি ) <span className="text-red-600 text-[20px]">*</span></label>
          <input type="text" placeholder="মোবাইল নাম্বার" className="input border-slate-400 rounded h-2/5 w-full my-3 py-2"
            {...register("number", {
              required: "আপনার মোবাইল নাম্বারটি ভুল",
              minLength: { value: 11, message: "আপনার মোবাইল নাম্বারটি ভুল" },
              maxLength: { value: 11, message: "আপনার মোবাইল নাম্বারটি ভুল" }
            })}
          />

          <label className="mt-3">রক্তের গ্রুপ <span className="text-red-600 text-[20px]">*</span></label>
          <select defaultValue="null" {...register("blood_group")} className="input border-slate-400 rounded h-2/5 w-full my-3 py-2">
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <label className="mt-3">সর্বশেষ রক্ত দানের তারিখ <span className="text-red-600 text-[20px]">*</span></label>
          <div className="flex">
            <select defaultValue="null" {...register("donation_day")} className="input border-slate-400 rounded h-2/5 w-full my-3 py-2">
              <option defaultValue="1" value="1">1</option>
              {
                day.map(option => <option key={option.id} value={option.day}>{option.day}</option>)
              }
            </select>
            <select defaultValue="null" {...register("donation_month")} className="input border-slate-400 rounded h-2/5 w-full my-3 py-2">
              <option defaultValue="January" value="January">January</option>
              {
                month.map(option => <option key={option.id} value={option.month}>{option.month}</option>)
              }
            </select>
            <select defaultValue="null" {...register("donation_year")} className="input border-slate-400 rounded h-2/5 w-full my-3 py-2">
              <option defaultValue="2017" value="2017">2017</option>
              {
                year.map(option => <option key={option.id} value={option.year}>{option.year}</option>)
              }
            </select>
          </div>

          <div className="flex my-3">
            <div className="flex justify-center">
              <input name='role' {...register("role", { required: true })} className="radio radio-secondary" type="radio" value="পুরুষ" checked />
              <label className="pl-2">পুরুষ</label>
            </div>
            <div className="flex justify-center ml-[35%]">
              <input name='role' {...register("role", { required: true })} className="radio radio-secondary" type="radio" value="নারী" />
              <label className="pl-2">নারী</label>
            </div>
          </div>

          <p className="my-3 text-red-600">নারী ডোনারদের ফোন নম্বর গোপন রাখা হবে।</p>

          <label className="mt-3">জন্ম তারিখঃ <span className="text-red-600 text-[20px]">*</span></label>
          <input type="date" placeholder="mm/dd/yyyy" className="input border-slate-400 rounded h-2/5 w-full my-3 py-2"
            {...register("birth_date")}
          />

          <label className="mt-3">পাসওয়ার্ড <span className="text-red-600 text-[20px]">*</span></label>
          <input type="password" placeholder="পাসওয়ার্ড" className="input border-slate-400 rounded h-2/5 w-full my-3 py-2"
            {...register("password", {
              required: "আপনার পাসওয়ার্ডটি ভুল",
              minLength: { value: 6, message: "আপনার পাসওয়ার্ডটি ভুল" }
            })}
          />

          <label className="mt-3">কনফার্ম পাসওয়ার্ড <span className="text-red-600 text-[20px]">*</span></label>
          <input type="password" placeholder="কনফার্ম পাসওয়ার্ড" className="input border-slate-400 rounded h-2/5 w-full my-3 py-2"
            {...register("confirm_password", {
              validate: (value) => {
                if (watch('password') !== value) {
                  return "Your passwords do no match";
                }
              }
            })}
          />

          <input className='mt-3 w-1/4 btn px-14 bg-black text-white hover:bg-red-600 delay-300 ease-out' value="রেজিস্ট্রেশন" type="submit" />

          <p className="text-red-500 border-b-2 border-red-500 border-dotted my-4 pb-2 w-[40%]">পাসওয়ার্ড ভুলে গেলে যোগাযোগ করুন</p>

          <p className="text-justify mb-3">
            ১.রোগীর ব্যাপারে বিস্তারিত জেনে নিশ্চিত হয়ে রক্ত দিন
          </p>

          <p className="text-justify mb-3">
            ২.প্রতিবার রক্তদানের পর করে তারিখ পরিবর্তন করে দিন বা যোগাযোগ করুন
          </p>

          <p className="text-justify mb-3">
            ৩.রোগি দেখে রক্তদান করুন। অবশ্যই রোগির নিকট উপস্থিত রোগির আত্মীয়ের সাথে কথা বলে জানিয়ে দিন যে আপনি স্বেচ্ছায় এবং বিনামূল্যে রক্তদান করছেন। যাতে দালাল, আত্মীয় সেজে কিংবা তৃতীয় পক্ষের কেউ দুর্নীতি করতে না পারে।
          </p>

          <p className="text-justify mb-3">
            ৪.আপনার সংগঠনের নাম দেখতে চাইলে আমাদের সাথে যোগাযোগ করুন
          </p>
        </div>
      </form >
      <Footer />
    </div>
  );
};

export default Registration;