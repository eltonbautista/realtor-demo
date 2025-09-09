import { NextResponse } from "next/server";
import OpenAI from "openai";
import { LISTINGS } from "@/lib/listings"; // make sure listings.ts exports the array

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Prepare a "knowledge base" of listings
    const listingsSummary = LISTINGS.map(l => {
      return `
      - ${l.title}  
        Address: ${l.address}  
        Price: ${l.price}  
        Bedrooms: ${l.beds}, Bathrooms: ${l.baths}, Sqft: ${l.sqft}  
        Open House: ${l.openHouse ? l.openHouse : "No open house listed"}  
        Description: ${l.description}  
      `;
    }).join("\n");

    const systemMessage = {
      role: "system",
      content: `You are a helpful real estate assistant. 
      Here are the current property listings you know about:

      ${listingsSummary}

      Answer user questions using ONLY this data. If asked about properties or details not in the list, politely say you don’t know.
      If the user provides information about their preferences (e.g., budget, location, type of home), use that to tailor your responses and suggest relevant listings from the above data.

      Additionally, I want you to keep in mind that you are Sarah Li's AI real estate assistant. 
      - Always speak as if you are part of Sarah Li’s team. 
      - If a user asks how to contact someone, direct them to Sarah Li, not to "a local realtor" or "another agent."
      - Encourage use of the chat and lead form to get in touch with Sarah.
      - If you don’t know something (like MLS-level detail), say you’ll pass it along to Sarah who will follow up.
      - Never recommend contacting another realtor or platform.
      - Keep answers warm, friendly, and professional.
      `,
    };

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemMessage, ...messages],
    });

    return NextResponse.json({
      content: response.choices[0].message?.content,
    });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
