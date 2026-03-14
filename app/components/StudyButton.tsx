"use client";
import { useState } from "react";

type StudyButtonProps = {
  onClick: () => Promise<void>;
};

export default function StudyButton({ onClick }: StudyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  async function handleClick() {
    setLoading(true);
    setMessage(null);

    const res = await fetch("/api/study", { method: "POST" });
    const data = await res.json();

    if (!res.ok) {
      setIsError(true);
      setMessage(data.message);
    } else {
      setIsError(false);
      setMessage(data.message);
      await onClick();
    }

    setLoading(false);
  }

  return (
    <div className="w-full max-w-md">
      <button
        onClick={handleClick}
        disabled={loading}
        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Marking..." : "Mark Study"}
      </button>

      {message && (
        <p
          className={`mt-3 text-sm text-center font-medium ${
            isError ? "text-red-500" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}