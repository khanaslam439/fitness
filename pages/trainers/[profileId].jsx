
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import ProfileCard from '@/app/_components/ProfileCard';
import { TRAINER_LIST } from '@/constants/common';
import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'; 
import SliderWidget from '@/app/_components/SliderWidget';
import FeatureBadge from '@/app/_components/FeatureBadge';
import ReviewForm from '@/app/_components/ReviewForm';

export default function ProfileId(){
    const params = useParams();
    const [trainer, setTrainer] = useState([]);
    const [isOpen, openForm] = useState(true)
    useEffect(() => {
        const tr_list = TRAINER_LIST.filter(trainer => trainer.id == params?.profileId)
        setTrainer(tr_list[0])
    },[params])   
    
    const [activeIndex, setActiveIndex] = useState(0)
    
    const getFilterData = useCallback(type => {
        const filterData = trainer?.filters?.filter(el => el.type === type && el);    
        if(!filterData) return []
        console.log(filterData)
            return type == 'lang' ? filterData[0].value : [filterData[0].value];
    },[trainer]) 

    return (
        <>
        <Header />
        <section className="relative table w-full pt-10 pb-10">
            <div className="absolute inset-0 bg-gradient-to-t to-black from-black/40"></div>
            {/* <PageHeader title={trainer?.type} variant={'dark'} /> */}
        </section>
        <section className='bg-white pt-10'>
            <div className='container grid grid-cols-12 gap-[20px]'>
                
                
                <div className='col-span-4'>
                    <ProfileCard data={trainer} />
                </div>
                <div className='col-span-8'>
                    <div className="">
                        <div className=" border-t border-gray-100 dark:border-slate-800">
                            <ul className="inline-block w-fit flex gap-5 text-center" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                <li role="presentation" className="inline-block">
                                    <button className={`text-md ${activeIndex == 1 ? '' : 'font-bold text-indigo-600'}`} onClick={e => setActiveIndex(0)}>About Me</button>
                                </li>
                                <li role="presentation" className="inline-block">
                                    <button className={`text-md border-b ${activeIndex == 0 ? '' : 'font-bold text-indigo-600'}`} onClick={e => setActiveIndex(1)}>Reviews</button>
                                </li>
                            </ul>

                            <div id="StarterContent" className="mt-4 rounded-xl bg-white p-5 shadow-xl">
                                <div className={activeIndex == 0 ? '' : 'hidden'}>
                                    <h4 className='text-gray-400 mb-2'>Overview</h4>
                                    <p className="text-black text-md italic font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                    <div className='my-10 grid grid-cols-4'>
                                    <FeatureBadge data={getFilterData('level')} title={'Level'} />
                                    <FeatureBadge data={getFilterData('session')} title={'Session'} />
                                    <FeatureBadge data={getFilterData('mode')} title={'Training Mode'} />
                                    <FeatureBadge data={getFilterData('lang')} title={'Language'} />
                                    </div>
                                    <div className='my-10'></div>
                                    <h4 className='text-md text-gray-400 mb-2'>Localization</h4>
                                    <p className="text-black font-bold">I do travel up to 20km from New Delhi</p>
                                </div>
                                
                                <div className={activeIndex == 1 ? '' : 'hidden'}>
                                    {/* <div className=''></div> */}
                                    <div className='grid grid-cols-12 w-100'>
                                        <div className='text-center col-span-4'>
                                            <div className='bg-orange-400 font-bold mb-4 rounded w-fit px-7 mx-auto py-2'>4.0</div>
                                            <div>
                                                <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                <i className='mdi mdi-star-outline text-[21px] text-orange-400'></i>
                                            </div>
                                            <label className='m-0'>Based on 6 Reviews</label>
                                            <button onClick={() => openForm(true)}   className='bg-indigo-400 p-2 px-6 text-white my-4 block mx-auto'>Write a review</button>
                                        </div>
                                        <div className='col-span-8'>
                                            <SliderWidget />
                                        </div>

                                    </div>

                                    <div className="mt-10">
                                        <div className='bg-gray-100 p-4 mb-4 grid grid-cols-12 gap-4 border-b'>
                                            <div className='col-span-4'>
                                                <img src="/assets/images/client/08.jpg" alt="" width={80} height={80} className='rounded-full mx-auto' />
                                                <h4 className='mb-0 text-center font-bold'>John Doe</h4>
                                                <small className='text-center mb-2 block'>10 Aug, 2023</small>
                                                <div style={{transform:'scale(.8)'}}>
                                                    <SliderWidget />
                                                </div>
                                            </div>
                                            <div className='col-span-8'>
                                                <div>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star-outline text-[21px] text-orange-400'></i>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laboriosam tempore impedit numquam, sit commodi autem, iure, labore vel minima sapiente? Id reprehenderit quis voluptas placeat reiciendis nemo. Ipsam, molestias.</p>
                                            </div>
                                        </div>
                                        <div className='bg-gray-100 p-4 mb-4 grid grid-cols-12 gap-4 border-b'>
                                            <div className='col-span-4'>
                                                <img src="/assets/images/client/08.jpg" alt="" width={80} height={80} className='rounded-full mx-auto' />
                                                <h4 className='mb-0 text-center font-bold'>John Doe</h4>
                                                <small className='text-center mb-2 block'>10 Aug, 2023</small>
                                                <div style={{transform:'scale(.8)'}}>
                                                    <SliderWidget />
                                                </div>
                                            </div>
                                            <div className='col-span-8'>
                                                <div>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star-outline text-[21px] text-orange-400'></i>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laboriosam tempore impedit numquam, sit commodi autem, iure, labore vel minima sapiente? Id reprehenderit quis voluptas placeat reiciendis nemo. Ipsam, molestias.</p>
                                            </div>
                                        </div>
                                        <div className='bg-gray-100 p-4 mb-4 grid grid-cols-12 gap-4 border-b'>
                                            <div className='col-span-4'>
                                                <img src="/assets/images/client/08.jpg" alt="" width={80} height={80} className='rounded-full mx-auto' />
                                                <h4 className='mb-0 text-center font-bold'>John Doe</h4>
                                                <small className='text-center mb-2 block'>10 Aug, 2023</small>
                                                <div style={{transform:'scale(.8)'}}>
                                                    <SliderWidget />
                                                </div>
                                            </div>
                                            <div className='col-span-8'>
                                                <div>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star-outline text-[21px] text-orange-400'></i>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laboriosam tempore impedit numquam, sit commodi autem, iure, labore vel minima sapiente? Id reprehenderit quis voluptas placeat reiciendis nemo. Ipsam, molestias.</p>
                                            </div>
                                        </div>
                                        <div className='bg-gray-100 p-4 mb-4 grid grid-cols-12 gap-4 border-b'>
                                            <div className='col-span-4'>
                                                <img src="/assets/images/client/08.jpg" alt="" width={80} height={80} className='rounded-full mx-auto' />
                                                <h4 className='mb-0 text-center font-bold'>John Doe</h4>
                                                <small className='text-center mb-2 block'>10 Aug, 2023</small>
                                                <div style={{transform:'scale(.8)'}}>
                                                    <SliderWidget />
                                                </div>
                                            </div>
                                            <div className='col-span-8'>
                                                <div>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star-outline text-[21px] text-orange-400'></i>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laboriosam tempore impedit numquam, sit commodi autem, iure, labore vel minima sapiente? Id reprehenderit quis voluptas placeat reiciendis nemo. Ipsam, molestias.</p>
                                            </div>
                                        </div>
                                        <div className='bg-gray-100 p-4 mb-4 grid grid-cols-12 gap-4 border-b'>
                                            <div className='col-span-4'>
                                                <img src="/assets/images/client/08.jpg" alt="" width={80} height={80} className='rounded-full mx-auto' />
                                                <h4 className='mb-0 text-center font-bold'>John Doe</h4>
                                                <small className='text-center mb-2 block'>10 Aug, 2023</small>
                                                <div style={{transform:'scale(.8)'}}>
                                                    <SliderWidget />
                                                </div>
                                            </div>
                                            <div className='col-span-8'>
                                                <div>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                    <i className='mdi mdi-star-outline text-[21px] text-orange-400'></i>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laboriosam tempore impedit numquam, sit commodi autem, iure, labore vel minima sapiente? Id reprehenderit quis voluptas placeat reiciendis nemo. Ipsam, molestias.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div className='py-10 bg-white'></div>
        <ReviewForm isOpen={isOpen} openForm={openForm} />
        <Footer />
        </>
    )
}
