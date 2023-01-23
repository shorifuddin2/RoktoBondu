import React from 'react';
import Pagination from '../../components/Blogs/Pagination';
import GalleryBlogCard from './GalleryBlogCard';
import { galleryBlogData } from './GalleryBlogData';

const GalleryBlog = () => {

    return (
        <div className='galleryBlogContainer mb-20'>
            <div className=" relative">
                <h1 className="blog_title after: content-[''] after:absolute after:-bottom-6 after:left-0 after:w-[100px] after:h-[5px] after:bg-red-600">
                    {" "}
                    পোষ্ট সমূহ
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {" "}
                {galleryBlogData?.map(galleryData => <GalleryBlogCard galleryData={galleryData} />)}
            </div>
            <Pagination />
        </div>
    );
};

export default GalleryBlog;