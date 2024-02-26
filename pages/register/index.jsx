import Link from "next/link";
import { useEffect, useState } from "react";
const Register = () => {
    
    const [videoPlay, setAutoPlay] = useState(false);
    
    useEffect(() => {
        setAutoPlay(true)
    },[])

    return(
        <section className="h-[100vh] md:h-screen lg:py-36 flex relative items-center">
            <img src="/assets/images/logo/logo-white.png" className="w-[120px] absolute z-10 top-4 left-4" alt="" />
            <div className='fixed top-0 left-0 right-0 bottom-0'>
                <video src="/assets/images/modern.mp4" controls autoPlay={videoPlay} style={{filter:'blur(12px)'}}></video>
                <div className='bg-indigo-900 opacity-70 absolute top-0 left-0 w-full h-full'></div>
            </div>
            <div className="relative flex w-full h-[100vh]">
                <div className="w-full lg:w-[40%] justify-center lg:h-[100vh] px-6 flex items-center flex-col gap-5">
                    <div className="md:max-w-[400px] w-full bg-white rounded-lg p-6 px-12">
                        <h1 className="mb-2 text-3xl text-indigo-500 font-semibold">Register</h1>
                        <span className="text-slate-700 me-2 mt-5">Already have an account? <a href="/login" className="text-indigo-600 ms-1 font-semibold inline-block">Login</a></span>
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-2">
                                    <label className="text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1">Full Name</label>
                                    <input type="text" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="e.g. John Doe" />
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1" for="LoginEmail">Email</label>
                                    <input id="LoginEmail" type="email" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="john.doe@xyz.com" />
                                </div>
                                <div className="mb-2 grid grid-cols-12 gap-2">
                                    <div className="col-span-5"> 
                                        <label className="text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1" for="LoginEmail">Country Code</label>
                                        <input id="LoginEmail" type="email" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="+91" />
                                    </div>
                                    <div className="col-span-7">
                                        <label className="text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1" for="LoginEmail">Phone</label>
                                        <input id="LoginEmail" type="email" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="(913)-3030-030" />
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="relative">
                                        <label className="text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1" for="LoginPassword">Password</label>
                                        <input id="LoginPassword" type="password" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="******" />
                                    </div>
                                </div>

                                <div className="flex items-start w-full mb-5">
                                    <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&amp;C" />
                                    <label className="form-check-label text-xs text-slate-400">I have read and agree to Toneup India <Link className="text-indigo-600 underline" href={'/terms-condition'}>Terms & Condition</Link> and <Link className="text-indigo-600 underline" href={'/privacy-policy'}>Privacy Policy</Link></label>
                                </div>

                                <div className="mb-5">
                                    <input type="submit" className="py-3 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Register Now" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;