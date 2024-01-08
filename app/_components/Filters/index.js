import { useState } from "react"
import FilterSlider from "../FilterSlider";
import { ADV_FILTER } from "@/constants/common";

export default function Filter(){
    const [showSlider,setShowSlider] = useState(false);
    return(
        <>
        <div className="flex items-center mb-5 justify-between">
           <h4>Total 8 records found.</h4>
            <button onClick={e => setShowSlider(true)}><i className="uil uil-filter"></i> Advance Filter</button>
        </div>
        {<FilterSlider filters={ADV_FILTER} closeSlider={setShowSlider} isToShowDialog={showSlider} />}
        </>
    )

}