"use client";

import TrainerCard from "@/app/_components/TrainerCard";
import { useEffect, useState } from "react";
import {TRAINER_LIST} from '@/constants/common'
import Filter from "@/app/_components/Filters";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import PageHeader from "@/app/_components/PageHeader";
export default function Trainers(){
    const [trainers, setTrainers] = useState([]);
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
                    <Filter />
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {trainers && trainers.length > 0 && trainers.map((trainer,index) => {
                            const detail = {index, profileId: trainer.id, name: trainer.name, filters:trainer.filters, type: trainer.type, level: trainer.level,profileLink:trainer.profileLink }
                            return <TrainerCard {...detail} />
                        })}
                    </div>
                </div>
            </section>
            <div className="text-center pb-16 bg-white">
                <button className="bg-indigo-600 text-white rounded-lg px-10 py-2">Load More...</button>
            </div>
        </main>

        <Footer />
        </>
    )
}
