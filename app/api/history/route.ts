import { NextResponse } from "next/server";
import { readData } from "@/lib/storage";

export async function GET() {
  const dates = readData();
  const sorted = [...dates].sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );
  return NextResponse.json({ history: sorted });
}