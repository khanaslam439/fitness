import './index.css';
export default function SliderWidget(){
    return (
        <div>
            <div className='slider'>
                <div className='flex justify-between'>
                    <span>Effectiveness of Training</span>
                    <span>4.8/5</span>
                </div>
                <span className='active' style={{width:"calc(4.8*20%)"}}></span>
            </div>
            <div className='slider'>
                <div className='flex justify-between'>
                    <span>Knowledge and Expertise</span>
                    <span>4.8/5</span>
                </div>
                <span className='active' style={{width:"calc(3.4*20%)"}}></span>
            </div>
            <div className='slider'>
                <div className='flex justify-between'>
                    <span>Communicatation Skills</span>
                    <span>4.8/5</span>
                </div>
                <span className='active' style={{width:"calc(4.8*20%)"}}></span>
            </div>
            <div className='slider'>
                <div className='flex justify-between'>
                    <span>Professionalism</span>
                    <span>4.8/5</span>
                </div>
                <span className='active' style={{width:"calc(3.5*20%)"}}></span>
            </div>
            <div className='slider'>
                <div className='flex justify-between'>
                    <span>Availability Punctuation</span>
                    <span>4.8/5</span>
                </div>
                <span className='active' style={{width:"calc(4.0*20%)"}}></span>
            </div>
        </div>
    )
}