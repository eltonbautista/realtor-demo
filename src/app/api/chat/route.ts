import { NextResponse } from 'next/server';
import { LISTINGS } from '@/lib/listings';

export async function POST(req: Request) {
    try {
        const { message, listingId } = await req.json();

        // 
        const listing = LISTINGS.find((l => l.id === listingId))

        const system = `
You are an assistant for a real estate website. 
Answer concisely, truthfully, and only within the known info.
If unsure, say you'll connect the user with the agent.

If a listing is provided, use ONLY its details.
If asked about open houses, pet policy, price, beds/baths, or neighborhood, use the listing.
If the user asks for financing/legal advice, be general and suggest speaking to a professional.

Tone: friendly, professional, concise.
    `.trim();

    const listingContext = listing
      ? `Listing context:\n${JSON.stringify(listing, null, 2)}`
      : "No specific listing context.";      

      const body = {
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        {
          role: "user",
          content: `${listingContext}\n\nUser question: ${message}`
        }
      ],
      temperature: 0.3
    };
    
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`
      },
      body: JSON.stringify(body)
    });

    if (!r.ok) {
      const txt = await r.text();
      return NextResponse.json(
        { error: "OpenAI error", details: txt },
        { status: 500 }
      );
    }

    const data = await r.json();
    const answer = data?.choices?.[0]?.message?.content ?? "Sorry, no answer.";

    return NextResponse.json({ answer });
    } catch (e: any) {
    return NextResponse.json(
      { error: "Server error", details: e?.message },
      { status: 500 }
    );
  }
} 