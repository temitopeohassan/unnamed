"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImageUpload } from "@/components/image-upload";

export default function CreateCampaignPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Create Your Campaign</h1>
      
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Campaign Title</Label>
              <Input id="title" placeholder="Enter your campaign title" />
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="nonprofit">Nonprofit</SelectItem>
                  <SelectItem value="animals">Animals</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="goal">Fundraising Goal</Label>
              <Input id="goal" type="number" placeholder="Enter amount" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Campaign Story</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="story">Tell Your Story</Label>
              <Textarea
                id="story"
                placeholder="Share your story and why people should support your campaign..."
                className="min-h-[200px]"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Media</h2>
          <div className="space-y-4">
            <ImageUpload />
          </div>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Save as Draft</Button>
          <Button>Publish Campaign</Button>
        </div>
      </div>
    </div>
  );
}