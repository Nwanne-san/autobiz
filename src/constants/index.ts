import type {
  FeatureItem,
  PricingPlan,
  Testimonial,
  FAQItem,
  VendorLogo,
  SubscriptionOption,
  Transaction,
  SettingCategory,
  NavItem,
  HeroFeatures,
} from "@/types";

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

export const NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export const HERO_DATA = {
  title: "Select a Plan &",
  subtitle: "Kickstart Your VTU Business",
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven.",
  cta: "Start Now",
};

export const HERO_FEATURES : HeroFeatures[] = [
  {
    features: "Customized Features" ,
    image: "/images/lightening.svg",
  },
  {
    features: "Easy Transactions" ,
    image: "/images/arrows.svg",
  },
  {
    features: "No Code Required" ,
    image: "/images/code.svg",
  },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 1,
    icon: "01",
    title: "Scalability & Customization",
    description:
      "Create and customize pricing plans to fit your business model, offering flexible options for your customers while maintaining full control over features and pricing tiers.",
    image: "/images/tabler_edit.svg",
  },
  {
    id: 2,
    icon: "02",
    title: "Custom Subscription Plans",
    description:
      "Choose from flexible plans tailored to your needs, with easy upgrades and custom feature options.",
    image: "/images/stash_plan.svg",
  },
  {
    id: 3,
    icon: "03",
    title: "Seamless Vendor Integration",
    description:
      "Connect effortlessly with telecom and utility providers for instant, automated service delivery.",
    image: "/images/carbon_api.svg",
  },
];

export const VENDOR_LOGOS: VendorLogo[] = [
  { id: 1, name: "MTN", logo: "/placeholder.svg?height=50&width=50" },
  { id: 2, name: "Airtel", logo: "/placeholder.svg?height=50&width=50" },
  { id: 3, name: "Glo", logo: "/placeholder.svg?height=50&width=50" },
  { id: 4, name: "9mobile", logo: "/placeholder.svg?height=50&width=50" },
  { id: 5, name: "DSTV", logo: "/placeholder.svg?height=50&width=50" },
];

