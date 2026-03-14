"use client";
import { useState, useEffect } from "react";
import StreakCard from "./components/StreakCard";
import StudyButton from "./components/StudyButton";
import Link from "next/link";

export default function Home() {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [lastStudyDate, setLastStudyDate] = useState<string | null>(null);
  const [totalDays, setTotalDays] = useState(0);
  const [loading, setLoading] = useState(true);

  async function fetchStreak() {
    const res = await fetch("/api/streak");
    const data = await res.json();
    setCurrentStreak(data.currentStreak);
    setLastStudyDate(data.lastStudyDate);
    setTotalDays(data.totalDays);
    setLoading(false);
  }

  useEffect(() => {
    fetchStreak();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Study Ledger</h1>
          <p className="text-gray-500 mt-1 text-sm">Track your daily study habit</p>
        </div>

        {loading ? (
          <p className="text-gray-400 text-sm">Loading...</p>
        ) : (
          <>
            <StreakCard
              currentStreak={currentStreak}
              lastStudyDate={lastStudyDate}
              totalDays={totalDays}
            />
            <StudyButton onClick={fetchStreak} />
          </>
        )}

        <Link
          href="/history"
          className="text-blue-600 hover:underline text-sm mt-2"
        >
          View Study History →
        </Link>
      </div>
    </main>
  );
}