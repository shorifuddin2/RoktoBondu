import React from 'react';
import { useNavigate } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';

const Campaign = ({ campaign }) => {
    const navigate = useNavigate();
    const { title, author, date, desc, id, img } = campaign;
    return (
        <div>
            <div className=" bg-white shadow-lg rounded-lg h-[500px] relative">

                <img src={img} className="w-full h-[200px] rounded-t-lg" alt="" />

                <div className="p-8">
                    <h2 className=" text-[18px] font-bold text-[#606060]">{title.slice(0,50)}</h2>
                    <h5 className="text-[14px] mt-2">
                        <span>{author}</span> | <span>{date}</span>
                    </h5>
                    <p className=" text-[#212529] leading-6 text-[14px] mt-3">{desc.slice(0, 130)}</p>
                </div>

                <button onClick={() => navigate(`/blogs/campaign/${id}`)} className="border text-lg font-semibold p-2 mb-3
            hover:bg-black rounded-full py-2 text-white px-6 mx-8 bg-red-600 absolute bottom-3"
                >
                    বিস্তারিত দেখুন...
                </button>

            </div>

        </div>

    );
};

export default Campaign;