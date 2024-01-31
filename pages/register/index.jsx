import { useEffect, useState } from "react";
const Register = () => {
    
    const [videoPlay, setAutoPlay] = useState(false);
    
    useEffect(() => {
        setAutoPlay(true)
    },[])

    return(
        <section className="md:h-screen overflow-hidden max-h-[100vh] lg:py-36 pb-20 flex bg-white items-center">
            <div className='fixed top-0 left-0 right-0 bottom-0'>
                <video src="/assets/images/modern.mp4" controls autoPlay={videoPlay} style={{filter:'blur(12px)'}}></video>
                <div className='bg-indigo-900 opacity-70 absolute top-0 left-0 w-full h-full'></div>
            </div>
            <div className="relative flex w-full">
                <div className="w-full h-[100vh] flex justify-center flex-col gap-5 items-center">
                    <div className="md:max-w-[450px] w-full bg-white rounded-lg p-6 px-12">
                        <h1 className="mb-1 text-3xl text-indigo-500 font-semibold">Register</h1>
                        <p className="mb-5 text-slate-600">Create an account to explore more</p>
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-3">
                                    <label className="text-sm">Name</label>
                                    <input type="text" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="e.g. John Doe" />
                                </div>
                                <div className="mb-3">
                                    <label className="text-sm" for="LoginEmail">Email</label>
                                    <input id="LoginEmail" type="email" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="john.doe@xyz.com" />
                                </div>

                                <div className="mb-3">
                                    <label className="text-sm" for="LoginPassword">Password</label>
                                    <input id="LoginPassword" type="password" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="" />
                                </div>

                                <div className="flex items-center w-full mb-5">
                                    <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&amp;C" />
                                    <label className="form-check-label text-slate-400">Remember me</label>
                                </div>

                                <div className="mb-5">
                                    <input type="submit" className="py-3 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Register Now" />
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="text-center">
                        <span className="text-slate-300 me-2 mt-5">Already have an account? <a href="/login" className="text-white ms-1 font-semibold inline-block">Login</a></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;