export const SUBSCRIPTION_OPTIONS: SubscriptionOption[] = [
  { id: 1, icon: "⚡", name: "Electricity Bill" },
  { id: 1, icon: "⚡", name: "Recharge Card" },
  { id: 3, icon: "🎮", name: "Betting" },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 1,
    name: "Bronze",
    price: "150,000",
    currency: "NGN",
    features: [
      "API Access",
      "Email Support",
      "Free Vendor APIs",
      "Single User",
    ],
    cta: "Get Started",
  },
  {
    id: 2,
    name: "Silver",
    price: "200,000",
    currency: "NGN",
    features: [
      "Everything in Bronze",
      "Online Subscription",
      "Advanced API",
      "Educational API",
      "Pay TV payment gateway",
      "VTU one and utility per month",
      "Wallet transaction of 50,000",
      "Maximum simultaneous transactions (1,000,000 per month)",
    ],
    cta: "Get Silver",
  },
  {
    id: 3,
    name: "Gold",
    price: "300,000",
    currency: "NGN",
    features: [
      "Everything in Silver",
      "Betting",
      "Bulk SMS",
      "Broadband",
      "Special Allocation (premium)",
      "Toll-free number",
      "Email server",
      "Dedicated hosting and SSL",
      "USSD + payment gateway",
    ],
    cta: "Get Gold",
    popular: true,
  },
  {
    id: 4,
    name: "Platinum",
    price: "600,000",
    currency: "NGN",
    features: [
      "Everything in Gold",
      "Unlimited board pricing",
      "Exclusive features",
      "USSD + 3 payment gateways",
    ],
    cta: "Get Platinum",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Business Owner",
    role: "CEO",
    company: "VTU Business",
    content:
      "VTUAutobiz made starting my VTU business effortless! I launched my website in minutes, integrated multiple APIs without any technical headaches. The real-time reporting and transaction features are game-changers! Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Business Owner",
    role: "CEO",
    company: "VTU Business",
    content:
      "VTUAutobiz made starting my VTU business effortless! I launched my website in minutes, integrated multiple APIs without any technical headaches. The real-time reporting and transaction features are game-changers! Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Business Owner",
    role: "CEO",
    company: "VTU Business",
    content:
      "VTUAutobiz made starting my VTU business effortless! I launched my website in minutes, integrated multiple APIs without any technical headaches. The real-time reporting and transaction features are game-changers! Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Business Owner",
    role: "CEO",
    company: "VTU Business",
    content:
      "VTUAutobiz made starting my VTU business effortless! I launched my website in minutes, integrated multiple APIs without any technical headaches. The real-time reporting and transaction features are game-changers! Highly recommended!",
    rating: 5,
  },
  {
    id: 5,
    name: "Business Owner",
    role: "CEO",
    company: "VTU Business",
    content:
      "VTUAutobiz made starting my VTU business effortless! I launched my website in minutes, integrated multiple APIs without any technical headaches. The real-time reporting and transaction features are game-changers! Highly recommended!",
    rating: 5,
  },
  {
    id: 6,
    name: "Business Owner",
    role: "CEO",
    company: "VTU Business",
    content:
      "VTUAutobiz made starting my VTU business effortless! I launched my website in minutes, integrated multiple APIs without any technical headaches. The real-time reporting and transaction features are game-changers! Highly recommended!",
    rating: 5,
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "Lorem ipsum",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    question: "Lorem ipsum Lorem ipsum Lorem ipsum",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    question: "Lorem ipsum Lorem ipsum",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    question: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    question: "Lorem ipsum Lorem ipsum",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    question: "Lorem ipsum",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    question: "Lorem ipsum Lorem ipsum",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const ABOUT_DATA = {
  title: "A little about who we are...",
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
  videoUrl: "/",
};

export const FOOTER_DATA = {
  title: "Power Up Your VTU Business – Start Today!",
  cta: "Get Started Today",
  copyright: "All right reserved © 2023 Autobiz App - ",
  links: [
    { label: " Terms & Conditions", href: "#" },
    { label: " and", href: "" },
    { label: "Privacy", href: "#" },
  ],
  socialLinks: [
    { icon: "instagram", href: "#" },
    { icon: "twitter", href: "#" },
    { icon: "facebook", href: "#" },
    { icon: "linkedin", href: "#" },
  ],
};

export const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    username: "John Doe",
    website: "demo2.autobiz.app",
    amount: "-₦2000.00",
    type: "Airtime",
    date: "30/01/2024",
    status: "Successful",
  },
  {
    id: "2",
    username: "John Doe",
    website: "demo2.autobiz.app",
    amount: "-₦2000.00",
    type: "Airtime",
    date: "30/01/2024",
    status: "Successful",
  },
  {
    id: "3",
    username: "John Doe",
    website: "demo2.autobiz.app",
    amount: "₦200000.00",
    type: "Deposit",
    date: "30/01/2024",
    status: "Successful",
  },
  {
    id: "4",
    username: "John Doe",
    website: "demo2.autobiz.app",
    amount: "-₦2000.00",
    type: "Airtime",
    date: "30/01/2024",
    status: "Successful",
  },
  {
    id: "5",
    username: "John Doe",
    website: "demo2.autobiz.app",
    amount: "₦2000.00",
    type: "Airtime",
    date: "30/01/2024",
    status: "Pending",
  },
  {
    id: "6",
    username: "John Doe",
    website: "demo2.autobiz.app",
    amount: "-₦2000.00",
    type: "Airtime",
    date: "30/01/2024",
    status: "Successful",
  },
  {
    id: "7",
    username: "John Doe",
    website: "demo2.autobiz.app",
    amount: "-₦2000.00",
    type: "Airtime",
    date: "30/01/2024",
    status: "Failed",
  },
  {
    id: "8",
    username: "John Doe",
    website: "demo2.autobiz.app",
    amount: "-₦2000.00",
    type: "Airtime",
    date: "30/01/2024",
    status: "Successful",
  },
  {
    id: "9",
    username: "John Doe",
    website: "demo2.autobiz.app",
    amount: "-₦2000.00",
    type: "Airtime",
    date: "30/01/2024",
    status: "Successful",
  },
  {
    id: "10",
    username: "John Doe",
    website: "demo2.autobiz.app",
    amount: "-₦2000.00",
    type: "Airtime",
    date: "30/01/2024",
    status: "Successful",
  },
];

