const Footer = function(){
    return (
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">    
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">
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
                                <div className="text-center">
                                    <img src="assets/images/logo-light.png" className="block mx-auto" alt="" />
                                </div>

                                <ul className="list-none text-center mt-6">
                                    <li className="inline"><a href="http://linkedin.com/company/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-linkedin" title="Linkedin"></i></a></li>
                                    <li className="inline"><a href="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                                    <li className="inline"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-instagram align-middle" title="instagram"></i></a></li>
                                    <li className="inline"><a href="https://twitter.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
                                    <li className="inline"><a href="mailto:support@fitness.web" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-envelope align-middle" title="email"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-1">
                        <p className="mb-0">© 2023 FitnessWeb. Design with <i className="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">FtinessWeb</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;