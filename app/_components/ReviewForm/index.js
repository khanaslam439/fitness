import Image from 'next/image';
import './review_form.css';
import closeBtn from './closeBtn.svg';
import { useState } from 'react';
export default function ReviewForm(prop){
    const [remainCount, setRemainCount] = useState(150);
    const [feature1, setFeature1] = useState(5)
    const [feature2, setFeature2] = useState(5)
    const [feature3, setFeature3] = useState(5)
    const [feature4, setFeature4] = useState(5)
    const [feature5, setFeature5] = useState(5)
    const reviewCount = value => {
        setRemainCount(150 - value.length);
    }
    return (
        <div className={`fixed z-50 overflow-hidden inset-0 m-auto justify-center items-center reviewform__popup ${prop.isOpen ? 'flex' : 'hidden'}`}>
            <div className="relative h-auto">
                <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                    <div className="flex justify-end items-center mb-7 border-b border-gray-100 dark:border-gray-700">
                        <h4 className='text-xl uppercase font-bold text-indigo-500'>Write a review</h4>
                        <button onClick={e => prop.openForm(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="NftBid">
                            <Image alt='close btn' src={closeBtn} />
                        </button>
                    </div>
                    <div className="">
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <div className='flex justify-between w-full'>
                                        <label className='font-semibold'>Effectiveness of Training</label>
                                        <div className='cursor-pointer'>
                                            <i className={`mdi ${feature1 <= 5 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature1(5)}></i>
                                            <i className={`mdi ${feature1 <= 4 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature1(4)}></i>
                                            <i className={`mdi ${feature1 <= 3 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature1(3)}></i>
                                            <i className={`mdi ${feature1 <= 2 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature1(2)}></i>
                                            <i className={`mdi ${feature1 == 1 ? 'mdi-star' : 'mdi-star-outline'} text-xl`} onClick={e => setFeature1(1)}></i>
                                        </div>
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <label className='font-semibold'>Knowledge and Expertise</label>
                                        <div className='cursor-pointer'>
                                            <i className={`mdi ${feature2 <= 5 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature2(5)}></i>
                                            <i className={`mdi ${feature2 <= 4 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature2(4)}></i>
                                            <i className={`mdi ${feature2 <= 3 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature2(3)}></i>
                                            <i className={`mdi ${feature2 <= 2 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature2(2)}></i>
                                            <i className={`mdi ${feature2 == 1 ? 'mdi-star' : 'mdi-star-outline'} text-xl`} onClick={e => setFeature2(1)}></i>
                                        </div>
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <label className='font-semibold'>Communication Skills</label>
                                        <div className='cursor-pointer'>
                                            <i className={`mdi ${feature3 <= 5 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature3(5)}></i>
                                            <i className={`mdi ${feature3 <= 4 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature3(4)}></i>
                                            <i className={`mdi ${feature3 <= 3 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature3(3)}></i>
                                            <i className={`mdi ${feature3 <= 2 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature3(2)}></i>
                                            <i className={`mdi ${feature3 == 1 ? 'mdi-star' : 'mdi-star-outline'} text-xl`} onClick={e => setFeature3(1)}></i>
                                        </div>
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <label className='font-semibold'>Professionalism</label>
                                        <div className='cursor-pointer'>
                                            <i className={`mdi ${feature4 <= 5 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature4(5)}></i>
                                            <i className={`mdi ${feature4 <= 4 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature4(4)}></i>
                                            <i className={`mdi ${feature4 <= 3 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature4(3)}></i>
                                            <i className={`mdi ${feature4 <= 2 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature4(2)}></i>
                                            <i className={`mdi ${feature4 == 1 ? 'mdi-star' : 'mdi-star-outline'} text-xl`} onClick={e => setFeature4(1)}></i>
                                        </div>
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <label className='font-semibold'>Availability and Punctuality</label>
                                        <div className='cursor-pointer'>
                                            <i className={`mdi ${feature5 <= 5 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature5(5)}></i>
                                            <i className={`mdi ${feature5 <= 4 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature5(4)}></i>
                                            <i className={`mdi ${feature5 <= 3 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature5(3)}></i>
                                            <i className={`mdi ${feature5 <= 2 ? 'mdi-star' : 'mdi-star-outline'}  text-xl`} onClick={e => setFeature5(2)}></i>
                                            <i className={`mdi ${feature5 == 1 ? 'mdi-star' : 'mdi-star-outline'} text-xl`} onClick={e => setFeature5(1)}></i>
                                        </div>
                                    </div>

                                </div>

                                <div className="mb-4">
                                    <label className="text-[18px] font-semibold text-indigo-600 mb-2 block">Your Review</label>
                                    <div className=''>
                                        <textarea className='w-full resize-none rounded-lg border block gray' rows={4} onKeyUp={e => reviewCount(e.target.value)} maxLength={150}></textarea>
                                        <small>{remainCount} character remaining</small>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="mt-4">
                            <a href='#' data-modal-toggle="NftBid" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white w-full"><i className="mdi mdi-message"></i> Submit Your Review</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}