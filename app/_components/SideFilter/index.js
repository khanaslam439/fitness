import { ADV_FILTER } from "@/constants/common";

export default function SideFilter(){
    return (
        <div id="accordion-collapseone" data-accordion="collapse">
        {
          ADV_FILTER.map((el, index) => 
            el.type == 'categories' && 
            <div key={index} className="p-4 border border-2 rounded-xl">
                <h2 className="mb-3 text-base font-bold pb-4" id="accordion-collapse-heading-1">
                    Filter by {el.type}
                </h2>
                <ul className="accordion-collapse-heading">
                    {el.data.map((ftr, id) => (
                        <li key={id} className={`transition-all duration-500 block pt-2`}>
                            <label className="flex cursor-pointer items-center gap-2">
                                <i className={'mdi mdi-widgets text-black-900'}></i>
                                <span className={`hover:text-black capitalize text-[14px] hover:font-bold ${id == 2 && 'font-bold'}`}>{ftr}</span>
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