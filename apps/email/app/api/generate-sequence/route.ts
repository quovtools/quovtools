import { NextResponse } from "next/server";
import { generateWithFallback } from "@quov/ai";

export async function POST(request: Request) {
  try {
    const { productUrl, description, tone } = await request.json();

    const prompt = `Generate a complete email sequence for the following product or service.

Product URL: ${productUrl || "N/A"}
Description: ${description || "Not provided"}
Tone: ${tone || "professional"}

Return a JSON object with a top-level "sequence" key containing:
- name: string
- emails: array of objects, each with subject, body, cta, timing_day, predicted_open_rate, and predicted_click_rate.

Only return valid JSON. No markdown, no explanation.`;

    const messages = [
      { role: "system", content: "You are an expert SaaS email marketer." },
      { role: "user", content: prompt },
    ];

    const result = await generateWithFallback(messages, {
      model: "gpt-4o-mini",
      temperature: 0.7,
      maxTokens: 1200,
    });

    // If the AI service returns text, attempt to parse the JSON payload.
    let sequence: { name: string; emails: Array<Record<string, unknown>> } | null = null;
    const text = typeof result === "string" ? result : JSON.stringify(result);

    try {
      const parsed = JSON.parse(text);
      sequence = parsed.sequence ?? parsed;
    } catch {
      sequence = null;
    }

    if (!sequence) {
      // Fallback mock response so the frontend always receives a usable payload.
      sequence = {
        name: "Launch Sequence",
        emails: [
          {
            subject: "Welcome to [Product] — here’s what’s next",
            body: "Hi {{first_name}},\n\nWe're thrilled to have you. Here’s how to get started in 3 easy steps.\n\nTalk soon,\nThe [Product] Team",
            cta: "Get Started",
            timing_day: 0,
            predicted_open_rate: 0.245,
            predicted_click_rate: 0.084,
          },
          {
            subject: "Here’s how [Customer] got results in 7 days",
            body: "Quick case study inside. See how they used [Product] to cut time in half.\n\nSee how →",
            cta: "Read Case Study",
            timing_day: 2,
            predicted_open_rate: 0.198,
            predicted_click_rate: 0.062,
          },
          {
            subject: "Last chance: unlock your bonus",
            body: "Your trial ends soon. Claim your exclusive onboarding bonus before it expires.\n\nClaim now →",
            cta: "Claim Bonus",
            timing_day: 5,
            predicted_open_rate: 0.212,
            predicted_click_rate: 0.091,
          },
        ],
      };
    }

    return NextResponse.json({ sequence });
  } catch (error) {
    console.error("generate-sequence error:", error);
    return NextResponse.json({ error: "Failed to generate sequence" }, { status: 500 });
  }
}
