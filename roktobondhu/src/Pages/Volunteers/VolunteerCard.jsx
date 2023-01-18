import React from 'react';
import { FaFacebookSquare, FaPhoneSquareAlt } from "react-icons/fa";

const VolunteerCard = ({ volunteerData }) => {

    const { name, address, image, role } = volunteerData || {};

    return (
        <div className='px-5 py-4 rounded-[30px] volunteerCardBoxShadow'>
            <div className='flex justify-center'>
                <img className='w-[200px] h-[200px] object-cover rounded-full imageShawdow' src={image} alt="" />
            </div>
            <div className='text-center py-5 text-[#212529]'>
                <h3 className='text-lg font-bold'>{name}</h3>
                <h4 className='text-base font-bold mt-1.5'>{role}</h4>
                <h5 className='text-sm mt-2.5 mb-1'>{address}</h5>
            </div>
            <div className='flex justify-evenly text-[#212529]'>
                <div className='flex items-center gap-1 pr-3 border-r-2 border-gray-500  hover:text-primary cursor-pointer'>
                    <FaFacebookSquare className='text-xl text-black hover:text-primary' />
                    <span>Message</span>
                </div>
                <div className='flex items-center gap-1 hover:text-primary cursor-pointer'>
                    <FaPhoneSquareAlt className='text-xl text-black hover:text-primary' />
                    <span>Phone</span>
                </div>
            </div>
        </div>
    );
};

export default VolunteerCard;