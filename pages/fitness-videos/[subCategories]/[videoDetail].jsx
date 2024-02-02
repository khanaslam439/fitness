"use client";
import BlogCard from '@/app/_components/BlogCard';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import PageHeader from '@/app/_components/PageHeader';
import { BLOGS } from '@/constants/common';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
 
export default function videoDetail(){
    const params = useParams()
    const [blogDetail, setBlogDetail] = useState({});
    useEffect(() => {
        let data = BLOGS.filter(trainer => (trainer.link).includes(params?.videoDetail) > -1);
        setBlogDetail(data[0])
    },[params])
    
    return (
        <>
        <Header />
        <PageHeader title="Fitness Videos" subTitle={blogDetail?.title} variant={'dark'} />
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
                    <video src="/assets/images/demo.mp4" className='rounded-xl object-cover w-full h-[450px] object-auto' controls></video>
                        
                        <div className="mt-12 grid grid-cols-12 h-auto relative">
                            <div className="col-span-4 h-full">
                                <div style={{position:'sticky', top:100}}>
                                    <h4 className='text-xl font-bold mb-4'>Table of content</h4>
                                    <ul className='table_of_content pl-4 border-l-2 py-2 border-l-slate-400 overflow-y-auto flex flex-col gap-2 max-w-[300px] max-h-[300px]'>
                                        <li><a href="javascript:;" className='font-medium text-sm focus:text-indigo-500 text-slate-400'>Understanding Dancing As An Exercise</a></li>
                                        <li><a href="javascript:;" className='font-medium text-sm focus:text-indigo-500 text-slate-400'>How Many Calories Can You Burn With Dancing?</a></li>
                                        <li><a href="javascript:;" className='font-medium text-sm focus:text-indigo-500 text-slate-400'>Benefits Of Dancing For Weight Loss And Improved Health</a></li>
                                        <li><a href="javascript:;" className='font-medium text-sm focus:text-indigo-500 text-slate-400'>Top 5 Dance Exercises To Lose Weight</a></li>
                                        <li><a href="javascript:;" className='font-medium text-sm focus:text-indigo-500 text-slate-400'>Tips To Start Dancing At Home For Weight Loss</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-8">
                                <div>
                                    <p className='font-semibold mb-4'>
                                        Are you looking for a fun and enjoyable way to get in shape? Try a dancing exercise to lose weight! Not only dancing is a great way to burn calories and tone your muscles, but it also has many other benefits for your physical and mental health.
                                    </p>
                                    <p  className='font-semibold mb-4'>
                                        Whether you are a beginner or an experienced dancer, various types of dancing exercises can help you achieve your fitness goals. There are many different types of dance, all offering health benefits and the opportunity to have fun while working out.
                                    </p>
                                    <p  className='font-semibold mb-4'>
                                        Some popular options include zumba, hip hop, ballet, pole dancing, and ballroom dancing. Dancing can also be a social activity, creating a sense of community and helping you feel more connected to other people.
                                    </p>
                                    <div>
                                        <h4 className='text-xl font-bold mt-10 mb-6'>Understanding Dancing As An Exercise</h4>
                                        <p className='mb-4'>Dancing is not just a fun activity at parties – it is also a great form of exercise! One of the best things about dancing as an exercise is that it does not feel like a chore. There is no room for boredom in this activity.</p>
                                        <p className='mb-4'>Whether you prefer salsa, hip-hop, or ballroom dancing, there is a style out there that will get you moving and grooving. Plus, dancing is a social activity that can be enjoyed with friends or as part of a group class, making it a great way to meet new people and build confidence.</p>
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-bold mt-10 mb-6'>How Many Calories Can You Burn With Dancing?</h4>
                                        <p className='mb-4'>According to Harvard Health Publishing, a person weighing 56 kg can burn approx. 90 calories to 180 calories in 30 minutes of dancing exercise.
                                        </p>
                                        <p className='mb-4'>Dancing exercise to lose weight is a fun way to burn calories and get in shape. It raises your heart rate, which helps you burn calories and lose weight. The number of calories you burn while dancing depends on person to person, the type of dance you choose, and which muscle groups you engage.</p>

                                        <p className='mb-4'>Many factors affect the amount of calories burned, such as your weight, the type of dance, the intensity of your routine, and the frequency of breaks you take.</p>
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-bold mt-10 mb-6'>Benefits Of Dancing For Weight Loss And Improved Health</h4>
                                        <p className='mb-4'>Dancing exercise offers several benefits that can support weight loss and improve your overall health. Here’s a detailed list of some of the key benefits:</p>
                                        <p className='mb-4'><i>Kathleen Davenport, MD, a physiatrist at HSS Florida with special expertise in dance medicine, says, “Whether for fun, exercise, or social connection, dancing is good for your health.”</i></p>
                                        <ol className='flex flex-col gap-2'>
                                            <li><b>Burns Calories:</b> Dancing can help you burn calories essential for weight loss. Depending on your routine’s intensity and weight, you can burn anywhere from 200 to 400 calories in just 30 minutes of dancing. </li>
                                            <li><b>Engages Multiple Muscle Groups:</b> Dancing can engage many different muscle groups, making it a great way to tone your entire body and build lean muscle. This can increase your metabolism, helping you burn more calories and lose weight over time.</li>
                                            <li><b>Improves Cardiovascular Health:</b> Dancing exercise to lose weight can raise your heart rate, improving your cardiovascular health. This can help lower your risk of heart disease, stroke, and other health conditions. A healthy cardiovascular system contributes to weight loss efforts.</li>
                                            <li><b>Increases Metabolism:</b> Regular dancing for weight loss can boost your metabolism. As you move and engage different muscle groups, your body becomes more efficient at burning calories, even when you are not dancing.</li>
                                            <li><b>Reduces Stress And Anxiety:</b> Dancing can be an enjoyable way to relieve stress and anxiety. It can also boost your mood and improve your mental health, which can help you stay motivated and consistent in your weight loss journey.</li>
                                            <li><b>Enhances Balance And Coordination:</b> Dancing requires balance and coordination, which can improve your overall physical function and mobility. This can help reduce your risk of falls and other injuries.</li>
                                            <li><b>Promotes Social Interaction:</b> Dancing is often a social activity, which can help you meet new people and build your social support network. This can provide you with encouragement and accountability, making it easier to stick to your weight loss goals.</li>
                                        </ol>
                                        <p className='mb-4'>So, taking up dancing into your fitness routine not only leads to weight loss but also offers many other physical and mental benefits.</p>
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
