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
        <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center px-4 py-12">
            <div className="flex flex-col items-center gap-6 w-full max-w-md">

                <div className="text-center">
                    <h1 className="text-3xl font-bold text-yellow-500">Your Study History</h1>
                    <p className="text-yellow-500 mt-1 text-sm">All the days you showed up</p>
                </div>

                {loading ? (
                    <p className="text-gray-400 text-sm">Loading...</p>
                ) : (
                    <HistoryList entries={entries} />
                )}

                <div className="w-full text-center">
                    <Link href="/" className="text-yellow-600 hover:underline text-sm">
                        ← Back to Dashboard
                    </Link>
                </div>

            </div>
        </main>
    );
}