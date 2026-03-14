import { NextResponse } from "next/server";
import { calculateStreak } from "@/lib/streakLogic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const datesParam = searchParams.get("dates");
  const dates: string[] = datesParam ? JSON.parse(datesParam) : [];

  const currentStreak = calculateStreak(dates);
  const totalDays = dates.length;
  const sorted = [...dates].sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );
  const lastStudyDate = sorted[0] ?? null;

  return NextResponse.json({ currentStreak, totalDays, lastStudyDate });
}