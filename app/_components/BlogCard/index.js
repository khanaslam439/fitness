import Link from "next/link";

export default function BlogCard({video=false, title, desc, imgUrl="assets/images/gym/blog3.jpg", link}){
    return (
        <>
            {   video && 
                <div className="blog mb-2 relative overflow-hidden">
                    <img src={imgUrl} className="h-[200px] w-full object-cover rounded-lg" />
                    <div className="absolute bg-gray-900 h-[200px] rounded-lg opacity-50 w-full top-0 left-0"></div>
                    <div className="absolute top-[40%] hover:bg-indigo-600 duration-500 transition-all left-[50%] ml-[-25px] mt-[-25px] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[rgba(255,255,255,.5)]">
                        <i className="uil uil-play text-white text-xl cursor-pointer"></i>
                    </div>
                    <h4 className="my-2 font-bold text-md">{title}</h4>
                </div>
            }
            {!video && <div className="blog mb-2 relative overflow-hidden">
                <img src={imgUrl} className="h-[300px] w-full object-cover rounded-lg" />
                <div className="p-4">
                    <h4 className="my-2 font-bold text-md">{title}</h4>
                    <p className="mb-4 text-gray-400">{desc}</p>
                    <Link href="#" className="text-indigo-600 text-md">Read more <i className="uil uil-arrow-right"></i></Link>
                </div>
            </div>}
        </>
    )
}