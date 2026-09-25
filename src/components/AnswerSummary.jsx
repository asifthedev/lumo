import { Link, useLocation } from 'react-router';
import AnswerReviewList from './AnswerReviewList.jsx';


function AnswerSummary() {
  const location = useLocation();
  const answers = location.state?.userAnswers;
  const totalAnswers = location.state?.totalAnswers;
  const correctAnswers = location.state?.correctAnswers;

  console.log(answers);

  return (
    <main className="flex w-full flex-col items-center justify-center p-3 pt-16 pb-10">
      <div className="quiz-container h-fit w-full max-w-lg rounded-3xl">
        <div className={'flex justify-between items-center'}>
          <section>
            <h2 className={'font-bold text-2xl'}>Your Answers</h2>
            <p className={'text-[13px] text-text-muted'}>
              Question by question breakdown
            </p>
          </section>
          <p className="rounded-full bg-indigo-500/5 px-3 py-1.5 text-sm font-bold text-accent">
            {correctAnswers}/{totalAnswers} correct
          </p>
        </div>

        <AnswerReviewList userAnswers={answers} />

        <Link
          to={'/'}
          className={
            'w-full flex justify-center items-center rounded-2xl bg-accent py-3.5 font-bold text-white transition hover:opacity-90 active:scale-[0.98] text-[15px] mt-5'
          }
        >
          Retake Quiz
        </Link>
      </div>
    </main>
  );
}

export default AnswerSummary;
