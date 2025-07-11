import { SearchBar } from "./searchBar";
import FilterBar from "./filterBar";
import { Button } from "@/components/ui/button";

const FeedNavBar = () => {
  return (
    <div className="ml-8 flex gap-[250px] items-center">
      <div className="flex flex-col">
        <h1>Enjoy - Reading</h1>
        <p className="text-gray-500">Last update January 29, 2023</p>
      </div>

      <div className="flex items-center gap-4">
        <SearchBar />
        <FilterBar />
        <Button className="bg-amber-500">Add Book</Button>
      </div>
    </div>
  );
};

export default FeedNavBar;
