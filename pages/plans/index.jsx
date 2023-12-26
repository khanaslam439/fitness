
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';

export default function Plans(){
    return (
        <>
        <Header />
        <section className="relative table w-full pt-10 pb-10">
            <div className="absolute inset-0 bg-gradient-to-t to-black from-black/40"></div>
            {/* <PageHeader title={trainer?.type} variant={'dark'} /> */}
        </section>
        <section className='py-12'>
            <h4 className='text-2xl font-bold mb-10 text-center'>Personal Trainer</h4>
            <div className='flex items-center justify-center gap-4 mt-5'>
                <a href="#" className='bg-white p-2 rounded-lg px-5 mb-5 border-b-4 font-bold border-b-white hover:border-indigo-500 hover:border-b-4 '>Trainer At Home</a>
                <a href="#" className='bg-white p-2 rounded-lg px-5 mb-5 border-b-4 font-bold border-b-white hover:border-indigo-500 hover:border-b-4 '>Online Trainer</a>
                <a href="#" className='bg-white p-2 rounded-lg px-5 mb-5 border-b-4 font-bold border-b-white hover:border-indigo-500 hover:border-b-4 '>Fitness & Nutrition</a>
            </div>
            <div class="container" id="start-month" role="tabpanel" aria-labelledby="start-month-tab">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    <div class="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 class="font-bold uppercase mb-5 text-indigo-600">Silver</h6>

                        <div class="flex mb-5">
                            <span class="text-xl font-semibold">$</span>
                            <span class="price text-4xl font-semibold mb-0">9</span>
                            <span class="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>
                        <div class="flex mb-5">
                            <span class="text-xl font-semibold">$</span>
                            <span class="price text-4xl font-semibold mb-0">9</span>
                            <span class="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>
                        <div class="flex mb-5">
                            <span class="text-xl font-semibold">$</span>
                            <span class="price text-4xl font-semibold mb-0">9</span>
                            <span class="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <a href="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Buy Now</a>
                    </div>

                    <div class="group border-b-[3px] border-indigo-600 p-6 py-8 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                        <span class="absolute -end-11 -top-[10px] rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">Best</span>
                        <h6 class="font-bold uppercase mb-5 text-indigo-600">Gold</h6>

                        <div class="flex mb-5">
                            <span class="text-xl font-semibold">$</span>
                            <span class="price text-4xl font-semibold mb-0">74</span>
                            <span class="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>
                        <div class="flex mb-5">
                            <span class="text-xl font-semibold">$</span>
                            <span class="price text-4xl font-semibold mb-0">74</span>
                            <span class="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>
                        <div class="flex mb-5">
                            <span class="text-xl font-semibold">$</span>
                            <span class="price text-4xl font-semibold mb-0">74</span>
                            <span class="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>
                        <a href="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</a>
                    </div>

                    <div class="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 class="font-bold uppercase mb-5 text-indigo-600">Platinum</h6>

                        <div class="flex mb-5">
                            <span class="text-xl font-semibold">$</span>
                            <span class="price text-4xl font-semibold mb-0">99</span>
                            <span class="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>
                        <div class="flex mb-5">
                            <span class="text-xl font-semibold">$</span>
                            <span class="price text-4xl font-semibold mb-0">99</span>
                            <span class="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>
                        <div class="flex mb-5">
                            <span class="text-xl font-semibold">$</span>
                            <span class="price text-4xl font-semibold mb-0">99</span>
                            <span class="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <a href="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Started Now</a>
                    </div>
                </div>
                        </div>
        </section>
        <Footer />
 
        </>
    )
}