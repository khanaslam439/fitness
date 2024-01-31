export default function BlogHeader({category, subCategory, title}){
    return (
        <div className="relative mb-5">
            <ul className="mb-0 inline-block">
                <li className="inline-block lowercase font-medium text-[13px]"><a href="#" className="text-slate-600 capitalize">Home</a></li>
                <li className="inline-block text-base- mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="uil uil-angle-right-b text-slate-600"></i></li>
                <li className="inline-block lowercase font-medium text-[13px]"><a href="#" className="text-slate-600 capitalize">{category}</a></li>
                { subCategory && <li className="inline-block text-base- mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="uil uil-angle-right-b text-slate-600"></i></li>}
                { subCategory && <li className="inline-block lowercase font-medium text-[13px]"><a href="#" className="text-slate-600 capitalize">{subCategory}</a></li>}
            </ul>
        </div>
    )
} 