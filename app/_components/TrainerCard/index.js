import {useRouter} from 'next/navigation'

export default function TrainerCard({trainerId, name, type, filters, level, profileLink, index, setOpen, setActiveTrainer}){
    const history = useRouter();
    const redirectPage = () => {
        history.push(`/trainers/${trainerId}`);
    }
    const bg = ['to-red-600/70 from-indigo-600/70',
                'to-fuchsia-600/70 from-green-600/70',
                'to-pink-600/70 from-purple-600/70',
                'to-indigo-600/70 from-blue-600/70',
                'to-sky-600/70 from-yellow-600/70',
                'to-orange-600/70 from-indigo-600/70']

    const openPopup = () => {
        setOpen(true);
        const current = {
            name, type, index
        }
        setActiveTrainer({...current});
    }
    return (
        <>
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out m-2 mb-5" >
                <div className={`py-12 bg-gradient-to-r ${bg[Math.floor(Math.random() * 5)]}`}></div>
                <div className="p-5 px-4 pt-0 -mt-10 text-center">
                    <img onClick={e => (e.preventDefault(),redirectPage())} src={`assets/images/client/0${index+1}.jpg`} className="h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="" />

                    <div className="mt-4">
                        <h4 onClick={e => (e.preventDefault(),redirectPage())}  className="mb-0 text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{name}</h4>
                        <p className="mt-0 text-slate-400 text-sm d-block mb-2">{type}</p>
                        <div className='flex flex-col flex-wrap mb-5'>
                        {filters && filters.length>0 && filters.map((elem, index) =>  
                        (elem.type == 'distance' || elem.type=='session' || elem.type == 'rating') && 
                            <p href="#" className="text-[10px] font-normal mb-0">
                                {elem.type == 'distance' && <i className="uil uil-map text-indigo-500 text-[14px] relative top-[.5px] mr-1"></i>}
                                {elem.type == 'session' && <i className="uil uil-book-open text-indigo-500 text-[14px] relative top-[.5px] mr-1"></i>}
                                {elem.type == 'rating' && <i className="uil uil-star text-indigo-500 text-[14px] relative top-[.5px] mr-1"></i>}
                                {elem.value} {elem.type == 'rating' && 'Rating'}
                            </p>
                        )}
                        </div>
                        <div className='grid grid-cols-2 gap-[10px]'>
                            <button onClick={e => openPopup()} set className='text-xs p-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md text-sm'>
                                <i className='mdi mdi-gavel fs-5 me-2'></i>
                                Place a Bid
                            </button>
                            <button className='text-xs p-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-600/5 border-indigo-600 hover:border-indigo-700 text-white rounded-md text-sm hover:text-indigo-600'>
                                <i className='mdi mdi-cart fs-5 me-2'></i>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}