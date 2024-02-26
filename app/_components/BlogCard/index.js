import Link from "next/link";

export default function BlogCard({video=false, title, desc, category, imgUrl="assets/images/gym/blog3.jpg", link, type, imgHeight}){
    return (
        <>
            {video &&  <Link href={link}>
                <div className="blog mb-2 relative overflow-hidden cursor-pointer" href={link}>
                    <img src={imgUrl} className={`${imgHeight ? `h-[${imgHeight}px]`: 'lg:h-[150px] h-[180px]'} w-full object-cover rounded-lg`} />
                    <div className="absolute bg-gray-900 h-[150px] rounded-lg opacity-50 w-full top-0 left-0"></div>
                    <div className="absolute top-[40%] hover:bg-indigo-600 duration-500 transition-all left-[50%] ml-[-25px] mt-[-25px] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[rgba(255,255,255,.5)]">
                        <i className="uil uil-play text-white text-xl cursor-pointer"></i>
                    </div>
                    <h4 className="my-2 font-medium text-sm text-ellipsis truncate">{title}</h4>
                </div>
            </Link>
            }
            {!video && <Link href={link}><div className="blog mb-2 relative overflow-hidden">
                {type && <div className="absolute top-3 right-3 bg-slate-500 text-white rounded-lg text-xs py-1 px-3">{type}</div>}
                <img src={imgUrl} className={`${imgHeight ? `h-[${imgHeight}px]`: 'lg:h-[150px] h-[180px]'} w-full object-cover rounded-lg`} />
                <div className="mt-2">
                    <p className="text-[12px] text-indigo-500 font-bold">{category}</p>
                    <h4 className="mb-2 text-lg lg:text-sm">{title}</h4>
                </div>
            </div>
        </Link>}
        </>
    )
}