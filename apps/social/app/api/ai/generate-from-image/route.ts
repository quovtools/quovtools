import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('image');
  
  // Mock file upload handling
  return NextResponse.json({
    captions: [
      { text: "What a stunning view! 🌅 Perfect moment to capture and share.", platform: "instagram", engagement_prediction: 88 },
      { text: "Nature at its finest. Taking a moment to appreciate the beauty around us.", platform: "linkedin", engagement_prediction: 75 }
    ]
  });
}