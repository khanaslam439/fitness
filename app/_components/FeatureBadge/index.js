export default function FeatureBadge({title, data}){
    return (
        <div>
            <h4 className='text-gray-400 mb-2'>{title}</h4>
            <ul className="flex gap-2 mb-5 lg:mb-0">
                {
                    data.map((btn, id) => (
                        <li key={id} className="group text-xl font-semibold"><a href="#" className="group flex items-center bg-gray-100 dark:bg-slate-900 hover:text-indigo-600  border-2 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1 px-4 rounded-xl align-middle duration-500">
                        {/* <i className="uil uil-airplay me-2 text-[18px]"></i> */}
                        <span className="text-[14px] font-semibold">{btn}</span>
                    </a></li>
                    ))
                }
            </ul>
        </div>
    )
}