import { NextResponse } from "next/server";

const templates = [
  {
    id: "welcome",
    name: "Welcome Series",
    description: "Onboarding your newest users.",
    emails: 3,
    tags: ["onboarding", "saas"],
  },
  {
    id: "re-engagement",
    name: "Re-engagement",
    description: "Win back inactive subscribers.",
    emails: 4,
    tags: ["churn", "retention"],
  },
  {
    id: "product-update",
    name: "Product Update",
    description: "Announce new features to existing users.",
    emails: 2,
    tags: ["news", "updates"],
  },
  {
    id: "promo",
    name: "Promo Blast",
    description: "Flash sale or limited-time offer.",
    emails: 3,
    tags: ["sales", "promo"],
  },
  {
    id: "lead-nurture",
    name: "Lead Nurture",
    description: "Build trust with warm leads over 7 days.",
    emails: 5,
    tags: ["leads", "nurture"],
  },
];

export async function GET() {
  return NextResponse.json({ templates });
}
