import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  return NextResponse.json({
    optimized_content: body.content || '',
    changes: [],
    score_improvement: 25,
    ats_score: 85
  });
}