import Link from "next/link";

export default function BlogCard({title, desc, imgUrl="assets/images/gym/blog3.jpg", link}){
    return (
            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                <img src={imgUrl} alt="" />

                <div className="content p-6">
                    <Link href={link} className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{title}</Link>
                    <p className="text-slate-400 mt-3">{desc}</p>
                    
                    <div className="mt-4">
                        <Link href={link} className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
    )
}