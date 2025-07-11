import {
  FaBookOpen,
  FaClock,
  FaLightbulb,
  FaComment,
  FaStar,
  FaRegFileAlt,
} from "react-icons/fa";
import { Button } from "./ui/button";

const Recommendations = () => {
  return (
    <div className="m-8 w-[600px] border border-gray-200 shadow p-4 rounded-2xl">
      <h1>Book Recommendations</h1>
      <p>Looking for your next great read?</p>
      <div className="flex gap-[150px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 ">
            <FaRegFileAlt className="bg-amber-500 p-2 w-[50px] h-[50px] text-white rounded-lg" />
            <div>
              <h1>Reading Tips</h1>
              <Button className="bg-amber-500 w-[50px] h-[25px]">
                Explore
              </Button>
            </div>
          </div>

          <div className="flex gap-2 ">
            <FaClock className="bg-amber-500 p-2 w-[50px] h-[50px] text-white rounded-lg" />
            <div>
              <h1>Reading Tips</h1>
              <Button className="bg-amber-500 w-[50px] h-[25px]">
                Explore
              </Button>
            </div>
          </div>
          <div className="flex gap-2 ">
            <FaLightbulb className="bg-amber-500 p-2 w-[50px] h-[50px] text-white rounded-lg" />
            <div>
              <h1>Reading Tips</h1>
              <Button className="bg-amber-500 w-[50px] h-[25px]">
                Explore
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 ">
            <FaComment className="bg-amber-500 p-2 w-[50px] h-[50px] text-white rounded-lg" />
            <div>
              <h1>Reading Tips</h1>
              <Button className="bg-amber-500 w-[50px] h-[25px]">
                Explore
              </Button>
            </div>
          </div>

          <div className="flex gap-2 ">
            <FaStar className="bg-amber-500 p-2 w-[50px] h-[50px] text-white rounded-lg" />
            <div>
              <h1>Reading Tips</h1>
              <Button className="bg-amber-500 w-[50px] h-[25px]">
                Explore
              </Button>
            </div>
          </div>
          <div className="flex gap-2 ">
            <FaBookOpen className="bg-amber-500 p-2 w-[50px] h-[50px] text-white rounded-lg" />
            <div>
              <h1>Reading Tips</h1>
              <Button className="bg-amber-500 w-[50px] h-[25px]">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
