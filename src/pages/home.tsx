import SideBar from "@/components/sideBar";
import NavBar from "@/components/navBar";
import Feed from "@/components/feed";
import Reviews from "@/components/reviews";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="border p-1 rounded-lg">
        <p>Featured books</p>
        <span>Discover new reads</span>
      </div>
      <div className="flex ">
        <Feed />
        <div className="flex flex-col gap-2">
      <h1>Reviews</h1>

          <Reviews />
          <Reviews />
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Home;
