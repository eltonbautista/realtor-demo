"use client";

import { useState } from "react";

export default function InternalPage() {
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const generateDescription = async () => {
    setLoading(true);
    setDescription("");

    const resp = await fetch("/api/describe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes }),
    });

    const data = await resp.json();
    setDescription(data.description || "Error generating description");
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">AI Listing Description Generator</h1>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Enter raw property notes..."
        className="w-full p-3 border rounded-md"
        rows={5}
      />
      <button
        onClick={generateDescription}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Description"}
      </button>

      {description && (
        <div className="mt-4 p-4 border rounded-md bg-gray-50 whitespace-pre-wrap">
          {description}
        </div>
      )}
    </div>
  );
}
