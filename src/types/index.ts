export interface FeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  items?: string[];
  image?: string;
}

export interface HeroFeatures {
  image?: string
  features?: string
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  currency: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface VendorLogo {
  id: number;
  name: string;
  logo: string;
}

export interface SubscriptionOption {
  id: number;
  icon: string;
  name: string;
}

export interface Transaction {
  id: string;
  username: string;
  website: string;
  amount: string;
  type: string;
  date: string;
  status: "Successful" | "Failed" | "Pending";
}

interface SettingItem {
  label: string;
  href: string;
}

export interface SettingCategory {
  id: string;
  title: string;
  items: SettingItem[];
}

export interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: number;
    type: "increase" | "decrease";
    period: string;
  };
  icon?: React.ReactNode;
}

export interface NavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  section?: string;
  children?: NavItem[];
}
