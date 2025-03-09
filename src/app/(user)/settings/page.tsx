"use client";

import { useState, useEffect } from "react";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { SETTINGS_CATEGORIES } from "@/constants";
import { Voltaire } from "next/font/google";
import { useMediaQuery } from "@/hooks/use-media-query";

const voltaire = Voltaire({ subsets: ["latin"], weight: ["400"] });

export default function SettingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const filteredCategories = SETTINGS_CATEGORIES.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.items.some((item) =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  useEffect(() => {
    if (!isMobile) {
      setSelectedCategory(null);
    }
  }, [isMobile]);

  return (
    <div className="px-2">
      <div className="flex justify-between items-center mb-6 bg-white">
        <h1
          className={`${voltaire.className} text-[32px] leading-[52px] font-normal`}
        >
          Settings
        </h1>
      </div>

      <div className="sm:border border-gray-1 rounded-lg sm:p-6">
        <div className="relative mb-6">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-lg">
          <div
            className={`grid ${
              isMobile ? "grid-cols-1" : "grid-cols-[330px,1fr]"
            }`}
          >
            <div
              className={`sm:border border-gray-1 rounded-lg sm:p-4 transition-all duration-300 ${
                isMobile && selectedCategory ? "hidden" : "block"
              }`}
              onMouseLeave={() => !isMobile && setHoveredCategory(null)}
            >
              {filteredCategories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-all text-nowrap relative group sm:border 
                    ${
                      hoveredCategory === category.id ||
                      selectedCategory === category.id
                        ? "bg-gray-50 drop-shadow-sm md:border border-gray-1 rounded-lg"
                        : "border-white"
                    }
                  `}
                  onMouseEnter={() =>
                    !isMobile && setHoveredCategory(category.id)
                  }
                  onClick={() => isMobile && setSelectedCategory(category.id)}
                >
                  <span className="flex items-center justify-between">
                    {category.title}
                    <ChevronRight
                      size={16}
                      className={`transition-all duration-200 opacity-0 -translate-x-2
                        ${
                          hoveredCategory === category.id ||
                          selectedCategory === category.id
                            ? "opacity-100 translate-x-0"
                            : ""
                        }
                        group-hover:opacity-100 group-hover:translate-x-0
                      `}
                    />
                  </span>
                </button>
              ))}
            </div>

            <div
              className={`min-h-[400px]  relative transition-all duration-300 ${
                isMobile && !selectedCategory ? "hidden" : "block"
              }`}
              onMouseLeave={() => !isMobile && setHoveredCategory(null)}
            >
              {isMobile && selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center  text-primary font-semibold text-lg mb-4"
                >
                  <ChevronLeft size={20} className="mr-2" />
                  Settings
                </button>
              )}
              {(hoveredCategory || selectedCategory) && (
                <div
                  className="space-y-2 bg-white"
                  key={hoveredCategory || selectedCategory}
                >
                  {SETTINGS_CATEGORIES.find(
                    (c) => c.id === (hoveredCategory || selectedCategory)
                  )?.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
