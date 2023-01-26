import React, { useEffect } from 'react';
import data from './roktodanExperience.json';
import Card from './Card';
import NavbarBlog from '../../../Pages/Navbar/NavbarBlog/NavbarBlog';
import Footer from '../../../Pages/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const RoktodanExpreience = () => {
    const navigate = useNavigate()
    // useEffect(() =>{
    //     fetch('roktodanExperience.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])
    return (
        <div>
            <NavbarBlog></NavbarBlog>
            <section className='max-w-[1140px] xl:mx-auto mx-3 text-black py-[80px]'>
                <div className='my-[50px]'>
                    <h2 className='text-3xl font-bold relative after:absolute after:bg-red-500 after:w-[100px] after:h-1 after:left-0 after:bottom-[-30px]'>পোস্ট সমূহ</h2>
                </div>
                <div className='flex flex-wrap justify-center gap-x-8 mt-12 flex-wrap justify-between'>
                    {data.slice(0, 9).map((d) => <Card d={d} key={d._id}></Card>)}
                </div>
                <div className='flex justify-center gap-x-1 mt-[50px]'>
                    <button className='border-2 border-[#c1c1c1] h-9 w-9 text-center transition-all duration-300 ease-in inline-height hover:bg-[#ED0404] hover:text-white hover:border-[#ED0404]'>1</button>
                    <button className='border-2 border-[#c1c1c1] h-9 w-9 text-center transition-all duration-300 ease-in inline-height hover:bg-[#ED0404] hover:text-white hover:border-[#ED0404]'>2</button>
                    <button className='border-2 border-[#c1c1c1] h-9 w-9 text-center transition-all duration-300 ease-in inline-height hover:bg-[#ED0404] hover:text-white hover:border-[#ED0404]'>3</button>
                    <button className='border-2 border-[#c1c1c1] h-9 w-9 text-center transition-all duration-300 ease-in inline-height hover:bg-[#ED0404] hover:text-white hover:border-[#ED0404]'>4</button>
                    <button className='border-2 border-[#c1c1c1] h-9 w-9 text-center transition-all duration-300 ease-in inline-height hover:bg-[#ED0404] hover:text-white hover:border-[#ED0404]'>5</button>
                    <button className='border-2 border-[#c1c1c1] h-9 w-9 text-center transition-all duration-300 ease-in inline-height font-bold hover:bg-[#ED0404] hover:text-white hover:border-[#ED0404]'>&gt;</button>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default RoktodanExpreience;