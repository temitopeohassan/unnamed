"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Heart, GraduationCap, Stethoscope, Building2, Dog, Bike, Globe2, Users } from "lucide-react";

const categories = [
  { icon: Heart, name: "Emergency", href: "/campaigns?category=emergency" },
  { icon: Stethoscope, name: "Medical", href: "/campaigns?category=medical" },
  { icon: GraduationCap, name: "Education", href: "/campaigns?category=education" },
  { icon: Building2, name: "Nonprofit", href: "/campaigns?category=nonprofit" },
  { icon: Dog, name: "Animals", href: "/campaigns?category=animals" },
  { icon: Bike, name: "Sports", href: "/campaigns?category=sports" },
  { icon: Globe2, name: "Environment", href: "/campaigns?category=environment" },
  { icon: Users, name: "Community", href: "/campaigns?category=community" },
];

export function Categories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link key={category.name} href={category.href}>
            <Card className="p-6 hover:shadow-lg transition-shadow text-center">
              <Icon className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-medium">{category.name}</h3>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}