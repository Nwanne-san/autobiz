"use client";

import { useState } from "react";
import {
  Search,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { TRANSACTIONS } from "@/constants";
import { Transaction } from "@/types";
import { useRouter } from "next/navigation";

const ITEMS_PER_PAGE = 10;

export default function WalletTransactionHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = TRANSACTIONS.filter(
    (transaction) =>
      transaction.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.website.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

  const getStatusColor = (status: Transaction["status"]) => {
    switch (status) {
      case "Successful":
        return "bg-lightGreen/20 text-lightGreen";
      case "Failed":
        return "bg-lightRed/20 text-lightRed";
      case "Pending":
        return "bg-warning/20 text-warning";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const router = useRouter();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex justify-between w-full items-center mb-6">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft />
            </button>
            <h1 className="text-xl font-semibold">
              Wallet Transaction History
            </h1>
          </div>

          <div className="flex justify-between items-center gap-6">
            <div className="flex justify-between items-center ">
              <button className="px-4 py-2 bg-white text-sm hover:bg-gray-50">
                Export CSV
              </button>
            </div>
            <div className="relative flex-1 max-w-md">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
              Filter
              <ChevronDown />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-offWhite">
                <th className="text-left py-4 px-4 font-light text-sm text-primary/70 ">
                  USERNAME/WEBSITE
                </th>
                <th className="text-left py-4 px-4 font-light text-sm text-primary/70 ">
                  AMOUNT
                </th>
                <th className="text-left py-4 px-4 font-light text-sm text-primary/70 ">
                  TYPE
                </th>
                <th className="text-left py-4 px-4 font-light text-sm text-primary/70 ">
                  DATE
                </th>
                <th className="text-left py-4 px-4 font-light text-sm text-primary/70 ">
                  STATUS
                </th>
                <th className="py-4 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-normal">{transaction.username}</div>
                      <div className="text-sm font-light text-primary/70">
                        {transaction.website}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={` font-semibold
                       ${
                         transaction.amount.startsWith("-")
                           ? "text-lightRed"
                           : "text-lightGreen"
                       }`}
                    >
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-primary">{transaction.type}</td>
                  <td className="py-4 px-4 text-primary/70 font-medium">
                    {transaction.date}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                        transaction.status
                      )}`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="text-base font-normal text-primary">
            Showing {startIndex + 1} -{" "}
            {Math.min(endIndex, filteredTransactions.length)} of{" "}
            {filteredTransactions.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className=" hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 text-primary" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-primary/30 text-primary"
                    : "hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className=" hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
