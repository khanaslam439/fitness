import Link from "next/link";
import Image from "next/image";
export default function ProfileCard({data}){
    return (
        <div className="text-center shadow-lg    px-5 py-10 overflow-hidden rounded-lg" style={{position:'sticky', top:80}}>
            <div className="absolute h-[140px] left-0 top-0 bg-[url('/assets/images/fitness/hero.jpg'))] w-full" style={{zIndex:0}}></div>
            <div className="absolute h-[140px] left-0 top-0 bg-black/10 w-full" style={{zIndex:0}}></div>
            <div style={{zIndex: 1, position:'relative'}}>
                <Image
                src={"/assets/images/client/06.jpg"}
                width={100}
                height={100}
                className="rounded-full inline-block mt-8"
                />

                <h4 className="font-medium mt-6 text-3xl">{data?.name}</h4>
                <p className="mb-10">{data?.type}</p>
                <button className="bg-indigo-600 text-white px-5 py-3 shadow text-sm font-bold rounded-lg">Claim Free Demo</button>
            </div>
        </div>
    )
}