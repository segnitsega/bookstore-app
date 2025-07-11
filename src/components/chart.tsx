"use client";
// import { Bar, BarChart, CartesianGrid } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import DropDown from "./drop-down-menu";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 173, mobile: 190 },
  { month: "May", desktop: 250, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 300, mobile: 140 },
  { month: "June", desktop: 200, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#f59e0b",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
export function Chart() {
  return (
    <div className="">
      <div className="flex justify-between w-[600px] mb-4">
        <h1>Book overview</h1>
        <DropDown />
      </div>

      <ChartContainer config={chartConfig} className="min-h-[200px] w-[500px] ml-8">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={30} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
