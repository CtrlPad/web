import { NextResponse } from "next/server";

const FIRMWARE_URL =
  "https://github.com/CtrlPad/firmware/releases/latest/download/ctrlpad.bin";

export const revalidate = 300;
export async function GET() {
  const upstream = await fetch(FIRMWARE_URL, {
    redirect: "follow",
    next: { revalidate },
  });

  if (!upstream.ok || !upstream.body) {
    return NextResponse.json(
      { error: `Failed to fetch firmware (${upstream.status})` },
      { status: 502 },
    );
  }

  return new NextResponse(upstream.body, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": 'attachment; filename="ctrlpad.bin"',
      "Cache-Control": "public, max-age=300",
    },
  });
}
