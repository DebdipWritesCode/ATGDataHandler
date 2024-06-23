import backupImg from '../assets/backupImg.jpg'
import { motion } from 'framer-motion'

const UserThumbnail = ({ user, onClickAction }) => {
    const { profile, jobTitle, avatar } = user
    const name = profile.firstName + ' ' + profile.lastName

    return (
        <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.3 }}
            onClick={onClickAction}
            className=" flex gap-2 shadow-lg px-4 py-6 w-[320px] h-[160px] hover:bg-slate-100 hover:border cursor-pointer font-mw items-center"
        >
            <div className="">
                <img onError={(e) => e.target.src = backupImg} src={avatar} alt={name} className="rounded-full w-[96px] h-[96px]" />
            </div>
            <div className=" mt-4 flex flex-col gap-2 px-2">
                <h3 className='text-lg font-black'>{name}</h3>
                <p className='text-[12px] font-medium text-blue-600 border-blue-600 border rounded-3xl p-1 text-center'>{jobTitle}</p>
            </div>
        </motion.div>
    )
}

export default UserThumbnail