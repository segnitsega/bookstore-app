import Statistics from "./statistics";
import { Chart } from "./chart";
import Recommendations from "./recommendations";
import FeedFooter from "./feed-footer";

const Feed = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="border p-1 rounded-lg w-[600px]">
        <p>Featured books</p>
        <span>Discover new reads</span>
      </div>
      <Statistics />
      <Chart /> 
      <Recommendations />
      <FeedFooter />
      
    </div>
  );
};

export default Feed;
