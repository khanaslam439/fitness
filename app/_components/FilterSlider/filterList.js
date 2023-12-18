export default function FilterList({filter}){
    return (
        <ul className="pl-2 mb-6">
            <h5 className="mb-2 font-bold text-black capitalize">{filter.type}</h5>
            {filter.data.map((el, id)=>
              <li className="cursor-pointer" key={id}>
                <label className="inline-flex items-center">
                    <input type="radio" className="form-radio border-gray-400 dark:border-gray-800 text-indigo-500 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-600 focus:ring-opacity-25 me-2" name="radio-colors" value="" />
                    <span className="text-slate-400 capitalize text-[15px] text-gray font-light">{el}</span>
                </label>
              </li>  
            )}
        </ul>
    )
} 