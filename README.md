# StudyLedger

A daily learning streak tracker built with Next.js, TypeScript, and Tailwind CSS.

## Live Demo
[https://studyledger.vercel.app](https://studyledger.vercel.app)

---

## Project Description
A simple webapp that he;ps students keep track of their daily learning habits and stay consistent. Students can mark that they studied today, view their current streak, and browse their full study history.

---

## Features
- Mark today as studied with one click
- Prevents duplicate entries for the same day
- View current streak, total days studied, and last study date
- Full study history page showing all past sessions
- Streak resets if a day is missed

---

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- API Routes
- In-memory storage

---

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/Trikshala/studyledger.git
cd studyledger
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser and go to
```
http://localhost:3000
```

---

## Project Structure
```
app/
  api/
    study/route.ts       → POST: mark today as studied
    streak/route.ts      → GET: returns streak, total days, last date
    history/route.ts     → GET: returns all study dates
  components/
    StreakCard.tsx       → displays streak stats
    StudyButton.tsx      → button to mark study session
    HistoryList.tsx      → list of all study dates
  history/
    page.tsx             → study history page
  page.tsx               → main dashboard

lib/
  streakLogic.ts         → calculates current streak
  storage.ts             → in-memory data storage
```

---

## How Streak Logic Works

1. When a student marks today as studied, today's date is saved
2. The streak is calculated by checking if study dates are consecutive
3. If the most recent study date is more than 1 day ago, streak resets to 0
4. If a day is skipped, the streak starts from 1 again on the next study session

```

---

## Deployment
This project is deployed on Vercel.

Steps taken:
1. Pushed code to GitHub
2. Connected repository to Vercel
3. Deployed with zero configuration