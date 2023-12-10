"use client";

import FeatureBadge from '@/app/_components/FeatureBadge';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import PageHeader from '@/app/_components/PageHeader';
import ProfileCard from '@/app/_components/ProfileCard';
import { TRAINER_LIST } from '@/constants/common';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
 
export default function ProfileId(){
    const params = useParams()
    let data = TRAINER_LIST.filter(trainer => trainer.id == params?.profileId || 1)
    const [trainerDetail, setTrainerDetail] = useState(data[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const getFilterData = type => {
        var data = trainerDetail?.filters.filter(el => el.type == type && el)
        
        return type == 'lang' ? data[0].value : [data[0].value]
    }

    return (
        <>
        <Header />
        <section className="relative table w-full pt-48 pb-10 bg-center bg-cover bg-[url(/assets/images/fitness/inner-page-banner-2.jpg)]">
            <div className="absolute inset-0 bg-gradient-to-t to-black from-black/40"></div>
            <PageHeader title={trainerDetail?.type} variant={'dark'} />
        </section>
        <section className='bg-white pt-10'>
            <div className='container grid grid-cols-12 gap-[20px]'>
                <div className='col-span-8'>
                    <div className="">
                        <div className="px-5 border-t border-gray-100 dark:border-slate-800">
                            <ul className="inline-block w-fit flex gap-5 text-center" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                <li role="presentation" className="inline-block">
                                    <button className={`text-lg ${activeIndex == 1 ? '' : 'font-bold text-indigo-600'}`} onClick={e => setActiveIndex(0)}>About Me</button>
                                </li>
                                <li role="presentation" className="inline-block">
                                    <button className={`text-lg ${activeIndex == 0 ? '' : 'font-bold text-indigo-600'}`} onClick={e => setActiveIndex(1)}>Reviews</button>
                                </li>
                            </ul>

                            <div id="StarterContent" className="p-5 border border-slate-300 rounded-lg mt-4">
                                <div className={activeIndex == 0 ? '' : 'hidden'}>
                                    <h4 className='text-md font-medium mb-4'>Overview</h4>
                                    <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                    <div className='my-10'></div>
                                    <div className='grid grid-cols-12'>
                                        <div className='md:col-span-6 lg:col-span-4'>
                                            <div className='flex items-end'>
                                                    <h4 className='text-3xl mr-1'>12</h4>
                                                    <p>Sessions</p>
                                            </div>
                                        </div>
                                        <div className='md:col-span-6 lg:col-span-4'>
                                            <div className='flex items-end'>
                                                    <h4 className='text-3xl mr-1'>06</h4>
                                                    <p>Certificates</p>
                                            </div>
                                        </div>
                                        <div className='md:col-span-6 lg:col-span-4'>
                                            <div className='flex items-end'>
                                                    <h4 className='text-3xl mr-1'>23</h4>
                                                    <p>Reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-10'></div>
                                    <FeatureBadge data={getFilterData('level')} title={'Level'} />
                                    <FeatureBadge data={getFilterData('mode')} title={'Training Mode'} />
                                    <FeatureBadge data={getFilterData('lang')} title={'Language'} />

                                    <h4 className='text-md font-medium mb-2'>Localization</h4>
                                    <p className="text-slate-400">I do travel up to 20km from New Delhi</p>
                                </div>
                                
                                <div className={activeIndex == 1 ? '' : 'hidden'}>

                                    <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='col-span-4'>
                    <ProfileCard data={trainerDetail} className={'sticky-100'} />
                </div>
            </div>
        </section>
        <div className='py-10 bg-white'></div>
        <Footer />
        </>
    )
}