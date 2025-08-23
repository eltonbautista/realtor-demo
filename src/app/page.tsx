import { LISTINGS } from "@/lib/listings";
import ChatWidget from "@/components/ai/ChatWidget";
import LeadForm from "@/components/ai/LeadForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HomeHero from "@/app/home/HomeHero";
import FeaturedListings from "@/app/home/FeaturedListings";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <HomeHero
        realtorName="Sarah Li"
        realtorDescription="Your trusted real estate agent for buying and selling homes."
      />

      {/* CTA Strip */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to find your perfect home?</h2>
        <p className="mb-6 text-gray-600">
          Let Sarah Li guide you every step of the way. Get started with a quick consultation today.
        </p>
        <Button size="lg">Contact Sarah</Button>
      </section>

      {/* Listings Section */}
      <FeaturedListings LISTINGS={LISTINGS} />

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions about a property or want to schedule a showing? Contact Sarah directly.
        </p>
        <div className="max-w-md mx-auto">
          <LeadForm />
        </div>
      </section>

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
