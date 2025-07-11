import {
  FaHome,
  FaBook,
  FaThList,
  FaBookmark,
  FaUser,
  FaCog,
  FaPlusCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sticky top-0 flex flex-col justify-between bg-amber-500 text-white w-[250px] h-screen p-6 rounded-xl text-lg">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="flex gap-2">
          <FaBook />
          <span>Books</span>
        </div>
        <div className="flex gap-2">
          <FaThList />
          <span>Genres</span>
        </div>
        <div className="flex gap-2">
          <FaBookmark />
          <span>Bookstore</span>
        </div>
        <div className="flex gap-2">
          <FaUser />
          <span>Account</span>
        </div>
        <div className="flex gap-2">
          <FaCog />
          <span>Settings</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <FaPlusCircle />
          <span>Add Book</span>
        </div>

        <div className="flex gap-2">
          <FaSignOutAlt />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
