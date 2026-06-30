import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { topic, tone } = await request.json();

    // Mock response for subject line optimization.
    const variants = [
      {
        subject: `${topic || "Your product"} — the smarter way to ${tone === "bold" ? "win" : "work"}`,
        predicted_open_rate: 0.241,
      },
      {
        subject: `Still managing ${topic || "work"} the old way?`,
        predicted_open_rate: 0.218,
      },
      {
        subject: `7 reasons why ${topic || "teams"} switch to Quov`,
        predicted_open_rate: 0.195,
      },
    ];

    return NextResponse.json({ variants });
  } catch (error) {
    console.error("optimize-subject error:", error);
    return NextResponse.json({ error: "Failed to optimize subject" }, { status: 500 });
  }
}
