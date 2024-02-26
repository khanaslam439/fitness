
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import { TRAINER_LIST, PLANS } from '@/constants/common';
import Image from 'next/image';
import { useState } from 'react';
import './plan.css';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function trainerPlan(){
    const params = useParams();
    const [ selectedTime, setSelectedTime] = useState(0);
    const [shift, updateShift] = useState(0);
    const activeUser = TRAINER_LIST.filter(el => params?.trainerPlan?.replace('_',' ') == el.name)[0];
    const [activePlan, setActivePlan] = useState(null);
    
    return (
        <>
            <Header />
            <section className="relative table w-full pt-32 pb-0 bg-white">
                <div className="absolute inset-0 bg-gradient-to-t to-indigo-700 h-[220px] from-indigo-400" style={{zIndex: 0}}></div>
                <div className="container">
                    <div className='grid lg:grid-cols-12 grid-cols-1 lg:items-end'>
                        <div className="lg:col-span-2 text-center lg:text-start relative">
                            <Image src={`/assets/images/client/0${activeUser?.id - 100}.jpg`} width={150} height={150} className='relative bg-white rounded-full inline-block mt-3 border-double border-8 border-white' />
                            {activeUser?.plan === 'silver' && <span className="text-white text-sm font-medium px-4 py-1 rounded-full h-[28px] absolute bottom-0 lg:left-10 left-40" style={{backgroundColor:'#f96600'}}>{activeUser?.plan}</span>}
                            {activeUser?.plan === 'gold' && <span className="text-white text-sm font-medium px-4 py-1 rounded-full h-[28px] absolute bottom-0 lg:left-10 left-40" style={{backgroundColor:'#389996'}}>{activeUser?.plan}</span>}
                            {activeUser?.plan === 'platinum' && <span className="text-white text-sm font-medium px-4 py-1 rounded-full h-[28px] absolute bottom-0 lg:left-10 left-40" style={{backgroundColor:'#A1215F'}}>{activeUser?.plan}</span>}
                        </div>
                        <div className='lg:col-span-6 relative'>
                            <div className='relative lg:top-8 text-center lg:text-start mt-5 mb-10 lg:my-0'>
                                <h4 className='text-2xl mb-0 font-bold'>{activeUser?.name}</h4>
                                <span className='text-slate-500'>{activeUser?.type}</span>
                            </div>
                        </div>
                        <div className='lg:col-span-4'>
                            <div className='text-end relative -top-4 flex lg:justify-end justify-center items-center gap-3'>
                                Plan Type: 
                                <div className='relative rounded-full border border-indigo-600 w-fit overflow-hidden'>
                                    <a className='py-2 px-5 inline-block cursor-pointer bg-indigo-600 text-white'>Online</a>
                                    <a className='py-2 px-5 inline-block cursor-pointer text-indigo-600'>At Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='lg:pt-20 pb-10 container bg-white'>
                <div className='shadow-lg rounded-xl border border-slate-300 p-10'>
                    <h2 className='text-3xl mb-2 font-bold'>Choose your slot</h2>
                    <p className='text-md text-slate-500 mb-10'>Choose your best slot whenever you are avaiable</p>
                    <div className='py-3  border-b-slate-500 w-full border-b'>
                        <a className={`p-3 border-b-2 cursor-pointer ${!shift ? 'border-b-slate-900' : ''}`} onClick={e => updateShift(0)}><i className='uil uil-sun me-2'></i>Morning</a>
                        <a className={`p-3 border-b-2 cursor-pointer ${shift ? 'border-b-slate-900' : ''}`} onClick={e => updateShift(1)}><i className='uil uil-moon me-2'></i>Evening</a>
                    </div>
                    <div className={`py-4 timings ${shift == 0 ? '' : 'hidden'}`}>
                        <a className={`border border-slate-700 rounded-full p-2 px-4 cursor-pointer inline-block m-2 ms-0 ${selectedTime == 0 ? 'bg-indigo-200 text-black border-indigo-200' : ''}`} onClick={e => setSelectedTime(0)}>
                            <span className={`uil ${selectedTime == 0 ? 'uil-check-circle' :'uil-circle'} me-1`}></span>
                            <label className='cursor-pointer'>08:00 AM</label>
                        </a>
                        <a className={`border border-slate-700 rounded-full p-2 px-4 cursor-pointer inline-block m-2 ms-0 ${selectedTime == 1 ? 'bg-indigo-200 text-black border-indigo-200' : ''}`} onClick={e => setSelectedTime(1)}>
                            <span className={`uil ${selectedTime == 1 ? 'uil-check-circle' :'uil-circle'} me-1`}></span>
                            <label className='cursor-pointer'>09:00 AM</label>
                        </a>
                        <a className={`border border-slate-700 rounded-full p-2 px-4 cursor-pointer inline-block m-2 ms-0 ${selectedTime == 2 ? 'bg-indigo-200 text-black border-indigo-200' : ''}`} onClick={e => setSelectedTime(2)}>
                            <span className={`uil ${selectedTime == 2 ? 'uil-check-circle' :'uil-circle'} me-1`}></span>
                            <label className='cursor-pointer'>10:00 AM</label>
                        </a>
                    </div>
                    <div className={`py-4 timings ${shift == 1 ? '' : 'hidden'}`}>
                        <a className={`border border-slate-700 rounded-full p-2 px-4 cursor-pointer inline-block m-2 ms-0 ${selectedTime == 3 ? 'bg-indigo-200 text-black border-indigo-200' : ''}`} onClick={e => setSelectedTime(3)}>
                            <span className={`uil ${selectedTime == 3 ? 'uil-check-circle' :'uil-circle'} me-1`}></span>
                            <label className='cursor-pointer'>06:00 PM</label>
                        </a>
                        <a className={`border border-slate-700 rounded-full p-2 px-4 cursor-pointer inline-block m-2 ms-0 ${selectedTime == 4 ? 'bg-indigo-200 text-black border-indigo-200' : ''}`} onClick={e => setSelectedTime(4)}>
                            <span className={`uil ${selectedTime == 4 ? 'uil-check-circle' :'uil-circle'} me-1`}></span>
                            <label className='cursor-pointer'>07:00 PM</label>
                        </a>
                        <a className={`border border-slate-700 rounded-full p-2 px-4 cursor-pointer inline-block m-2 ms-0 ${selectedTime == 5 ? 'bg-indigo-200 text-black border-indigo-200' : ''}`} onClick={e => setSelectedTime(5)}>
                            <span className={`uil ${selectedTime == 5 ? 'uil-check-circle' :'uil-circle'} me-1`}></span>
                            <label className='cursor-pointer'>08:00 PM</label>
                        </a>
                        <a className={`border border-slate-700 rounded-full p-2 px-4 cursor-pointer inline-block m-2 ms-0 ${selectedTime == 6 ? 'bg-indigo-200 text-black border-indigo-200' : ''}`} onClick={e => setSelectedTime(6)}>
                            <span className={`uil ${selectedTime == 6 ? 'uil-check-circle' :'uil-circle'} me-1`}></span>
                            <label className='cursor-pointer'>09:00 PM</label>
                        </a>
                    </div>
                </div>
            </section>
            <section className='pt-10 pb-20 container bg-white'>
                <div className='shadow-lg rounded-xl border border-slate-300 p-10'>
                    <h2 className='text-3xl mb-2 font-bold text-center'>Choose your Plan</h2>
                    <p className='text-md text-slate-500 text-center'>Choose your best plan to Transform your goal into reality</p>
                    
                    <div className="grid lg:grid-cols-2 grid-cols-1 mt-16 ">
                        <div className='lg:order-1 order-2'>
                            <h4 className='text-lg font-semibold mb-4'>Description</h4>
                            <ul className='mb-10'>
                                <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-slate-900 rounded-full'></i>5 sessions per week</li>
                                <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-slate-900 rounded-full'></i>Total Sessions: 60</li>
                                <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-slate-900 rounded-full'></i>Please note that this package is not covered under our refund policy.</li>
                                <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-slate-900 rounded-full'></i>Per session, the cost is based on Yearly Plan pricing (excluding GST)</li>
                            </ul>
                        
                            <h4 className='text-lg font-semibold mb-4'>What are benifit of membership?</h4>
                            <ul>
                                <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-green-500'></i> You enrol with the coach of your choice and select from available slots</li>
                                <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-green-500'></i> Time slots shown here are as per your local timings</li>
                                <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-green-500'></i> Each Personal Training session will be 50 minutes long</li>
                                <li className='w-80 flex gap-1 text-sm mt-2 mb-4 text-slate-700'><i className='me-1 uil uil-check-circle text-green-500'></i> On the selected slot, the coach will start training you live</li>
                            </ul>
                        </div>
                        <div className='lg:order-2 order-1'>
                            <ul className='plan_listing'>
                                {
                                    PLANS.map(plan => 
                                        <li onClick={e => setActivePlan(plan)} className={`flex w-full justify-between rounded-lg border border-slate-300 lg:p-10 p-5 p-10 py-5 mb-4 ${(activePlan?.id == plan.id) ? "border-slate-900 enable" : ''}`}>
                                            <span></span>
                                            <p>{plan?.name}</p>
                                            <h4 className='text-2xl font-bold'><sup className='text-sm'>₹</sup> {plan?.cost}</h4>
                                        </li>    
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <PageHeader title={null} /> */}
            {activePlan
                 ?
                <div className='py-6 z-40 bg-white fixed bottom-0 left-0 right-0 border-t-2 border-t-indigo-600'>
                    <div className="container">
                        <div className="flex lg:justify-between lg:gap-0 gap-10 flex-wrap items-center">
                            <p className='text-xl text-slate-900 font-semibold'>
                                <span className='block text-indigo-500 text-sm font-normal'>Plan</span>
                                {activePlan?.name}
                            </p>
                            <h2 className='text-2xl text-slate-900 font-bold '>
                                <span className='block text-indigo-500 text-sm font-normal'>Price</span>
                                INR {activePlan?.cost}</h2>
                            <Link href={'/checkout'} className='w-[300px] px-4 py-3 font-bold inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg text-white bg-indigo-600 border hover:border-indigo-600'>Proceed Checkout</Link>
                        </div>
                    </div>
                </div> : ''
            }
            
            <Footer />
 
        </>
    )
}