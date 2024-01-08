
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import ProfileCard from '@/app/_components/ProfileCard';
import { TRAINER_LIST } from '@/constants/common';
import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'; 
import SliderWidget from '@/app/_components/SliderWidget';
import FeatureBadge from '@/app/_components/FeatureBadge';
import ReviewForm from '@/app/_components/ReviewForm';
import PageHeader from '@/app/_components/PageHeader';

export default function ProfileId(){
    const params = useParams();
    const [trainer, setTrainer] = useState([]);
    const [isOpen, openForm] = useState(false)
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
        <PageHeader title={trainer?.type} subTitle={trainer?.name} variant={'dark'} />
        <section className='bg-gray-100 lg:pt-10 pt-4'>
            <div className='container grid lg:grid-cols-12 gap-[20px]'>
                
                
                <div className='lg:col-span-4'>
                    <ProfileCard data={trainer} />
                </div>
                <div className='lg:col-span-8'>
                    <div className="">
                        <div className="border-t mb-5 border-gray-100 dark:border-slate-800">
                            <ul className="inline-block w-fit flex gap-5 text-center" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                <li role="presentation" className="inline-block">
                                    <button className={`text-md ${activeIndex == 1 ? '' : 'font-bold text-indigo-600'}`} onClick={e => setActiveIndex(0)}>About Me</button>
                                </li>
                                <li role="presentation" className="inline-block">
                                    <button className={`text-md border-b ${activeIndex == 0 ? '' : 'font-bold text-indigo-600'}`} onClick={e => setActiveIndex(1)}>Reviews</button>
                                </li>
                            </ul>

                            <div id="StarterContent" className="mt-4 rounded-xl bg-white p-5 border duration-500 hover:shadow-lg">
                                <div className={activeIndex == 0 ? '' : 'hidden'}>
                                    <h4 className='text-gray-400 mb-2'>Overview</h4>
                                    <p className="text-black text-md italic font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio <br className='lg:hidden' /><br className='lg:hidden' />consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                    <div className='my-10 grid lg:grid-cols-4'>
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
                                    <div className='grid lg:grid-cols-12 w-100'>
                                        <div className='lg:text-center col-span-4'>
                                            <div className='bg-orange-400 font-bold mb-4 rounded w-fit px-7 lg:mx-auto py-2'>4.0</div>
                                            <div>
                                                <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                <i className='mdi mdi-star text-[21px] text-orange-400'></i>
                                                <i className='mdi mdi-star-outline text-[21px] text-orange-400'></i>
                                            </div>
                                            <label className='m-0'>Based on 6 Reviews</label>
                                            <button onClick={() => openForm(true)}   className='bg-indigo-400 p-2 px-6 text-white my-4 block lg:mx-auto mb-10 lg:mb-4'>Write a review</button>
                                        </div>
                                        <div className='col-span-8'>
                                            <SliderWidget />
                                        </div>

                                    </div>

                                    <div className="mt-10">
                                        <div className='bg-gray-100 p-4 mb-4 grid lg:grid-cols-12 gap-4 border-b'>
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
                                        <div className='bg-gray-100 p-4 mb-4 grid lg:grid-cols-12 gap-4 border-b'>
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
                                        <div className='bg-gray-100 p-4 mb-4 grid lg:grid-cols-12 gap-4 border-b'>
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
                                        <div className='bg-gray-100 p-4 mb-4 grid lg:grid-cols-12 gap-4 border-b'>
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
                                        <div className='bg-gray-100 p-4 mb-4 grid lg:grid-cols-12 gap-4 border-b'>
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
                        
                        <div className="hover:shadow-lg duration-500 mb-5 rounded-lg bg-white p-5">
                            <h4 className="text-gray-800 font-bold mt-2 text-xl mb-4"><i className='mdi mdi-star-outline me-2'></i>Trainer Speciality</h4>
                            <ul className="list-none space-x-2 space-y-2 mb-5">
                                <li className="inline-block">
                                    <a href="#" className="group flex items-center bg-gray-100 dark:bg-slate-900 hover:text-indigo-600  border-2 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                                        <i className="uil uil-airplay me-2 text-[18px]"></i>
                                        <span className="text-[14px] font-medium">Body Building</span>
                                    </a>
                                </li>
                                
                                <li className="inline-block">
                                    <a href="#" className="group flex items-center bg-gray-100 dark:bg-slate-900 hover:text-indigo-600  border-2 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                                        <i className="uil uil-at me-2 text-[18px]"></i>
                                        <span className="text-[14px] font-medium">Fitness</span>
                                    </a>
                                </li>
                                
                                <li className="inline-block">
                                    <a href="#" className="group flex items-center bg-gray-100 dark:bg-slate-900 hover:text-indigo-600 border-2 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                                        <i className="uil uil-award me-2 text-[18px]"></i>
                                        <span className="text-[14px] font-medium">Nutritionist</span>
                                    </a>
                                </li>
                                
                                <li className="inline-block">
                                    <a href="#" className="group flex items-center bg-gray-100 dark:bg-slate-900 hover:text-indigo-600 border-2 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                                        <i className="uil uil-bag me-2 text-[18px]"></i>
                                        <span className="text-[14px] font-medium">Self Defense</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>

                        <div className="hover:shadow-lg mb-5 rounded-lg bg-white p-5">
                            <h4 className="text-gray-800 font-bold mt-2 text-xl mb-4"> <i className="uil uil-trophy text-[21px] me-2"></i>Certifications</h4>
                            <ul className="list-none  space-y-2 mb-5">
                                <li className="flex justify-between">
                                    <span className="text-[14px] font-medium flex items-center"><i className="uil uil-file mr-2 text-lg"></i>Body Building</span>
                                    <a href="/assets/pdf/sample.pdf" target="_blank" className="text-gray">
                                        <i className="uil uil-angle-right text-[18px]"></i>
                                    </a>
                                </li>
                                
                                <li className="flex justify-between">
                                    <span className="text-[14px] font-medium flex items-center"><i className="uil uil-file mr-2 text-lg"></i>Nutritionist</span>
                                    <a href="/assets/pdf/sample.pdf" target="_blank" className="text-gray">
                                        <i className="uil uil-angle-right text-[18px]"></i>
                                    </a>
                                </li>
                                
                                <li className="flex justify-between">
                                    <span className="text-[14px] font-medium flex items-center"><i className="uil uil-file mr-2 text-lg"></i>Self Defense</span>
                                    <a href="/assets/pdf/sample.pdf" target="_blank" className="text-gray">
                                        <i className="uil uil-angle-right text-[18px]"></i>
                                    </a>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-[14px] font-medium flex items-center"><i className="uil uil-file mr-2 text-lg"></i>Weight Loss</span>
                                    <a href="/assets/pdf/sample.pdf" target="_blank" className="text-gray">
                                        <i className="uil uil-angle-right text-[18px]"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div className='lg:py-10 py-5'></div>
        <ReviewForm isOpen={isOpen} openForm={openForm} />
        <Footer />
        </>
    )
}