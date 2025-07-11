import { Input } from "@/components/ui/input";
import { FaCog, FaUser, FaSearch, FaBell } from "react-icons/fa";
import { SearchBar } from "./searchBar";
import profile from "../assets/profile.jpg";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="p-2 flex justify-between shadow w-full mb-4">
      <SearchBar />

      <div className="mr-2 flex gap-8 items-center">
        <Button className="bg-amber-500">Add Book</Button>
        <FaSearch size={16} />
        <FaBell size={24} />
        <img src={profile} alt="" className="w-[40px] h-[40px] rounded-2xl" />
      </div>
    </div>
  );
};

export default NavBar;
