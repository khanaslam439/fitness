import React from 'react'

import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import { TRAINER_LIST, PLANS } from '@/constants/common';
import Image from 'next/image';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import PageHeader from '@/app/_components/PageHeader';
import Link from 'next/link';

const Checkout = () => {
    const params = useParams();
    console.log(params)
    const [shift, updateShift] = useState(0);
    const activeUser = TRAINER_LIST.filter(el => el.id == 103 && el.name)[0];
    const [activePlan, setActivePlan] = useState(null);
    
    return (
        <>
            <Header />
            <PageHeader title={'plan'} subTitle={'Check-out'} />

            <section className='py-20 container bg-white'>
                <div className='gap-12 grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <form action="">
                            <h2 className='text-3xl mb-0 font-bold'>Checkout</h2>
                            <p className='text-md text-slate-500 mb-4'>Fill the contact details to checkout</p>
                            <div>
                                <label htmlFor="" className='text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1'>Your Full Name</label>
                                <input type="text" className='form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0' placeholder='e.g. John Raddison' />
                            </div>
                            <div className="grid grid-cols-12 gap-2">
                                <div className='col-span-3'>
                                    <label htmlFor="" className='text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1'>Country Code</label>
                                    <input type="text" className='form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0' placeholder='+91' />
                                </div>
                                <div className='col-span-9'>
                                    <label htmlFor="" className='text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1'>Mobile number</label>
                                    <input type="text" className='form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0' placeholder='e.g. (954)-3332-294' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className='text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1'>Your email</label>
                                <input type="email" className='form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0' placeholder='e.g. example@domain.com' />
                            </div>
                            <div>
                                <label htmlFor="" className='text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1'>Country</label>
                                <select className='form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0'>
                                    <option value="">Select Country</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="" className='text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1'>State</label>
                                <select className='form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0'>
                                    <option value="">Select State</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h4 className='text-3xl font-bold mb-6'>Plan description</h4>
                        <div className='mb-5 bg-indigo-100 rounded-xl border border-indigo-200 p-5 py-7'>
                            <p className='flex justify-between mb-2'>
                                <span>
                                    Silver (Half Yearly)
                                </span>
                                <span className='text-indigo-600'>
                                    INR 4500
                                </span>
                            </p>
                            <p  className='flex justify-between mb-2'>
                                <span>
                                Visiting Charge (0-5 km) 
                                </span>
                                <span className='text-indigo-600'>
                                    INR 500
                                </span>
                            </p>
                            <p  className='flex justify-between'>
                                <b>
                                    Payable Amount
                                </b>
                                <b className='text-indigo-600'>
                                    INR 5000
                                </b>
                            </p>
                        </div>
                        <ul className='mb-10'>
                            <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-slate-900 rounded-full'></i>12 sessions per month</li>
                            <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-slate-900 rounded-full'></i>Total Sessions: 60</li>
                            <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-slate-900 rounded-full'></i>Per session, the cost is based on Yearly Plan pricing (excluding GST)</li>
                        </ul>



                        <h4 className='text-2xl font-semibold mt-10'>Hassle-free payments and refunds</h4>
                        <p className='mb-5'>Flexible payments, flexible timings and more.</p>

                        <ul className='lg:mb-10 mb-24 unstyled'>
                            <li className='mb-4 flex gap-4 items-start'>
                                <span className='w-[35px] h-[35px] flex justify-center items-center shadow-xl bg-indigo-100 rounded-full'>
                                    <i className='uil uil-clock text-indigo-600'></i>
                                </span>
                                <div>
                                    <p className='font-bold text-sm'>30 days money back guarnatee</p>
                                    <p className='text-xs'>Don’t like the service? get full refund within 30 days or get your coach changed in 30 days</p>
                                </div>
                            </li>

                            <li className='mb-4 flex gap-4 items-start'>
                                <span className='w-[35px] h-[35px] flex justify-center items-center shadow-xl bg-indigo-100 rounded-full'>
                                    <i className='uil uil-pause text-indigo-600'></i>
                                </span>
                                <div>
                                    <p className='font-bold text-sm'>Pause your plan anytime</p>
                                    <p className='text-xs'>Need a break? Pause and start your plan anytime at no extra charges.</p>
                                </div>
                            </li>
                            <li className='mb-4 flex gap-4 items-start'>
                                <span className='w-[35px] h-[35px] flex justify-center items-center shadow-xl bg-indigo-100 rounded-full'>
                                    <i className='uil uil-invoice text-indigo-600'></i>
                                </span>
                                <div>
                                    <p className='font-bold text-sm'>Flexible Payments</p>
                                    <p className='text-xs'>Multiple EMI options available.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <PageHeader title={null} /> */}
            {!activePlan
                 ?
                <div className='py-6 z-40 bg-white fixed bottom-0 left-0 right-0 border-t-2 border-t-indigo-600'>
                    <div className="container">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="inline-flex items-start mb-5">
                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&amp;C" />
                                <label className="form-check-label text-sm text-slate-400">I have read and agree to Toneup India <Link className="text-indigo-600 underline" href={'/terms-condition'}>Terms & Condition</Link> and <Link className="text-indigo-600 underline" href={'/privacy-policy'}>Privacy Policy</Link></label>
                            </div>    
                            <h2 className='text-2xl text-slate-900 font-bold lg:mb-0 mb-4'>INR 5000</h2>
                            <button className='w-[300px] px-4 py-3 font-bold inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg text-white bg-indigo-600 border hover:border-indigo-600'>Continue</button>
                        </div>
                    </div>
                </div> : ''
            }
            
            <Footer />
 
        </>
    )
}

export default Checkout
