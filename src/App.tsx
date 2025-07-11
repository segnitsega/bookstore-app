import FeedNavBar from "./components/feedNavBar";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import TableDashboard from "./components/table-dashboard";
import Statistics from "./components/statistics";
import DropDown from "./components/drop-down-menu";
import {Chart} from "./components/chart";
import Reviews from "./components/reviews";
import Profile from "./components/profile";
import Home from "./pages/home";
import Feed from "./components/feed";

import Recommendations from "./components/recommendations";

const App = () => {
  return (
    <div>
      {/* <NavBar />
      <div className="flex items-baseline">
        <SideBar />
        <div>
           <FeedNavBar /> 
       <TableDashboard />
        </div>
       
       </div> */}
      {/* <Statistics /> */}
     {/* <Chart /> */}
        {/* <Home /> */}
        <Feed />
        {/* <Recommendations /> */}

    </div>
  );
};

export default App;
