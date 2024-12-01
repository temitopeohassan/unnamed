"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FeaturedCampaigns } from "@/components/featured-campaigns";
import { Categories } from "@/components/categories";
import { HowItWorks } from "@/components/how-it-works";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-3xl mb-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Make a Difference with Your Fundraising Campaign
          </h1>
          <p className="text-xl text-muted-foreground">
            Start your fundraiser today and get the support you need from people around the world.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/campaigns/create">
                Start Fundraising <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/campaigns">Browse Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Campaigns</h2>
          <Button variant="ghost" asChild>
            <Link href="/campaigns">View all campaigns</Link>
          </Button>
        </div>
        <FeaturedCampaigns />
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
        <Categories />
      </section>

      {/* How it Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <HowItWorks />
      </section>

      {/* Success Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="aspect-video rounded-lg bg-muted mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sarah's Medical Journey</h3>
            <p className="text-muted-foreground mb-4">
              Raised $50,000 for life-saving surgery with the support of 500+ donors.
            </p>
            <Button variant="link" className="px-0">Read more</Button>
          </Card>
          <Card className="p-6">
            <div className="aspect-video rounded-lg bg-muted mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Garden Project</h3>
            <p className="text-muted-foreground mb-4">
              Local community raised $25,000 to create a sustainable garden for everyone.
            </p>
            <Button variant="link" className="px-0">Read more</Button>
          </Card>
        </div>
      </section>
    </div>
  );
}