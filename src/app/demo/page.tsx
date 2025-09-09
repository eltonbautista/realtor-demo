import { LISTINGS } from "@/lib/listings";
import { Button } from "@/components/ui/button";
import ChatWidget from "@/components/ai/ChatWidget";
import LeadForm from "@/components/ai/LeadForm";
import HomeHero from "@/app/demo/DemoHero";
import FeaturedListings from "@/app/demo/FeaturedListings";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import HomeTestimonials from "@/app/demo/DemoTestimonials";
import HomeCta from "@/app/demo/DemoCta";
import HomeContact from "@/app/demo/DemoContact";

export default function DemoPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <HomeHero
        realtorName="Sarah Li"
        realtorDescription="Personally guiding you through every step of buying or selling a home with expertise and care.
          My goal is to make the process simple, transparent, and tailored to your needs."
      />

      {/* Listings Section */}
      <FeaturedListings LISTINGS={LISTINGS} />

      {/* CTA Strip */}
      <RevealOnScroll>
        <HomeCta />
      </RevealOnScroll>

      {/* Testimonials Section */}
      <RevealOnScroll>
        <HomeTestimonials />
      </RevealOnScroll>

      {/* FAQs Section */}

      {/* Contact Section */}
      <RevealOnScroll>
        <HomeContact />
      </RevealOnScroll>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatWidget />
      </div>
    </main>
  );
}
