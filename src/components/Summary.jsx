import { useEffect, useState } from 'react';
import { RESULT_CIRCLE_RADIUS, RESULT_TIERS } from '../constants/quiz.js';

function Summary({ score, total, onRetake }) {
  // Derive the score tier shown below the progress ring.
  const percent = Math.round((score / total) * 100);

  const tier =
    RESULT_TIERS.find((resultTier) => percent / 100 >= resultTier.min) ??
    RESULT_TIERS.at(-1);

  const circumference = 2 * Math.PI * RESULT_CIRCLE_RADIUS;

  const [offset, setOffset] = useState(circumference);

  // Animate the progress ring from empty to the final score.
  useEffect(() => {
    const target = circumference - (circumference * percent) / 100;
    const raf = requestAnimationFrame(() => setOffset(target));
    return () => cancelAnimationFrame(raf);
  }, [circumference, percent]);

  return (
    <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full mx-auto">
      {/* Summary header */}
      <div className="mb-8 flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-white text-xs">
          ✦
        </div>
        <span className="font-bold">Lumo</span>
        <span className="ml-auto text-xs font-semibold text-accent bg-accent-soft px-2.5 py-1 rounded-full">
          Complete!
        </span>
      </div>

      {/* Score and actions */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-36 h-36 mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r={RESULT_CIRCLE_RADIUS}
              fill="none"
              className="stroke-track"
              strokeWidth="9"
            />

            <circle
              cx="50"
              cy="50"
              r={RESULT_CIRCLE_RADIUS}
              fill="none"
              className="stroke-accent"
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                transition: 'stroke-dashoffset 900ms cubic-bezier(.2,.9,.3,1)',
              }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-extrabold">
              {score}/{total}
            </span>
            <span className="text-xs text-text-muted font-semibold">
              {percent}%
            </span>
          </div>
        </div>

        <div className="text-4xl mb-1">{tier.image}</div>
        <h2 className="text-xl font-extrabold mb-1">{tier.title}</h2>
        <p className="text-text-muted text-sm mb-6 max-w-[34ch]">
          {tier.blurb}
        </p>

        <div className="flex gap-3 w-full">
          <button
            onClick={onRetake}
            className="flex-1 bg-accent text-white font-bold rounded-xl py-3.5 hover:opacity-90 transition-opacity"
          >
            Retake Quiz
          </button>
          <button className="flex-1 border-[1.5px] border-border rounded-xl py-3.5 font-bold hover:border-accent transition-colors">
            Share Result
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
