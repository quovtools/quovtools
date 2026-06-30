import { NextResponse } from "next/server";

export async function POST() {
  const analysis = {
    document_id: "doc_xyz789",
    filename: "Master Services Agreement v2.docx",
    analyzed_at: "2024-07-15T16:30:00Z",
    overall_risk_score: 0.28,
    clauses: [
      {
        id: "clause_01",
        text: "The Client shall indemnify and hold harmless the Provider against any and all claims arising from the Client's use of the Services.",
        risk_level: "medium",
        explanation: "Broad indemnity language may expose the Client to uncapped liability for third-party claims.",
        suggestion: "Add a cap equal to 12 months of fees paid and carve out gross negligence exceptions.",
      },
      {
        id: "clause_02",
        text: "This Agreement shall automatically renew for successive one-year terms unless either party provides written notice at least 30 days prior to expiration.",
        risk_level: "low",
        explanation: "Standard auto-renewal with a reasonable notice period; generally acceptable.",
        suggestion: "None required.",
      },
      {
        id: "clause_03",
        text: "Provider may terminate this Agreement immediately upon breach of confidentiality obligations.",
        risk_level: "high",
        explanation: "Immediate termination clause is heavily one-sided and lacks cure period.",
        suggestion: "Negotiate for a 10-day cure period and mutual termination rights.",
      },
      {
        id: "clause_04",
        text: "All notices shall be in writing and delivered via certified mail or recognized overnight courier.",
        risk_level: "low",
        explanation: "Standard notice provision; ensures legal validity of communications.",
        suggestion: "Consider adding email as an alternative for non-critical notices to speed up delivery.",
      },
    ],
    summary: "3 of 4 clauses are acceptable with minor modifications. 1 clause requires immediate attention before execution.",
  };

  return NextResponse.json(analysis);
}
