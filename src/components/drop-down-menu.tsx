import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropDown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="border border-gray-200 p-1 rounded-md">
          This Month
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Last Month</DropdownMenuItem>
          <DropdownMenuItem>This year</DropdownMenuItem>
          <DropdownMenuItem>Last year</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
