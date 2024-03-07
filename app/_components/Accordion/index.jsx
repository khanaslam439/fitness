import React, { useState } from 'react'

const Accordion = ({title, description}) => {
    const [isActive, setActive] = useState(false)
  return (
    <div className='relative shadow dark:shadow-gray-800 mb-4 rounded-md overflow-hidden'>
        <h2 className="text-base font-semibold mb-0">
            <button type="button" className="flex justify-between items-center p-3 px-4 w-full font-medium text-start bg-gray-50 dark:bg-slate-800 text-indigo-600" onClick={e => setActive((prev) => !prev)}>
                <span>{title}</span>
                <i className={`uil ${isActive ? 'uil-angle-up' : 'uil-angle-down'} text-2xl`}></i>
            </button>
        </h2>
        <div className={`p-5 ${isActive ? '' : 'hidden'}`}>
            <p className="text-slate-400 dark:text-gray-400">{description}</p>
        </div>
    </div>
  )
}

export default Accordion
