import FeedNavBar from "./components/feedNavBar";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import TableDashboard from "./components/table-dashboard";

const App = () => {
  return (
    <div>
      {/* <NavBar />
      <div className="flex items-baseline">
        <SideBar />
      <FeedNavBar /> 
       </div>*/}
      <TableDashboard />
    </div>
  );
};

export default App;
