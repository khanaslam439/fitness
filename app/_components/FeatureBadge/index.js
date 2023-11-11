export default function FeatureBadge({title, data}){
    return (
        <div className="mb-8">
            <h4 className='text-medium font-semibold mb-1'>{title}</h4>
            <ul className="flex gap-2">
                {
                    data.map(button => (
                        <li className="p-1 capitalize px-4 bg-slate-200 rounded-lg text-sm text-slate-900">{button}</li>
                    ))
                }
            </ul>
        </div>
    )
}