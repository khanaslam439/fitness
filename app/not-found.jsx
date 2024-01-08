import Link from "next/link"

export default function NotFound(){
    return (
        <section className="relative bg-indigo-600/5">
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="text-center">
                            <Link href={'/'} ><img src="/assets/images/logo/logo-black.png" width={120} className="mx-auto" alt="" /></Link>
                        </div>
                        <div className="title-heading text-center my-auto">
                            <img src="/assets/images/error.png" className="mx-auto" alt="" />
                            <h1 className="mt-3 mb-6 md:text-5xl text-3xl font-bold">Page Not Found?</h1>
                            <p className="text-slate-400">Whoops, this is embarassing. <br /> Looks like the page you were looking for wasn't found.</p>
                            
                            <div className="mt-4">
                                <Link href={'/'}  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}