"use client";

import TrainerCard from "@/app/_components/TrainerCard";
import { useEffect, useState } from "react";
import {TRAINER_LIST} from '@/constants/common'
import Filter from "@/app/_components/Filters";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import PageHeader from "@/app/_components/PageHeader";
import SideFilter from "@/app/_components/SideFilter";
import BidForm from "@/app/_components/BidForm";
export default function Trainers(){
    const [trainers, setTrainers] = useState([]);
    const [activeTrainer, setActiveTrainer] = useState(null);
    const [isLocation, setLocation] = useState(false);
    const [isCategory, setCategory] = useState(false)
    const [isOpen, setOpen] = useState(false);
    const [form, setForm] = useState({name:'', location:''});
    useEffect(() => {
        loadTrainers();
    },[])

    const loadTrainers = () => {
        setTrainers(TRAINER_LIST);
    }

    const clickHandler = (event, type) => {
        if(type == 'location'){
            setForm({...form, location: event.target.innerText})
            setLocation(false)
        } else{
            setForm({...form, name: event.target.innerText})
            setCategory(false)
        }    
    }
    return (
        <>
        <Header />
            <section className="relative table w-full pt-24 h-full">
                <div className="absolute inset-0 bg-gradient-to-t to-indigo-600 from-indigo-600"></div>
                <div className="relative container overflow-visible">
                    <div className="grid md:grid-cols-2 pb-16">
                        <div>
                            <h4 className="md:text-4xl text-xl capitalize mb-6 text-white font-bold">Transform your body with Strength & Conditioning.</h4>
                            <ul className="mb-8">
                                <li className="text-slate-100 gap-2 flex mb-1"><i className="uil uil-check-circle"></i>Get personalized training plans</li>
                                <li className="text-slate-100 gap-2 flex mb-1"><i className="uil uil-check-circle"></i>Unlimited calls with coach</li>
                                <li className="text-slate-100 gap-2 flex mb-1"><i className="uil uil-check-circle"></i>Nutrition plans made for your lifestyle</li>
                            </ul>
                            <div className="flex flex-wrap md:flex-nowrap bg-white items-center rounded-lg md:rounded-full gap-3 w-fit p-1 px-2" style={{boxShadow:'0 0 0 10px #fff4'}}>
                                <div className="relative">
                                    <input type="text" defaultValue={form.name || ''} placeholder="e.g. Gym trainer" onFocus={e => setCategory(true)} className="rounded-2xl focus:border-0 focus:outline-0 p-3" />
                                    <ul className={`absolute bg-white shadow p-2 border border-slate-300 w-full rounded-xl z-10 ${isCategory ? '' : 'hidden'}`}>
                                        <li onClick={e => clickHandler(e, 'category')} className="text-slate-600 text-sm font-semibold cursor-pointer p-2 hover:bg-slate-100 hover:text-indigo-600"><i className="uil uil-search mr-1"></i>Yoga Trainer</li>
                                        <li onClick={e => clickHandler(e, 'category')} className="text-slate-600 text-sm font-semibold cursor-pointer p-2 hover:bg-slate-100 hover:text-indigo-600"><i className="uil uil-search mr-1"></i>Zumba Trainer</li>
                                        <li onClick={e => clickHandler(e, 'category')} className="text-slate-600 text-sm font-semibold cursor-pointer p-2 hover:bg-slate-100 hover:text-indigo-600"><i className="uil uil-search mr-1"></i>Fitness & Nutritions</li>
                                        <li onClick={e => clickHandler(e, 'category')} className="text-slate-600 text-sm font-semibold cursor-pointer p-2 hover:bg-slate-100 hover:text-indigo-600"><i className="uil uil-search mr-1"></i>Online Trainer</li>
                                    </ul>
                                </div>
                                <div className="relative">
                                    <div className="flex items-center">
                                        <i className="uil uil-map-marker text-slate-400"></i><input type="text"  defaultValue={form.location || ''} placeholder="location" onFocus={e => setLocation(true)} className="rounded-xl focus:border-0 focus:outline-0 p-3 pl-0" />
                                    </div>
                                    <ul className={`absolute bg-white shadow p-2 border border-slate-300 w-full rounded-xl z-10 ${isLocation ? '' : 'hidden'}`}>
                                        <li onClick={e => clickHandler(e, 'location')} className="text-slate-600 text-sm font-semibold cursor-pointer p-2 hover:bg-slate-100 hover:text-indigo-600"><i className="uil uil-map mr-1"></i>Near me</li>
                                        <li onClick={e => clickHandler(e, 'location')} className="text-slate-600 text-sm font-semibold cursor-pointer p-2 hover:bg-slate-100 hover:text-indigo-600"><i className="uil uil-video mr-1"></i>Online</li>
                                    </ul>
                                </div>
                                <button className="w-full lg:w-fit bg-indigo-600 text-white rounded-lg md:rounded-full flex items-center gap-2 py-2.5 px-5"><i className="uil uil-search"></i> Search</button>
                            </div>
                        </div>
                        <img className="hidden md:block md:absolute z-10 bottom-0 right-32 w-[350px]" src="https://assets.setmore.com/website/v2/images/industry-pages/gym/fit-person.png" alt="" srcset="" />
                    </div>
                </div>
            </section>
            <section className="relative bg-white lg:py-10 py-4   overflow-hidden">
                <div className="lg:p-10 p-5 relative">
                    <div className="grid grid-cols-12 gap-[20px] md:grid-cols-12">
                        <div className="lg:col-span-3 col-span-12 hidden lg:block">
                            <SideFilter />
                        </div>
                        <div className="lg:col-span-9 col-span-12">
                            <div className="px-2">
                                <Filter />
                            </div>
                            <div className="grid lg:grid-cols-3 lg:gap-[20px] gap-[20px]">
                                {trainers && trainers.length > 0 && trainers.map((trainer,index) => {
                                    const detail = {index, trainerId: trainer.id, name: trainer.name, filters:trainer.filters, type: trainer.type, level: trainer.level,profileLink:trainer.profileLink, plan:trainer.plan }
                                    return <TrainerCard key={index} setOpen={setOpen} setActiveTrainer={setActiveTrainer} {...detail} />
                                })}    
                            </div>
                            <div className="text-center pt-16 pb-16 bg-white">
                                <button className="bg-indigo-600 text-white rounded-lg px-10 py-2">Load More...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BidForm visible={isOpen} setVisible={setOpen} activeTrainer={activeTrainer}  />

        <Footer />
        </>
    )
}