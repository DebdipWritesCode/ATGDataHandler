import HourGlassm from '../animations/hourGlass.json'
import Lottie from 'lottie-react'
import { FaRegSmile } from "react-icons/fa";

const Loading = () => {
  return (
    <div className=' h-full flex flex-col items-center justify-center'>
        <Lottie animationData={HourGlassm} style={{ width: 300, height: 300 }}/>
        <p className=' text-[#0162A9] font-bold text-[28px] flex items-center max-[375px]:text-lg'>Good things take time
            <span>
                <FaRegSmile size={24} fill='#0162A9' className='ml-3' />
            </span>
        </p>
    </div>
  )
}

export default Loading