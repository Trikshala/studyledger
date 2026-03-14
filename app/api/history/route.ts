import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const datesParam = searchParams.get("dates");
  const dates: string[] = datesParam ? JSON.parse(datesParam) : [];
  const sorted = [...dates].sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );
  return NextResponse.json({ history: sorted });
}