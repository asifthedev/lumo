import getQuizResult from '../utils/getQuizResult.js';
import { RESULT_CIRCLE_RADIUS } from '../constants/quiz.js';
import { useEffect, useState } from 'react';

import { QUESTIONS_ENGLISH, QUESTIONS_URDU } from '../data/questions.js';
import { use } from 'react';
import { LanguageContext } from '../store/language-context.jsx';
import { Link } from 'react-router';

function QuizResults({ answers, onRetake }) {
  const { language } = use(LanguageContext);

  const QUESTIONS = language === 'english' ? QUESTIONS_ENGLISH : QUESTIONS_URDU;

  // Convert the submitted answer IDs into display data for the result screen.
  const { correctAnswers, totalAnswers, percentCorrect, tier } = getQuizResult(
    answers,
    QUESTIONS,
  );

  const radius = RESULT_CIRCLE_RADIUS;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  // Animate the progress ring from empty to the final score.
  useEffect(() => {
    const targetOffset = circumference - (circumference * percentCorrect) / 100;
    const raf = requestAnimationFrame(() => setOffset(targetOffset));
    return () => cancelAnimationFrame(raf);
  }, [circumference, percentCorrect]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-3">
      <div className="quiz-container h-fit w-full max-w-110 rounded-3xl border border-border bg-card p-8">
        <div className="relative h-36 w-full">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              className="stroke-track"
              strokeWidth="9"
            />

            <circle
              cx="50"
              cy="50"
              r={radius}
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
              {correctAnswers}/{totalAnswers}
            </span>
            <span className="text-xs font-semibold text-text-muted">
              {percentCorrect}%
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center gap-0.5">
          <img src={tier.image} alt="" className="w-20" />
          <p className="text-[19px] font-bold">{tier.title}</p>
          <p className="w-10/12 text-center text-sm text-text-muted font-medium mt-0.5">
            {tier.blurb}
          </p>
        </div>

        <div className="mt-5 w-full flex gap-1.5">
          <button
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent p-3 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.98]"
            onClick={onRetake}
          >
            Retake Quiz
          </button>
          <Link
            to={'/summary'}
            state={{ userAnswers: answers, totalAnswers, correctAnswers }}
            className="flex w-full items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium text-black border border-border transition hover:opacity-90 active:scale-[0.98]"
          >
            Show Results
          </Link>
        </div>
      </div>
    </main>
  );
}

export default QuizResults;
