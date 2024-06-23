import { RxCross2 } from "react-icons/rx";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoIosCalendar } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import backupImg from "../assets/backupImg.jpg"
import { motion } from 'framer-motion'

const UserFullModal = ({ userData, closeModal }) => {
    const { Bio, avatar, createdAt, jobTitle, profile } = userData
    const { email, firstName, lastName, username } = profile

    return (
        <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto font-mw"
        >
            <div className="backdrop fixed w-screen h-screen z-20 top-0 left-0 bg-black opacity-50"></div>
            <div className="fixed w-screen h-screen top-0 left-0 z-30 flex items-center justify-center">
                <div className="fixed h-full right-0 top-0 bg-white p-6 max-w-md w-full overflow-y-auto">
                    <div className="text-center mb-4 flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-gray-800">{username}</h3>
                        <button onClick={() => closeModal(false)} className="focus:outline-none mt-1">
                            <RxCross2 size={30} className="text-gray-500 hover:text-gray-800" />
                        </button>
                    </div>
                    <div className="flex justify-center mb-4 mt-8">
                        <img
                            onError={(e) => e.target.src = backupImg}
                            src={avatar}
                            alt={username}
                            className="w-[140px] h-[140px] rounded-full border-4 border-white shadow-lg"
                        />
                    </div>
                    <div className="text-center mb-4 mt-6 flex flex-col items-center gap-2">
                        <h4 className="text-[28px] font-bold text-gray-700">{firstName + ' ' + lastName}</h4>
                        <p className="text-[16px] font-semibold py-1 px-2 w-max bg-gray-200 shadow-md rounded-lg border text-blue-400">{jobTitle}</p>
                    </div>
                    <div className="text-center mb-4 ml-4 mt-8">
                        <div className=" flex flex-col items-start mb-3">
                            <div className=" flex gap-2 items-center border-b mb-1">
                                <h5 className=" text-xl font-bold text-gray-700">Info</h5>
                                <IoInformationCircleOutline size={18} fill="rgb(55, 65, 81)" />
                            </div>
                            <div className=" flex gap-3 items-center my-1">
                                <MdMailOutline fill="rgb(156, 163, 175)" size={24} />
                                <p className="text-[12px] text-gray-700 font-medium">{email}</p>
                            </div>
                            <div className=" flex gap-3 items-center my-1">
                                <IoIosCalendar fill="rgb(156, 163, 175)" size={24} />
                                <p className="text-[12px] text-gray-700 font-medium">{new Date(createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-4">
                        <div className=" flex gap-2 items-center ml-4 border-b">
                            <h5 className=" text-xl font-bold text-gray-700">Bio</h5>
                            <FaRegPenToSquare size={15} fill="rgb(55, 65, 81)" />
                        </div>
                        <p className="text-sm text-gray-800 mt-3 font-medium text-justify ml-4">{Bio}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default UserFullModal