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
                    <p className="absolute top-3 left-3 bg-indigo-600 text-white text-[12px] font-semibold px-2.5 rounded-full h-5">Platinum</p>
                <div style={{zIndex: 1, position:'relative'}}>
                    <Image
                    src={`/assets/images/client/0${data?.id - 100}.jpg`}
                    width={100}
                    height={100}
                    className="rounded-full inline-block mt-3 border-double border-8 border-white"
                    />
                    <h4 className="font-medium mt-0 text-2xl">{data?.name}</h4>
                    <p className="mb-2 text-sm text-gray-400">{data?.type}</p>
                    <label className="mb-5">(<i className="mdi mdi-star text-orange-500"></i>12 Reviews)</label>
                    <div className="cta_button mb-5 mt-5 lg:mt-0">
                        <button className='rounded-lg text-md m-2 p-2 px-4 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white'>
                            {/* <i className='mdi mdi-cart fs-5 me-2'></i> */}
                            See Plans
                        </button>
                        <button onClick={e => setVisible(true)} className='rounded-lg text-md m-2 p-2 px-4 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-600/5 border-indigo-700 text-white hover:text-indigo-600'>
                            {/* <i className='mdi mdi-cart fs-5 me-2'></i> */}
                            Place a Bid
                        </button>
                    </div>
                </div>
            </div>

            {isVisible && <BidForm visible={isVisible} setVisible={setVisible} data={data} />}
        </>
    )
}