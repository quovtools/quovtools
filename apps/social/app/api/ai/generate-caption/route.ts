import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  return NextResponse.json({
    captions: [
      { text: "🚀 Embracing the future one line of code at a time! #TechLife #Innovation", platform: "twitter", engagement_prediction: 87 },
      { text: "Building something amazing today! 💻✨ Who else is coding?", platform: "instagram", engagement_prediction: 92 },
      { text: "The future belongs to those who code it. #DeveloperLife #Tech", platform: "linkedin", engagement_prediction: 78 }
    ]
  });
}