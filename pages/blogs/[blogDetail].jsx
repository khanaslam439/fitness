"use client";

import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import PageHeader from '@/app/_components/PageHeader';
import { BLOGS } from '@/constants/common';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
 
export default function blogDetail(){
    const params = useParams()
    const [blogDetail, setBlogDetail] = useState({});
    useEffect(() => {
        debugger;
        let data = BLOGS.filter(trainer => trainer.link == params?.blogDetail)
        setBlogDetail(data[0])
    },[params])
    
    return (
        <>
        <Header />
        <PageHeader title="Blog" subTitle={blogDetail?.title} variant={'dark'} />
        <section className='bg-white p-10 pt-5 px-10'>
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-9 md:col-span-6">
                    <div class="p-10 rounded-md">
                        {blogDetail?.type === 'video' 
                        ? <video src="/assets/images/demo.mp4" className='rounded-xl object-cover w-full h-[450px] object-auto' controls></video>
                        : <img src={`${blogDetail?.type == 'recipe' ? '/assets/images/blog/food.jpg' : '/assets/images/gym/blog3.jpg'}`} class="border rounded-md h-[450px] w-full object-cover"  alt="" />}
                        {blogDetail?.type == 'recipe' && <h4 className='mt-4 mb-10 leading-4'>Recipes Creamy Garlic Parmesan Chicken Salad</h4>}

                        <div class="mt-6">
                            {blogDetail?.type == 'recipe' && <div>
                                <h4 className='text-2xl font-bold mb-5'>Nutrition Facts</h4>
                                <ul className='grid lg:grid-cols-4 grid-cols-2  gap-4 mb-10'>
                                   <li className='p-4 rounded-lg border flex gap-4 bg-orange-50'>
                                        <span className='w-4 rounded-full h-4 bg-orange-400 mt-1 inline-block'></span>
                                        <div>
                                            <p>Protein</p>
                                            <h4 className='text-2xl'>124g</h4>
                                        </div>
                                   </li>
                                   <li className='p-4 rounded-lg border flex gap-4 bg-yellow-50'>
                                        <span className='w-4 rounded-full h-4 bg-yellow-400 mt-1 inline-block'></span>
                                        <div>
                                            <p>Carbohydrate</p>
                                            <h4 className='text-2xl'>450g</h4>
                                        </div>
                                   </li>
                                   <li className='p-4 rounded-lg border flex gap-4 bg-emerald-50'>
                                        <span className='w-4 rounded-full h-4 bg-emerald-400 mt-1 inline-block'></span>
                                        <div>
                                            <p>Fats</p>
                                            <h4 className='text-2xl'>100g</h4>
                                        </div>
                                   </li> 
                                   <li className='p-4 rounded-lg border flex gap-4 bg-cyan-50'>
                                        <span className='w-4 rounded-full h-4 bg-cyan-400 mt-1 inline-block'></span>
                                        <div>
                                            <p>Energy</p>
                                            <h4 className='text-2xl'>2400 cal</h4>
                                        </div>
                                   </li> 
                                </ul>
                            </div>}
                            <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                            <p class="text-slate-400 italic border-x-4 border-indigo-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                            <p class="text-slate-400 mt-3">{blogDetail?.desc} {blogDetail?.desc} {blogDetail?.desc}</p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-3 md:col-span-6">
                    <div class="sticky top-20">
                        <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 mt-8">Recent post</h5>
                        <div class="flex items-center mt-4">
                            <img src="/assets/images/blog/06.jpg" class="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                            <div class="ms-3">
                                <a href="#" class="font-semibold hover:text-indigo-600">Consultant Business</a>
                                <p class="text-sm text-slate-400">1st May 2022</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center mt-4">
                            <img src="/assets/images/blog/07.jpg" class="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                            <div class="ms-3">
                                <a href="#" class="font-semibold hover:text-indigo-600">Grow Your Business</a>
                                <p class="text-sm text-slate-400">1st May 2022</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center mt-4">
                            <img src="/assets/images/blog/08.jpg" class="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />
                            <div class="ms-3">
                                <a href="#" class="font-semibold hover:text-indigo-600">Look On The Glorious Balance</a>
                                <p class="text-sm text-slate-400">1st May 2022</p>
                            </div>
                        </div>

                        <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 mt-8">Popular Tags</h5>
                        <ul class="list-none mt-8">
                            <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 duration-500">Weight loss</a></li>
                            <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 duration-500">Health Fitness</a></li>
                            <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 duration-500">Kids</a></li>
                            <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 duration-500">Muscle gain</a></li>
                            <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 duration-500">Yoga</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div class="container relative md:mt-24 my-16">
            <div class="md:flex justify-center">
                <div class="lg:w-2/3 text-center">
                    <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We'll send you the best of our blog just once a weekly.</p>

                    <div class="mt-8">
                        <div class="text-center subcribe-form">
                            <form class="relative mx-auto max-w-xl">
                                <input type="email" id="subemail" name="name" class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
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