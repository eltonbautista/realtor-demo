// src/data/testimonials.ts

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Thompson",
    role: "First-Time Homebuyer",
    text: "Working with Sarah was a seamless experience! He guided me through every step, making the entire process stress-free. I’m thrilled with my new home.",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    name: "Michael Rivera",
    role: "Investor",
    text: "Sarah's knowledge of the market is unmatched. He helped me secure a fantastic investment property at a great price. Highly recommended!",
    image: "/images/testimonials/michael.jpg",
  },
  {
    name: "Emily Chen",
    role: "Seller",
    text: "From staging advice to negotiation, Sarah went above and beyond. My home sold quickly and for more than I expected!",
    image: "/images/testimonials/emily.jpg",
  },
  {
    name: "David Patel",
    role: "Relocation Client",
    text: "Moving cities felt overwhelming, but Sarah's expertise made it easy. He found the perfect neighborhood for my family.",
    image: "/images/testimonials/david.jpg",
  },
];
