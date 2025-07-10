import { Input } from "@/components/ui/input";
import { FaCog, FaUser, FaSearch, FaBell } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="p-2 *:mt-2 flex justify-between shadow ">
      <div className="ml-2 flex gap-40 items-center">
        <h1>BookHaven</h1>
        <Input
          className="bg-amber-500 w-[270px] placeholder-white"
          type="search"
          placeholder="Search for books"
        />
      </div>

      <div className="mr-2 flex gap-8 items-center">
        <FaSearch size={16}/>
        <FaBell size={24}/>
        <FaCog size={24}/>
        <FaUser className="bg-amber-500 p-2 text-white rounded-md" size={24}/>
      </div>
    </div>
  );
};

export default NavBar;
