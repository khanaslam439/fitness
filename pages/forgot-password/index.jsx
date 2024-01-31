import { useEffect, useState } from "react";

export default function ForgotPassword(){
    const [videoPlay, setAutoPlay] = useState(false);
    useEffect(() => {
        setAutoPlay(true)
    },[])


    return (
        
        <>
        <section className="h-[100vh] md:h-screen lg:py-36 flex items-center">
            <div className='fixed top-0 left-0 right-0 bottom-0'>
                <video src="/assets/images/modern.mp4" controls autoPlay={videoPlay} style={{filter:'blur(12px)'}}></video>
                <div className='bg-indigo-900 opacity-70 absolute top-0 left-0 w-full h-full'></div>
            </div>
            <div className="relative flex w-full" >
                <div className="w-full lg:w-[40%] justify-center lg:h-[100vh] px-6 flex items-center flex-col gap-5">
                    <div className="max-w-[400px] w-full p-6 pb-0 rounded-lg bg-white">
                        <h5 className="mb-10 text-3xl text-indigo-500 font-semibold">Forgot password?</h5>
                        {/* <p className="mb-5 text-slate-600">Dont worry about that!</p> */}
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-3">
                                    <label className="text-sm" for="LoginEmail">Enter your registered email ID</label>
                                    <input id="LoginEmail" type="text" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="john.doe@xyz.com" />
                                </div>                                
                                <div className="mb-10">
                                    <input type="submit" className="py-3 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Send" />
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="text-center">
                        <span className="text-slate-300 mt-5">Remember your password? <a href="/login" className="text-white ms-1 font-semibold inline-block">Login</a></span>
                    </div>
                </div>
                {/* <div className="hidden lg:block w-[60%] h-[100vh] bg-[url('/assets/images/gym/about02.jpg')] bg-no-repeat bg-center bg-cover"></div> */}
            </div>
        </section>
        </>
    )
}