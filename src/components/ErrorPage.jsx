import ErrorIcon from '../animations/errorIcon.json'
import Lottie from 'lottie-react'
import { CgSmileSad } from "react-icons/cg";

const ErrorPage = ({ content = 'Oops, some error occured' }) => {
  return (
    <div className=' h-[80vh] flex flex-col items-center justify-center'>
        <Lottie animationData={ErrorIcon} style={{ width: 300, height: 300 }}/>
        <p className=' text-[#FB2C56] font-bold text-[28px] flex items-center'>{content}
            <span>
                <CgSmileSad size={26} fill='#FB2C56' className='ml-3' />
            </span>
        </p>
    </div>
  )
}

export default ErrorPage