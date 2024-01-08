import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import PageHeader from "@/app/_components/PageHeader";

export default function MyProfile(){
    return(
        <>
            <Header />
            <PageHeader title="My Profile" />
            <section class="relative bg-white md:py-24 py-16">
                <div class="container">
                    <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div class="lg:col-span-3 md:col-span-5">
                            <div class="flex items-center">
                                <img src="assets/images/client/05.jpg" class="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
                                <div class="ms-2">
                                    <p class="font-semibold text-slate-400">Hello,</p>
                                    <h5 class="text-lg font-semibold">Cally Joseph</h5>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-9 md:col-span-7">
                            <p class="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>

                        <div class="lg:col-span-3 md:col-span-5">
                            <div class="sticky top-20">
                                <ul class="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                    <li role="presentation">
                                        <button class="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-0 duration-500 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"><i class="uil uil-home text-[20px] me-2 align-middle"></i> Dashboard</button>
                                    </li>
                                    <li role="presentation">
                                        <button class="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"><i class="uil uil-heartbeat text-[20px] me-2 align-middle"></i> My Trainers</button>
                                    </li>
                                    <li role="presentation">
                                        <button class="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"><i class="uil uil-bookmark text-[20px] me-2 align-middle"></i> My Plan</button>
                                    </li>
                                    <li role="presentation">
                                        <button class="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"><i class="uil uil-heart text-[20px] me-2 align-middle"></i> Favourites</button>
                                    </li>
                                    <li role="presentation">
                                        <button class="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"><i class="mdi mdi-cogs text-[20px] me-2 align-middle"></i> Account Details</button>
                                    </li>
                                    <li role="presentation">
                                        <a href="auth-login.html" class="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white" type="button"><i class="uil uil-sign-out-alt text-[20px] me-2 align-middle"></i> Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="lg:col-span-9 md:col-span-7">
                            <div id="myTabContent" class="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                <div class="" id="dashboard" role="tabpanel" aria-labelledby="profile-tab">
                                    <p class="text-slate-400 font-semibold">Hello <span class="text-slate-900 dark:text-white">cally_joseph</span> (not <span class="text-slate-900 dark:text-white">cally_joseph</span>? <a href="javascript:void(0)" class="text-red-600">Log out</a>)</p>

                                    <p class="text-slate-400 font-semibold mt-4">From your account dashboard you can view your <a href="javascript:void(0)" class="text-red-600">recent orders</a>, manage your <a href="javascript:void(0)" class="text-red-600">shipping and billing addresses</a>, and <a href="javascript:void(0)" class="text-red-600">edit your password and account details</a>.</p>
                                </div>

                                <div class="hidden" id="order" role="tabpanel" aria-labelledby="order-tab">
                                    <div class="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                                        <table class="w-full text-start text-slate-500 dark:text-slate-400">
                                            <thead class="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                                <tr class="text-start">
                                                    <th scope="col" class="px-2 py-3 text-start">Order no.</th>
                                                    <th scope="col" class="px-2 py-3 text-start">Date</th>
                                                    <th scope="col" class="px-2 py-3 text-start">Status</th>
                                                    <th scope="col" class="px-2 py-3 text-start">Total</th>
                                                    <th scope="col" class="px-2 py-3 text-start">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white dark:bg-slate-900 text-start">
                                                    <th class="px-2 py-3 text-start" scope="row">7107</th>
                                                    <td class="px-2 py-3 text-start">1st November 2021</td>
                                                    <td class="px-2 py-3 text-start text-green-600">Delivered</td>
                                                    <td class="px-2 py-3 text-start">$ 320 <span class="text-slate-400">for 2items</span></td>
                                                    <td class="px-2 py-3 text-start"><a href="javascript:void(0)" class="text-indigo-600">View <i class="uil uil-arrow-right"></i></a></td>
                                                </tr>

                                                <tr class="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
                                                    <th class="px-2 py-3 text-start" scope="row">8007</th>
                                                    <td class="px-2 py-3 text-start">4th November 2021</td>
                                                    <td class="px-2 py-3 text-start text-slate-400">Processing</td>
                                                    <td class="px-2 py-3 text-start">$ 800 <span class="text-slate-400">for 1item</span></td>
                                                    <td class="px-2 py-3 text-start"><a href="javascript:void(0)" class="text-indigo-600">View <i class="uil uil-arrow-right"></i></a></td>
                                                </tr>

                                                <tr class="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
                                                    <th class="px-2 py-3 text-start" scope="row">8008</th>
                                                    <td class="px-2 py-3 text-start">4th November 2021</td>
                                                    <td class="px-2 py-3 text-start text-red-600">Canceled</td>
                                                    <td class="px-2 py-3 text-start">$ 800 <span class="text-slate-400">for 1item</span></td>
                                                    <td class="px-2 py-3 text-start"><a href="javascript:void(0)" class="text-indigo-600">View <i class="uil uil-arrow-right"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="hidden" id="download" role="tabpanel" aria-labelledby="download-tab">
                                    <div class="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                                        <table class="w-full text-start text-slate-500 dark:text-slate-400">
                                            <thead class="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                                <tr class="text-start">
                                                    <th scope="col" class="px-2 py-3 text-start min-w-[160px]">Product Name</th>
                                                    <th scope="col" class="px-2 py-3 text-start min-w-[360px]">Description</th>
                                                    <th scope="col" class="px-2 py-3 text-start min-w-[160px]">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white dark:bg-slate-900 text-start">
                                                    <th class="px-2 py-3 text-start" scope="row">Quick heal</th>
                                                    <td class="px-2 py-3 text-start">It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</td>
                                                    <td class="px-2 py-3 text-start text-green-600">Downloaded</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="hidden" id="address" role="tabpanel" aria-labelledby="address-tab">
                                    <h6 class="text-slate-400 mb-0">The following addresses will be used on the checkout page by default.</h6>
                                    <div class="md:flex mt-6">
                                        <div class="md:w-1/2 md:px-3">
                                            <div class="flex items-center mb-4 justify-between">
                                                <h5 class="text-xl font-semibold">Billing Address:</h5>
                                                <a href="#" class="text-indigo-600 text-lg"><i class="uil uil-edit align-middle"></i></a>
                                            </div>
                                            <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p class="text-lg font-semibold mb-2">Cally Joseph</p>

                                                <ul class="list-none">
                                                    <li class="flex">
                                                        <i class="uil uil-map-marker text-lg me-2"></i>
                                                        <p class="text-slate-400">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                                                    </li>

                                                    <li class="flex mt-1">
                                                        <i class="uil uil-phone text-lg me-2"></i>
                                                        <p class="text-slate-400">+123 897 5468</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="md:w-1/2 md:px-3 mt-[30] md:mt-0">
                                            <div class="flex items-center mb-4 justify-between">
                                                <h5 class="text-xl font-semibold">Shipping Address:</h5>
                                                <a href="#" class="text-indigo-600 text-lg"><i class="uil uil-edit align-middle"></i></a>
                                            </div>
                                            <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p class="text-lg font-semibold mb-2">Cally Joseph</p>

                                                <ul class="list-none">
                                                    <li class="flex">
                                                        <i class="uil uil-map-marker text-lg me-2"></i>
                                                        <p class="text-slate-400">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                                                    </li>

                                                    <li class="flex mt-1">
                                                        <i class="uil uil-phone text-lg me-2"></i>
                                                        <p class="text-slate-400">+123 897 5468</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="hidden" id="accountdetail" role="tabpanel" aria-labelledby="accountdetail-tab">
                                    <h5 class="text-lg font-semibold mb-4">Personal Detail :</h5>
                                    <form>
                                        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                            <div>
                                                <label class="form-label font-medium">First Name : <span class="text-red-600">*</span></label>
                                                <div class="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user w-4 h-4 absolute top-3 start-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                    <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="First Name:" id="firstname" name="name" required="" />
                                                </div>
                                            </div>
                                            <div>
                                                <label class="form-label font-medium">Last Name : <span class="text-red-600">*</span></label>
                                                <div class="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check w-4 h-4 absolute top-3 start-4"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                                                    <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Last Name:" id="lastname" name="name" required="" />
                                                </div>
                                            </div>
                                            <div>
                                                <label class="form-label font-medium">Your Email : <span class="text-red-600">*</span></label>
                                                <div class="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail w-4 h-4 absolute top-3 start-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                    <input type="email" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required="" />
                                                </div>
                                            </div>
                                            <div>
                                                <label class="form-label font-medium">Occupation : </label>
                                                <div class="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark w-4 h-4 absolute top-3 start-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                    <input name="name" id="occupation" type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Occupation :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-1">
                                            <div class="mt-5">
                                                <label class="form-label font-medium">Description : </label>
                                                <div class="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle w-4 h-4 absolute top-3 start-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                                    <textarea name="comments" id="comments" class="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <input type="submit" id="submit" name="send" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5" value="Save Changes" />
                                    </form>

                                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-6">
                                        <div>
                                            <h5 class="text-lg font-semibold mb-4">Contact Info :</h5>
        
                                            <form>
                                                <div class="grid grid-cols-1 gap-5">
                                                    <div>
                                                        <label class="form-label font-medium">Phone No. :</label>
                                                        <div class="form-icon relative mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone w-4 h-4 absolute top-3 start-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                            <input name="number" id="number" type="number" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Phone :" />
                                                        </div>
                                                    </div>
        
                                                    <div>
                                                        <label class="form-label font-medium">Website :</label>
                                                        <div class="form-icon relative mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe w-4 h-4 absolute top-3 start-4"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                                            <input name="url" id="url" type="url" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Url :" />
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <button class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Add</button>
                                            </form>
                                        </div>
                                        
                                        <div> 
                                            <h5 class="text-lg font-semibold mb-4">Change password :</h5>
                                            <form>
                                                <div class="grid grid-cols-1 gap-5">
                                                    <div>
                                                        <label class="form-label font-medium">Old password :</label>
                                                        <div class="form-icon relative mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key w-4 h-4 absolute top-3 start-4"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                                                            <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Old password" required="" />
                                                        </div>
                                                    </div>
            
                                                    <div>
                                                        <label class="form-label font-medium">New password :</label>
                                                        <div class="form-icon relative mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key w-4 h-4 absolute top-3 start-4"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                                                            <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="New password" required="" />
                                                        </div>
                                                    </div>
            
                                                    <div>
                                                        <label class="form-label font-medium">Re-type New password :</label>
                                                        <div class="form-icon relative mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key w-4 h-4 absolute top-3 start-4"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                                                            <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Re-type New password" required="" />
                                                        </div>
                                                    </div>
                                                </div>
            
                                                <button class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Save password</button>
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