"use client"
import '../public/assets/css/tailwind.min.css'
import ServiceCard from './_components/ServiceCard'
import { useState } from 'react'
import Modal from './_components/Modal'
import Header from './_components/Header'
import Footer from './_components/Footer'
import BlogCard from './_components/BlogCard'
import { BLOGS } from '@/constants/common'

export default function Home() {
    const [showPopup,setShowPopup] = useState(false);
    const blogList = BLOGS;
    const onClickHander = () => {
        setShowPopup(true)
    }

    const closeModal = (flag) => {
        setShowPopup(flag)
    }
  
    return (
    <>  
        <Header />
        <section className="relative md:flex md:h-screen items-center md:py-0 lg:pt-36 lg:pb-56 py-20 bg-no-repeat bg-center bg-cover bg-fixed" style={{backgroundImage: "url('/assets/images/fitness/hero.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h4 className="lg:leading-normal leading-normal text-white text-3xl md:text-4xl lg:text-5xl mb-5 font-bold">Find Your <br /> Best Trainer Here!</h4>
                    <p className="text-slate-400 lg:text-lg text-sm max-w-xl">Fitness.Web is made up of 75 people at the Embassy of Knowledge Sharing who are here to help you share your passions in 27 different countries and in 14 different languages.</p>
                
                    <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                        <div className="lg:col-span-10 mt-8">
                            <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">
                                <form action="#all-services">
                                    <div className="registration-form relative text-dark text-start">
                                        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                                            <div className="filter-search-form relative">
                                                <i className="uil uil-search absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                                <input name="name" type="text" id="job-keyword" className="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 start" placeholder="e.g. I am looking gym trainer" />
                                            </div>

                                            <div className="filter-search-form relative">
                                                <i className="uil uil-map-marker absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                                <input name="name" type="text" id="location" className="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Location" />
                                            </div>

                                            <a  href='#all-services' id="search" name="search" style={{height: 60}} className="py-4 px-5 inline-block font-semibold tracking-wide border rounded align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn  rounded-lg w-100">Search</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className="relative md:py-24 py-16 bg-white" id="all-services">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-0 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Choose your services</h3>
                <h6 className="mb-5 text-base font-medium text-indigo-600">We believe in building each other and hence</h6>
            </div>
            <div className="container relative">
                <div className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-2 lg:gap-[30px] gap-[15px]">
                    <ServiceCard title="Fitness & Nutrition" imageUrl={'/assets/images/fitness/fitness-nutrition.jpg'} onClickHander={onClickHander} />
                    <ServiceCard title="Personal Training" imageUrl={'/assets/images/fitness/personal-training.webp'} onClickHander={onClickHander} />
                    <ServiceCard title="Yoga Classes" imageUrl={'/assets/images/fitness/yoga.jpg'} onClickHander={onClickHander} />
                    <ServiceCard title="Fit kids" imageUrl={'/assets/images/fitness/fit-kids.jpg'} onClickHander={onClickHander} />
                    <ServiceCard title="Zumba & Dance" imageUrl={'/assets/images/fitness/zumba.jpg'} onClickHander={onClickHander} />
                </div>
            </div>
        </section>

        <div className="container-fluid relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h5 className="font-semibold text-base text-indigo-600 mb-2">Gallery</h5>
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Take a Sneak Peek Inside</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
            </div>

            <div className="grid md:grid-cols-5 grid-cols-2 justify-center mx-auto mt-8">
                <div className="group relative block overflow-hidden duration-500">
                    <a href="assets/images/gym/01.jpg" className="lightbox duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img src="assets/images/gym/01.jpg" className="" alt="Gym Images" />
                    <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div></a>
                </div>
                
                <div className="group relative block overflow-hidden duration-500">
                    <a href="assets/images/gym/02.jpg" className="lightbox duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img src="assets/images/gym/02.jpg" className="" alt="Gym Images" />
                    <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div></a>
                </div>
                
                <div className="group relative block overflow-hidden duration-500">
                    <a href="assets/images/gym/03.jpg" className="lightbox duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img src="assets/images/gym/03.jpg" className="" alt="Gym Images" />
                    <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div></a>
                </div>
                
                <div className="group relative block overflow-hidden duration-500">
                    <a href="assets/images/gym/04.jpg" className="lightbox duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img src="assets/images/gym/04.jpg" className="" alt="Gym Images" />
                    <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div></a>
                </div>
                
                <div className="group relative block overflow-hidden duration-500">
                    <a href="assets/images/gym/05.jpg" className="lightbox duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img src="assets/images/gym/05.jpg" className="" alt="Gym Images" />
                    <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div></a>
                </div>
                
                <div className="group relative block overflow-hidden duration-500">
                    <a href="assets/images/gym/06.jpg" className="lightbox duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img src="assets/images/gym/06.jpg" className="" alt="Gym Images" />
                    <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div></a>
                </div>
                
                <div className="group relative block overflow-hidden duration-500">
                    <a href="assets/images/gym/07.jpg" className="lightbox duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img src="assets/images/gym/07.jpg" className="" alt="Gym Images" />
                    <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div></a>
                </div>
                
                <div className="group relative block overflow-hidden duration-500">
                    <a href="assets/images/gym/08.jpg" className="lightbox duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img src="assets/images/gym/08.jpg" className="" alt="Gym Images" />
                    <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div></a>
                </div>
                
                <div className="group relative block overflow-hidden duration-500">
                    <a href="assets/images/gym/09.jpg" className="lightbox duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img src="assets/images/gym/09.jpg" className="" alt="Gym Images" />
                    <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div></a>
                </div>
                
                <div className="group relative block overflow-hidden duration-500">
                    <a href="assets/images/gym/10.jpg" className="lightbox duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img src="assets/images/gym/10.jpg" className="" alt="Gym Images" />
                    <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div></a>
                </div>
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Start working with Fitness.Web that can provide everything you need to fit and healthy troughout your life.</p>
            </div>

            <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
                <div className="md:col-span-6">
                    <img src="assets/images/travel/7.jpg" className="rounded-md shadow dark:shadow-gray-800" alt="" />
                </div>

                <div className="md:col-span-6">
                    <div id="accordion-collapse" data-accordion="collapse">
                        <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden">
                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 dark:bg-slate-800 text-indigo-600" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                    <span>How does it work ?</span>
                                    <svg data-accordion-icon="" className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5">
                                    <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-2">
                                <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-start text-dark dark:text-white" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                    <span>Why we should join Fitness.web ?</span>
                                    <svg data-accordion-icon="" className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                <div className="p-5">
                                    <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-3">
                                <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-start text-dark dark:text-white" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span>What do I need to do to start with Fitness.web ?</span>
                                    <svg data-accordion-icon="" className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                <div className="p-5">
                                    <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-4">
                                <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-start text-dark dark:text-white" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
                                    <span>How to get started with selected Trainers ?</span>
                                    <svg data-accordion-icon="" className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
                                <div className="p-5">
                                    <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-5">
                                <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-start text-dark dark:text-white" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
                                    <span>How does it work ?</span>
                                    <svg data-accordion-icon="" className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
                                <div className="p-5">
                                    <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="py-20 w-full table relative bg-center mt-24 bg-no-repeat bg-cover" style={{backgroundImage: 'url(/assets/images/fitness/hero.jpg)'}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">You have to think about it before you can do it</h3>

                    <p className="text-white/80 max-w-xl mx-auto">Our growing softness, our increasing lack of physical fitness, is a menace to our security. So the decision is yours.</p>
                
                    <a href="#!" data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </a>
                </div>
            </div>
        </section>

        <div className="container relative md:mt-24 mt-16 mb-24">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h5 className="font-semibold text-base text-indigo-600 mb-2">Blogs</h5>
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Blogs or News</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                {blogList.map((blog,index) => index < 3 && (
                    <BlogCard title={blog.title} desc={blog.desc} link={blog.link} imgUrl={blog.imgUrl} />
                ))}
            </div>
        </div>

        {showPopup && <Modal onCloseHander={closeModal} />}

        <Footer />
    </>
  )
}
