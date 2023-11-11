export default function PageHeader({title}){
    return (
        <section className="relative">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-0 py-4">
                    <ul className="tracking-[0.5px] mb-0 inline-block pl-0">
                        <li className="inline-block lowercase font-medium duration-500 ease-in-out"><a href="#" className="text-slate-100 capitalize">Home</a></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="uil uil-angle-right-b text-slate-400"></i></li>
                        <li className="inline-block lowercase font-medium duration-500 ease-in-out"><a href="#" className="text-slate-200 capitalize">{title}</a></li>
                    </ul>
                    <h2 className="text-4xl text-white mb-4">{title}</h2>
                </div>
            </div>
        </section>
    )
} 