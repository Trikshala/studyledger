import { NextResponse } from "next/server";
import { readData, writeData } from "@/lib/storage";

export async function POST() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toISOString().split("T")[0];

  const dates = readData();

  if (dates.includes(todayStr)) {
    return NextResponse.json(
      { message: "You have already marked today." },
      { status: 400 }
    );
  }

  dates.push(todayStr);
  writeData(dates);

  return NextResponse.json({ message: "Study session recorded!" });
}