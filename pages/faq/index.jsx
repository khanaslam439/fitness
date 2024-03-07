import Accordion from '@/app/_components/Accordion'
import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import React, { useState } from 'react'

const FAQ = () => {
    const FAQ_LIST = ['General','Plans','Stories','Çontact Us','Miscellaneuos']
    const [activeFaq, setActiveFaq] = useState(FAQ_LIST[0])
  return (
    <>
        <Header />
        {/* <FaqHeader />    */}
        <main className='bg-white'>
            <section className="relative table w-full pt-32 pb-0 bg-white">
                <div className="absolute inset-0 bg-gradient-to-t to-indigo-700 h-[300px] from-indigo-400" style={{zIndex: 0}}></div>
                <div className="container">
                    <div className='relative z-10'>
                        <h1 className='lg:text-4xl text-2xl text-center text-white font-normal mb-5'>Frequently Asked Question</h1>
                        <div className='flex bg-[#fff9] rounded-xl overflow-hidden max-w-[650px] mx-auto'>
                            <i className="uil uil-search text-xl p-2 lg:p-3 lg:px-5"></i>
                            <input type="text" className='py-3 focus:border-0 focus:outline-0  px-0 w-full bg-transparent block text-slate-900 placeholder:text-slate-700' placeholder='e.g. How to reduce belly fat?   ' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-24 pb-20 container'>
                <div className="grid grid-cols-12 gap-10 relative">
                    <div className='col-span-11 md:col-span-4'>
                        <div className='lg:sticky lg:top-24 overflow-scroll md:overflow-visible'>

                            <ul className='flex md:block gap-2 md:gap-0'>
                                {FAQ_LIST.map(num => 
                                    <li>
                                        <a onClick={e => setActiveFaq(num)} className={`md:p-4 p-3 md:px-6 md:bg-indigo-100 rounded-md text-indigo-900 inline-block mb-1 w-max lg:w-[80%] relative hover:font-bold text-sm ${activeFaq == num && 'border-l-4 border-l-indigo-600'}`} href={`#category${num}`}> {num} <span className='absolute right-4 uil uil-arrow-right'></span></a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-10 md:col-span-8'>
                        {activeFaq == 'General' && <div className='mb-10'>
                            <div>
                                <h4 className='text-xl font-bold mb-1'>General</h4>
                                <p className='text-xs mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore vero.</p>
                            </div>
                            <div>
                                <Accordion title={'How to reduce Belly Fat?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                                <Accordion title={'Can you give me a sample diet?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                                <Accordion title={'How is Toneup different from other fitness platforms?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                            </div>
                        </div>}
                        {activeFaq == 'Plans' && <div className='mb-10'>
                            <div>
                                <h4 className='text-xl font-bold mb-1'>Plans</h4>
                                <p className='text-xs mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore vero.</p>
                            </div>
                            <div>
                                <Accordion title={'What’s the duration of a basic plan?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                                <Accordion title={'Can I pause my plan?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                                <Accordion title={'Do I need to consume any form of supplements with my Fitelo plan?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                            </div>
                        </div>}
                        {activeFaq == 'Stories' && <div className='mb-10'>
                            <div>
                                <h4 className='text-xl font-bold mb-1'>Stories</h4>
                                <p className='text-xs mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore vero.</p>
                            </div>
                            <div>
                                <Accordion title={'Are your Trainers qualified?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                                <Accordion title={'How soon can I choose my fitness trainer?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                                <Accordion title={'How is Toneup different from other fitness platforms?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                            </div>
                        </div>}
                        {activeFaq == 'Çontact Us' && <div className='mb-10'>
                            <div>
                                <h4 className='text-xl font-bold mb-1'>Contact us</h4>
                                <p className='text-xs mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore vero.</p>
                            </div>
                            <div>
                                <Accordion title={'How to reduce Belly Fat?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                                <Accordion title={'How to reduce Belly Fat?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                                <Accordion title={'How to reduce Belly Fat?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                            </div>
                        </div>}
                        {activeFaq == 'Miscellaneuos' && <div>
                            <div>
                                <h4 className='text-xl font-bold mb-1'>Miscellaneuos</h4>
                                <p className='text-xs mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore vero.</p>
                            </div>
                            <div>
                                <Accordion title={'How to reduce Belly Fat?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                                <Accordion title={'How to reduce Belly Fat?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                                <Accordion title={'How to reduce Belly Fat?'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae harum dolore, ipsam accusamus possimus incidunt vitae vel vero.'} />
                            </div>
                        </div>}
                    </div>
                </div>
            </section>
            <section  className='py-24 container bg-slate-100'>
                <div class="relative">
                    <div class="grid grid-cols-1 text-center">
                        <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Still have Question ? Get in touch!</h3>

                        <p class="text-slate-400 max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit omnis rerum ullam, minima cupiditate nulla quaerat asumendam.</p>
                    
                        <div class="mt-6">
                            <a href="/contact-us" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i class="uil uil-phone"></i> Contact us</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default FAQ
