"use client";

import {
  ChevronDown,
  ChevronRight,
  CircleEllipsis,
  Menu,
  Phone,
  ShieldEllipsis,
} from "lucide-react";
import Image from "next/image";

interface Transaction {
  id: string;
  type: string;
  amount: string;
  status: "successful" | "failed" | "pending";
  time: string;
}

const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    type: "Airtime Top up",
    amount: "2000.00",
    status: "successful",
    time: "8:23 PM",
  },
  {
    id: "2",
    type: "Airtime Top up",
    amount: "2000.00",
    status: "successful",
    time: "8:23 PM",
  },
  {
    id: "3",
    type: "Airtime Top up",
    amount: "2000.00",
    status: "successful",
    time: "8:23 PM",
  },
  {
    id: "4",
    type: "Airtime Top up",
    amount: "2000.00",
    status: "successful",
    time: "8:23 PM",
  },
  {
    id: "5",
    type: "Airtime Top up",
    amount: "2000.00",
    status: "successful",
    time: "8:23 PM",
  },
  {
    id: "6",
    type: "Airtime Top up",
    amount: "2000.00",
    status: "successful",
    time: "8:23 PM",
  },
  {
    id: "7",
    type: "Airtime Top up",
    amount: "2000.00",
    status: "successful",
    time: "8:23 PM",
  },
];

export function TransactionHistory() {
  return (
    <div className="space-y-4 p-4 mb-4 md:p-6 md:border border-gray-1 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Transaction History</h3>
        <button className="text-sm ">
         <Image src="/images/menudots.svg" alt="" width={24} height={24}/>
        </button>
      </div>
      <div className="space-y-2 ">
        <button className="flex items-center px-2 py-2 border rounded-lg hover:bg-gray-50">
          All Categories
          <ChevronDown />
        </button>
        {TRANSACTIONS.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between py-2.5 bg-white rounded-lg"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-foreground/10 rounded-md">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-base font-semibold">{transaction.type}</p>
                <p className="text-sm text-primary/70 font-light">
                  {transaction.time}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-base font-normal">{transaction.amount}</p>
              <p
                className={`text-sm capitalize font-light   ${
                  transaction.status === "successful"
                    ? "text-lightGreen"
                    : transaction.status === "failed"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {transaction.status}
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
            <button className="flex items-center gap-2 bg-foreground/10 text-primary px-3 py-2  rounded-lg hover:bg-gray-50">
              View All Transactions
              <ChevronRight/>
            </button>
        </div>
      </div>
    </div>
  );
}
