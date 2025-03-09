"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface ServiceData {
  name: string;
  value: number;
  change: number;
  color: string;
}

const SERVICES: ServiceData[] = [
  {
    name: "Airtime",
    value: 1200000.0,
    change: 50255.0,
    color: "#2F414A",
  },
  {
    name: "Data",
    value: 600000.0,
    change: 50255.0,
    color: "#4B5563",
  },
  {
    name: "Educational Bills",
    value: 400000.0,
    change: 50255.0,
    color: "#6B7280",
  },
  {
    name: "Others",
    value: 300000.0,
    change: 10777.0,
    color: "#9CA3AF",
  },
];

export function ServiceBreakdown() {
  return (
    <div className="bg-white p-4 md:p-6 md:border border-gray-1 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="flex justify-between">
            <h3 className="font-medium">Service Breakdown</h3>
            <button className="text-sm ">
              <Image src="/images/menudots.svg" alt="" width={24} height={24} />
            </button>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Distribution of services by value</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={SERVICES}
              innerRadius={100}
              outerRadius={170}
              paddingAngle={0}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {SERVICES.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {SERVICES.map((service) => (
          <div key={service.name} className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: service.color }}
              />
              <span className="text-sm font-medium">{service.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">
                N
                {service.value.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </span>
              <span
                className={`text-sm font-light flex gap-2 ${
                  service.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                <Image
                  src="/images/arrow-up.png"
                  alt=""
                  width={20}
                  height={20}
                />
                {service.change >= 0 ? "+" : "-"}N
                {Math.abs(service.change).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
