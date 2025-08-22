import { LISTINGS } from "@/lib/listings";

import ChatWidget from "@/components/ai/ChatWidget";
import LeadForm from "@/components/ai/LeadForm";
import HomeHero from '@/app/home/HomeHero';

export default function Home() {
  return (
    <main style={{ padding: "40px 20px", maxWidth: 1080, margin: "0 auto" }}>
      <header style={{ marginBottom: 24 }}>
        <HomeHero
          realtorName="Sarah Li"
          realtorDescription="AI-powered real estate site: instant answers, faster showings."
        />
      </header>

      <section style={{ display: "grid", gap: 20 }}>
        {LISTINGS.map((l) => (
          <article key={l.id} style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
            <h2 style={{ marginTop: 0 }}>{l.title}</h2>
            <p>
              ${l.price.toLocaleString()} • {l.beds} bd • {l.baths} ba • {l.sqft} sqft
            </p>
            <p style={{ margin: "4px 0" }}>{l.address} — {l.neighbourhood}</p>
            {l.openHouse && <p style={{ margin: "4px 0" }}>Open house: {l.openHouse}</p>}
            <div style={{ marginTop: 12 }}>
              <LeadForm listingId={l.id} />
            </div>
            <div style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
              Ask the chat (bottom right) about this listing.
            </div>
            {/* One chat widget floats for the page; we pass the last listing id clicked if you want per-card */}
          </article>
        ))}
      </section>

      <ChatWidget />
    </main>
  );
}
