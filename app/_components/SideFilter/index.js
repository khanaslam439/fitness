import { ADV_FILTER } from "@/constants/common";

export default function SideFilter(){
    return (
        <div id="accordion-collapseone" data-accordion="collapse">
            <div className="shadow dark:shadow-gray-800 p-6 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                <form>
                    <div className="grid grid-cols-1 gap-3">
                        <div>
                            <label for="searchname" className="hidden font-semibold"></label>
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search w-4 h-4 absolute top-3 start-3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            
                                <input name="search" id="searchname" type="text" className="form-input w-full py-2 px-3 h-10 ps-9 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Search" />
                            </div>
                        </div>
                        
                        <div>
                            <label className="font-semibold">Categories</label>
                            { ADV_FILTER.map((el, index) =>  el.type == 'categories' && 
                            el.data.map(elem => 
                            <div key={index} className="block mt-2">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1"  />
                                        <span className="text-slate-400">{elem}</span>
                                    </label>
                                </div>
                            </div>)
                            )}
                        </div>
    

                        <div className="mt-2">
                            <input type="submit" className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Apply Filter" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}