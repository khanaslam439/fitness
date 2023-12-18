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
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        loadTrainers();
    },[])

    const loadTrainers = () => {
        setTrainers(TRAINER_LIST);
    }
    return (
        <>
        <Header />
        {/* content part */}
        <main>
            <section className="relative table w-full pt-48 pb-10 bg-center bg-cover bg-[url(/assets/images/fitness/inner-page-banner-2.jpg)]">
                <div className="absolute inset-0 bg-gradient-to-t to-black from-black/50"></div>
                <PageHeader title={'Trainers'} />
            </section>
            <section className="relative bg-white md:pt-24 pb-10 pt-16 overflow-hidden">
                <div className="container relative">
                    <div className="grid grid-cols-12 gap-[20px] md:grid-cols-12">
                        <div className="lg:col-span-3 sm:col-span-12">
                            <SideFilter />
                        </div>
                        <div className="lg:col-span-9 sm:col-span-12">
                            <div className="px-2">
                                <Filter />
                            </div>
                            <div className="grid grid-cols-3 gap-[10px]">
                                {trainers && trainers.length > 0 && trainers.map((trainer,index) => {
                                    const detail = {index, trainerId: trainer.id, name: trainer.name, filters:trainer.filters, type: trainer.type, level: trainer.level,profileLink:trainer.profileLink }
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
        </main>

        <Footer />
        </>
    )
}