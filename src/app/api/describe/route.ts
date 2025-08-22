import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { notes } = await req.json();

    if (!notes) {
      return NextResponse.json({ error: "Missing notes" }, { status: 400 });
    }

    const prompt = `
    You are a real estate copywriter. 
    Take the following raw notes and turn them into a polished, engaging property listing description (150-200 words):

    Notes: ${notes}
    `;

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await resp.json();
    const description =
      data.choices?.[0]?.message?.content?.trim() || "No description generated.";

    return NextResponse.json({ description });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
