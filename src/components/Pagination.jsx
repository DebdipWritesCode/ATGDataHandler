import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Pagination = ({ page, setPage, isNextPage }) => {
    return (
        <div className={` flex ${(page > 1 && isNextPage) ? 'justify-between' : 'justify-center'} w-[60%]`}>
            {
                page > 1 && (
                    <button onClick={() => setPage(page - 1)} className=" flex gap-2 p-2 rounded-lg font-mw hover:bg-blue-100">
                        <GoArrowLeft size={24} className=" cursor-pointer" fill="rgb(30, 64, 175)" />
                        <p className="font-bold text-blue-800">Previous</p>
                    </button>
                )
            }
            {
                isNextPage && (
                    <button onClick={() => setPage(page + 1)} className=" flex gap-2 p-2 rounded-lg font-mw hover:bg-blue-100">
                        <p className="font-bold text-blue-800">Next</p>
                        <GoArrowRight size={24} className=" cursor-pointer" fill="rgb(30, 64, 175)" />
                    </button>
                )
            }
        </div>
    )
}

export default Pagination