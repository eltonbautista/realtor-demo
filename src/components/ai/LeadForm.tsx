"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";

type Props = {
  listingId?: string;
};

const PROPERTY_TYPES = ["house", "condo", "duplex", "townhouse"];
const BUDGET_RANGES = [
  "under $300k",
  "$300k - $500k",
  "$500k - $750k",
  "$750k - $1M",
  "$1M+",
];
const PREAPPROVED = ["yes", "no", "in process"];

export default function LeadForm({ listingId }: Props) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    propertyType: "",
    timeline: "",
    message: "",
    preapproved: "",
  });

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, listingId }),
      });
      setSent(true);
    } catch {
      alert("Failed to send lead. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent)
    return (
      <div className="p-3 text-center text-[#3a4251] font-semibold">
        Thanks! We&apos;ll be in touch shortly.
      </div>
    );

  return (
    <form
      onSubmit={submit}
      className="bg-white border border-[#e6eaf1] rounded-2xl shadow-xl max-w-xl py-8 px-8"
      autoComplete="off"
    >
      <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-[#3a4251] flex items-center gap-2">
        Get Started <Sparkles className="w-5 h-5 text-[#8b98ad]" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block font-semibold text-[#3a4251] mb-1">
            Name <span className="text-[#b0b8c9]">*</span>
          </label>
          <input
            required
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-[#e6eaf1] rounded-xl px-4 py-3 text-base bg-transparent placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
          />
        </div>
        <div>
          <label className="block font-semibold text-[#3a4251] mb-1">
            Email <span className="text-[#b0b8c9]">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-[#e6eaf1] rounded-xl px-4 py-3 text-base bg-transparent placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
          />
        </div>
        <div>
          <label className="block font-semibold text-[#3a4251] mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="(780) 123-4567"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-[#e6eaf1] rounded-xl px-4 py-3 text-base bg-transparent placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
          />
        </div>
        {/* Add preapproval select here */}
        <div>
          <label className="block font-semibold text-[#3a4251] mb-1">
            Pre-approved for a mortgage?
          </label>
          <select
            value={form.preapproved}
            onChange={(e) => setForm({ ...form, preapproved: e.target.value })}
            className="w-full border border-[#e6eaf1] rounded-xl px-4 py-3 text-base bg-transparent text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
          >
            <option value="">Select an option</option>
            {PREAPPROVED.map((p) => (
              <option key={p} value={p}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block font-semibold text-[#3a4251] mb-1">
            Budget Range
          </label>
          <select
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="w-full border border-[#e6eaf1] rounded-xl px-4 py-3 text-base bg-transparent text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
          >
            <option value="">Select budget range</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold text-[#3a4251] mb-1">
            Property Type
          </label>
          <select
            value={form.propertyType}
            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
            className="w-full border border-[#e6eaf1] rounded-xl px-4 py-3 text-base bg-transparent text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
          >
            <option value="">Select property type</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold text-[#3a4251] mb-1">
          Timeline
        </label>
        <input
          placeholder="When are you looking to buy/sell?"
          value={form.timeline}
          onChange={(e) => setForm({ ...form, timeline: e.target.value })}
          className="w-full border border-[#e6eaf1] rounded-xl px-4 py-3 text-base bg-transparent placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
        />
      </div>
      <div className="mb-8">
        <label className="block font-semibold text-[#3a4251] mb-1">
          Tell me about your needs
        </label>
        <textarea
          placeholder="Describe what you're looking for, preferred neighborhoods, must-have features, or any questions you have..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-[#e6eaf1] rounded-xl px-4 py-3 text-base bg-transparent placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100 min-h-[90px]"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-yellow-100 hover:bg-yellow-200 text-[#3a4251] text-lg font-semibold shadow-none border-none transition-all duration-200 disabled:opacity-50 cursor-pointer"
      >
        <Sparkles className="w-5 h-5" />
        {loading ? "Sending…" : "Find My Dream Home"}
      </button>
      <p className="text-xs text-[#b0b8c9] text-center mt-4">
        Your information will be analyzed by AI to provide personalized property recommendations and market insights.
      </p>
    </form>
  );
}