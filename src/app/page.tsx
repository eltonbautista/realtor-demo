import { LISTINGS } from "@/lib/listings";
import { Button } from "@/components/ui/button";
import ChatWidget from "@/components/ai/ChatWidget";
import LeadForm from "@/components/ai/LeadForm";
import HomeHero from "@/app/home/HomeHero";
import FeaturedListings from "@/app/home/FeaturedListings";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import HomeTestimonials from "@/app/home/HomeTestimonials";
import HomeCta from "@/app/home/HomeCta";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <HomeHero
        realtorName="Sarah Li"
        realtorDescription="I guide you through every step of buying or selling a home with expertise and care.
          My goal is to make the process simple, transparent, and tailored to your needs."
      />

      {/* CTA Strip */}
      <RevealOnScroll>
        <HomeCta />
      </RevealOnScroll>

      {/* Listings Section */}
      <FeaturedListings LISTINGS={LISTINGS} />

      {/* TODO: Testimonials Section */}
      <RevealOnScroll>
        <HomeTestimonials />
      </RevealOnScroll>

      {/* FAQs Section */}

      {/* Contact Section */}
      <RevealOnScroll>
        <section className="bg-gray-50 pb-16 md:py-16 px-6 text-center">
          <h2 className="heading-font md:text-5xl text-4xl font-bold mb-6 text-blue-900">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about a property or want to schedule a showing? Contact Sarah directly.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
        </section>
      </RevealOnScroll>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatWidget />
      </div>
    </main>
  );
}
