export interface FireworkItem {
  id: string;
  name: string;
  localName?: string;
  category: "event-special" | "multi-shot" | "fountain" | "sparkler" | "rocket" | "stage" | "cracker" | "lari" | "wholesale-extra";
}

export const EVENT_FIREWORKS: { section: string; items: FireworkItem[] }[] = [
  {
    section: "Specialty Event Performances",
    items: [
      { id: "commando-dance", name: "Army Commando Gun Dance Show", localName: "Grand Baraat Act" },
      { id: "balloon-shots", name: "On-Demand Balloon Sky Shots (Custom Rounds)", localName: "Mega Sky Shots" },
      { id: "cold-pyro", name: "Cold Pyro Stage Fountains (Indoor Safe)", localName: "Cold Pyro / Indoor Anar" },
      { id: "rotating-wheel", name: "Rotating Pyro Matrix Wheel", localName: "Giant Spinning Pyro Disc" },
      { id: "heavy-fog", name: "Heavy Fog / Low-Lying Cloud Effect (Dry Ice)", localName: "Heaven Stage Effect" },
    ],
  },
  {
    section: "Multi-Shot Sky Displays (Cakes)",
    items: [
      { id: "240-shot", name: "240 Shot Professional Sky Display", localName: "240 Shot Maha Box" },
      { id: "120-shot", name: "120 Shot VIP Multi-Color Repeater", localName: "120 Shot Maha Box" },
      { id: "60-shot", name: "60 Shot Synchronized Aerial Box", localName: "60 Shot Multi" },
      { id: "50-shot", name: "50 Shot Grand Display Cake", localName: "50 Shot Block" },
      { id: "30-shot", name: "30 Shot Gold Willow Sky Shot", localName: "30 Shot Box" },
      { id: "20-shot", name: "20 Shot Heavy Shell Cake", localName: "20 Shot Multi" },
      { id: "12-shot", name: "12 Shot Aerial Cake", localName: "12 Shot Box" },
      { id: "7-shot", name: "7 Shot Aerial Repeater", localName: "7 Shot" },
      { id: "5-shot", name: "5 Shot Multi-Color Repeater", localName: "5 Shot Fancy" },
    ],
  },
  {
    section: "Sky Rockets & Aerial Shells",
    items: [
      { id: "jumbo-gola", name: "Jumbo Large Gola Shell (Heavy Mortar)", localName: "Bada Gola" },
      { id: "small-gola", name: "Popular Small Gola Shell", localName: "Chhota Gola" },
      { id: "parachute-rocket", name: "Parachute Aerial Rocket", localName: "Chhatri Rocket" },
      { id: "musical-rocket", name: "Musical Ascending Rocket", localName: "Musical Rocket" },
      { id: "rohini-rocket", name: "Rohini Visual Star Rocket", localName: "Rohini Rocket" },
    ],
  },
  {
    section: "Premium Fountains (Anar)",
    items: [
      { id: "selfmade-anar", name: "Self-Made Multi-Color Anar (Red-Green-Gold)", localName: "In-House Special Anar" },
      { id: "grand-anar", name: "Grand Splendour Anar (High Rise)", localName: "Grand Splendour Anar" },
      { id: "super-anar", name: "Super / Deluxe Conical Fountain", localName: "Super / Deluxe Anar" },
      { id: "color-anar", name: "Color Changing Fountain", localName: "Rang Badalta Anar" },
      { id: "golden-anar", name: "Golden Glitter Fountain", localName: "Sone Ka Anar" },
      { id: "large-chakra", name: "Large Celebration Chakra (Giant Spinning Wheel)", localName: "Bada Chakkar" },
    ],
  },
  {
    section: "Sparklers & Hand-Held",
    items: [
      { id: "sparkler-50cm", name: "50cm Mega Sparklers", localName: "Jumbo Phuljhadi" },
      { id: "sparkler-30cm", name: "30cm Giant Sparklers", localName: "Mega Phuljhadi" },
      { id: "sparkler-15cm", name: "15cm Long Sparklers", localName: "Badi Phuljhadi" },
      { id: "color-sparkler", name: "Color Changing Sparklers", localName: "Rang Badalti Phuljhadi" },
      { id: "5in1-sparkler", name: "5-in-1 Sparkler Bundle", localName: "5-in-1 Phuljhadi" },
    ],
  },
  {
    section: "Decorative & Atmosphere",
    items: [
      { id: "sky-lantern", name: "Sky Lanterns / Wish Lanterns", localName: "Aakash Diya" },
      { id: "smoke-bomb", name: "Color Smoke Flares", localName: "Rangin Dhuan" },
      { id: "party-popper", name: "Pull-String Confetti Poppers", localName: "Party Popper" },
      { id: "magic-tree", name: "Magic Tree Fountain Display", localName: "Magic Tree" },
    ],
  },
];

