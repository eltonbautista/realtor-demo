"use client";
import { useState } from "react";

type Props = {
    listingId?: string;
}

export default function LeadForm({ listingId }: Props) {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        budget: "",
        beds: "3+",
        area: "",
        message: ""
    });

    async function submit() {
        setLoading(true);
        try {
            await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, listingId })
            });
            setSent(true);
        } catch {
            alert("Failed to send lead. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (sent) return <div className="p-3">Thanks! We&apos;ll be in touch shortly.</div>

    return (
        <div className="grid gap-2">
          <input
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-2">
            <input
              placeholder="Budget (CAD)"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={form.beds}
              onChange={(e) => setForm({ ...form, beds: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
          <input
            placeholder="Preferred area/neighborhood"
            value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Anything else?"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
          />
          <button
            onClick={submit}
            disabled={loading}
            className="px-3 py-2 rounded-lg bg-blue-500 text-white text-md hover:bg-[#111827] disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Sending…" : "Get more info"}
          </button>
        </div>
    )
}