
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import PageHeader from '@/app/_components/PageHeader';
import ProfileCard from '@/app/_components/ProfileCard';
import { TRAINER_LIST } from '@/constants/common';
import { useState } from 'react';

export default function Plans(){
    const [activeSlot, setSlot] = useState(0)
    return (
        <>
            <Header />
            <PageHeader title={'See plans'} variant={'dark'} />
            <section className='bg-white py-16'>
                <div className='px-20 grid lg:grid-cols-12 gap-[30px]'>        
                    <div className='lg:col-span-3'>
                        <ProfileCard isBtnHide={true} data={TRAINER_LIST[0]} />
                    </div>
                    <div className='lg:col-span-9'>
                        <h4 className='text-2xl font-bold'>Choose Your Slot</h4>
                        <ul className='border-b-2 border-b-gray-200 my-5 flex gap-[30px]'>
                            <li onClick={e => setSlot(0)} className={`py-2 cursor-pointer ${activeSlot == 0 ? 'border-b-2 border-b-gray-900': '' }`}>
                                Morning
                                <span></span>
                            </li>
                            <li onClick={e => setSlot(1)}  className={`py-2 cursor-pointer ${activeSlot == 1 ? 'border-b-2 border-b-gray-900': '' }`}>
                                Afternoon
                                <span></span>
                            </li>
                            <li onClick={e => setSlot(2)}  className={`py-2 cursor-pointer ${activeSlot == 2 ? 'border-b-2 border-b-gray-900': '' }`}>
                                Evening
                                <span></span>
                            </li>
                        </ul>
                        <div className='slot_content mb-10'>
                            {activeSlot == 0 && <div>
                                <ul className='flex gap-2 flex-wrap'>
                                    <li className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        6:00 AM
                                    </li>
                                    <li  className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        7:00 AM
                                    </li>
                                    <li  className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        8:00 AM
                                    </li>
                                    <li  className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        9:00 AM
                                    </li>
                                </ul>
                            </div>}
                            {activeSlot == 1 && <div>
                                <ul className='flex gap-2 flex-wrap'>
                                    <li className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        11:00 AM
                                    </li>
                                    <li  className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        12:00 PM
                                    </li>
                                    <li  className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        01:00 PM
                                    </li>
                                </ul>
                            </div>}

                            {activeSlot == '2' && <div>
                                <ul className='flex gap-2 flex-wrap'>
                                    <li className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        6:00 PM
                                    </li>
                                    <li  className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        7:00 PM
                                    </li>
                                    <li  className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        8:00 PM
                                    </li>
                                    <li  className='transition-all duration-500 cursor-pointer border border-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-sm font-semibold mb-2 py-1 px-4 rounded-lg'>
                                        9:00 PM
                                    </li>
                                </ul>
                            </div>}
                        </div>
                        <h4 className='text-2xl font-bold'>Choose Plan</h4>
                        <div class="grid grid-cols-1 mt-4 gap-[10px]">
                            <div class="group md:flex items-center justify-between p-6 rounded-lg shadow dark:shadow-gray-700 bg-slate-100">
                                <div class="lg:flex items-center justify-between lg:w-2/4">
                                    <div class="lg:mb-0 mb-5">
                                        <h5 class="text-2xl font-semibold">Silver</h5>
                                        <p class="text-slate-600 text-md mt-2">We offers a free month of service for new customers.</p>
                                    </div>
                                </div>

                                <div class="flex md:mb-0 mb-5 flex-col">
                                    <input type="radio" class="form-radio self-center mb-3 border-indigo-800 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" name="radio-colors" value="1" />
                                    <span class="text-[15px] font-medium self-center">3 month</span>
                                    <span class="price text-2xl self-center font-semibold mb-0">499</span>
                                </div>
                                <div class="flex md:mb-0 mb-5 flex-col">
                                    <input type="radio" class="form-radio self-center mb-3 border-indigo-800 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" name="radio-colors" value="1" />
                                    <span class="text-[15px] font-medium self-center">6 month</span>
                                    <span class="price text-2xl self-center font-semibold mb-0">1299</span>
                                </div>
                                <div class="flex md:mb-0 mb-5 flex-col">
                                    <input type="radio" class="form-radio self-center mb-3 border-indigo-800 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" name="radio-colors" value="1" />
                                    <span class="text-[15px] font-medium self-center">12 month</span>
                                    <span class="price text-2xl self-center font-semibold mb-0">3999</span>
                                </div>

                                {/* <a href="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">Buy now</a> */}
                            </div>

                            <div class="group md:flex items-center justify-between p-6 rounded-lg shadow dark:shadow-gray-700 bg-yellow-100">
                                <div class="lg:flex items-center justify-between lg:w-2/4">
                                    <div class="lg:mb-0 mb-5">
                                        <h5 class="text-2xl font-semibold">Gold</h5>
                                        <p class="text-slate-600 text-md mt-2">We offers a free month of service for new customers.</p>
                                    </div>
                                </div>

                                <div class="flex md:mb-0 mb-5 flex-col">
                                    <input type="radio" class="form-radio self-center mb-3 border-indigo-800 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" name="radio-colors" value="1" />
                                    <span class="text-[15px] font-medium self-center">3 month</span>
                                    <span class="price text-2xl self-center font-semibold mb-0">499</span>
                                </div>
                                <div class="flex md:mb-0 mb-5 flex-col">
                                    <input type="radio" class="form-radio self-center mb-3 border-indigo-800 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" name="radio-colors" value="1" />
                                    <span class="text-[15px] font-medium self-center">6 month</span>
                                    <span class="price text-2xl self-center font-semibold mb-0">1299</span>
                                </div>
                                <div class="flex md:mb-0 mb-5 flex-col">
                                    <input type="radio" class="form-radio self-center mb-3 border-indigo-800 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" name="radio-colors" value="1" />
                                    <span class="text-[15px] font-medium self-center">12 month</span>
                                    <span class="price text-2xl self-center font-semibold mb-0">3999</span>
                                </div>

                                {/* <a href="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">Buy Now</a> */}
                            </div>

                            <div class="group md:flex items-center justify-between p-6 rounded-lg shadow dark:shadow-gray-700 bg-purple-100">
                                <div class="lg:flex items-center justify-between lg:w-2/4">
                                    <div class="lg:mb-0 mb-5">
                                        <h5 class="text-2xl font-semibold">Platinum</h5>
                                        <p class="text-slate-600 text-md mt-2">We offers a free month of service for new customers.</p>
                                    </div>
                                </div>

                                <div class="flex md:mb-0 mb-5 flex-col">
                                    <input type="radio" class="form-radio self-center mb-3 border-indigo-800 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" name="radio-colors" value="1" />
                                    <span class="text-[15px] font-medium self-center">3 month</span>
                                    <span class="price text-2xl self-center font-semibold mb-0">499</span>
                                </div>
                                <div class="flex md:mb-0 mb-5 flex-col">
                                    <input type="radio" class="form-radio self-center mb-3 border-indigo-800 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" name="radio-colors" value="1" />
                                    <span class="text-[15px] font-medium self-center">6 month</span>
                                    <span class="price text-2xl self-center font-semibold mb-0">1299</span>
                                </div>
                                <div class="flex md:mb-0 mb-5 flex-col">
                                    <input type="radio" class="form-radio self-center mb-3 border-indigo-800 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" name="radio-colors" value="1" />
                                    <span class="text-[15px] font-medium self-center">12 month</span>
                                    <span class="price text-2xl self-center font-semibold mb-0">3999</span>
                                </div>

                                {/* <a href="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">Buy now</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
 
        </>
    )
}