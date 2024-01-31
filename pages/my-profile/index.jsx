import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import PageHeader from "@/app/_components/PageHeader";
import TrainerCard from "@/app/_components/TrainerCard";
import { useState } from "react";

export default function MyProfile(){
    const [card, setCard] = useState({trainerId:101, name:'John Doe', type:'Gym trainer'});
    const [activeIndex, setActiveIndex] = useState(0) 
    return(
        <>
            <Header />
            <PageHeader title="My Profile" />
            <section className="relative bg-white py-5">
                <div className="px-10">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-3 md:col-span-5">
                            <div className="flex items-center p-6 mb-5 border border-b-0 border-gray-300">
                                <img src="assets/images/client/05.jpg" className="h-14 w-14 rounded-full shadow dark:shadow-gray-800" alt="" />
                                <div className="ms-3">
                                    <h5 className="text-lg font-semibold">Cally Joseph</h5>
                                    <p className="font-semibold text-slate-400 text-sm">Personal Trainer</p>
                                </div>
                            </div>
                            <div className="sticky top-20">
                                <ul className="flex-column p-6 bg-white dark:bg-slate-900 border border-gray-300 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                    <li role="presentation">
                                        <button className="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-0 duration-500 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"><i className="uil uil-home text-[20px] me-2 align-middle"></i> Dashboard</button>
                                    </li>
                                    <li role="presentation">
                                        <button className="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" onClick={e => setActiveIndex(0)} ><i className="uil uil-heartbeat text-[20px] me-2 align-middle"></i> My Trainers</button>
                                    </li>
                                    <li role="presentation">
                                        <button className="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"><i className="uil uil-bookmark text-[20px] me-2 align-middle"></i> My Plan</button>
                                    </li>
                                    <li role="presentation">
                                        <button className="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" onClick={e => setActiveIndex(1)}><i className="uil uil-heart text-[20px] me-2 align-middle"></i> Favourites</button>
                                    </li>
                                    <li role="presentation">
                                        <button className="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" onClick={e => setActiveIndex(2)}><i className="mdi mdi-cogs text-[20px] me-2 align-middle"></i> Account Details</button>
                                    </li>
                                    <li role="presentation">
                                        <a href="/login" className="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white" type="button"><i className="uil uil-sign-out-alt text-[20px] me-2 align-middle"></i> Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-9 md:col-span-7">
                            <div id="myTabContent" className="pt-0 px-0 p-6 bg-white dark:bg-slate-900 rounded-md">
                                <div className={activeIndex == 0 ? '' : 'hidden'} role="tabpanel" aria-labelledby="profile-tab">
                                    <h4 className="text-[24px] font-bold">My Trainers</h4>
                                    <p className="text-gray-400 text-sm mb-5">See the all selected trainer</p>
                                    <div className="grid grid-cols-3 gap-[20px]">
                                        <div>
                                            <TrainerCard {...card} />
                                        </div>
                                        <div>
                                            <TrainerCard {...card} />
                                        </div>
                                        <div>
                                            <TrainerCard {...card} />
                                        </div>
                                    </div>
                                </div>

                                <div className={activeIndex == 1 ? '' : 'hidden'} id="address" role="tabpanel" aria-labelledby="address-tab">
                                    <h6 className="text-slate-400 mb-0">The following addresses will be used on the checkout page by default.</h6>
                                    <div className="md:flex mt-6">
                                        <div className="md:w-1/2 md:px-3">
                                            <div className="flex items-center mb-4 justify-between">
                                                <h5 className="text-xl font-semibold">Billing Address:</h5>
                                                <a href="#" className="text-indigo-600 text-lg"><i className="uil uil-edit align-middle"></i></a>
                                            </div>
                                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-lg font-semibold mb-2">Cally Joseph</p>

                                                <ul className="list-none">
                                                    <li className="flex">
                                                        <i className="uil uil-map-marker text-lg me-2"></i>
                                                        <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                                                    </li>

                                                    <li className="flex mt-1">
                                                        <i className="uil uil-phone text-lg me-2"></i>
                                                        <p className="text-slate-400">+123 897 5468</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="md:w-1/2 md:px-3 mt-[30] md:mt-0">
                                            <div className="flex items-center mb-4 justify-between">
                                                <h5 className="text-xl font-semibold">Shipping Address:</h5>
                                                <a href="#" className="text-indigo-600 text-lg"><i className="uil uil-edit align-middle"></i></a>
                                            </div>
                                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-lg font-semibold mb-2">Cally Joseph</p>

                                                <ul className="list-none">
                                                    <li className="flex">
                                                        <i className="uil uil-map-marker text-lg me-2"></i>
                                                        <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                                                    </li>

                                                    <li className="flex mt-1">
                                                        <i className="uil uil-phone text-lg me-2"></i>
                                                        <p className="text-slate-400">+123 897 5468</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={activeIndex == 2 ? '' : 'hidden'} id="accountdetail" role="tabpanel" aria-labelledby="accountdetail-tab">
                                    <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
                                    <form>
                                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                            <div>
                                                <label className="form-label font-medium">First Name : <span className="text-red-600">*</span></label>
                                                <div className="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user w-4 h-4 absolute top-3 start-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                    <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="First Name:" id="firstname" name="name" required="" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="form-label font-medium">Last Name : <span className="text-red-600">*</span></label>
                                                <div className="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-check w-4 h-4 absolute top-3 start-4"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                                                    <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Last Name:" id="lastname" name="name" required="" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                                                <div className="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail w-4 h-4 absolute top-3 start-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                    <input type="email" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required="" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="form-label font-medium">Occupation : </label>
                                                <div className="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bookmark w-4 h-4 absolute top-3 start-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                    <input name="name" id="occupation" type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Occupation :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mt-5">
                                                <label className="form-label font-medium">Description : </label>
                                                <div className="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle w-4 h-4 absolute top-3 start-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                                    <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <input type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5" value="Save Changes" />
                                    </form>

                                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-6">
                                        <div>
                                            <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>
        
                                            <form>
                                                <div className="grid grid-cols-1 gap-5">
                                                    <div>
                                                        <label className="form-label font-medium">Phone No. :</label>
                                                        <div className="form-icon relative mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone w-4 h-4 absolute top-3 start-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                            <input name="number" id="number" type="number" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Phone :" />
                                                        </div>
                                                    </div>
        
                                                    <div>
                                                        <label className="form-label font-medium">Website :</label>
                                                        <div className="form-icon relative mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe w-4 h-4 absolute top-3 start-4"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                                            <input name="url" id="url" type="url" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Url :" />
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Add</button>
                                            </form>
                                        </div>
                                        
                                        <div> 
                                            <h5 className="text-lg font-semibold mb-4">Change password :</h5>
                                            <form>
                                                <div className="grid grid-cols-1 gap-5">
                                                    <div>
                                                        <label className="form-label font-medium">Old password :</label>
                                                        <div className="form-icon relative mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-key w-4 h-4 absolute top-3 start-4"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                                                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Old password" required="" />
                                                        </div>
                                                    </div>
            
                                                    <div>
                                                        <label className="form-label font-medium">New password :</label>
                                                        <div className="form-icon relative mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-key w-4 h-4 absolute top-3 start-4"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                                                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="New password" required="" />
                                                        </div>
                                                    </div>
            
                                                    <div>
                                                        <label className="form-label font-medium">Re-type New password :</label>
                                                        <div className="form-icon relative mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-key w-4 h-4 absolute top-3 start-4"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                                                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Re-type New password" required="" />
                                                        </div>
                                                    </div>
                                                </div>
            
                                                <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Save password</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}