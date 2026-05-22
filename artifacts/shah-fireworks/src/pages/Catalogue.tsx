import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Star } from "lucide-react";

const CATEGORY_A = [
  { category: "Ground Spinners", items: ["Zameen Chakkar", "Bada Chakkar", "Deluxe Chakkar", "Special Chakkar", "Asoka Chakkar", "Seeti Charki", "Rangeela Chakkar"] },
  { category: "Fountains & Crackers", items: ["Kurkure Anar", "Lal Anar", "Hara Anar"] },
  { category: "Sound Crackers", items: ["Chhota Patakha", "Chhoti Lakshmi Bomb", "Lakshmi Bomb", "Badi Lakshmi Bomb", "Atom Bomb/Aloo Bomb", "Bullet Bomb", "Digital Bomb", "Lal Bijili", "Patte Wali Bijili", "Sone Wali Bijili", "Gorilla Bomb", "Spiderman Patakha", "Jawan Patakha", "Baby Patakha"] },
  { category: "Laris (Garlands)", items: ["28 Wala Lari", "56 Wala Lari", "100 Wala Lari", "200 Wala Lari", "300 Wala Lari", "600 Wala Lari", "Hazaar Lari", "Do Hazaar Lari", "Paanch Hazaar Lari", "Maha Lari", "Dragon Deluxe Lari", "Terror Deluxe Lari"] },
  { category: "Rockets", items: ["Baby Rocket", "Standard Rocket", "Seeti Wala Rocket", "Teen Awaaz Rocket", "Bomb Rocket", "Rohini Rocket"] },
  { category: "Others", items: ["Saanp Wali Goli", "Pop-Pop Crackers"] },
];

const CATEGORY_B = [
  { category: "Spinners & Wheels", items: ["Taar Chakkar", "Dancing Wheel", "Phool Wheel", "Super Wheel", "Twin Spin", "Mega Twister"] },
  { category: "Premium Fountains", items: ["Anar", "Bada Anar", "Special Anar", "Deluxe Anar", "Super Anar", "Rang Badalta Anar", "Sone Ka Anar", "Chandi Anar", "Magic Pots", "Rangeela Kotti", "Magic Tree", "Tower Pots", "Grand Splendour Anar"] },
  { category: "Sparklers (Phuljhadi)", items: ["7cm", "10cm", "15cm", "30cm (Mega)", "50cm (Jumbo)", "Chatpat Phuljhadi", "Soniya Phuljhadi", "Rang Badalti Phuljhadi", "Seeti Phuljhadi", "Hari Phuljhadi", "Lal Phuljhadi", "Do-Rangi Phuljhadi", "Nimbu Sparkler", "5-in-1 Bundle", "Fancy Pencil"] },
  { category: "Multi-Shot Cakes", items: ["5 Shot", "7 Shot", "12 Shot", "20 Shot", "30 Shot", "50 Shot", "60 Shot", "120 Shot", "240 Shot (Maha Box)", "Extreme Flash", "Chino Shot"] },
  { category: "Stage / Special", items: ["Cold Pyro Indoor Fountain", "Smoke Bomb/Rangin Dhuan", "Sky Lantern/Wish Lantern", "Party Popper", "Rangeela Maachis"] },
  { category: "Crackers", items: ["Double Dhamaka", "Teen Dhamaka"] },
  { category: "Aerial Rockets", items: ["Chatpat Rocket", "Parachute Rocket", "Surveyor Rocket", "Musical Rocket"] },
];

const SPECIALTY = [
  "Army Commando Gun Dance — Baraat entry performance (book 10 days in advance)",
  "On-Demand Balloon Sky Shots — Custom rapid-fire sky shots",
  "Self-Made Multi-Color Anar — Handcrafted color-shifting fountain (red → green → gold)",
  "Jumbo Large Gola Shells — Professional mortar shells, on-demand",
  "Cold Pyro Stage Fountains — Indoor-safe, up to 10 feet, touch-safe",
  "Rotating Pyro Wheel (Matrix) — Motorized spinning cold pyro disk",
  "Heavy Fog / Low-Lying Clouds — Dry ice stage effect",
  "Premium Electric Cracklers (Lari)",
  "120-Shot VIP Multi-Color Repeater",
  "30-Shot Gold Willow Sky Shot"
];

export default function Catalogue() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Spectacular Catalogue</h1>
        <p className="text-lg text-muted-foreground">
          Browse our extensive collection of premium fireworks. From traditional Diwali favorites to grand wedding spectacles, we have everything you need to light up the sky.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
          <Phone className="h-4 w-4" />
          <span>Call +91 9452457572 for Wholesale & Retail Inquiries</span>
        </div>
      </div>

      <Tabs defaultValue="category-a" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 h-auto mb-8 bg-card border border-border">
          <TabsTrigger value="category-a" className="py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Category A: Diwali & Traditional
          </TabsTrigger>
          <TabsTrigger value="category-b" className="py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Category B: Weddings & Celebrations
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="category-a" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORY_A.map((group, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-foreground">
                        <span className="mr-2 text-primary">•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-border">
                    <Badge variant="outline" className="w-full justify-center py-1.5 text-xs text-muted-foreground">
                      Prices vary per season — Call or WhatsApp for best offer
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="category-b" className="space-y-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORY_B.map((group, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-foreground">
                        <span className="mr-2 text-primary">•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-border">
                    <Badge variant="outline" className="w-full justify-center py-1.5 text-xs text-muted-foreground">
                      Prices vary per season — Call or WhatsApp for best offer
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Star className="text-primary h-8 w-8" />
              Shah Fireworks Specialty Services
              <Star className="text-primary h-8 w-8" />
            </h2>
            <Card className="bg-gradient-to-br from-card to-primary/10 border-primary/30">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {SPECIALTY.map((item, idx) => (
                    <div key={idx} className="flex items-start bg-background/50 p-4 rounded-lg border border-border/50">
                      <Star className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Badge className="bg-primary hover:bg-primary text-primary-foreground px-4 py-2 text-sm">
                    Special arrangements available on request
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
