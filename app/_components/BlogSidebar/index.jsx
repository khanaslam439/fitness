import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const BlogSidebar = ({activeIndex}) => {
    const params = useParams();
    console.log(params);
    const [activeTab, setActiveTab] = useState({blog: true, recipe: false, video:false})
  return (
    <ul className='flex flex-col gap-4'>
        <li>
            <a href='javascript:;' onClick={e => setActiveTab({...activeTab, blog: !activeTab.blog})} className={`flex items-center relative p-4 bg-gray-100 block`}>
                <i className={`uil uil-books text-xl me-2 ${activeTab?.blog && 'text-indigo-600'}`}></i> 
                <span className={`text-md font-semibold ${activeTab?.blog && 'text-indigo-600'}`}>Blogs</span> 
                <i className={`uil ${activeTab?.blog ? 'uil-angle-up' : 'uil-angle-down'} text-xl absolute right-4 top-4 me-2`}></i>
            </a>
            <div className={`flex flex-col bg-white pt-2 py-4 px-1 ${activeTab?.blog ? "" : "hidden"}`}>
                <a href="/blogs/clinical-nutrition" className="px-4 py-1 flex items-center text-sm hover:text-indigo-600 hover:font-bold"><i className="inline-block w-[4px] h-[4px] bg-slate-700 rounded-full me-4"></i>Clinical Nutrition</a>
                <a href="/blogs/exercise" className="px-4 py-1 flex items-center text-sm hover:text-indigo-600 hover:font-bold"><i className="inline-block w-[4px] h-[4px] bg-slate-700 rounded-full me-4"></i>Exercise</a>
                <a href="/blogs/general-nutrition" className="px-4 py-1 flex items-center text-sm hover:text-indigo-600 hover:font-bold"><i className="inline-block w-[4px] h-[4px] bg-slate-700 rounded-full me-4"></i>General Nutrition</a>
                <a href="/blogs/supplements-guide" className="px-4 py-1 flex items-center text-sm hover:text-indigo-600 hover:font-bold"><i className="inline-block w-[4px] h-[4px] bg-slate-700 rounded-full me-4"></i>Supplements Guide</a>
            </div>
        </li>
        <li>
            <a href='javascript:;' onClick={e => setActiveTab({...activeTab, recipe: !activeTab.recipe})} className={`flex rounded-lg relative items-center p-4 bg-gray-100 block ${activeIndex == 1 ? 'border-l-4 border-l-indigo-500' : ''}`}>
                <i className={`uil uil-restaurant text-xl me-2 ${activeTab?.recipe && 'text-indigo-600'}`}></i> 
                <span className={`text-md font-semibold ${activeTab?.recipe && 'text-indigo-600'}`}>Recipe</span>
                <i className={`uil ${activeTab?.recipe ? 'uil-angle-up' : 'uil-angle-down'} text-xl absolute right-4 top-4 me-2`}></i>
            </a>
            <div className={`flex flex-col bg-white pt-2 py-4 px-1 ${activeTab?.recipe ? "" : "hidden"}`}>
                <a href="/recipes/non-veg" className="px-4 py-1 flex items-center text-sm hover:text-indigo-600 hover:font-bold"><i className="inline-block w-[4px] h-[4px] bg-slate-700 rounded-full me-4"></i>Non-veg</a>
                <a href="/recipes/veg" className="px-4 py-1 flex items-center text-sm hover:text-indigo-600 hover:font-bold"><i className="inline-block w-[4px] h-[4px] bg-slate-700 rounded-full me-4"></i>Veg</a>
                <a href="/recipes/vegan" className="px-4 py-1 flex items-center text-sm hover:text-indigo-600 hover:font-bold"><i className="inline-block w-[4px] h-[4px] bg-slate-700 rounded-full me-4"></i>Vegan</a>
            </div>
        </li>
        <li>
            <a href='javascript:;' onClick={e => setActiveTab({...activeTab, video: !activeTab.video})} className={`flex rounded-lg relative p-4 items-center bg-gray-100 block ${activeTab?.video ? 'border-l-4 border-l-indigo-500' : ''}`}>
                <i className={`uil uil-youtube text-xl me-2 ${activeTab?.video && 'text-indigo-600'}`}></i> 
                <span className={`text-md font-semibold ${activeTab?.video && 'text-indigo-600'}`}>Fitness Videos</span> 
                <i className={`uil ${activeTab?.video ? 'uil-angle-up' : 'uil-angle-down'} text-xl absolute right-4 top-4 me-2`}></i>
            </a>
            <div className={`flex flex-col bg-white pt-2 py-4 px-1 ${activeTab?.video ? "" : "hidden"}`}>
                <a href="/fitness-videos/chest" className={`px-4 py-1 flex items-center text-sm hover:text-indigo-600 hover:font-bold ${params?.subCategories == 'chest' && 'text-indigo-600 font-bold'}`}><i className="inline-block w-[4px] h-[4px] bg-slate-700 rounded-full me-4"></i>Chest</a>
                <a href="/fitness-videos/back" className={`px-4 py-1 flex items-center text-sm hover:text-indigo-600 hover:font-bold ${params?.subCategories == 'back' && 'text-indigo-600 font-bold'}`}><i className="inline-block w-[4px] h-[4px] bg-slate-700 rounded-full me-4"></i>Back</a>
                <a href="/fitness-videos/biceps" className={`px-4 py-1 flex items-center text-sm hover:text-indigo-600 hover:font-bold ${params?.subCategories == 'biceps' && 'text-indigo-600 font-bold'}`}><i className="inline-block w-[4px] h-[4px] bg-slate-700 rounded-full me-4"></i>Shoulder</a>
            </div>
        </li>
    </ul>
  )
}

export default BlogSidebar;
