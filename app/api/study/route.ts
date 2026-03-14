import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { dates } = body;
  return NextResponse.json({ dates });
}