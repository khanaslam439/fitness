import { useEffect, useState } from 'react';
import './slidepane.css';
import FilterList from './filterList';

export default function FilterSlider({filters, closeSlider, isToShowDialog}){
    const [isVisible, setVisible] = useState(false);
    
    useEffect(() => {
        isToShowDialog && setVisible(true)
    }, [isToShowDialog])

    const closeSlidePane = () => {
        setVisible(false)
        setTimeout(() => {
            closeSlider(false)
        },1000)
    }

    return (
        <div className={`tu_slidepane ${isToShowDialog ? 'show' : ''}`}>
            <div className="tu_slidepane_wrapper">
                <div className={`tu_slidepan_overlay bg-indigo-500 absolute duration-500 transition top-0 bottom-0 right-0 left-0 w-full h-full ${isVisible ? 'opacity-75' : 'opacity-0'}`}></div>
                <div className={`tu_slidepane_content bg-white fixed flex-col right-0 top-0 bottom-0  transform transition-transform ease duration-700 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="tu_slidepane_header border bottom flex justify-between p-3">
                        <h2><i className='uil uil-filter'></i> Filters</h2>
                        <span className='cursor-pointer text-xl' onClick={e => closeSlidePane()}>&times;</span>
                    </div>
                    <div className="tu_slidepane_body p-4 relative overflow-y-auto" style={{height: 'calc(100vh - 135px)'}}>
                        {
                            filters.map(filter => <FilterList filter={filter} />)
                        }
                    </div>
                    <div className='tu_slidepane_footer p-4'>
                        <button className='rounded-lg text-white bg-indigo-500 w-full py-3'>Apply FIlters</button>
                    </div>
                </div>
            </div>
        </div>    
    )
}