export const WHOLESALE_FIREWORKS: { section: string; items: FireworkItem[] }[] = [
  {
    section: "Multi-Shot Cakes",
    items: [
      { id: "w-240", name: "240 Shot Maha Box (Professional)" },
      { id: "w-120", name: "120 Shot VIP Repeater" },
      { id: "w-60", name: "60 Shot Synchronized Box" },
      { id: "w-50", name: "50 Shot Grand Display" },
      { id: "w-30", name: "30 Shot Gold Willow" },
      { id: "w-20", name: "20 Shot Heavy Shell" },
      { id: "w-12", name: "12 Shot Aerial Cake" },
      { id: "w-7", name: "7 Shot Repeater" },
      { id: "w-5", name: "5 Shot Fancy" },
    ],
  },
  {
    section: "Sparklers",
    items: [
      { id: "w-sp50", name: "50cm Mega Sparklers" },
      { id: "w-sp30", name: "30cm Giant Sparklers" },
      { id: "w-sp15", name: "15cm Long Sparklers" },
      { id: "w-sp10", name: "10cm Medium Sparklers" },
      { id: "w-sp7", name: "7cm Small Sparklers" },
      { id: "w-color-sp", name: "Color Changing Sparklers" },
      { id: "w-gold-sp", name: "Gold Sparklers" },
    ],
  },
  {
    section: "Fountains & Anars",
    items: [
      { id: "w-grand-anar", name: "Grand Splendour Anar" },
      { id: "w-super-anar", name: "Super / Deluxe Anar" },
      { id: "w-color-anar", name: "Color Changing Anar" },
      { id: "w-golden-anar", name: "Golden Glitter Anar" },
      { id: "w-silver-anar", name: "Silver Rain Anar" },
      { id: "w-magic-tree", name: "Magic Tree Fountain" },
      { id: "w-tower-pots", name: "Tower Pots Display" },
    ],
  },
  {
    section: "Garlands (Laris)",
    items: [
      { id: "w-hazaar", name: "1000-Piece Garland (Hazaar Lari)" },
      { id: "w-600", name: "600-Piece Garland" },
      { id: "w-300", name: "300-Piece Garland" },
      { id: "w-200", name: "200-Piece Garland" },
      { id: "w-100", name: "100-Piece Garland" },
      { id: "w-dragon", name: "Deluxe Dragon Chain Cracker" },
      { id: "w-terror", name: "Terror Heavy Chain Cracker" },
    ],
  },
  {
    section: "Ground Spinners & Wheels",
    items: [
      { id: "w-deluxe-chakkar", name: "Deluxe Ground Spinner (Chakkar)" },
      { id: "w-mega-twister", name: "Mega Twister Spinner" },
      { id: "w-flower-wheel", name: "Flower Wheel Firework" },
      { id: "w-twin-spin", name: "Twin Spin Ground Wheel" },
    ],
  },
  {
    section: "Sound Crackers",
    items: [
      { id: "w-lakshmi-bomb", name: "Deluxe Lakshmi Bomb (Badi)" },
      { id: "w-lakshmi-med", name: "Lakshmi Bomb (Medium)" },
      { id: "w-atom-bomb", name: "Hydro / Atom Bomb" },
      { id: "w-bijili", name: "Bijili Cracker (Various)" },
    ],
  },
  {
    section: "Stage & Cold Pyro",
    items: [
      { id: "w-cold-pyro", name: "Cold Pyro Stage Fountains (Indoor)" },
      { id: "w-smoke", name: "Color Smoke Flares" },
      { id: "w-sky-lantern", name: "Sky Lanterns" },
      { id: "w-party-popper", name: "Confetti Party Poppers" },
    ],
  },
];
