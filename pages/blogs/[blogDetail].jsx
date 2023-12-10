"use client";

import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import PageHeader from '@/app/_components/PageHeader';
import { BLOGS } from '@/constants/common';
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
            <PageHeader title={trainerDetail.title} variant={'dark'} />
        </section>
        <section className="mb-20 bg-white">
            <div className="container blog_detail_box mx-auto">
                <div className="img_wrapper">
                    <p className='mb-5 pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src="//picsum.photos/1920/800" className='my-10 w-100 rounded-2xl' alt="" />
                </div>
                <div className="content_wrapper">
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h5 className='text-lg mb-5'>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                    <p className='mb-5'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <p className='mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h5 className='text-lg mb-5'>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                    <p className='mb-20'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </div>
            </div>
       </section>
        <Footer />
        </>
    )
}