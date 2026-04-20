import { NextResponse } from "next/server";

type VoiceProfileBody = {
  samples?: string[];
  niche?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | VoiceProfileBody
    | null;

  if (!body?.samples?.length) {
    return NextResponse.json(
      { error: "At least one writing sample is required." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: "Voice profile analysis scaffold is wired up.",
    niche: body.niche ?? null,
    samplesReceived: body.samples.length,
    profile: {
      tone: "Confident and practical",
      cadence: "Medium-length sentences with concise openings",
      callsToAction: "Direct but low-pressure",
    },
  });
}
