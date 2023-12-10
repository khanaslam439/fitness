import Link from "next/link";
import Image from "next/image";
export default function ProfileCard({data}){
    const bg = ['to-red-600/70 from-indigo-600/70',
                'to-fuchsia-600/70 from-green-600/70',
                'to-pink-600/70 from-purple-600/70',
                'to-indigo-600/70 from-blue-600/70',
                'to-sky-600/70 from-yellow-600/70',
                'to-orange-600/70 from-indigo-600/70']
    return (
        <div className="text-center shadow-md    px-5 py-10 overflow-hidden rounded-lg" style={{position:'sticky', top:80}}>
            <div className={`absolute h-[140px] left-0 top-0 w-full bg-gradient-to-r ${bg[Math.floor(Math.random() * 5)]}`} style={{zIndex:0}}></div>
            <div style={{zIndex: 1, position:'relative'}}>
                <Image
                src={"/assets/images/client/06.jpg"}
                width={100}
                height={100}
                className="rounded-full inline-block mt-8"
                />

                <h4 className="font-medium mt-6 text-3xl">{data?.name}</h4>
                <p className="mb-10">{data?.type}</p>
                <div className="cta_button gap-4 flex justify-center">
                    <button className='text-md p-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md'>
                        <i className='mdi mdi-gavel fs-5 me-2'></i>
                        Place a Bid
                    </button>
                    <button className='text-md p-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-600/5 border-indigo-600 hover:border-indigo-700 text-white rounded-md hover:text-indigo-600'>
                        <i className='mdi mdi-cart fs-5 me-2'></i>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}