import ReadersCard from "./readers-card";
import DropDown from "./drop-down-menu";
import SalesCard from "./sales-card";
import Profile from "./profile";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";
const Statistics = () => {
  return (
    <div className="border border-gray-200 w-[600px] h-[320px] p-4 rounded-lg shadow ">
      <div className="flex justify-between">
        <h1>Statistics</h1>
        <DropDown />
      </div>
      <div className="flex">
        <ReadersCard />
        <SalesCard />
      </div>

      <div className="flex justify-between">
        <p>Welcome: 200 new readers</p>
        <Button className="bg-amber-500">Send offer</Button>
      </div>
      <div className="flex justify-around mt-4">
        <Profile />
        <Profile />
        <Profile />
        <div className="flex flex-col items-center">
          <FaArrowRight className="bg-amber-500 w-[50px] h-[35px] p-2 rounded-lg text-white" />
          <span>View all</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
