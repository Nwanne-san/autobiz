"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WalletCardProps {
  balance: string;
}

export function WalletCard({ balance }: WalletCardProps) {
  return (
    <Card className="bg-[#2F414A] text-white flex h-full justify-center p-4 sm:p-0 items-center text-center">
      <CardContent className="p-4 md:p-6">
        <div className="space-y-2">
          <p className="text-sm text-gray-300">My Wallet</p>
          <h2 className="text-3xl font-semibold">₦{balance}</h2>
          <p className="text-sm text-gray-300">Total Balance</p>
          <Button
            id="fund-wallet-button"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10"
          >
            <span>Fund Wallet</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
