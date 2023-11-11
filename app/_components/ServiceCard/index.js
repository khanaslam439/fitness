"use client";
import Image from "next/image";
const ServiceCard = ({title, imageUrl,  onClickHander}) => {
    return (
        <div className="p-6 border border-1 hover:shadow-gray-100 cursor-pointer hover:shadow-xl hover:bg-indigo-600 hover:text-white hover:font-bold  dark:hover:shadow-gray-900 duration-500 rounded-2xl my-6 text-center" onClick={ e => onClickHander(title)}>
            <Image src={imageUrl} className="rounded-full display-block mx-auto object-cover" style={{minHeight:125}} width={125} height={125} />
            <div className="content mt-7">
                <a className="title h5 text-lg font-light hover:font-black leading-tight hover:text-white">{title}</a>
                {/* <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p> */}
            </div>
        </div>
    )
}

export default ServiceCard;