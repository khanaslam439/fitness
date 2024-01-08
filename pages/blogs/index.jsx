"use client";
import { useEffect, useState } from "react";
import {BLOGS, TRAINER_LIST} from '@/constants/common'
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import PageHeader from "@/app/_components/PageHeader";
import BlogCard from "@/app/_components/BlogCard";
export default function Blogs(){
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <>
        <Header />
        {/* content part */}
        <main>
            <PageHeader title={'Blogs'} />
            <section className="relative bg-white py-12 overflow-hidden">
                <div className="px-10 relative">
                    <div className="grid grid-cols-12 gap-[30px]">
                        <div className="lg:col-span-3 col-span-12">
                            <ul>
                                <li>
                                    <a href="#" onClick={e => setActiveIndex(0)} className={`flex rounded-lg relative p-4 mb-2 bg-gray-100 block ${activeIndex == 0 ? 'border-l-4 border-l-indigo-500' : ''}`}>
                                        <i className={`uil uil-books text-xl me-2 ${activeIndex == 0 && 'text-indigo-600'}`}></i> 
                                        <span className={`text-lg font-semibold ${activeIndex == 0 && 'text-indigo-600'}`}>Blogs <p className="font-normal text-sm text-gray-500">See popular blogs</p></span> 
                                        <i className="uil uil-angle-right text-xl absolute right-4 top-4 me-2"></i>
                                        <div className="w-full">
                                            <a href="#" className="text-indigo-600">Sub category 1</a>
                                            <a href="#" className="text-indigo-600">Sub category 2</a>
                                            <a href="#" className="text-indigo-600">Sub category 3</a>
                                            <a href="#" className="text-indigo-600">Sub category 4</a>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={e => setActiveIndex(1)} className={`flex rounded-lg relative p-4 mb-2 bg-gray-100 block ${activeIndex == 1 ? 'border-l-4 border-l-indigo-500' : ''}`}>
                                        <i className={`uil uil-restaurant text-xl me-2 ${activeIndex == 1 && 'text-indigo-600'}`}></i> 
                                        <span className={`text-lg font-semibold ${activeIndex == 1 && 'text-indigo-600'}`}>Recipe <p className="font-normal text-sm text-gray-500">See best diet recipe</p></span>
                                        <i className="uil uil-angle-right text-xl absolute right-4 top-4 me-2"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={e => setActiveIndex(2)} className={`flex rounded-lg relative p-4 mb-2 bg-gray-100 block ${activeIndex == 2 ? 'border-l-4 border-l-indigo-500' : ''}`}>
                                        <i className={`uil uil-youtube text-xl me-2 ${activeIndex == 2 && 'text-indigo-600'}`}></i> 
                                        <span className={`text-lg font-semibold ${activeIndex == 2 && 'text-indigo-600'}`}>Videos <p className="font-normal text-sm text-gray-500">watch useful videos</p></span> 
                                        <i className="uil uil-angle-right text-xl absolute right-4 top-4 me-2"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:col-span-9 col-span-12">
                            {activeIndex == 0 && 
                                <div>
                                    <h4 className="text-3xl font-semibold mb-1">Our Blogs</h4>
                                    <p className="mb-8">See popular blogs</p>
                                    <div className="grid grid-cols-2 gap-[30px]">
                                        {BLOGS && BLOGS.length > 0 && BLOGS.map(({title, desc, link, imgUrl}) => {
                                            return <BlogCard title={title} desc={desc} link={link} imgUrl={imgUrl} />
                                        })}
                                    </div>
                                </div>
                            }
                            {activeIndex == 1 && 
                                <div>
                                    <h4 className="text-3xl font-semibold mb-1">Our Recipe</h4>
                                    <p className="mb-8">See best diet recipe</p>
                                    <div className="grid grid-cols-2 gap-[30px]">
                                        {BLOGS && BLOGS.length > 0 && BLOGS.map(({title, desc, link, imgUrl}) => {
                                            return <BlogCard title={title} desc={desc} link={link} imgUrl={imgUrl} />
                                        })}
                                    </div>
                                </div>
                            }
                            {activeIndex == 2 && 
                                <div>
                                    <h4 className="text-3xl font-semibold mb-1">Watch Videos</h4>
                                    <p className="mb-8">watch useful videos to improve health</p>
                                    <div className="grid grid-cols-3 gap-[30px]">
                                        {BLOGS && BLOGS.length > 0 && BLOGS.map(({title, desc, link, imgUrl}) => {
                                            return <BlogCard video={true} title={title} desc={desc} link={link} imgUrl={imgUrl} />
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
        </>
    )
}