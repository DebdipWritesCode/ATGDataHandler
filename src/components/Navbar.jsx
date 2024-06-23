import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" font-mw w-[90%] mt-10 flex justify-between items-center">
      <div className=" flex items-center gap-3">
        <h2 className=" font-black text-[32px] text-[#577af8]">Users</h2>
        <FaRegUser size={24} fill="#577af8" />
      </div>
      <p className=" font-bold text-lg">Created by Debdip Mukherjee</p>
    </nav>
  )
}

export default Navbar