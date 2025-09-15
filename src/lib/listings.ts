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
    type?: "house" | "duplex" | "townhouse" | "apartment";
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
      `Discover modern living in Strathcona! This stunning 3-bedroom, 2-bath home offers 1,450 sqft of beautifully designed space, perfect for contemporary lifestyles. Priced at $489,000, it combines style and comfort in a desirable neighborhood. Don't miss your chance to call 10345 83 Ave NW your new home!`,
    features: ["Garage", "Renovated kitchen", "Near transit"],
    openHouse: "Sat 2–4 PM",
    petFriendly: true,
    images: ["/images/strathcona.jpg"],
    type: "house",
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
    description: `Welcome to your urban oasis in the heart of downtown Edmonton! This stunning 2-bedroom, 2-bathroom condo offers mesmerizing river views and modern living in 980 sqft. Priced at $349,000, this stylish retreat combines convenience with charm, making it the perfect place to call home. Don’t miss your chance!`,
    features: ["Gym", "Underground parking", "Balcony"],
    openHouse: "Sun 1–3 PM",
    petFriendly: false,
    images: ["/images/downtown-property/downtown.jpg", "/images/downtown-property/downtown-2.jpg", "/images/downtown-property/downtown-3.jpg", "/images/downtown-property/downtown-4.jpg"],
    type: "apartment",
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
    description: `Discover this charming family home in Aspen Gardens, Edmonton! Priced at $575,000, this spacious 1,900 sqft residence features 4 bedrooms and 3 bathrooms, making it perfect for growing families. Enjoy the convenience of nearby top-rated schools and a welcoming neighborhood. Your ideal home awaits at 4123 122 St NW!`,
    features: ["Large yard", "Finished basement", "Quiet street"],
    images: ["/images/aspen.jpg"],
    type: "house",
    mls: "E4390003"
  },
  {
    id: "yeg-004",
    title: "Apartment in Beautiful Oliver",
    price: 299000,
    beds: 1,
    baths: 1,
    sqft: 650,
    address: "12345 67 Ave NW, Edmonton, AB",
    neighbourhood: "Oliver",
    description: `Experience urban living in this beautiful 1-bedroom apartment located in Oliver. Priced at $299,000, this cozy 650 sqft space features modern finishes and stunning city views. Enjoy the convenience of in-suite laundry and a private balcony. Don’t miss out on this gem!`,
    features: ["Balcony", "City views", "In-suite laundry"],
    images: ["/images/oliver.jpg"],
    type: "apartment",
    mls: "E4390004"
  },
  {
    id: "yeg-005",
    title: "Spacious 2-Bedroom in the Heart of Downtown",
    price: 399000,
    beds: 2,
    baths: 2,
    sqft: 850,
    address: "4567 89 St NW, Edmonton, AB",
    neighbourhood: "Downtown",
    features: ["Open concept", "Stainless steel appliances", "Walking distance to shops"],
    images: ["/images/downtowners.jpg"],
    type: "apartment",
    mls: "E4390005"
  }
];