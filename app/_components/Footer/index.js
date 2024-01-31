import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = function(){
    const [isVisible, setVisible] = useState(true)
    return (
        <>
        <footer className={`hidden lg:block z-15 footer bg-dark-footer text-gray-200 dark:text-gray-200`}>    
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="lg:py-[60px] py-8 px-0">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-[30px]">
                                <div className="text-center">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold mb-4">Open Hours</h5>
                                    <p className="mb-2">Monday - Friday: 10 AM - 11 PM</p>
                                    <p className="mb-2">Saturday - Sunday: 9 AM - 1 PM</p>
                                    <p className="mb-0">Time can be modified for you.</p>
                                </div>
                    
                                <div className="text-center">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold mb-4">Reservation</h5>
                                    <p className="mb-2"><a href="tel:+152534-468-854" className="text-gray-200">+152 534-468-854</a></p>
                                    <p className="mb-0"><a href="mailto:contact@example.com" className="text-gray-200">contact@example.com</a></p>
                                </div>

                                <div className="text-center">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold mb-4">Address</h5>
                                    <p className="mb-2">FitnessWeb Cafe &amp; Restro</p>
                                    <p className="mb-0">C/54 Northwest Freeway, Suite 558, USA 485</p>
                                </div>
                            </div>

                    
                            <div className="grid grid-cols-1 mt-12">
                                <div className="text-block center">
                                    <img src="/assets/images/logo/logo-white.png" className="w-[150px] mx-auto" alt="" />
                                </div>

                                <ul className="list-none text-center mt-6">
                                    <li className="inline"><a href="http://linkedin.com/company/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil text-white uil-linkedin" title="Linkedin"></i></a></li>
                                    <li className="inline"><a href="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil text-white uil-facebook-f align-middle" title="facebook"></i></a></li>
                                    <li className="inline"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil text-white uil-instagram align-middle" title="instagram"></i></a></li>
                                    <li className="inline"><a href="https://twitter.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil text-white uil-twitter align-middle" title="twitter"></i></a></li>
                                    <li className="inline"><a href="mailto:support@fitness.web" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil text-white uil-envelope align-middle" title="email"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-none text-center flex gap-4 justify-center mb-0">
                <li className="inline"><a href="/term-conditions" target="_blank" className="">Term Conditions</a></li>
                <li className="inline"><a href="/privacy-policy" target="_blank" className="">Privacy Policy</a></li>
            </ul>
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-1">
                        <p className="mb-0">© 2023 FitnessWeb. Design with <i className="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">FtinessWeb</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
        <ul className="z-10 border-t-4 border-t-indigo-500 fixed bottom-0 left-0 right-0 lg:hidden bg-white grid grid-cols-4 text-center">
            <li className="transition-all duration-500 hover:bg-indigo-500 hover:text-white py-3">
                <Link href={'/'}>
                    <i className="text-[28px] block text-indigo-500 hover:text-white uil uil-home"></i>
                    <span className="text-xs leading-4">Home</span>
                </Link>
            </li>
            <li className="transition-all duration-500 hover:bg-indigo-500 hover:text-white py-3">
                <Link href={'/trainers'}>
                    <i className="text-[28px] block text-indigo-500 hover:text-white uil uil-search"></i>
                    <span className="text-xs leading-4">Search</span>
                </Link>
            </li>
            <li className="transition-all duration-500 hover:bg-indigo-500 hover:text-white py-3">
                <Link href={'/blogs'}>
                    <i className="text-[28px] block text-indigo-500 hover:text-white uil uil-calender"></i>
                    <span className="text-xs leading-4">Events</span>
                </Link>
            </li>
            <li className="transition-all duration-500 hover:bg-indigo-500 hover:text-white py-3">
                <Link href={'#'} onClick={e => setVisible(!isVisible)}>
                    <i className="text-[28px] block text-indigo-500 hover:text-white uil uil-info-circle"></i>
                    <span className="text-xs leading-4">Info</span>
                </Link>
            </li>
        </ul>  
        {!isVisible && <span style={{backdropFilter:'blur(5px)', zIndex:8}} className="block lg:hidden bg-indigo-500 opacity-75 w-100 h-100 fixed top-0 left-0 right-0 bottom-0"></span>}
        <div style={{transform: `translateY(${isVisible ? '100%' : '0'})`,zIndex:9}} className="block lg:hidden bg-white rounded-[20px_20px_0_0] text-gray border-t-indigo-500 border-t-4 fixed bottom-[70px] p-10 duration-500 left-0 right-0 vh-100">
            <Image 
                src={'/assets/images/logo/logo-black.png'}
                width={150}
                height={100}
                alt={'Footer Logo'} 
            />
            <p className="mt-4 mb-8 mx-auto">Our vision is to empower everyone <br /> to live a healthy life.</p>
            <div className=" mb-8">
                <h5 className="tracking-[1px] font-semibold mb-4">Open Hours</h5>
                <p className="mb-2">Monday - Friday: 10 AM - 11 PM</p>
                <p className="mb-2">Saturday - Sunday: 9 AM - 1 PM</p>
                {/* <p className="mb-0">Time can be modified for you.</p> */}
            </div>
            <div className="">
                <h5 className="tracking-[1px] font-semibold mb-4">Connect with Us</h5>
                <p className="mb-0"><a href="tel:+152534-468-854">+152 534-468-854</a></p>
                <p className="mb-0"><a href="mailto:contact@example.com">contact@example.com</a></p>
                <p className="mb-0">C/54 Northwest Freeway, Suite 558, USA 485</p>
            </div>
        </div> 
     </>
    )
}

export default Footer;