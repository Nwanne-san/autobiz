"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  Settings,
  Users,
  MessageSquare,
  History,
  Share2,
  LogOut,
  ChevronDown,
} from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  section?: string;
  children?: NavItem[];
}

const ADMIN_NAV_ITEMS: NavItem[] = [
  {
    section: "HOME",
    children: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: <MessageSquare size={18} className="text-gray-400" />,
      },
    ],
    label: "",
  },
  {
    section: "MANAGEMENT",
    children: [
      {
        label: "Admin Settings",
        href: "/settings",
        icon: <Settings size={18} className="text-gray-400" />,
      },
      {
        label: "Manager Members",
        href: "/members",
        icon: <Users size={18} className="text-gray-400" />,
      },
      {
        label: "Bulk SMS Settings",
        href: "/sms-settings",
        icon: <MessageSquare size={18} className="text-gray-400" />,
      },
    ],
    label: "",
  },
  {
    section: "OTHER",
    children: [
      {
        label: "History",
        href: "/history",
        icon: <History size={18} className="text-gray-400" />,
        children: [
          {
            label: "Wallet Transaction History",
            href: "/wallet",
          },
          {
            label: "Recharge History",
            href: "/history/recharge",
          },
          {
            label: "Cashback History",
            href: "/history/cashback",
          },
        ],
      },
      {
        label: "MTN Share Business",
        href: "/mtn-share",
        icon: <Share2 size={18} className="text-gray-400" />,
      },
      {
        label: "Logout",
        href: "/logout",
        icon: <LogOut size={18} className="text-gray-400" />,
      },
    ],
    label: "",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleExpanded = (label: string) => {
    setExpandedItems((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  };

  const isActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/dashboard") return true;
    if (href !== "/dashboard" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="flex h-screen bg-">
      <aside className="w-64 bg-[#2F414A] flex-shrink-0">
        <div className="p-6">
          <h1 className="text-white text-xl font-semibold">Autobiz Admin</h1>
        </div>
        <nav className="mt-2">
          {ADMIN_NAV_ITEMS.map((section) => (
            <div key={section.section} className="mb-6">
              <div className="px-6 py-2 text-xs font-medium text-gray-400">
                {section.section}
              </div>
              {section.children?.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleExpanded(item.label)}
                        className={`w-full flex items-center px-6 py-2 text-sm text-gray-300 hover:bg-gray-700/50 ${
                          isActive(item.href || "") ? "bg-gray-700/50" : ""
                        }`}
                      >
                        <span className="w-5 h-5 mr-3">{item.icon}</span>
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`ml-auto transition-transform duration-200 ${
                            expandedItems.includes(item.label)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ease-in-out ${
                          expandedItems.includes(item.label)
                            ? "max-h-48 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href || ""}
                            className={`block pl-14 pr-6 py-2 text-sm text-gray-300 hover:bg-gray-700/50 ${
                              isActive(child.href || "") ? "bg-gray-700/50" : ""
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href || ""}
                      className={`flex items-center px-6 py-2 text-sm text-gray-300 hover:bg-gray-700/50 ${
                        isActive(item.href || "") ? "bg-gray-700/50" : ""
                      }`}
                    >
                      <span className="w-5 h-5 mr-3">{item.icon}</span>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col gap-8 overflow-x-hidden">
        <header className="bg-white px-8">
          <div className="flex items-center justify-between  py-5">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className=" hover:bg-gray-100 rounded-lg"
              >
                <Menu size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="">
                <Image
                  src="/images/noti-icon.svg"
                  alt=""
                  width={36}
                  height={36}
                />
              </button>
              <button className="">
                <Image
                  src="/images/pfp-icon.svg"
                  alt=""
                  width={36}
                  height={36}
                />
              </button>
            </div>
          </div>
          <div className="text-sm text-gray-600 mt-4 ">
            {pathname
              .split("/")
              .filter(Boolean)
              .map((segment, index, array) => (
                <span key={index}>
                  Home /{index === 0 ? "" : " / "}
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </span>
              ))}
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-yauto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
