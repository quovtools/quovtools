import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    topics: [
      { title: "AI Development", platform: "twitter", growth: "+45%" },
      { title: "Remote Work Tips", platform: "linkedin", growth: "+32%" },
      { title: "Tech Career Growth", platform: "instagram", growth: "+28%" },
      { title: "Web Development", platform: "tiktok", growth: "+51%" },
      { title: "Startup Life", platform: "twitter", growth: "+22%" }
    ]
  });
}