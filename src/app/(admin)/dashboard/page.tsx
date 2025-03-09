"use client";

import type React from "react";
import { Voltaire } from "next/font/google";
import { ArrowUpRight, ArrowDownRight, Users, Wallet } from "lucide-react";
import { StatCardProps } from "@/types";

const voltaire = Voltaire({ subsets: ["latin"], weight: ["400"] });

const StatCard = ({ title, value, change, icon }: StatCardProps) => (
  <div className="bg-offWhite p-6 rounded-lg shadow-sm w-full">
    <div className="flex items-center justify-between mb-4"></div>
    <div className="flex flex-col items-baseline justify-between">
      <p className="text-[32px] font-normal">{value}</p>
      <div
        className={`flex flex-col items- text-sm ${
          change.type === "increase" ? "text-green-500" : "text-red-500"
        }`}
      >
        <div className="flex text-sm font-medium">
          <span>
            {change.type === "increase" ? (
              <ArrowUpRight size={16} className="mr-1 inline-flex" />
            ) : (
              <ArrowDownRight size={16} className="mr-1 inline-flex" />
            )}
            {change.value}%
          </span>
          <span className="text-gray-500 ml-1">{change.period}</span>
        </div>
        <span className="flex items-center text-primary py-2 gap-2">
          {icon && <div className=" inline-flex">{icon}</div>}
          <h3 className="text-base font-semibold text-nowrap inline-flex ">
            {title}
          </h3>
        </span>
      </div>
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="bg-white px-8 pb-8">
      <div className="flex justify-between items-center mb-6 bg-white">
        <h1
          className={`${voltaire.className} text-[32px] leading-[52px] font-normal`}
        >
          Dashboard
        </h1>
      </div>

      <div className="flex justify-between">
        <h2 className="text-xl mb-4">Overview</h2>
        <button className="px-4 py-2 bg-white  text-sm hover:bg-gray-50">
          Export CSV
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6">
        <StatCard
          title="Total Members"
          value="655"
          change={{ value: 8.84, type: "increase", period: "This Week" }}
          icon={<Users size={20} />}
        />
        <StatCard
          title="Naira Balance"
          value="N326,938,312.65"
          change={{ value: 8.84, type: "decrease", period: "This Week" }}
          icon={<Wallet size={20} />}
        />
        <StatCard
          title="Bulksms Balance"
          value="N58,220.78"
          change={{ value: 8.84, type: "increase", period: "This Week" }}
          icon={<Wallet size={20} />}
        />
        <StatCard
          title="Bonus Balance"
          value="N45,990.02"
          change={{ value: 8.84, type: "decrease", period: "This Week" }}
          icon={<Wallet size={20} />}
        />
        <StatCard
          title="Lien Balance"
          value="N75,540.55"
          change={{ value: 8.84, type: "increase", period: "This Week" }}
          icon={<Wallet size={20} />}
        />
        <StatCard
          title="Total Cashback Balance"
          value="N65,890.12"
          change={{ value: 8.84, type: "increase", period: "This Week" }}
          icon={<Wallet size={20} />}
        />
      </div>

      <h2 className="text-lg text-primary/70 font-semibold mt-8 mb-4">
        Transaction
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total No. of Transactions"
          value="780"
          change={{ value: 8.84, type: "increase", period: "This Week" }}
        />
        <StatCard
          title="Total Amount of Transactions"
          value="N26,938,000.80"
          change={{ value: 8.84, type: "decrease", period: "This Week" }}
        />
        <StatCard
          title="Avg. Amount of Transactions"
          value="N2,938,000.80"
          change={{ value: 8.84, type: "decrease", period: "This Week" }}
        />
      </div>

      <h2 className="text-lg text-primary/70 font-semibold mt-8 mb-4">
        Payments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total No. of Payments"
          value="85"
          change={{ value: 8.84, type: "increase", period: "This Week" }}
        />
        <StatCard
          title="Total Amount of Payment"
          value="N855,207.44"
          change={{ value: 8.84, type: "decrease", period: "This Week" }}
          icon={<Wallet size={20} />}
        />
        <StatCard
          title="Avg. Amount of Transactions"
          value="N38,000.80"
          change={{ value: 8.84, type: "increase", period: "This Week" }}
          icon={<Wallet size={20} />}
        />
      </div>
    </div>
  );
}
