type StreakCardProps = {
  currentStreak: number;
  lastStudyDate: string | null;
  totalDays: number;
};

export default function StreakCard({
  currentStreak,
  lastStudyDate,
  totalDays,
}: StreakCardProps) {
  const formattedDate = lastStudyDate
    ? new Date(lastStudyDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Never";

  return (
    <div className="bg-gray-900 border border-yellow-500 rounded-xl p-6 shadow-sm w-full max-w-md">
      <h2 className="text-lg font-semibold text-yellow-500 mb-4">Your Progress</h2>

      <div className="flex flex-col gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <p className="text-5xl font-bold text-yellow-400">{currentStreak}</p>
          <p className="text-sm font-semibold text-gray-400 mt-1">Current Streak 🔥</p>
        </div>

        <div className="flex gap-3">
          <div className="flex-1 bg-gray-800 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-yellow-400">{totalDays}</p>
            <p className="text-xs font-semibold text-gray-400 mt-1">Total Days</p>
          </div>
          <div className="flex-1 bg-gray-800 rounded-lg p-3 text-center">
            <p className="text-sm font-bold text-yellow-400 mt-2">{formattedDate}</p>
            <p className="text-xs font-semibold text-gray-400 mt-2">Last Studied</p>
          </div>
        </div>
      </div>
    </div>
  );
}