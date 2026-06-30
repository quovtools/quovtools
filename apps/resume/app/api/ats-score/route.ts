import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  return NextResponse.json({
    score: 78,
    missingKeywords: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
    suggestions: [
      'Add more technical keywords',
      'Include specific metrics and achievements',
      'Optimize section headings for ATS parsing'
    ]
  });
}