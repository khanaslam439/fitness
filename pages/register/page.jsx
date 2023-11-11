const Register = () => {
    return(
        <section className="md:h-screen py-36 flex items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="relative flex w-full">
                <div className="w-[60%] h-[100vh] bg-[url('/assets/images/gym/09.jpg')] bg-no-repeat bg-center bg-cover"></div>
                <div className="w-[40%] h-[100vh] px-6 bg-white flex justify-center items-center">
                    <div className="max-w-[400px] w-full p-6 dark:bg-slate-900">
                        <h1 className="mb-10 text-4xl capitalize font-semibold">Register Yourself</h1>
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-3">
                                    <label className="block mb-4 text-sm">Who are you?</label>
                                    <label className="inline-flex mr-5 mb-4 items-center">
                                        <input type="radio" className="form-radio border-gray-400 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-25 me-2" checked value={''} name="userType" />
                                        <span className="text-slate-400 text-sm">User</span>
                                    </label>
                                    <label className="inline-flex mr-5 items-center">
                                        <input type="radio" className="form-radio border-gray-400 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-25 me-2" checked value={''} name="userType" />
                                        <span className="text-slate-400 text-sm">Trainer</span>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label className="text-sm">Name</label>
                                    <input type="text" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label className="text-sm" for="LoginEmail">Email</label>
                                    <input id="LoginEmail" type="email" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="" />
                                </div>

                                <div className="mb-3">
                                    <label className="text-sm" for="LoginPassword">Password</label>
                                    <input id="LoginPassword" type="password" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="" />
                                </div>

                                <div className="flex items-center w-full mb-5">
                                    <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&amp;C" />
                                    <label className="form-check-label text-slate-400" for="AcceptT&amp;C">I Accept <a href="#" className="text-indigo-600">Terms And Condition</a></label>
                                </div>

                                <div className="mb-10">
                                    <input type="submit" className="py-3 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Register Now" />
                                </div>

                                <div className="text-center">
                                    <span className="text-slate-400 me-2 mt-5">Already have an account? <a href="auth-signup.html" className="text-black dark:text-white font-bold inline-block">Login</a></span>
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