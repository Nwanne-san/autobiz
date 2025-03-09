"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Wallet,
  History,
  Smartphone,
  UtilityPoleIcon as Utilities,
  Receipt,
  Users,
  Settings,
  Gift,
  ChevronRight,
  Menu,
  User,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  section?: string;
  items: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    children?: { label: string; href: string }[];
  }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    section: "HOME",
    items: [
      {
        label: "Dashboard",
        href: "/user-dashboard",
        icon: <LayoutDashboard size={20} />,
      },
    ],
  },
  {
    section: "TRANSACTIONS",
    items: [
      {
        label: "Wallet",
        href: "/wallet",
        icon: <Wallet size={20} />,
      },
      {
        label: "History",
        href: "/history",
        icon: <History size={20} />,
        children: [
          { label: "Transaction History", href: "/history/transactions" },
          { label: "Payment History", href: "/history/payments" },
        ],
      },
    ],
  },
  {
    section: "SERVICES",
    items: [
      {
        label: "Mobile",
        href: "/mobile",
        icon: <Smartphone size={20} />,
        children: [
          { label: "Transaction History", href: "/history/transactions" },
          { label: "Payment History", href: "/history/payments" },
        ],
      },
      {
        label: "Utilities",
        href: "/utilities",
        icon: <Utilities size={20} />,
        children: [],
      },
      {
        label: "Bills",
        href: "/bills",
        icon: <Receipt size={20} />,
        children: [],
      },
    ],
  },
  {
    section: "MANAGEMENT",
    items: [
      {
        label: "Manager Portal",
        href: "/manager",
        icon: <Users size={20} />,
        children: [],
      },
      {
        label: "Settings",
        href: "/settings",
        icon: <Settings size={20} />,
      },
    ],
  },
  {
    section: "OTHER",
    items: [
      {
        label: "Referral",
        href: "/referral",
        icon: <Gift size={20} />,
      },
    ],
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sheet>
        <SheetContent side="left" className="w-[80%] p-0">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-semibold">Autobiz App</h1>
          </div>
          {/* Mobile Navigation */}
          <nav className="p-4">
            {NAV_ITEMS.map((section) => (
              <div key={section.section} className="mb-6">
                {section.section && (
                  <div className="px-3 py-2 text-xs font-medium text-gray-500">
                    {section.section}
                  </div>
                )}
                {section.items.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm mb-1 group relative
                      ${
                        isActive(item.href)
                          ? "bg-[#EEF2FF] text-offWhite"
                          : "text-gray-700 hover:bg-gray-50"
                      }
                    `}
                      onClick={() => {
                        if (item.children) {
                          setExpandedSection(
                            expandedSection === item.label ? null : item.label
                          );
                        }
                      }}
                    >
                      {item.icon && (
                        <span
                          className={`mr-3 ${
                            isActive(item.href) ? "text" : "text-gray-500"
                          }`}
                        >
                          {item.icon}
                        </span>
                      )}
                      <span>{item.label}</span>
                      {item.children && (
                        <ChevronRight
                          size={16}
                          className={`ml-auto transition-transform duration-200
                          ${expandedSection === item.label ? "rotate-90" : ""}
                        `}
                        />
                      )}
                    </Link>
                    {item.children && expandedSection === item.label && (
                      <div className="ml-9 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block py-2 px-3 text-sm rounded-lg
                            ${
                              isActive(child.href)
                                ? "text-[#2563EB] bg-[#EEF2FF]"
                                : "text-gray-600 hover:bg-gray-50"
                            }
                          `}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <aside className="hidden lg:block w-64 bg-foreground border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-white">Autobiz App</h1>
        </div>

        <nav className="p-4">
          {NAV_ITEMS.map((section) => (
            <div key={section.section} className="mb-6">
              {section.section && (
                <div className="px-3 py-2 text-xs font-medium text-white/70">
                  {section.section}
                </div>
              )}
              {section.items.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-4 hover:text-primary/70 duration-200 rounded-lg text-sm mb-1 group relative
                      ${
                        isActive(item.href)
                          ? "bg-offWhite/30 text-white"
                          : "text-white/70 hover:bg-gray-50"
                      }
                    `}
                    onClick={() => {
                      if (item.children) {
                        setExpandedSection(
                          expandedSection === item.label ? null : item.label
                        );
                      }
                    }}
                  >
                    {item.icon && (
                      <span
                        className={`mr-3 ${
                          isActive(item.href) ? "text-[#]" : "text-gray-500"
                        }`}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span>{item.label}</span>
                    {item.children && (
                      <ChevronRight
                        size={16}
                        className={`ml-auto transition-transform duration-200
                          ${expandedSection === item.label ? "rotate-90" : ""}
                        `}
                      />
                    )}
                  </Link>
                  {item.children && expandedSection === item.label && (
                    <div className="ml-9 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block py-2 px-3 text-sm rounded-lg
                            ${
                              isActive(child.href)
                                ? "text-white bg-[#EEF2FF]"
                                : "text-gray-600 hover:bg-gray-50"
                            }
                          `}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg hidden lg:block">
              <Menu size={20} />
            </button>
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 hover:bg-gray-100 rounded-lg lg:hidden">
                    <Menu size={20} />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[80%] p-0 bg-foreground text-white"
                >
                  {/* Mobile Sidebar Content */}
                  <div className="p-6 ">
                    <h1 className="text-xl font-semibold">Autobiz App</h1>
                  </div>
                  <nav className="p-4 bg">
                    {NAV_ITEMS.map((section) => (
                      <div key={section.section} className="mb-6">
                        {section.section && (
                          <div className="px-3 py-2 text-xs font-medium text-white/70">
                            {section.section}
                          </div>
                        )}
                        {section.items.map((item) => (
                          <div key={item.label}>
                            <Link
                              href={item.href}
                              className={`flex items-center px-3 py-3 rounded-lg text-sm mb-1 group relative
                      ${
                        isActive(item.href)
                          ? "bg-offWhite/30 text-white"
                          : "text-white/70 hover:bg-gray-50"
                      }
                    `}
                              onClick={() => {
                                if (item.children) {
                                  setExpandedSection(
                                    expandedSection === item.label
                                      ? null
                                      : item.label
                                  );
                                }
                              }}
                            >
                              {item.icon && (
                                <span
                                  className={`mr-3 ${
                                    isActive(item.href) ? "" : "text-white/70"
                                  }`}
                                >
                                  {item.icon}
                                </span>
                              )}
                              <span>{item.label}</span>
                              {item.children && (
                                <ChevronRight
                                  size={16}
                                  className={`ml-auto transition-transform duration-200
                          ${expandedSection === item.label ? "rotate-90" : ""}
                        `}
                                />
                              )}
                            </Link>
                            {item.children &&
                              expandedSection === item.label && (
                                <div className="ml-9 space-y-1">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      className={`block py-2 px-3 text-sm rounded-lg
                            ${
                              isActive(child.href)
                                ? "text-[#] bg-[#EEF2FF]"
                                : "text-gray-600 hover:bg-gray-50"
                            }
                          `}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Image
                  src="/images/noti-icon.svg"
                  alt=""
                  width={36}
                  height={36}
                />
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-8 h-8 rounded-full bg-gray-200 hover:ring-2 hover:ring-gray-300 transition-all">
                    <Image
                      src="/images/pfp-icon.svg"
                      alt=""
                      width={36}
                      height={36}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-uto sm:p-6 py-6  bg-white">
          <div className="mb-4 pl-4 sm:ml-0 text-base text-primary">
            {pathname
              .split("/")
              .filter(Boolean)
              .map((segment, index) => (
                <span key={index}>
                  {index === 0 ? "Home / " : "/ "}
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}{" "}
                </span>
              ))}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
