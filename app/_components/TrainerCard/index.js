import {useRouter} from 'next/navigation'

export default function TrainerCard({trainerId, name, type, filters, level, profileLink, index}){
    const history = useRouter();
    const redirectPage = () => {
        history.push(`/trainers/${trainerId}`);
    }
    return (
        <div className="group relative rounded-2xl shadow hover:shadow-xl border-2 border-indigo-200 dark:shadow-gray-800 duration-500 ease-in-out overflow-hidden cursor-pointer" onClick={e => redirectPage()}>
            <div className="relative overflow-hidden">
                <img src={`assets/images/client/0${index+1}.jpg`} className="group-hover:scale-110 overflow-hidden rounded-xl duration-500 ease-in-out max-h-[280px] min-w-[100%] object-cover object-top" alt="" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-white-0"></div> */}
                <span className="uil uil-heart absolute left-5 top-5 text-2xl text-white"></span>
            </div>
            <div className="content py-4 px-4 relative">
                <div className="">
                    <a href="#" className="font-bold text-indigo-500 mr-2">{name}</a>
                    (<span className="text-slate-800 text-sm">{type}</span>)
                </div>
                <div className="mt-3 grid grid-cols-2 border-t-2 pt-4">
                    {filters && filters.length>0 && filters.map((elem, index) =>  
                        <a href="#" className="text-xs font-normal mb-3">
                            {elem.type == 'level' && <i className="uil uil-suitcase text-indigo-500 text-[14px] relative top-[.5px] mr-2"></i>}
                            {elem.type == 'distance' && <i className="uil uil-map text-indigo-500 text-[14px] relative top-[.5px] mr-2"></i>}
                            {elem.type == 'session' && <i className="uil uil-book-open text-indigo-500 text-[14px] relative top-[.5px] mr-2"></i>}
                            {elem.type == 'rating' && <i className="uil uil-star text-indigo-500 text-[14px] relative top-[.5px] mr-2"></i>}
                            {elem.value}
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}