"use client";
import { useState } from "react";
import {BLOGS} from '@/constants/common'
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import PageHeader from "@/app/_components/PageHeader";
import BlogCard from "@/app/_components/BlogCard";
import Image from "next/image";
import Link from "next/link";
export default function Blogs(){
    return (
        <>
        <Header />
        {/* content part */}
        <main className="bg-white">
            {/* <PageHeader title={'Blogs'} /> */}
            <section className="relative table w-full pb-24 lg:pt-48 pt-24 bg-slate-500 overflow-hidden">
            <div className="container relative">
                <div className="mx-auto mt-10 gap-[30px] relative">
                    <div className="text-center">
                        <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Good health starts with good knowledge</h4>
                        <p className="text-slate-300 text-md">Checkout best blogs based on below categories.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
                            <div className="group relative mx-auto rounded-xl w-[300px] shadow-md dark:shadow-gray-800 overflow-hidden">
                                <Image width={300} height={180} src="/assets/images/gym/blog1.jpg" className="max-h-[200px] object-cover group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                <div className="absolute inset-0 bg-slate-900/60"></div>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                                    <a href="/blogs/all" className="text-white font-semibold text-xl mb-0">Blogs</a>
                                </div>
                            </div>
                            <div className="group relative mx-auto rounded-xl w-[300px] shadow-md dark:shadow-gray-800 overflow-hidden">
                                <Image width={300} height={180} src="/assets/images/gym/blog2.jpg" className="max-h-[200px] object-cover group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                <div className="absolute inset-0 bg-slate-900/60"></div>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                                    <a href="/fitness-videos/all" className="text-white font-semibold text-xl mb-0">Excerise Videos</a>
                                </div>
                            </div>
                            <div className="group relative mx-auto rounded-xl w-[300px] shadow-md dark:shadow-gray-800 overflow-hidden">
                                <Image width={300} height={180} src="/assets/images/gym/1.jpg" className="max-h-[200px] object-cover group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                <div className="absolute inset-0 bg-slate-900/60"></div>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                                    <a href="/recipes/all" className="text-white font-semibold text-xl mb-0">Receipes</a>
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </section>

                <div className="container py-20" id="popular_blogs">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-2xl text-indigo-600">Recent Blogs</h4>
                        <Link href={'#'} className="bg-indigo-600 text-white rounded-full hover:shadow-xl px-5 py-2"><i className="uil uil-eye me-2"></i>View more</Link>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
                        <BlogCard title={'Blogs'} link={'/blogs/non-veg'} type="Blogs" imgHeight={180} imgUrl="/assets/images/gym/blog1.jpg" />
                        <BlogCard title={'Excersise videos'} type="Blogs" imgHeight={180} link={'#'} imgUrl="/assets/images/gym/blog2.jpg" />
                        <BlogCard title={'Receipe'} link={'#'} type={'Blogs'} imgHeight={180} imgUrl="/assets/images/gym/blog3.jpg" />
                    </div>
                </div>
                <div className="container bg-indigo-100 py-20" id="popular_blogs">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-2xl text-indigo-600">Latest Videos</h4>
                        <Link href={'#'} className="bg-indigo-600 text-white rounded-full hover:shadow-xl px-5 py-2"><i className="uil uil-eye me-2"></i>View more</Link>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
                        <BlogCard title={'Blogs'} link={'#'} type="Videos" imgHeight={180} imgUrl="/assets/images/gym/blog1.jpg" />
                        <BlogCard title={'Excersise videos'} type="Videos" imgHeight={180} link={'#'} imgUrl="/assets/images/gym/blog2.jpg" />
                        <BlogCard title={'Receipe'} link={'#'} type={'Videos'} imgHeight={180} imgUrl="/assets/images/gym/blog3.jpg" />
                    </div>
                </div>
                <div className="container py-20" id="popular_blogs">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-2xl text-indigo-600">Popular Receipe</h4>
                        <Link href={'#'} className="bg-indigo-600 text-white rounded-full hover:shadow-xl px-5 py-2"><i className="uil uil-eye me-2"></i>View more</Link>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
                        <BlogCard title={'Blogs'} link={'#'} type="Recipe" imgHeight={180} imgUrl="/assets/images/gym/blog1.jpg" />
                        <BlogCard title={'Excersise videos'} type="Recipe" imgHeight={180} link={'#'} imgUrl="/assets/images/gym/blog2.jpg" />
                        <BlogCard title={'Receipe'} link={'#'} type={'Recipe'} imgHeight={180} imgUrl="/assets/images/gym/blog3.jpg" />
                    </div>
                </div>
        </main>
        <div className="container relative md:mt-24 my-16">
            <div className="md:flex justify-center">
                <div className="lg:w-2/3 text-center">
                    <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We'll send you the best of our blog just once a weekly.</p>

                    <div className="mt-8">
                        <div className="text-center subcribe-form">
                            <form className="relative mx-auto max-w-xl">
                                <input type="email" id="subemail" name="name" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}