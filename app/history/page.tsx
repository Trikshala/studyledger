"use client";
import { useState, useEffect } from "react";
import HistoryList from "../components/HistoryList";
import Link from "next/link";

export default function HistoryPage() {
  const [entries, setEntries] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/history")
      .then((r) => r.json())
      .then((data) => {
        setEntries(data.history);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">

        <div className="w-full">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Dashboard
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Your Study History</h1>
          <p className="text-gray-500 mt-1 text-sm">All the days you showed up</p>
        </div>

        {loading ? (
          <p className="text-gray-400 text-sm">Loading...</p>
        ) : (
          <HistoryList entries={entries} />
        )}
      </div>
    </main>
  );
}