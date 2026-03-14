import { NextResponse } from "next/server";
import { readData } from "@/lib/storage";
import { calculateStreak } from "@/lib/streakLogic";

export async function GET() {
  const dates = readData();
  const currentStreak = calculateStreak(dates);
  const totalDays = dates.length;
  const sorted = [...dates].sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );
  const lastStudyDate = sorted[0] ?? null;

  return NextResponse.json({ currentStreak, totalDays, lastStudyDate });
}