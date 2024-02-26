import { useEffect, useState } from "react";

export default function ForgotPassword(){
    const [videoPlay, setAutoPlay] = useState(false);
    useEffect(() => {
        setAutoPlay(true)
    },[])


    return (
        
        <>
        <section className="h-[100vh] md:h-screen lg:py-36 flex items-center">
            <img src="/assets/images/logo/logo-white.png" className="w-[120px] absolute z-10 top-4 left-4" alt="" />
            <div className='fixed top-0 left-0 right-0 bottom-0'>
                <video src="/assets/images/modern.mp4" controls autoPlay={videoPlay} style={{filter:'blur(12px)'}}></video>
                <div className='bg-indigo-900 opacity-70 absolute top-0 left-0 w-full h-full'></div>
            </div>
            <div className="relative flex w-full" >
                <div className="w-full lg:w-[40%] justify-center lg:h-[100vh] px-6 flex items-center flex-col gap-5">
                    <div className="max-w-[400px] w-full p-6 pb-0 rounded-lg bg-white">
                        <h5 className="mb-12 text-3xl text-center text-indigo-500 font-bold">Forgot your password?</h5>
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-2 relative">
                                    <label className="text-sm absolute text-slate-400 -top-2 bg-white left-2.5" for="LoginEmail">Enter your registered email ID</label>
                                    <input id="LoginEmail" type="text" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="john.doe@xyz.com" />
                                </div>                                
                                <p className="mb-6 text-slate-400 text-xs">we'll send you a one-time code to you register email to reset your password.</p>
                                <div className="mb-4">
                                    <input type="submit" className="py-3 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Reset Password" />
                                </div>

                            </div>
                        </form>
                        <p className="text-slate-400 text-center mb-10">Remember your password? <a href="/login" className="text-indigo-600 ms-1 font-semibold inline-block">Login</a></p>
                    </div>
                    <div className="text-center">
                    </div>
                </div>
                {/* <div className="hidden lg:block w-[60%] h-[100vh] bg-[url('/assets/images/gym/about02.jpg')] bg-no-repeat bg-center bg-cover"></div> */}
            </div>
        </section>
        </>
    )
}