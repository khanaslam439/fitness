const Login = () => {
    return(
        <section className="md:h-screen py-36 flex items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="relative flex w-full">
                <div className="w-[40%] h-[100vh] px-6 bg-white flex items-center">
                    <div className="max-w-[400px] w-full p-6 dark:bg-slate-900">
                        <h5 className="mb-10 text-4xl font-semibold">Welcome again</h5>
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-3">
                                    <label className="text-sm" for="LoginEmail">Username</label>
                                    <input id="LoginEmail" type="text" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="" />
                                </div>

                                <div className="mb-3">
                                    <label className="text-sm" for="LoginPassword">Password</label>
                                    <input id="LoginPassword" type="password" className="form-input mt-1 w-full p-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="" />
                                </div>

                                
                                <p className="text-gray-400 text-right mb-6 text-sm mb-0"><a href="auth-re-password.html" className="text-slate-400">Forgot password ?</a></p>
                                
                                <div className="mb-10">
                                    <input type="submit" className="py-3 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Login" />
                                </div>

                                <div className="text-center">
                                    <span className="text-slate-400 me-2 mt-5">Dont have an account? <a href="auth-signup.html" className="text-black dark:text-white font-bold inline-block">Register</a></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-[60%] h-[100vh] bg-[url('/assets/images/gym/about02.jpg')] bg-no-repeat bg-center bg-cover"></div>
            </div>
        </section>
    )
}

export default Login;