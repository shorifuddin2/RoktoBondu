import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-500 text-base-content">

                    <div className='mx-auto font-bold'>
                        <span className="mx-auto text-white"><span className='text-red-500'>নোটিশঃ</span> রক্তবন্ধুর সাথে কাজ করতে চাইলে, রক্তবন্ধু সম্পর্কে জানতে, পাসওয়ার্ড ভুলে গেলে যোগাযোগ করুন <span className='text-red-500'>01716626487, 01778951824</span></span> 
                        <span className='mx-auto btn bg-red-500 hover:bg-red-600 text-white'>রক্তবন্ধু সম্পর্কে  বিস্তারিত জানতে ক্লিক করুন</span>
                    </div> 
                    
                    </footer> 
                    <footer className="footer px-10 py-4 border-t font-bold bg-gray-600 text-base-content border-base-300">
                    <div className="items-center grid-flow-col text-white text-bold-700">
                        <p>© 2018-2023 রক্তবন্ধু || All Right Reserved</p>
                    </div> 
                    <div className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4 text-white">
                                <p>Developed By <span className='text-red-500'>Coder IT Solution</span></p>
                        </div>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;