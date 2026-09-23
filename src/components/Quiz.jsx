import { useCallback, useState } from 'react';

import { QUESTIONS_URDU } from '../data/questions.js';
import Question from './Question.jsx';
import Result from './Result.jsx';

function Quiz() {
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
    return <Result answers={userAnswers} onRetake={onRetakeQuiz} />;
  }

  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center p-2">
      <Question
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onTimerExpire={onTimerExpire}
      />
    </main>
  );
}

export default Quiz;
