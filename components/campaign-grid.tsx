import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";

export function CampaignGrid() {
  const campaigns = [
    {
      id: 1,
      title: "Save Local Theater",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop",
      description: "Help preserve our historic local theater for future generations.",
      raised: 45000,
      goal: 100000,
      donors: 890,
      daysLeft: 55,
    },
    {
      id: 2,
      title: "Help Build School Library",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
      description: "Support education by helping us build a new library for students.",
      raised: 25000,
      goal: 50000,
      donors: 420,
      daysLeft: 30,
    },
    {
      id: 3,
      title: "Emergency Medical Fund",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop",
      description: "Support urgent medical treatment for those in need.",
      raised: 15000,
      goal: 20000,
      donors: 310,
      daysLeft: 15,
    },
    {
      id: 4,
      title: "Community Garden Project",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop",
      description: "Help us create a sustainable garden for the community.",
      raised: 8000,
      goal: 15000,
      donors: 150,
      daysLeft: 25,
    },
    {
      id: 5,
      title: "Animal Shelter Renovation",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop",
      description: "Support our local animal shelter's renovation project.",
      raised: 12000,
      goal: 30000,
      donors: 245,
      daysLeft: 40,
    },
    {
      id: 6,
      title: "Youth Sports Program",
      image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=800&h=600&fit=crop",
      description: "Help us provide sports equipment for underprivileged youth.",
      raised: 5000,
      goal: 10000,
      donors: 98,
      daysLeft: 20,
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
              <p className="text-muted-foreground text-sm mb-4">
                {campaign.description}
              </p>
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