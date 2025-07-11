import Statistics from "./statistics";
import { Chart } from "./chart";
import Recommendations from "./recommendations";
import FeedFooter from "./feed-footer";

const Feed = () => {
  return (
    <div className="flex flex-col gap-4">
     
      <Statistics />
      <Chart /> 
      <Recommendations />
      <FeedFooter />
    </div>
  );
};

export default Feed;
