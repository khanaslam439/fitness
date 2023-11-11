import { useState } from "react"
import FilterSlider from "../FilterSlider";
import { ADV_FILTER } from "@/constants/common";

export default function Filter(){
    const [showSlider,setShowSlider] = useState(false);
    return(
        <>
        <div className="flex items-center mb-5 justify-between">
            <div>
                <input 
                    type="text" 
                    className="form-input rounded-lg lg:outline-0 w-full  border border-slate-400 py-2" 
                    placeholder="Search..."    
                />
            </div>
            <button onClick={e => setShowSlider(true)}><i className="uil uil-filter"></i> Advance Filter</button>
        </div>
        {<FilterSlider filters={ADV_FILTER} closeSlider={setShowSlider} isToShowDialog={showSlider} />}
        </>
    )

}