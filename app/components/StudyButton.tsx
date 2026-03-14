"use client";
import { useState } from "react";

type StudyButtonProps = {
  onClick: () => Promise<void>;
  getDates: () => string[];
};

export default function StudyButton({ onClick, getDates }: StudyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  async function handleClick() {
    setLoading(true);
    setMessage(null);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split("T")[0];

    const dates = getDates();

    if (dates.includes(todayStr)) {
      setIsError(true);
      setMessage("You have already marked today.");
      setLoading(false);
      return;
    }

    const newDates = [...dates, todayStr];
    localStorage.setItem("studyDates", JSON.stringify(newDates));

    const res = await fetch("/api/study", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dates: newDates }),
    });
    const data = await res.json();

    setIsError(false);
    setMessage("Study session recorded!");
    await onClick();
    setLoading(false);
  }

  return (
    <div className="w-full max-w-md">
      <button
        onClick={handleClick}
        disabled={loading}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Marking..." : "Mark Study"}
      </button>

      {message && (
        <p className={`mt-3 text-sm text-center font-medium ${isError ? "text-red-500" : "text-green-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
}