"use client";

import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import PageHeader from '@/app/_components/PageHeader';
import { useParams } from 'next/navigation'
import { useState } from 'react';
 
export default function blogDetail(){
    const params = useParams()
    let data = BLOGS.filter(trainer => trainer.id == params?.blogDetail || 1)
    const [trainerDetail, setTrainerDetail] = useState(data[0]);
    
    return (
        <>
        <Header />
        <section className="relative table w-full pt-48 pb-10 bg-center bg-cover bg-[url(/assets/images/fitness/inner-page-banner-2.jpg)]">
            <div className="absolute inset-0 bg-gradient-to-t to-black from-black/40"></div>
            <PageHeader title={'Blog 1'} variant={'dark'} />
        </section>

        <Footer />
        </>
    )
}