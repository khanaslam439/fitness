export default function PageHeader({title, subTitle}){
    return (
        <section className="relative table w-full pt-20 pb-0">
            <div className="absolute inset-0 bg-gradient-to-t to-blue-600 from-blue-200"></div>
            <div className="relative">
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-0 py-4">
                        <ul className="tracking-[0.5px] mb-0 inline-block pl-0">
                            <li className="inline-block lowercase font-medium text-[13px]"><a href="#" className="text-blue-900 capitalize">Home</a></li>
                            <li className="inline-block text-base- mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="uil uil-angle-right-b text-blue-900"></i></li>
                            <li className="inline-block lowercase font-medium text-[13px]"><a href="#" className="text-blue-900 capitalize">{title}</a></li>
                            { subTitle && <li className="inline-block text-base- mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="uil uil-angle-right-b text-blue-900"></i></li>}
                            { subTitle && <li className="inline-block lowercase font-medium text-[13px]"><a href="#" className="text-blue-900 capitalize">{subTitle}</a></li>}
                        </ul>
                        <h2 className="text-4xl text-blue-900  mb-4">{subTitle ? subTitle : title}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
} 