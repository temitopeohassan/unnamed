import { CampaignDetails } from "@/components/campaign-details";

// Mock data for static generation
const campaigns = [
  { 
    id: "1",
    title: "Help Save the Local Theater",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop",
    description: "Help preserve our historic local theater for future generations.",
    raised: 45000,
    goal: 100000,
    donors: 890,
    daysLeft: 55,
  },
  // ... add other campaigns with full data structure
];

export function generateStaticParams() {
  return campaigns.map((campaign) => ({
    id: campaign.id,
  }));
}

export default function CampaignPage({ params }: { params: { id: string } }) {
  const campaign = campaigns.find((c) => c.id === params.id);
  
  return <CampaignDetails campaign={campaign} />;
}