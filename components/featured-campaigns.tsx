import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";

export function FeaturedCampaigns() {
  const campaigns = [
    {
      id: 1,
      title: "Save Local Theater",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop",
      raised: 45000,
      goal: 100000,
      donors: 890,
      daysLeft: 55,
    },
    {
      id: 2,
      title: "Help Build School Library",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
      raised: 25000,
      goal: 50000,
      donors: 420,
      daysLeft: 30,
    },
    {
      id: 3,
      title: "Emergency Medical Fund",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop",
      raised: 15000,
      goal: 20000,
      donors: 310,
      daysLeft: 15,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {campaigns.map((campaign) => (
        <Link key={campaign.id} href={`/campaigns/${campaign.id}`}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] relative">
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">{campaign.title}</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Raised</span>
                    <span className="font-medium">
                      ${campaign.raised.toLocaleString()} of ${campaign.goal.toLocaleString()}
                    </span>
                  </div>
                  <Progress
                    value={(campaign.raised / campaign.goal) * 100}
                    className="h-2"
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{campaign.donors} donors</span>
                  <span>{campaign.daysLeft} days left</span>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}