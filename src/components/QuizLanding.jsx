import { QUESTIONS_URDU } from '../data/questions.js';
import { Link } from 'react-router';
import { CLOUDINARY_ASSETS } from '../constants/cloudinary.js';

const { logo, girl, questions: questionsIcon, clock: clockIcon, arrowRight: arrowRightIcon } =
  CLOUDINARY_ASSETS;

function QuizLanding({ questionCount = QUESTIONS_URDU.length, duration = '2 min' }) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-3">
      <div className="h-fit w-full border border-border bg-card relative mx-auto max-w-sm rounded-3xl p-8 text-center">
        {/* Brand header */}
        <style>{`
          @keyframes bob {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-6px) rotate(-4deg); }
          }

          .bob { animation: bob 2.6s ease-in-out infinite; }

          @media (prefers-reduced-motion: reduce) {
            .bob { animation: none; }
          }
        `}</style>

        <div className="flex items-center justify-between mb-7">
          <img src={logo} alt="logo image" className="w-20" />
          <p className="rounded-full bg-accent/10 px-2 py-1 text-xs font-bold text-accent">
            Chill Pill
          </p>
        </div>

        {/* Intro illustration */}
        <div className="bob mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-2xl border border-border bg-surface-muted text-accent">
          <img src={girl} alt="" className="w-30" />
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight leading-snug mb-2.5">
          Relationships Quiz
        </h1>
        <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-[32ch] mx-auto font-medium">
          A quick check-in on love, trust, boundaries and red flags.
        </p>

        {/* Quiz metadata */}
        <div className="mb-7 flex justify-center gap-2.5">
          <span className="flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-text-muted">
            <img src={questionsIcon} alt="" width="14" height="14" />
            {questionCount} questions
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-text-muted">
            <img src={clockIcon} alt="" width="14" height="14" />
            {duration}
          </span>
        </div>

        {/* Start action */}
        <Link to="/language" className="block">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 font-bold text-white transition hover:opacity-90 active:scale-[0.98] text-[15px]">
            Let's start
            <img
              src={arrowRightIcon}
              alt=""
              width="16"
              height="16"
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </Link>
      </div>
    </main>
  );
}

export default QuizLanding;
