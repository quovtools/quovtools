import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  return NextResponse.json({
    content: `Dear Hiring Manager,

I am excited to apply for the ${body.jobTitle || 'position'} role at ${body.company || 'your company'}. With my experience in ${body.skills || 'relevant technologies'}, I am confident in my ability to contribute to your team's success.

${body.background ? `Background: ${body.background}` : ''}

Thank you for considering my application. I look forward to discussing how my skills align with your needs.

Best regards,
${body.name || 'Your Name'}`
  });
}