import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export type SubCardProps = {
  planType: string;
  description: string;
  price: number;
  features: string[];
  checkoutUrl: string;
};

export default function SubCard({
  planType,
  price,
  features,
  checkoutUrl,
  description,
}: SubCardProps) {
  return (
    <Card
      className={cn("bg-muted p-6 grid gap-6", {
        "bg-card": planType !== "Free",
      })}
    >
      <div className="grid gap-2">
        <h3 className="text-2xl font-bold">{planType}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-1">
        <div className="text-4xl font-bold">${price}</div>
        <p className="text-muted-foreground text-sm">per month</p>
      </div>
      <ul className="grid gap-2 text-sm">
        {features.map((offer, index) => (
          <li className="flex items-center gap-2" key={index}>
            <CheckIcon className="w-4 h-4 text-primary" />
            {offer}
          </li>
        ))}
      </ul>
      <Button asChild className="w-full">
        <Link href={checkoutUrl}>Get Started</Link>
      </Button>
    </Card>
  );
}
