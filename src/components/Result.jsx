import logo from '../assets/logo.svg';
import getQuizResult from '../utils/getQuizResult.js';
import { RESULT_CIRCLE_RADIUS } from '../constants/quiz.js';
import { useEffect, useState } from 'react';

import { QUESTIONS_ENGLISH, QUESTIONS_URDU } from '../data/questions.js';
import { use } from 'react';
import { LanguageContext } from '../store/language-context.jsx';

function Result({ answers, onRetake }) {
  const { language } = use(LanguageContext);

  const QUESTIONS = language === 'english' ? QUESTIONS_ENGLISH : QUESTIONS_URDU;

  // Convert the submitted answer IDs into display data for the result screen.
  const { correctAnswers, totalAnswers, percentCorrect, tier, skippedAnswers } =
    getQuizResult(answers, QUESTIONS);

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
        {/* Result header */}
        {/* <div className="mb-7 flex items-center justify-between">
          <img src={logo} alt="logo image" className="w-20" />
          <p className="rounded-full bg-accent/10 px-2 py-1 text-xs font-bold text-accent">
            Completed!
          </p>
        </div> */}

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
          <p className="w-10/12 text-center text-sm text-text-muted">
            {tier.blurb}
          </p>
        </div>

        {/*<div className="flex mt-5 gap-1">*/}
        {/*  <div className="flex flex-col bg-accent/10 px-3 py-2 justify-center items-center rounded-xl gap-0 w-1/3">*/}
        {/*    <span className="text-base font-bold text-accent">*/}
        {/*      {correctAnswers}*/}
        {/*    </span>*/}
        {/*    <span className="text-sm text-text-muted font-medium">Correct</span>*/}
        {/*  </div>{' '}*/}
        {/*  <div className="flex flex-col bg-accent/10 px-3 py-2 justify-center items-center rounded-xl gap-0 w-1/3">*/}
        {/*    <span className="text-base font-bold text-accent">*/}
        {/*      {skippedAnswers}*/}
        {/*    </span>*/}
        {/*    <span className="text-sm text-text-muted font-medium">Skipped</span>*/}
        {/*  </div>{' '}*/}
        {/*  <div className="flex flex-col bg-accent/10 px-3 py-2 justify-center items-center rounded-xl gap-0 w-1/3">*/}
        {/*    <span className="text-base font-bold text-accent">*/}
        {/*      {totalAnswers - (correctAnswers + skippedAnswers)}*/}
        {/*    </span>*/}
        {/*    <span className="text-sm text-text-muted font-medium">Wrong</span>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="mt-5 w-full flex gap-1.5">
          <button
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent p-3 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.98]"
            onClick={onRetake}
          >
            Retake Quiz
          </button>
          <button
            className="flex w-full items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium text-black border border-border transition hover:opacity-90 active:scale-[0.98]"
            onClick={onRetake}
          >
            Show Results
          </button>
        </div>
      </div>
    </main>
  );
}

export default Result;
