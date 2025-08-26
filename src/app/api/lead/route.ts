import { NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        // For now we are just going to log the request since it's for the demo site
        
        console.log("NEW LEAD:", body);
        return NextResponse.json({ ok: true });
    } catch (e: unknown) {
        return NextResponse.json({ ok: false, error: (e as Error)?.message }, { status: 500 });
    }
}