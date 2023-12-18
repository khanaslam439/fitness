import { ADV_FILTER } from "@/constants/common";

export default function SideFilter(){
    return (
        <div id="accordion-collapseone" data-accordion="collapse">
        {
          ADV_FILTER.map((el, index) => 
            el.type == 'categories' && 
            <div key={index}>
                <h2 className="mb-3 text-base font-semibold" id="accordion-collapse-heading-1">
                    Filter by {el.type}
                </h2>
                <ul className="accordion-collapse-heading">
                    {el.data.map((ftr, id) => (
                        <li key={id} className="cursor-pointer transition-all duration-300 hover:bg-gray-100 block py-2 px-2">
                            <label className="inline-flex items-center gap-2">
                                <i className={'uil uil-star text-indigo-500'}></i>
                                <span className="text-slate-400 hover:text-black capitalize text-[14px] font-light">{ftr}</span>
                            </label>
                        </li>  
                    ))}
                </ul>
            </div>
            )
        }
        </div>
    )
}