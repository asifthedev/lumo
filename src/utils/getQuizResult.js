import { RESULT_TIERS } from '../constants/quiz.js';

export default function getQuizResult(userAnswers, questions) {
  const totalAnswers = questions.length;

  const correctAnswers = userAnswers.reduce((total, answer, questionIndex) => {
    return total + (answer === questions[questionIndex]?.answers[0] ? 1 : 0);
  }, 0);

  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;

  const percentCorrect = totalAnswers
    ? Math.round((correctAnswers / totalAnswers) * 100)
    : 0;

  const tier =
    RESULT_TIERS.find((resultTier) => percentCorrect / 100 >= resultTier.min) ??
    RESULT_TIERS.at(-1);

  return {
    correctAnswers,
    skippedAnswers,
    totalAnswers,
    percentCorrect,
    tier,
  };
}
