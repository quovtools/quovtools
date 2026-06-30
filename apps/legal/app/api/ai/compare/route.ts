import { NextResponse } from "next/server";

export async function POST() {
  const comparison = {
    document_a: { id: "doc_abc", filename: "MSA v1.docx", version: "1.0.0" },
    document_b: { id: "doc_def", filename: "MSA v2.docx", version: "2.0.0" },
    similarity_score: 0.74,
    deviations: [
      {
        clause_ref: "Section 4.2",
        document_a_text: "Liability capped at $50,000.",
        document_b_text: "Liability capped at $200,000.",
        change_type: "modified",
        risk_delta: "increased",
        recommendation: "Revert to prior cap or negotiate reciprocal increase in service levels.",
      },
      {
        clause_ref: "Section 9.1",
        document_a_text: "60-day notice for termination.",
        document_b_text: "30-day notice for termination.",
        change_type: "modified",
        risk_delta: "neutral",
        recommendation: "Confirm if this aligns with your operational transition plan.",
      },
      {
        clause_ref: "Section 12.0",
        document_a_text: "Governing law: State of California.",
        document_b_text: "Governing law: State of New York.",
        change_type: "modified",
        risk_delta: "increased",
        recommendation: "Verify enforceability and tax implications of the new jurisdiction.",
      },
      {
        clause_ref: "Exhibit A",
        document_a_text: "Pricing Schedule A attached.",
        document_b_text: "Pricing Schedule A replaced with Schedule B (prices increased 8%).",
        change_type: "added",
        risk_delta: "increased",
        recommendation: "Model the financial impact of the new pricing schedule before signing.",
      },
      {
        clause_ref: "Section 7.3",
        document_a_text: "Confidentiality term: 3 years.",
        document_b_text: "Confidentiality term removed.",
        change_type: "deleted",
        risk_delta: "increased",
        recommendation: "Strongly recommend reinstating confidentiality protections for trade secrets.",
      },
    ],
    summary:
      "5 deviations detected. Similarity score 74%. Major risk increases in liability cap, governing law, and confidentiality terms.",
  };

  return NextResponse.json(comparison);
}
