import { LISTINGS } from "@/lib/listings";
import ChatWidget from "@/components/ai/ChatWidget";
import DemoHero from "@/app/demo/DemoHero";
import FeaturedListings from "@/app/demo/FeaturedListings";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import DemoInformation from "@/app/demo/DemoInformation";
import DemoTestimonials from "@/app/demo/DemoTestimonials";
import DemoCta from "@/app/demo/DemoCta";
import DemoContact from "@/app/demo/DemoContact";

export default function DemoPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <DemoHero
        realtorName="Sarah Li"
        realtorDescription="Personally guiding you through every step of buying or selling a home with expertise and care.
          My goal is to make the process simple, transparent, and tailored to your needs."
      />
      {/* Information Section */}
      <RevealOnScroll className="bg-white" >
        <DemoInformation />
      </RevealOnScroll>

      {/* Listings Section */}
      <FeaturedListings LISTINGS={LISTINGS} />

      {/* CTA Strip */}
      <RevealOnScroll>
        <DemoCta />
      </RevealOnScroll>

      {/* Testimonials Section */}
      <RevealOnScroll>
        <DemoTestimonials />
      </RevealOnScroll>

      {/* FAQs Section */}

      {/* Contact Section */}
      <RevealOnScroll>
        <DemoContact />
      </RevealOnScroll>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatWidget />
      </div>
    </main>
  );
}
