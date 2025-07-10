import { ChevronDown } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="relative w-[120px] border border-gray-300 rounded-md flex items-center space-x-2 p-2">
        <div className="">Filter by</div>
        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"/>
    </div>
  )
}

export default FilterBar