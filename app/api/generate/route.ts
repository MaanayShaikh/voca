import { NextResponse } from "next/server";

type GenerateBody = {
  prompt?: string;
  niche?: string;
  voiceProfileId?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as GenerateBody | null;

  if (!body?.prompt) {
    return NextResponse.json(
      { error: "A prompt is required to generate post variants." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: "Generation scaffold is wired up.",
    received: {
      prompt: body.prompt,
      niche: body.niche ?? null,
      voiceProfileId: body.voiceProfileId ?? null,
    },
    variants: [
      "Variant 1 placeholder",
      "Variant 2 placeholder",
      "Variant 3 placeholder",
    ],
  });
}
