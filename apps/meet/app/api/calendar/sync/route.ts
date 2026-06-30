import { NextResponse } from "next/server";

export async function POST() {
  const syncedMeetings = [
    {
      id: "evt_001",
      title: "Q3 Product Roadmap Review",
      start: "2024-07-15T14:00:00Z",
      end: "2024-07-15T15:00:00Z",
      attendees: ["jane@acme.com", "bob@acme.com", "alice@acme.com"],
      platform: "google_meet",
      prep_generated: true,
    },
    {
      id: "evt_002",
      title: "Design Sync",
      start: "2024-07-16T10:00:00Z",
      end: "2024-07-16T11:00:00Z",
      attendees: ["alice@acme.com", "charlie@acme.com"],
      platform: "zoom",
      prep_generated: false,
    },
    {
      id: "evt_003",
      title: "Investor Update",
      start: "2024-07-17T09:00:00Z",
      end: "2024-07-17T10:30:00Z",
      attendees: ["jane@acme.com", "diana@acme.com"],
      platform: "teams",
      prep_generated: false,
    },
  ];

  return NextResponse.json({ meetings: syncedMeetings });
}
