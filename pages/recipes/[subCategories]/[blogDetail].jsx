"use client";
import BlogCard from '@/app/_components/BlogCard';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import PageHeader from '@/app/_components/PageHeader';
import { BLOGS } from '@/constants/common';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
 
export default function blogDetail(){
    const params = useParams()
    console.log(params)
    const [blogDetail, setBlogDetail] = useState({});
    useEffect(() => {
        let data = BLOGS.filter(trainer => (trainer.link).includes(params?.blogDetail) > -1);
        setBlogDetail(data[0])
    },[params])
    
    return (
        <>
        <Header />
        <PageHeader title="Recipe" subTitle={'What Is Staple Food Types And Health Benefits?'} variant={'dark'} />
        <section className='container bg-white pt-10'>
            <div className='flex items-center justify-between'> 
                <div className='flex items-center gap-4'>
                    <Image src="/assets/images/client/01.jpg" className='rounded-full' width={50} height={50} alt="" />
                    <div>
                        <h4 className='font-medium text-xl'>Elber Joe</h4>
                        <p className='text-slate-600 text-sm'>21 July, 2023</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='font-bold mb-1'>Share with:</h4>
                        <span className='bg-indigo-500 hover:bg-white hover:border-indigo-500 hover:border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full text-white hover:text-indigo-400'>
                                <i className='uil uil-facebook-f hover:text-indigo-500'></i>
                        </span>
                        <span className='bg-indigo-500 mx-2 hover:bg-white hover:border-indigo-500 hover:border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full text-white hover:text-indigo-400'>
                                <i className='uil uil-youtube hover:text-indigo-500'></i>
                        </span>
                        <span className='bg-indigo-500 hover:bg-white hover:border-indigo-500 hover:border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full text-white hover:text-indigo-400'>
                                <i className='uil uil-dribbble hover:text-indigo-500'></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-12 md:col-span-6">
                    <div className="py-10 rounded-md">
                        <img src={`/assets/images/blog/food.jpg`} className="border rounded-md h-[450px] w-full object-cover"  alt="" />
                        
                        <div className="mt-12 grid grid-cols-12 h-auto relative">
                            <div className="col-span-4 h-full">
                                <div style={{position:'sticky', top:100}}>
                                    <h4 className='text-xl font-bold mb-4'>Table of content</h4>
                                    <ul className='table_of_content pl-4 border-l-2 py-2 border-l-slate-400 overflow-y-auto flex flex-col gap-2 max-w-[300px] max-h-[300px]'>
                                        <li><a href="javascript:;" className='font-medium text-sm focus:text-indigo-500 text-slate-400'>What Is A Staple Food In India?</a></li>
                                        <li><a href="javascript:;" className='font-medium text-sm focus:text-indigo-500 text-slate-400'>Common Staple Foods Of India</a></li>
                                        <li><a href="javascript:;" className='font-medium text-sm focus:text-indigo-500 text-slate-400'>Conclusion</a></li>
                                        <li><a href="javascript:;" className='font-medium text-sm focus:text-indigo-500 text-slate-400'>Frequently Asked Questions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-8">
                                <div>
                                    <p className='font-semibold mb-4'>
                                        India is a land of different cultures, languages, and cuisines. With such diversity comes a wide range of staple foods that are a basic part of the Indian diet. They stay at the heart of every Indian meal. But do you know ‘What is staple food in India?’
                                    </p>
                                    <p  className='font-semibold mb-4'>
                                        From fragrant rice to hearty lentils and nourishing wheat, staple foods in India form the backbone of our diets across various regions. They nourish us and play a major role in maintaining our good health.
                                    </p>
                                    <p  className='font-semibold mb-4'>
                                        This blog will explain the meaning of staple foods, their common types in India, and their nutritional benefits. So, if you are a food lover or curious about the nutrition of Indian staple dishes, this blog is for you. So, let’s begin the journey!
                                    </p>
                                    <div>
                                        <h4 className='text-xl font-bold mt-10 mb-6'>What Is A Staple Food In India?</h4>
                                        <p className='mb-4'>A staple food is a type of food that is regularly consumed and forms a significant part of a population’s diet. It is a primary food item important for meeting daily nutritional needs.</p>
                                        <p className='mb-4'>Healthy staple foods are often affordable and widely available. This makes them an integral part of food security for many communities. You can access them around the year and can store them easily.</p>
                                        <p className='mb-4'>In India, staple foods vary by region and culture, but common examples include rice, wheat, various lentils, dairy products, etc. These are foods high in carbohydrates, which provide energy for the body to function properly.</p>
                                        <p className='mb-4'>In India, each region has its own local staple food. So, let’s get an overview of what is staple food in India:</p>
                                        <ul className='flex flex-col gap-4 text-sm'>
                                            <li><b>North India:</b> Here, wheat-based dishes like roti and paratha (stuffed flatbread) dominate the daily meals. Particularly in Punjab, Haryana, and Uttar Pradesh, wheat flour or ‘gehun ka atta’ is commonly used to make various types of bread, including chapatis, naan, and parathas.</li>
                                            <li><b>South India:</b> Rice takes center stage in the South, where dishes like idli, dosa, and sambar are popular. It is very common in Tamil Nadu, Andhra Pradesh, and Kerala. Millets such as jowar, bajra, and ragi are also widely consumed in some parts of South India.</li>
                                            <li><b>Eastern India:</b> Rice remains a primary staple, along with fish curry and various lentil preparations. People consume rice with fish, meat, or lentils in West Bengal, Odisha, and Assam. Wheat is also a staple food in some parts of East India.</li>
                                            <li><b>West India:</b> Moving westwards to Gujarat and Rajasthan, pearl millet, jowar, and gram flour have an edge over wheat or rice. The Western states also have a love for lentils like dal as well as spicy curries.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-bold mt-10 mb-6'>Common Staple Foods Of India</h4>
                                        <p className='mb-4'>Each Indian region has its favorite staple food, from rice to wheat, millets to lentils. These are based on availability and cultural preferences. These staple foods form the foundation of Indian dishes and provide essential nutrients for a well-balanced diet.</p>
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-bold mt-10 mb-6'>Conclusion</h4>
                                        <p className='mb-4'>This blog explains ‘What is staple food in India and its benefits?’ India offers a wide range of staple food options that are delicious but also supply us with essential nutrients. From rice to wheat, lentils to dairy, each region has its unique staples that reflect local tastes.</p>
                                        <p className='mb-4'>These staples provide carbohydrates for energy, proteins for muscle growth, vitamins and minerals for overall health, and dietary fiber for digestion. Whether it’s wheat roti, rice dosa, or dal cooked with spices and served alongside curries, there’s something for everyone!</p>
                                        <p className='mb-4'>You can connect with our Fitelo experts for personalized diet plans. They will include these nutritious staple foods for your health benefits.</p>
                                        <p className='mb-4'>So, you must include these Indian staples in a balanced diet to ensure proper nutrition. Combining different grains with pulses or vegetables can create nourishing meals that are best for your health.</p>
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-bold mt-10 mb-6'>Frequently Asked Questions</h4>

                                        <h5 className='text-lg font-semibold mb-4'>What Are The Staple Foods In India?</h5>
                                        <p className='mb-4'>In India, rice and wheat are the main staple foods used to make different meals. Lentils and dairy are also important staple foods in the Indian diet that help maintain good health.</p>
                                        <h5 className='text-lg font-semibold mb-4'>What Are The Health Benefits Of Indian Staple Foods?</h5>
                                        <p className='mb-4'>Indian staple foods are rich in carbohydrates, protein, and essential nutrients. They provide energy and support overall health. They also help maintain a healthy weight and reduce the risk of chronic diseases.</p>
                                        <h5 className='text-lg font-semibold mb-4'>Are There Alternatives To Rice And Wheat In The Indian Staple Diet?</h5>
                                        <p className='mb-4'>Yes, there are several alternatives to rice and wheat in the Indian staple diet, including millets, sorghum, and barley. These grains are often used to make traditional dishes and provide a nutritious alternative to rice and wheat.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-20'>
                <h4 className='text-3xl text-indigo-500 mb-10 font-bold'>Related Blogs</h4>
                <div className='grid grid-cols-4 gap-[20px]'>
                    {BLOGS && BLOGS.length > 0 && BLOGS.map(({title, desc, link, imgUrl}, index) => {
                        return index < 4 ? <BlogCard title={title} desc={desc} link={link} imgUrl={imgUrl} /> : ''
                    })}
                </div>
            </div>
            <div className='pb-20'>
                <h4 className='text-3xl text-indigo-500 mb-10 font-bold'>Related Categories</h4>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 justify-center">
                    <div className="group relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden">
                        <Image width={200} height={120} src="/assets/images/gym/blog1.jpg" className="object-cover group-hover:scale-105 duration-500 ease-in-out" alt="" />
                        <div className="absolute inset-0 bg-slate-900/60"></div>

                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                            <a href="#!" className="text-white font-semibold text-xl mb-0">Weight loss</a>
                        </div>
                    </div>
                    <div className="group relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden">
                        <Image width={200} height={120} src="/assets/images/gym/blog2.jpg" className="object-cover group-hover:scale-105 duration-500 ease-in-out" alt="" />
                        <div className="absolute inset-0 bg-slate-900/60"></div>

                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                            <a href="#!" className="text-white font-semibold text-xl mb-0">Weight gain</a>
                        </div>
                    </div>
                    <div className="group relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden">
                        <Image width={200} height={120} src="/assets/images/gym/blog3.jpg" className="object-cover group-hover:scale-105 duration-500 ease-in-out" alt="" />
                        <div className="absolute inset-0 bg-slate-900/60"></div>

                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                            <a href="#!" className="text-white font-semibold text-xl mb-0">Cardio Excercise</a>
                        </div>
                    </div>
                </div>
                    {/* {BLOGS && BLOGS.length > 0 && BLOGS.map(({title, desc, link, imgUrl}, index) => {
                    return index < 3 ? <BlogCard title={title} desc={desc} link={link} imgUrl={imgUrl} /> : ''
                })} */}
            </div>
        </section>
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