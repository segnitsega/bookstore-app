import FeedNavBar from "./components/feedNavBar";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import TableDashboard from "./components/table-dashboard";
import Statistics from "./components/statistics";

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
      <Statistics />
    </div>
  );
};

export default App;
