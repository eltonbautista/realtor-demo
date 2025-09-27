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
  const [aiSummary, setAiSummary] = useState<string | null>(null);
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
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, listingId }),
      });
      const data = await res.json();
      if (data.ok && data.aiSummary) {
        setAiSummary(data.aiSummary);
      }
      setSent(true);
    } catch {
      alert("Failed to send lead. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    let parsedSummary: any = null;
    let cleanSummary = aiSummary;
    if (aiSummary) {
      // Remove Markdown code block markers if present
      cleanSummary = aiSummary.replace(/```json|```/g, '').trim();
    }
    try {
      parsedSummary = cleanSummary ? JSON.parse(cleanSummary) : null;
    } catch {
      parsedSummary = null;
    }
    return (
      <div className="p-3 text-center text-[#3a4251] font-semibold">
        {/* Thanks! We&apos;ll be in touch shortly.<br /> */}
        {parsedSummary ? (
          <div className="mt-6 bg-[#f4f7fa] border border-[#e6eaf1] rounded-lg p-4 text-left text-[#232746]">
            <div className="font-bold mb-2 text-blue-400">AI Lead Summary - FOR DEMO PURPOSES ONLY.</div>
            <ul className="text-sm space-y-1">
              <li><span className="font-semibold text-[#3a4251]">Summary:</span> {parsedSummary.summary}</li>
              <li><span className="font-semibold text-[#3a4251]">Client Type:</span> {parsedSummary.buyerType}</li>
              <li><span className="font-semibold text-[#3a4251]">Budget Range:</span> {parsedSummary.budgetRange}</li>
              <li><span className="font-semibold text-[#3a4251]">Pre-Approved:</span> {String(parsedSummary.preApproved)}</li>
              <li><span className="font-semibold text-[#3a4251]">Timeline:</span> {parsedSummary.timeline}</li>
              <li><span className="font-semibold text-[#3a4251]">Priority Score:</span> {parsedSummary.priorityScore}</li>
            </ul>
          </div>
        ) : aiSummary ? (
          <div className="mt-6 bg-[#f4f7fa] border border-[#e6eaf1] rounded-lg p-4 text-left text-[#232746]">
            <div className="font-bold mb-2 text-blue-400">AI Lead Summary</div>
            <pre className="whitespace-pre-wrap text-sm">{aiSummary}</pre>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white border border-[#e6eaf1] shadow-xl max-w-xl py-8 px-8"
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
            className="w-full border border-[#e6eaf1] px-4 py-3 text-base bg-transparent placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
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
            className="w-full border border-[#e6eaf1] px-4 py-3 text-base bg-transparent placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
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
            className="w-full border border-[#e6eaf1] px-4 py-3 text-base bg-transparent placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
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
            className="w-full border border-[#e6eaf1] px-4 py-3 text-base bg-transparent text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
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
            className="w-full border border-[#e6eaf1] px-4 py-3 text-base bg-transparent text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
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
            className="w-full border border-[#e6eaf1] px-4 py-3 text-base bg-transparent text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
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
          className="w-full border border-[#e6eaf1] px-4 py-3 text-base bg-transparent placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100"
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
          className="w-full border border-[#e6eaf1] px-4 py-3 text-base bg-transparent placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-yellow-100 min-h-[90px]"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-yellow-100 hover:bg-yellow-200 text-[#3a4251] text-lg font-semibold shadow-none border-none transition-all duration-200 disabled:opacity-50 cursor-pointer"
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