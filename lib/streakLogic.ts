export function calculateStreak(dates: string[]): number {
  if (dates.length === 0) return 0;

  const sorted = [...dates].sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const mostRecent = new Date(sorted[0]);
  mostRecent.setHours(0, 0, 0, 0);

  const diffFromToday =
    (today.getTime() - mostRecent.getTime()) / (1000 * 60 * 60 * 24);

  if (diffFromToday > 1) return 0;

  let streak = 1;
  for (let i = 0; i < sorted.length - 1; i++) {
    const current = new Date(sorted[i]);
    const next = new Date(sorted[i + 1]);
    current.setHours(0, 0, 0, 0);
    next.setHours(0, 0, 0, 0);
    const diff =
      (current.getTime() - next.getTime()) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}