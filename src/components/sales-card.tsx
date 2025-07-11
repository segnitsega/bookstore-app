import { FaChartArea } from "react-icons/fa";
const Card = () => {
  return (
    <div className="m-8 flex w-[200px] border border-gray-200 p-4 rounded-xl shadow">
      <FaChartArea className="bg-amber-500 text-white p-1 w-[30px] h-[20px] rounded-xl" />
      <div className="flex flex-col ml-1 mr-[40px]">
        <span>Sales</span>
        <span>1,250</span>
      </div>
      <span className="bg-amber-500 rounded-lg p-1 w-[80px] h-[30px] text-white">
        + 15%
      </span>
    </div>
  );
};

export default Card;
