import {useRouter} from 'next/navigation'

export default function TrainerCard({trainerId, name, type, index, setOpen, setActiveTrainer, plan}){
    const history = useRouter();
    const redirectPage = (url) => {
        history.push(url);
    }

    const openPopup = () => {
        setOpen(true);
        const current = {
            name, type, index
        }
        setActiveTrainer({...current});
    }
    return (
            <div className="mb-5 group relative lg:p-2 p-5 lg:rounded-lg rounded-2xl lg:shadow shadow-xl dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 duration-500 text-center border border-gray h-fit"> 
                <div className="mt-12 mb-5">
                    <img src={`/assets/images/client/0${trainerId - 100}.jpg`} className="rounded-full shadow-md w-[120px] lg:h-20 lg:w-20 mx-auto block" alt="" />

                    <div className="mt-3">
                        <a href="#" onClick={e => redirectPage(`/trainers/${trainerId}`)} className="text-lg font-medium hover:text-indigo-600 duration-500 block">{name}</a>
                        <span className="block text-sm text-slate-400">{type}</span>
                    </div>
                </div>

                <div className="flex items-center justify-around mb-0 text-indigo-400" style={{fontSize: 12}}>
                    <span className="text-slate-400"><i className="uil uil-book-open text-indigo-400 me-1"></i>20 sessions</span>
                    <span className="text-slate-400"><i className="uil uil-map text-indigo-600 me-1"></i>20km away</span>
                    <span className="text-slate-400"><i className="uil uil-star text-indigo-600 me-1"></i>4.5</span>
                </div>

                <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5 mx-1">At Home</span>
                <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5 mx-1">Online</span>
                <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5 mx-1">Offline</span>
                

                <div className="grid grid-cols-2 gap-[10px]" style={{margin: '20px 10px 10px'}}>                          
                    <button onClick={e => redirectPage(`/plans/${name?.replace(' ','_')}`)} className="text-xs p-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md text-sm"><i className="mdi mdi-graph fs-5 me-2"></i>See Plans</button><button onClick={e => redirectPage(`/trainers/${trainerId}`)} className="text-xs p-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-600/5 border-indigo-600 hover:border-indigo-700 text-white rounded-md text-sm hover:text-indigo-600"><i className="mdi mdi-account-search fs-5 me-2"></i>View Profile</button>
                </div>
                <div className="absolute top-4 start-4">
                    
                    {plan === 'silver' && <span className={`text-white text-sm font-medium px-4 py-1 rounded-full h-[28px]`} style={{backgroundColor:'#f96600'}}>{plan}</span>}
                    {plan === 'gold' && <span className={`text-white text-sm font-medium px-4 py-1 rounded-full h-[28px]`} style={{backgroundColor:'#389996'}}>{plan}</span>}
                    {plan === 'platinum' && <span className={`text-white text-sm font-medium px-4 py-1 rounded-full h-[28px]`} style={{backgroundColor:'#A1215F'}}>{plan}</span>}
                </div>
                <div className="absolute top-4 end-4">
                    <a href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-indigo-600 hover:text-white"><i className="uil uil-heart"></i></a>
                </div>
            </div>
    )
}