export const SETTINGS_CATEGORIES: SettingCategory[] = [
  {
    id: "account-security",
    title: "Account & Security",
    items: [
      { label: "My Settings", href: "/settings/my-settings" },
      { label: "Change Security PIN Code", href: "/settings/security-pin" },
      { label: "Registration Settings", href: "/settings/registration" },
      { label: "KYC Settings", href: "/settings/kyc" },
      { label: "View Users By KYC", href: "/settings/users-kyc" },
      { label: "Change Airtime Limit", href: "/settings/airtime-limit" },
      {
        label: "Set Login Notifications",
        href: "/settings/login-notifications",
      },
      { label: "Whitelist IP Address", href: "/settings/whitelist-ip" },
      { label: "Manage Members", href: "/settings/manage-members" },
    ],
  },
  {
    id: "subscription-pricing",
    title: "Subscription & Pricing",
    items: [
      { label: "My Pricing", href: "" },
      { label: "Plan Upgrade", href: "/settings/" },
      { label: "Create Pricing Plans", href: "/settings/" },
      { label: "Setup Pricing Plan", href: "/settings/setup-pricing" },
      { label: "Set Default Commission", href: "/settings/default-commission" },
      {
        label: "Setup Payment Preference",
        href: "/s",
      },
    ],
  },
  {
    id: "payment-transactions",
    title: "Payment & Transactions",
    items: [
      { label: "Manual Payment History", href: "" },
      { label: "Payment Gateway Monitor", href: "/settings/" },
      { label: "Payment GateWay settings", href: "/settings/" },
      { label: "bank settings", href: "/settings/setup-pricing" },
      {
        label: "bank security questions",
        href: "/settings/default-commission",
      },
      {
        label: "account number settings",
        href: "/settings/default-commission",
      },
      {
        label: "transaction overview",
        href: "/s",
      },
    ],
  },
  {
    id: "referral-promotions",
    title: "Referral & Promotions",
    items: [
      { label: "referral system", href: "" },
      { label: "referral settings", href: "/settings/" },
      { label: "set up refer & earn", href: "/settings/" },
      { label: "setup default referral ID", href: "/settings/setup-pricing" },
      { label: "promo option", href: "/settings/" },
      { label: "manage special promo", href: "/settings/" },
      {
        label: "promo management",
        href: "/s",
      },
    ],
  },
  {
    id: "comms-notifications",
    title: "Communications & Notifications",
    items: [
      { label: "send SMS to clients", href: "" },
      { label: "send push notification", href: "/settings/" },
      { label: "setup notification system", href: "/settings/" },
      { label: "bulk SMS settings", href: "/settings/setup-pricing" },
      {
        label: "setup welcome email message",
        href: "/settings/",
      },
      { label: "setup google email", href: "/settings/" },
      {
        label: "email settings for notification",
        href: "/settings/",
      },
      {
        label: "airtime to cash notification",
        href: "/settings/",
      },
      {
        label: "dashboard message setup",
        href: "/settings/",
      },
    ],
  },
  {
    id: "developer-api",
    title: "Developer & API",
    items: [
      { label: "API settings", href: "" },
      {
        label: "generate VTPass test api requestID",
        href: "/settings/",
      },
      { label: "service routing", href: "/settings/" },
      { label: "view main service", href: "/settings/setup-pricing" },
      { label: "view sub service", href: "/settings/setup-pricing" },
      { label: "view available service", href: "/settings/default-commission" },
    ],
  },
  {
    id: "airtime-vouchers",
    title: "Airtime, Data & Vouchers",
    items: [
      { label: "airtime to cash setup", href: "" },
      { label: "airtime to cash settings", href: "" },
      { label: "manage data vouchers", href: "/settings/" },
      { label: "manage wallet vouchers", href: "/settings/" },
      { label: "upload data card pins", href: "/settings/" },
      { label: "upload educational pins", href: "/settings/setup-pricing" },
      { label: "upload recharge card pins", href: "/settings/setup-pricing" },
      { label: "manage debtors", href: "/settings/default-commission" },
    ],
  },
  {
    id: "website-ui-customization",
    title: "Website & UI Customization",
    items: [
      { label: "Website settings", href: "" },
      { label: "more Website settings", href: "" },
      { label: "main website whatsApp setup", href: "/settings/" },
      { label: "change theme", href: "/settings/" },
      { label: "set mobile icon visibility", href: "/settings/setup-pricing" },
      {
        label: "setup downlod mobile app icon visibility",
        href: "/settings/default-commission",
      },
    ],
  },
  {
    id: "admin-system-logs",
    title: "Admin & System Logs",
    items: [
      { label: "manager's log", href: "" },
      { label: "view users by wallet balance", href: "/settings/" },
      { label: "FAQ management", href: "/settings/create-pricing" },
      { label: "general settings", href: "/settings/setup-pricing" },
      {
        label: "network and timezone settings",
        href: "/settings/setup-pricing",
      },
      {
        label: "service group management",
        href: "/settings/default-commission",
      },
      {
        label: "manage supported vendors",
        href: "/settings/default-commission",
      },
      {
        label: "manage network operators",
        href: "/settings/default-commission",
      },
      { label: "database management", href: "/settings/default-commission" },
      {
        label: "audit query",
        href: "/s",
      },
    ],
  },
];
