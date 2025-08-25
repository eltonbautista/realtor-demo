import { LISTINGS } from "@/lib/listings";
import { Button } from "@/components/ui/button";
import ChatWidget from "@/components/ai/ChatWidget";
import LeadForm from "@/components/ai/LeadForm";
import HomeHero from "@/app/home/HomeHero";
import FeaturedListings from "@/app/home/FeaturedListings";
import RevealOnScroll from "@/components/layout/RevealOnScroll";

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
        <section className="bg-blue-50 py-12 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to find your perfect home?</h2>
          <p className="mb-6 text-gray-600">
            Let Sarah Li guide you every step of the way. Get started with a quick consultation today.
          </p>
          <a href="mailto:sarah@example.com">
            <Button size="lg" variant="outline">Contact Sarah</Button>
          </a>
        </section>
      </RevealOnScroll>

      {/* TODO: Testimonials Section */}

      {/* Listings Section */}
      <RevealOnScroll>
        <FeaturedListings LISTINGS={LISTINGS} />
      </RevealOnScroll>

      {/* Contact Section */}
      <RevealOnScroll>
        <section className="bg-gray-50 py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about a property or want to schedule a showing? Contact Sarah directly.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
        </section>
      </RevealOnScroll>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Sarah Li Real Estate. All rights reserved.
      </footer>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatWidget />
      </div>
    </main>
  );
}
