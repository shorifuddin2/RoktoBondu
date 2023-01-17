import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form className="login shadow-xl lg:w-1/2 md:w-full mt-5 mx-10" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-4xl text-center font-bold py-4 bg-red-600 text-white">লগইন করুন</h1>
      {errors.number && <p className='bg-red-300 text-black px-3 py-2 mx-10 mt-5 mb-2 rounded'>{errors.number?.message}</p>}
      {errors.password && <p className='bg-red-300 text-black px-3 py-2 mx-10 mt-5 rounded'>{errors.password?.message}</p>}

      <div className="flex flex-col text-black px-10 py-5">
        <label>মোবাইল নাম্বার <span className="text-red-600 text-[20px]">*</span></label>
        <input type="text" placeholder="মোবাইল নাম্বার" className="input border-slate-400 rounded h-2/5 w-full my-3 py-2"
          {...register("number", {
            required: "আপনার মোবাইল নাম্বারটি ভুল",
            minLength: { value: 11, message: "আপনার মোবাইল নাম্বারটি ভুল" },
            maxLength: { value: 11, message: "আপনার মোবাইল নাম্বারটি ভুল" }
          })}
        />

        <label>পাসওয়ার্ড <span className="text-red-600 text-[20px]">*</span></label>
        <input type="password" placeholder="পাসওয়ার্ড" className="input border-slate-400 rounded h-2/5 w-full my-3 py-2"
          {...register("password", {
            required: "আপনার পাসওয়ার্ডটি ভুল",
            minLength: { value: 6, message: "আপনার পাসওয়ার্ডটি ভুল" }
          })}
        />

        <div className="flex justify-between items-center">
          <a href="reset-password" className="text-red-600 font-semibold">Forget Password?</a>
          <input className='btn px-12 bg-black text-white hover:bg-red-600 delay-300 ease-out' value="লগইন করুন" type="submit" />
        </div>
      </div>
    </form >
  );
}

export default Login;