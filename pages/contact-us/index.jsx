import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import PageHeader from "@/app/_components/PageHeader";

export default function Contact(){
    return (
        <>
            <Header />
            <PageHeader title={'Contact Us'} />
            <section className="relative md:py-24 py-16 bg-white">
                <div className="container relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        <div className="text-center px-6 mt-6">
                            <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <i className="uil uil-phone"></i>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Phone</h5>
                                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                
                                <div className="mt-5">
                                    <a href="tel:+152534-468-854" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">+152 534-468-854</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6 mt-6">
                            <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <i className="uil uil-envelope"></i>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Email</h5>
                                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                
                                <div className="mt-5">
                                    <a href="mailto:contact@example.com" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">contact@example.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6 mt-6">
                            <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <i className="uil uil-map-marker"></i>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Location</h5>
                                <p className="text-slate-400 mt-3">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                                
                                <div className="mt-5">
                                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="video-play-icon read-more lightbox relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">View on Google map</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <img src="assets/images/contact.svg" alt="" />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md  p-6">
                                    <h3 className="mb-0 text-2xl leading-normal font-medium">Get in touch</h3>
                                    <p className="mb-6">Feel free to contact us anytime</p>

                                    <form method="post" name="myForm" id="myForm" onsubmit="return validateForm()">
                                        <p className="mb-0" id="error-msg"></p>
                                        <div id="simple-msg"></div>
                                        <div className="grid lg:grid-cols-12">
                                            <div className="lg:col-span-12 mb-6">
                                                <div className="text-start">
                                                    {/* <label for="name" className="font-semibold">Your Name:</label> */}
                                                    <div className="form-icon relative mt-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user w-4 h-4 absolute top-3 start-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                        <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                            </div>
            
                                            <div className="lg:col-span-12 mb-6">
                                                <div className="text-start">
                                                    {/* <label for="email" className="font-semibold">Your Email:</label> */}
                                                    <div className="form-icon relative mt-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail w-4 h-4 absolute top-3 start-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                        <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="grid grid-cols-1">
                                            <div className="mb-6">
                                                <div className="text-start">
                                                    {/* <label for="subject" className="font-semibold">Your Question:</label> */}
                                                    <div className="form-icon relative mt-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book w-4 h-4 absolute top-3 start-4"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                                        <input name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject" />
                                                    </div>
                                                </div>
                                            </div>
        
                                            <div className="mb-5">
                                                <div className="text-start">
                                                    {/* <label for="comments" className="font-semibold">Your Comment:</label> */}
                                                    <div className="form-icon relative mt-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle w-4 h-4 absolute top-3 start-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                                        <textarea name="comments" id="comments" className="form-input ps-11 w-full py-3 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Your Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:0}} className="w-full h-[500px]" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}