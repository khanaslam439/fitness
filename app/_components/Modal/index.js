import ServiceCard from "../ServiceCard";
import { useRouter } from "next/navigation";

const Modal = ({onCloseHander, minWidth=600}) => {
    const history = useRouter()
    return (
        <div className="relative" aria-labelledby="modal-title" role="dialog" aria-modal="true" style={{zIndex: 1000}}>
            <div className="fixed inset-0 bg-dark bg-opacity-50 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" style={{minWidth:minWidth, minHeight: minWidth / 3}}>
                    <div className="bg-white px-6 py-6 sm:p-6 sm:pb-4">
                        <h3 className="text-base text-xl mb-5 font-black leading-6 text-indigo-600 text-center" id="modal-title">What type of trainer you want?</h3>
                        <div className="">
                            <div className="grid lg:grid-cols-3 flex-wrap gap-5">
                                <ServiceCard title="Online Training" imageUrl={'/assets/images/fitness/online-training.webp'} onClickHander={e => history.push('/trainers')} />
                                <ServiceCard title="Training At Home" imageUrl={'/assets/images/fitness/home-training.jpg'} onClickHander={e => history.push('/trainers')} />
                                <ServiceCard title="Society Clubs" imageUrl={'/assets/images/fitness/society-club.webp'} onClickHander={e => history.push('/trainers')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal;