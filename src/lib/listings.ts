export type Listing = {
    id: string;
    title: string;
    price: number;
    beds: number;
    baths: number;
    sqft: number;
    address: string;
    neighbourhood: string;
    description?: string;
    features: string[];
    openHouse?: string; // e.g. "Sat 2-4PM"
    petFriendly?: boolean;
    images: string[];
    mls?: string;
}

export const LISTINGS: Listing[] = [
  {
    id: "yeg-001",
    title: "Modern 3-Bed in Strathcona",
    price: 489000,
    beds: 3,
    baths: 2,
    sqft: 1450,
    address: "10345 83 Ave NW, Edmonton, AB",
    neighbourhood: "Strathcona",
    description:
      "Bright, south-facing living room, renovated kitchen, quick access to Whyte Ave.",
    features: ["Garage", "Renovated kitchen", "Near transit"],
    openHouse: "Sat 2–4 PM",
    petFriendly: true,
    images: ["/demo/strathcona1.jpg", "/demo/strathcona2.jpg"],
    mls: "E4390001"
  },
  {
    id: "yeg-002",
    title: "Downtown Condo with River Views",
    price: 349000,
    beds: 2,
    baths: 2,
    sqft: 980,
    address: "9720 106 St NW, Edmonton, AB",
    neighbourhood: "Downtown",
    features: ["Gym", "Underground parking", "Balcony"],
    openHouse: "Sun 1–3 PM",
    petFriendly: false,
    images: ["/demo/condo1.jpg", "/demo/condo2.jpg"],
    mls: "E4390002"
  },
  {
    id: "yeg-003",
    title: "Family Home Near Great Schools",
    price: 575000,
    beds: 4,
    baths: 3,
    sqft: 1900,
    address: "4123 122 St NW, Edmonton, AB",
    neighbourhood: "Aspen Gardens",
    features: ["Large yard", "Finished basement", "Quiet street"],
    images: ["/demo/family1.jpg", "/demo/family2.jpg"],
    mls: "E4390003"
  }
];