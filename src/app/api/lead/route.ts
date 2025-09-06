import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Example: ask AI to summarize and qualify lead
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an AI real estate assistant. 
          Your job is to qualify new leads based on the details they provide.
          Always respond in JSON with the following fields:
          - summary: short human-friendly summary of the lead
          - buyerType: "buyer" | "seller" | "unknown"
          - budgetRange: string (if provided)
          - preApproved: true | false | "unknown"
          - timeline: string (e.g. "immediate", "3-6 months", "unknown")
          - priorityScore: 1-10 (10 = very hot lead, 1 = low quality)`
        },
        {
          role: "user",
          content: `Here is a new lead: ${JSON.stringify(body)}`
        }
      ]
    });

    const aiSummary = completion.choices[0].message.content;

    console.log("NEW LEAD:", body);
    console.log("AI SUMMARY:", aiSummary);

    return NextResponse.json({ ok: true, aiSummary });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: (e as Error)?.message }, { status: 500 });
  }
}
