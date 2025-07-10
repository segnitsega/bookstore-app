import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-[270px] flex items-center space-x-2 p-2">
      <Input
        type="search"
        placeholder="Search for books"
        className=" rounded-md"
      />
      <SearchIcon className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={20}/>
    </div>
  );
}
