import Link from "next/link";
import { useEffect, useState } from "react";

const Login = () => {
    const [videoPlay, setAutoPlay] = useState(false);
    useEffect(() => {
        setAutoPlay(true)
    },[])
    return(
        <section className="h-[100vh] md:h-screen lg:py-36 flex items-center">
            <img src="/assets/images/logo/logo-white.png" className="w-[120px] absolute z-10 top-4 left-4" alt="" />
            <div className='fixed top-0 left-0 right-0 bottom-0'>
                <video src="/assets/images/modern.mp4" controls autoPlay={videoPlay} style={{filter:'blur(12px)'}}></video>
                <div className='bg-indigo-900 opacity-70 absolute top-0 left-0 w-full h-full'></div>
            </div>
            <div className="relative flex w-full" >
                <div className="w-full lg:w-[40%] justify-center lg:h-[100vh] px-6 flex items-center flex-col gap-5">
                    <div className="max-w-[400px] w-full p-6 px-12 rounded-lg bg-white">
                        <h5 className="mb-2 text-3xl text-indigo-500 font-semibold">Login</h5>
                        <span className="text-slate-700 me-2 mt-5">Dont have an account? <a href="/register" className="text-indigo-600 font-semibold inline-block">Register</a></span>
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-3">
                                    <label className="text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1" for="LoginEmail">Username</label>
                                    <input id="LoginEmail" type="text" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="JohnDoe1020" />
                                </div>

                                <div className="mb-3">
                                    <label className="text-sm text-slate-400 bg-white w-fit px-2 relative top-4 left-1" for="LoginPassword">Password</label>
                                    <div>
                                        <input id="LoginPassword" type="password" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="*******" />
                                    </div>

                                </div>
                                <p className="text-gray-400 text-right mb-6 text-sm mb-0"><a href="/forgot-password" className="text-slate-400">Forgot password ?</a></p>
                                
                                <div>
                                    <input type="submit" className="py-3 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Login" />
                                </div>
                                <small className="mb-5 mt-2 text-xs">By proceeding, you agree to our <Link className="text-indigo-500 underline" href={'/terms-condition'}>Terms & Conditions</Link> and <Link className="text-indigo-500 underline" href="/privacy-policy">Privacy Policy</Link></small>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="hidden lg:block w-[60%] h-[100vh] bg-[url('/assets/images/gym/about02.jpg')] bg-no-repeat bg-center bg-cover"></div> */}
            </div>
        </section>
    )
}

export default Login;