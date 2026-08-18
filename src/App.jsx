import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            75 Hard Tracker
          </h1>
          <p className="text-sm text-slate-400">
            Frontend Development Environment Initialized
          </p>
        </div>

        <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-4 text-left space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-300">
            <span>Framework:</span>
            <span className="font-mono text-cyan-400 font-semibold">React + Vite</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>Styling:</span>
            <span className="font-mono text-cyan-400 font-semibold">Tailwind CSS</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>Phase:</span>
            <span className="font-mono text-emerald-400 font-semibold">1.2 (Setup Verification)</span>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="w-full py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium text-sm transition-colors cursor-pointer shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
          >
            Test React Interactivity: {count} {count === 1 ? 'click' : 'clicks'}
          </button>
        </div>

        <p className="text-[11px] text-slate-500">
          Ready for Phase 2: Design System & Core UI Shell
        </p>
      </div>
    </main>
  );
}
