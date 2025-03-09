"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataPoint {
  name: string;
  value: number;
  date: string;
}

const TIME_PERIODS = ["1W", "1M", "6M", "1YR", "ALL"];

const DATA: DataPoint[] = [
  { name: "Jan", value: 12000, date: "2024-01" },
  { name: "Feb", value: 35000, date: "2024-02" },
  { name: "Mar", value: 28000, date: "2024-03" },
  { name: "Apr", value: 33000, date: "2024-04" },
  { name: "May", value: 42000, date: "2024-05" },
  { name: "Jun", value: 27000, date: "2024-06" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm">₦{payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export function AirtimeChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("6M");
  const [selectedType, setSelectedType] = useState("Airtime Purchase");

  const currentValue = 810565.0;
  const percentageChange = 12.9;

  return (
    <div className="bg-white p-4 md:p-6 md:border border-gray-1 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 p-2 bg-transparent text-primary font-semibold border border-gray-1 rounded-lg">
            {selectedType}
            <ChevronDown className="h-4 w-4 font-semibold" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => setSelectedType("Airtime Purchase")}
            >
              Airtime Purchase
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedType("Data Purchase")}>
              Data Purchase
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="bg-transparent w-fit rounded-lg border border-gray-1 px-2 py-0.5 flex items-center">
          {TIME_PERIODS.map((range) => (
            <motion.button
              key={range}
              className={`px-4 py-2 rounded-lg text-xs font-medium text-primary relative ${
                selectedPeriod === range
                  ? " border border-gray-1 bg-offWhite"
                  : " border border-white"
              }`}
              onClick={() => setSelectedPeriod(range)}
            >
              {selectedPeriod === range && (
                <motion.div
                  className="absolute inset-0  rounded-lg bg- text-red-200"
                  layoutId="timeRangeBackground"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{range}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="flex justify-end items-start text-right mb-4">
        <div className="space-y-2">
          <p className="text-lg font-semibold">
            N
            {currentValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
          <div className="flex items-center justify-end gap-2">
            <span className="px-2 py-1 bg-lightGreen/10 text-lightGreen text-sm font-light rounded-full">
              +{percentageChange}%
            </span>
            <span className="text-xs text-primary/70">
              in 6 months
            </span>
          </div>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={DATA}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2F414A" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#2F414A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="linear"
              dataKey="value"
              stroke="#2F414A"
              strokeWidth={2}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
