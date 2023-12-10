import './BidForm.css';
export default function BidForm(prop){
    
    return (
        <div className={`fixed z-50 overflow-hidden inset-0 m-auto justify-center items-center trainer__popup ${prop.visible ? 'flex' : 'hidden'}`}>
            <div className="relative w-full h-auto">
                <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                    <div className="flex justify-between items-center mb-5 border-b border-gray-100 dark:border-gray-700">
                        <div className="flex">
                            <img className="rounded-full mr-3" src={`assets/images/client/0${(prop.activeTrainer?.index)+1}.jpg`} width={60} height={60} />
                            <div>
                                <h5 className="text-xl font-semibold mb-0">{prop?.activeTrainer?.name}</h5>
                                <p className="m-0">{prop?.activeTrainer?.type}</p>
                            </div>
                        </div>
                        <button onClick={e => prop.setVisible(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="NftBid">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <div className="">
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label className="font-semibold" for="number">Full Name</label>
                                    <input name="etherium" id="number" type="number" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" />
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" for="number2">Email</label>
                                    <input name="quantity" id="number2" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" />
                                </div>
                                <div className="flex gap-3">
                                    <div className="mb-4 w-full">
                                        <label className="font-semibold" for="number2">Phone</label>
                                        <input name="quantity" id="number2" type="number" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" />
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label className="font-semibold" for="number2">Select Service</label>
                                        <select className="w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-400 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3">
                                            <option>Personal Trainer</option>
                                            <option>Dietician</option>
                                            <option>Kids Trainer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="mt-4">
                            <a href="javascript:void(0)" data-modal-toggle="NftBid" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white w-full"><i className="mdi mdi-gavel"></i> Place a Bid</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}