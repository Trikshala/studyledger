type HistoryListProps = {
  entries: string[];
};

export default function HistoryList({ entries }: HistoryListProps) {
  if (entries.length === 0) {
    return (
      <p className="text-red-400 text-sm text-center py-6">
        No study sessions recorded yet.
      </p>
    );
  }

  return (
    <ul className="w-full max-w-md flex flex-col gap-2">
      {entries.map((date, i) => (
        <li
          key={i}
          className="bg-gray-900 border border-yellow-500 rounded-lg px-4 py-3 text-yellow-400 text-sm shadow-sm"
        >
          📅{" "}
          {new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </li>
      ))}
    </ul>
  );
}