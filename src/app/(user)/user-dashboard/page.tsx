"use client";

import { WalletCard } from "@/components/dashboard/wallet-card";
import { ServiceGrid } from "@/components/dashboard/Service";
import { TransactionHistory } from "@/components/dashboard/TransactionHistory";
import { ServiceBreakdown } from "@/components/dashboard/ServiceBreakdown";
import { AirtimeChart } from "@/components/dashboard/AirtimeChart";
import { SupportWidget } from "@/components/dashboard/SupportWidget";
import { WalkthroughModal } from "@/components/dashboard/walkthrough-modal";
import { Voltaire } from "next/font/google";
import { ChevronRight, Copy } from "lucide-react";
import Image from "next/image";

const voltaire = Voltaire({ subsets: ["latin"], weight: ["400"] });

export default function DashboardPage() {
  return (
    <div className="sm:space-y-6 relative">
      <div className="flex justify-between items-center sm:mb-6 p-4 sm:p-0 bg-white">
        <h1
          className={`${voltaire.className} text-[32px] leading-[52px] font-normal`}
        >
          Dashboard
        </h1>
      </div>
      <WalkthroughModal />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-0">
        <div className="md:col-span- h-full" id="wallet-section">
          <WalletCard balance="90,810,565.83" />
        </div>
        <div className="bg-offWhite p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Pay for immediate funding via
          </h3>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="text-primary font-normal">Bank:</span> Sterling
              Bank
            </p>
            <p className="text-lg text-primary font-semibold flex gap-2 items-center">
              8500000315
              <Copy size={20} className="inline-flex" />
            </p>
            <p className="text-lg">
              <span className="text-primary/70 font-normal">Name:</span> CDLPHUB
            </p>
            <button className="text-lg text-foreground flex gap-2 items-center">
              View all accounts{" "}
              <ChevronRight size={16} className="inline-flex" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="space-y-6 p-4 md:p-6 mt-8 sm:mt-0 md:border border-gray-1 rounded-lg "
        id="services-grid"
      >
        <h3 className="font-semibold text-lg">Top-Up Services</h3>
        <ServiceGrid />
      </div>

      <div className="mt-8 sm:mt-0 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6">
        <TransactionHistory />
        <ServiceBreakdown />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <AirtimeChart />
        </div>
        <SupportWidget />
      </div>
      <button className="p-2.5 bg-foreground rounded-lg fixed md:hidden z-20 bottom-4 right-4">
        <Image alt="" src="/images/chat.svg" width={32} height={32} />
      </button>
    </div>
  );
}
