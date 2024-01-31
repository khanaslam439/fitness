"use client";
import { useEffect, useState } from "react";
import {BLOGS} from '@/constants/common'
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import BlogHeader from "@/app/_components/BlogHeader";
import BlogCard from "@/app/_components/BlogCard";
import BlogSidebar from "@/app/_components/BlogSidebar";
import { useParams } from "next/navigation";
export default function SubCategories(){
    const param = useParams();
    return (
        <>
        <Header varients="dark" />
        {/* content part */}
        <main>
            <section className="inset-0 relative bg-white pt-36 pb-12 overflow-hidden">
                <div className="px-10 relative">
                    <div className="grid grid-cols-12 gap-[30px]">
                        <div className="lg:col-span-3 col-span-12">
                            <BlogSidebar />
                        </div>
                        <div className="lg:col-span-9 col-span-12">
                            <div>
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="text-3xl font-semibold mb-1">Fitness Videos</h4>
                                        <BlogHeader category={'Fitness Videos'} title={param?.subCategories} subCategory={param?.subCategories} />
                                    </div>
                                    <p className="mb-8">Total 7 result found.</p>
                                </div>
                                
                                <div className="grid grid-cols-4 gap-[20px]">
                                    {BLOGS && BLOGS.length > 0 && BLOGS.map(({title, desc, link, imgUrl}) => {
                                        return <BlogCard category={param?.subCategories} title={title} desc={desc} link={`/fitness-videos/${param?.subCategories}/${link}`} video={true} imgUrl={imgUrl} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
        </>
    )
}