"use client"

import { Phone, Wifi, Tv, Zap, Gift, Printer, CreditCard, Globe, GraduationCap, Repeat } from "lucide-react"

const SERVICES = [
  { icon: Phone, label: "Airtime" },
  { icon: Wifi, label: "Data" },
  { icon: Tv, label: "Cable TV" },
  { icon: Zap, label: "Electricity" },
  { icon: Gift, label: "Data Coupon" },
  { icon: Printer, label: "Card Printing" },
  { icon: CreditCard, label: "Data Card" },
  { icon: Globe, label: "Broadband" },
  { icon: GraduationCap, label: "Educational Bills" },
  { icon: Repeat, label: "Airtime to Cash" },
]

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
      {SERVICES.map((service) => (
        <button
          key={service.label}
          className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <service.icon className="h-9 w-9 bg-foreground/10 mb-2.5 text-gray-600 p-2.5 rounded-xl" />
          <span className="text-base font-normal text-foreground text-center">{service.label}</span>
        </button>
      ))}
    </div>
  )
}

