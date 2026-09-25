import { useCallback, useState } from 'react';

import { QUESTIONS_URDU } from '../data/questions.js';
import QuizQuestion from './QuizQuestion.jsx';
import QuizResults from './QuizResults.jsx';

function QuizSession() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizCompleted = activeQuestionIndex === QUESTIONS_URDU.length;

  // Store each answer in question order so the result can be calculated later.
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevState) => [...prevState, selectedAnswer]);
  }

  // A timed-out question is stored as null and counted as unanswered.
  const onTimerExpire = useCallback(() => {
    setUserAnswers((prevState) => [...prevState, null]);
  }, []);

  // Reset the answer list to start the quiz again.
  function onRetakeQuiz() {
    setUserAnswers([]);
  }

  if (isQuizCompleted) {
    return <QuizResults answers={userAnswers} onRetake={onRetakeQuiz} />;
  }

  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center p-2">
      <QuizQuestion
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onTimerExpire={onTimerExpire}
      />
    </main>
  );
}

export default QuizSession;
