import { NextResponse } from "next/server";

export async function POST() {
  const prepDoc = {
    meeting_id: "meet_abc123",
    title: "Q3 Product Roadmap Review",
    date: "2024-07-15T14:00:00Z",
    attendees: ["jane@acme.com", "bob@acme.com"],
    context: {
      previous_meetings: ["2024-06-28 Kick-off", "2024-07-01 Design Review"],
      related_docs: ["Q2 Report", "Roadmap Draft v3"],
    },
    talking_points: [
      "Q2 delivery rate exceeded targets by 12%",
      "Customer churn down 3 points after onboarding redesign",
      "3 new enterprise logos expected by end of month",
    ],
    questions: [
      "What is the margin impact of the new pricing tier?",
      "How does the UX redesign affect the mobile conversion funnel?",
      "Can we accelerate the API launch by two weeks?",
    ],
    objections: [
      "Competitor X launched a similar feature last quarter",
      "Engineering bandwidth constraint flagged by VP Eng",
      "Marketing wants a bigger campaign budget to support launch",
    ],
    action_items: [
      { owner: "jane@acme.com", task: "Send updated roadmap deck", due: "2024-07-14" },
      { owner: "bob@acme.com", task: "Confirm vendor capacity", due: "2024-07-13" },
    ],
  };

  return NextResponse.json(prepDoc);
}
