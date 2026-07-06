import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "phone", "details"] as const;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ success: false, error: "Invalid submission." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  for (const field of requiredFields) {
    if (typeof data[field] !== "string" || data[field].trim().length < 2) {
      return NextResponse.json({ success: false, error: `Missing or invalid field: ${field}.` }, { status: 400 });
    }
  }

  const email = String(data.email).trim();

  if (!isValidEmail(email)) {
    return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!Array.isArray(data.trades) || data.trades.length === 0 || !data.trades.every((trade) => typeof trade === "string" && trade.trim().length > 0)) {
    return NextResponse.json({ success: false, error: "Please select at least one trade division." }, { status: 400 });
  }

  // TODO: Add production rate limiting before connecting email, CRM, SMS, database, or automation integrations.
  // This placeholder intentionally does not expose secrets or connect to live backend systems.

  return NextResponse.json({ success: true });
}

export function GET() {
  return NextResponse.json({ success: false, error: "Method not allowed." }, { status: 405 });
}
