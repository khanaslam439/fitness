import Image from 'next/image';
import './BidForm.css';
import closeBtn from './closeBtn.svg';
export default function BidForm(prop){
    
    return (
        <div className={`fixed z-50 overflow-hidden inset-0 m-auto justify-center items-center trainer__popup ${prop.visible ? 'flex' : 'hidden'}`}>
            <div className="relative h-auto">
                <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                    <div className="flex justify-between items-center mb-5 border-b border-gray-100 dark:border-gray-700">
                        <div className="flex">
                            <img className="rounded-full mr-3" src={`assets/images/client/0${(prop?.id - 100)}.jpg`} width={60} height={60} />
                            <div>
                                <h5 className="text-xl font-semibold mb-0">{prop.data?.name}</h5>
                                <p className="m-0">{prop.data?.type}</p>
                            </div>
                        </div>
                        <button onClick={e => prop.setVisible(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="NftBid">
                            <Image alt='close btn' src={closeBtn} />
                        </button>
                    </div>
                    <div className="">
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label className="text-[14px] mb-0">Full Name</label>
                                    <input type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" />
                                </div>

                                <div className="mb-4">
                                    <label className="text-[14px]">Email</label>
                                    <input type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" />
                                </div>
                                <div className="flex gap-3">
                                    <div className="mb-4 w-full">
                                        <label className="text-[14px]">Phone</label>
                                        <input type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" />
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label className="text-[14px]">Select Service</label>
                                        <select className="w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option>Personal Trainer</option>
                                            <option>Dietician</option>
                                            <option>Kids Trainer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="mt-4">
                            <a href='#' data-modal-toggle="NftBid" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white w-full"><i className="mdi mdi-gavel"></i> Place a Bid</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
