import FeedNavBar from "./components/feedNavBar";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import TableDashboard from "./components/table-dashboard";
import Statistics from "./components/statistics";
import DropDown from "./components/drop-down-menu";
import {Chart} from "./components/chart";

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
     <Chart />
    </div>
  );
};

export default App;
