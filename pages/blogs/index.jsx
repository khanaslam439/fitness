"use client";
import { useState } from "react";
import {BLOGS} from '@/constants/common'
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import PageHeader from "@/app/_components/PageHeader";
import BlogCard from "@/app/_components/BlogCard";
export default function Blogs(){
    const [activeIndex, setActiveIndex] = useState(0);
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
                                        <span className={`text-lg font-semibold ${activeIndex == 2 && 'text-indigo-600'}`}>Tutorials <p className="font-normal text-sm text-gray-500">watch useful videos</p></span> 
                                        <i className="uil uil-angle-right text-xl absolute right-4 top-4 me-2"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:col-span-9 col-span-12">
                            {activeIndex == 0 && 
                                <div>
                                    <div className="flex justify-between">
                                        <div>
                                            <h4 className="text-3xl font-semibold mb-1">Our Blogs</h4>
                                            <p className="mb-8">See popular blogs</p>
                                        </div>
                                        <div>
                                            <span className="mx-3">Tags:</span>
                                            <ul className="inline-flex gap-2">
                                                <li className="border border-indigo-500 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded">Fitness</li>
                                                <li className="border border-indigo-500 bg-indigo-600/5 text-indigo-600 text-xs font-bold px-3 py-1.5 rounded">Zumba</li>
                                                <li className="border border-indigo-500 bg-indigo-600/5 text-indigo-600 text-xs font-bold px-3 py-1.5 rounded">kids</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-[30px]">
                                        {BLOGS && BLOGS.length > 0 && BLOGS.map(({title, desc, link, imgUrl}) => {
                                            return <BlogCard title={title} desc={desc} link={link} imgUrl={imgUrl} />
                                        })}
                                    </div>
                                </div>
                            }
                            {activeIndex == 1 && 
                                <div>
                                    <div className="flex justify-between">
                                        <div>
                                            <h4 className="text-3xl font-semibold mb-1">Our Recipe</h4>
                                            <p className="mb-8">See best diet recipe</p>
                                        </div>
                                        <div>
                                            <span className="mx-3">Tags:</span>
                                            <ul className="inline-flex gap-2">
                                                <li className="border border-indigo-500 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded">Weight gain</li>
                                                <li className="border border-indigo-500 bg-indigo-600/5 text-indigo-600 text-xs font-bold px-3 py-1.5 rounded">Weight loss</li>
                                                <li className="border border-indigo-500 bg-indigo-600/5 text-indigo-600 text-xs font-bold px-3 py-1.5 rounded">Muscle gain</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-[30px]">
                                        {BLOGS && BLOGS.length > 0 && BLOGS.map(({title, desc, link, imgUrl}) => {
                                            return <BlogCard title={title} desc={desc} link={link} imgUrl={imgUrl} />
                                        })}
                                    </div>
                                </div>
                            }
                            {activeIndex == 2 && 
                                <div>
                                    <div className="flex justify-between">
                                        <div>
                                            <h4 className="text-3xl font-semibold mb-1">Watch Tutorials</h4>
                                            <p className="mb-8">Look at best videos to improve health</p>
                                        </div>
                                        <div>
                                            <span className="mx-3">Tags:</span>
                                            <ul className="inline-flex gap-2">
                                                <li className="border border-indigo-500 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded">Increase stamina</li>
                                                <li className="border border-indigo-500 bg-indigo-600/5 text-indigo-600 text-xs font-bold px-3 py-1.5 rounded">Muscle building</li>
                                                <li className="border border-indigo-500 bg-indigo-600/5 text-indigo-600 text-xs font-bold px-3 py-1.5 rounded">Weight loss</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-3 gap-[30px]">
                                        {BLOGS && BLOGS.length > 0 && BLOGS.map(({title, desc, link, imgUrl}) => {
                                            return <BlogCard title={title} desc={desc} link={link} imgUrl={imgUrl} />
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