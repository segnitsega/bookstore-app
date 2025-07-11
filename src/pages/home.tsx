import SideBar from "@/components/sideBar";
import NavBar from "@/components/navBar";
// import Feed from "@/components/feed";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div className="flex gap-5">
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
