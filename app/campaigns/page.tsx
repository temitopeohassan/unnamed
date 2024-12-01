"use client";

import { CampaignFilters } from "@/components/campaign-filters";
import { CampaignGrid } from "@/components/campaign-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CampaignsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search campaigns..." className="pl-9" />
          </div>
          <CampaignFilters />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">All Campaigns</h1>
            <Button variant="outline">Sort by: Recent</Button>
          </div>
          <CampaignGrid />
        </main>
      </div>
    </div>
  );
}