import React from 'react';
import './DetailsPlateletModal.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

const DetailsPlateletModal = () => {
    return (
        <div className=''>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal overflow-y-auto">
                <div className="modal-box lg:max-w-3xl md:max-w-3xl sm:max-w-sm relative lg:mt-8 md:mt-8 sm:mt-24 max-h-max m-auto">
                    <label htmlFor="my-modal-3" className=" absolute right-4 font-bold text-primary cursor-pointer top-2 text-xl"><XMarkIcon className='w-6 h-6'/></label>
                    <h5 className="text-xl p-5">একটু জেনে নিন...</h5>
                     
                     <hr className=''/>
                     
                    
                       <div className='p-5'>
                       <p className='mt-4'>রক্তে অনেক উপাদান থাকে। প্লাটিলেট রক্তের একটা উপাদান মাত্র।
                        প্লাটিলেট বা অণুচক্রিকা রক্তের একটি গুরুত্বপূর্ণ কণিকা, যা রক্ত জমাট বাঁধার জন্য জরুরি। রক্তে স্বাভাবিক প্লাটিলেটের সংখ্যা হলো প্রতি ঘন মিমি রক্তে দেড় লাখ থেকে সাড়ে চার লাখ। নানা কারণেই এর সংখ্যা কমে আসতে পারে, আর তখন রক্তক্ষরণের ঝুঁকি যায় বেড়ে। যেমন প্লাটিলেট এক লাখের কম হলে অস্ত্রোপচার না করারই সিদ্ধান্ত নেওয়া হয়। কেননা কাটা-ছেঁড়া হলে রক্তক্ষরণ বন্ধ করা কঠিন হয়। প্লাটিলেট ২০ হাজারের নিচে নেমে এলে কোনো আঘাত ছাড়াই রক্তক্ষরণ হতে পারে, যেমন নাক বা দাঁতের মাড়িতে রক্তপাত, মলের সঙ্গে রক্ত ইত্যাদি। প্লাটিলেট ১০ হাজারের নিচে চলে গেলে দেহের ভেতরের অঙ্গপ্রত্যঙ্গ যেমন অন্ত্র, মস্তিষ্ক, কিডনিতে রক্তক্ষরণ হতে পারে।</p>
                        <p className='mt-8'>সাধারনত ৪জন ডোনার থেকে ১ব্যাগ প্লাটিলেট করে, কিন্তু এখন উন্নত প্রযুক্তি কল্যাণে ১জন ডোনার থেকেই ১ব্যাগ প্লাটিলেট বের করা যায়। যে জন্য এফেরোসিস মেশিন বা প্লাটিলেট মেশিন দ্বারা এক জন ডোনারের কাছ থেকে ২৫০মিলির মতো ব্লাড নিয়ে মেশিনে প্রসেসিং করে প্লাটিলেট বের করে ব্লাডের বাকী অংশ টুকু আবার ডোনারের শরীরে পুশ ব্যাক করে দেয়। এই ভাবে ৬/৭বার করে। প্রতি ধাপে ১০-১৫মি সময় লাগে। মোট ১ ঘন্টা বা ১ ঘন্টা ১৫-২০মি সময় লাগে। (বিদ্রঃ মেশিন ভেদে সিস্টেম একটু আলাদা হয়)</p>
                        <p className='mt-8'>কিন্তু প্লাটিলেট দিলে ১০-১৫ দিন পর আবার সে প্লাটিলেট দিতে পারে, কারন অণুচক্রিকা ছাড়া অন্য কিছু নেয়া হয়না। আর অণুচক্রিকার জীবন কাল ৩দিন যা ২/৩ দিনেই শরীরে ব্যাক করে। আরও একটা ব্যাপার হল প্লাটিলেট ডোনার একাই ৪জন ডোনারের কাজ করছে। এতে বাকী ৩ জন ডোনার অন্য রোগী কে বাচাঁতে পারবে। ডেঙ্গুরোগের আক্রান্তদের, ক্যান্সারের রোগিদের শুধু প্লাটিলেট বেশি লাগে৷ তবে শুধু প্লাটিলেট এফেরেসিস মেশিন আছে এমন নির্দিষ্ট কিছু হাসপাতাল ছাড়া সবখানে দেয়া যায় না।</p>
                        <p className='mt-8'>(i) শুধু প্লাটিলেট দেয়ার ১৫-২০ দিন পর পুনরায় শুধু প্লাটিলেট কিংবা পুরো ব্যাগ রক্ত দিতে পারবেন।<br/>
                        (ii) একবার whole blood অর্থাৎ পুরো ব্যাগ (৪৫০ মি.লি) রক্ত দিলে, আবার ৪ মাস পর রক্ত দিতে পারবেন। এবং শুধু প্লাটিলেট দিতে হলেও এক্ষেত্রে ৪ মাস বা ১২০ দিনই  অপেক্ষা করতে হবে। অর্থাৎ <span className='text-primary'>একবার হোল ব্লাড দিলেই কমপক্ষে ১২০ দিন অপেক্ষা করতে হবে।</span><br/>
                        (iii) যদি শুধুই প্লাটিলেট দেন, তবে ১৫-২০ দিন বা ১ মাস পরপর দিতে পারবেন।<br/>
                        <span className='font-bold'>শুধু প্লাটিলেট দাতাদের আমরা মাসে একবার প্লাটিলেট দেয়ার পরামর্শ দিচ্ছি।</span></p>
                       </div>
                </div>
                </div>
        </div>
    );
};

export default DetailsPlateletModal;