import Link from "next/link";
import Image from "next/image";
import BidForm from "../BidForm";
import { useState } from "react";
export default function ProfileCard({data}){
    const [isVisible, setVisible] = useState(false);
    return (
        <>
            <div className="relative text-center shadow-lg bg-white px-0 pt-10 mb-5 overflow-hidden rounded-lg">
                <div className={`absolute h-[100px] left-0 top-0 w-full bg-gradient-to-r to-indigo-600/70 from-blue-600/70`} style={{zIndex:0}}></div>
                <div style={{zIndex: 1, position:'relative'}}>
                    <Image
                    src={`/assets/images/client/0${data?.id - 100}.jpg`}
                    width={100}
                    height={100}
                    className="rounded-full inline-block mt-3 border-double border-8 border-white"
                    />
                    <h4 className="font-medium mt-0 text-2xl">{data?.name}</h4>
                    <p className="mb-2 text-sm text-gray-400">{data?.type}</p>
                    <label className="mb-10">(<i className="mdi mdi-star text-orange-500"></i>12 Reviews)</label>
                    <div className="cta_button mb-5 mt-5 lg:mt-0">
                        <button onClick={e => setVisible(true)} className='rounded-lg text-md m-2 p-2 px-4 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-600/5 border-indigo-700 text-white hover:text-indigo-600'>
                            {/* <i className='mdi mdi-cart fs-5 me-2'></i> */}
                            Place a Bid
                        </button>
                    </div>
                </div>
            </div>

            <div className="shadow-lg mb-5 rounded-lg bg-white p-5">
                <h4 className="text-gray-800 font-bold mt-2 text-xl mb-4">Trainer Speciality</h4>
                <ul className="list-none space-x-2 space-y-2 mb-5">
                    <li className="inline-block">
                        <a href="#" className="group flex items-center bg-gray-100 dark:bg-slate-900 hover:text-indigo-600  border-2 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                            <i className="uil uil-airplay me-2 text-[18px]"></i>
                            <span className="text-[14px] font-medium">Body Building</span>
                        </a>
                    </li>
                    
                    <li className="inline-block">
                        <a href="#" className="group flex items-center bg-gray-100 dark:bg-slate-900 hover:text-indigo-600  border-2 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                            <i className="uil uil-at me-2 text-[18px]"></i>
                            <span className="text-[14px] font-medium">Fitness</span>
                        </a>
                    </li>
                    
                    <li className="inline-block">
                        <a href="#" className="group flex items-center bg-gray-100 dark:bg-slate-900 hover:text-indigo-600 border-2 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                            <i className="uil uil-award me-2 text-[18px]"></i>
                            <span className="text-[14px] font-medium">Nutritionist</span>
                        </a>
                    </li>
                    
                    <li className="inline-block">
                        <a href="#" className="group flex items-center bg-gray-100 dark:bg-slate-900 hover:text-indigo-600 border-2 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                            <i className="uil uil-bag me-2 text-[18px]"></i>
                            <span className="text-[14px] font-medium">Self Defense</span>
                        </a>
                    </li>
                    <li className="inline-block">
                        <a href="#" className="group flex items-center bg-gray-100 dark:bg-slate-900 hover:text-indigo-600 border-2 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                            <i className="uil uil-bag me-2 text-[18px]"></i>
                            <span className="text-[14px] font-medium">Weight Loss</span>
                        </a>
                    </li>
                    
                </ul>
            </div>

            <div className="shadow-lg mb-5 rounded-lg bg-white p-5">
                <h4 className="text-gray-800 font-bold mt-2 text-xl mb-4"> <i className="uil uil-trophy text-[21px]"></i> Certifications</h4>
                <ul className="list-none  space-y-2 mb-5">
                    <li className="flex justify-between">
                        <span className="text-[14px] font-medium flex items-center"><i className="uil uil-file mr-2 text-lg"></i>Body Building</span>
                        <a href="/assets/pdf/sample.pdf" target="_blank" className="text-gray">
                            <i className="uil uil-angle-right text-[18px]"></i>
                        </a>
                    </li>
                    
                    <li className="flex justify-between">
                        <span className="text-[14px] font-medium flex items-center"><i className="uil uil-file mr-2 text-lg"></i>Nutritionist</span>
                        <a href="/assets/pdf/sample.pdf" target="_blank" className="text-gray">
                            <i className="uil uil-angle-right text-[18px]"></i>
                        </a>
                    </li>
                    
                    <li className="flex justify-between">
                        <span className="text-[14px] font-medium flex items-center"><i className="uil uil-file mr-2 text-lg"></i>Self Defense</span>
                        <a href="/assets/pdf/sample.pdf" target="_blank" className="text-gray">
                            <i className="uil uil-angle-right text-[18px]"></i>
                        </a>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-[14px] font-medium flex items-center"><i className="uil uil-file mr-2 text-lg"></i>Weight Loss</span>
                        <a href="/assets/pdf/sample.pdf" target="_blank" className="text-gray">
                            <i className="uil uil-angle-right text-[18px]"></i>
                        </a>
                    </li>
                </ul>
            </div>
            {isVisible && <BidForm visible={isVisible} setVisible={setVisible} data={data} />}
        </>
    )
}