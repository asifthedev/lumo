import { useState } from 'react';
import Answer from './Answer.jsx';
import { QUESTIONS_ENGLISH, QUESTIONS_URDU } from '../data/questions.js';
import { use } from 'react';
import { LanguageContext } from '../store/language-context.jsx';
import QuestionTimer from './QuestionTimer.jsx';
import { QUIZ_TIMINGS } from '../constants/quiz.js';
import { CLOUDINARY_ASSETS } from '../constants/cloudinary.js';

const { logo } = CLOUDINARY_ASSETS;

function Question({ activeQuestionIndex, onSelectAnswer, onTimerExpire }) {
  const { language } = use(LanguageContext);

  const QUESTIONS = language === 'english' ? QUESTIONS_ENGLISH : QUESTIONS_URDU;

  let timerColor = 'var(--color-accent-gradient)';

  // Track the selected answer and the feedback phase for the current question.
  const [answerState, setAnswerState] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  let maxTime = QUIZ_TIMINGS.question;

  if (answerState.selectedAnswer && answerState.isCorrect === true) {
    maxTime = QUIZ_TIMINGS.answerFeedback;
    timerColor = 'var(--color-success)';
  }

  if (answerState.selectedAnswer && answerState.isCorrect === false) {
    maxTime = QUIZ_TIMINGS.answerFeedback;
    timerColor = 'var(--color-danger)';
  }

  const currentQuestion = QUESTIONS[activeQuestionIndex];
  const { answers, text: question } = currentQuestion;

  // Show feedback before moving to the next question.
  function handleSelectAnswer(answer) {
    setAnswerState({
      selectedAnswer: answer,
      isCorrect: answer === answers[0],
    });

    setTimeout(() => {
      onSelectAnswer(answer);
      setAnswerState({
        selectedAnswer: '',
        isCorrect: null,
      });
    }, 4000);
  }

  return (
    <div className="h-fit` w-full border border-border bg-card quiz-container max-w-2xl rounded-2xl p-5 sm:p-7 md:p-9">
      {/* Quiz header */}
      <div className="flex items-center justify-between mb-7 flex-wrap gap-3">
        <img src={logo} alt="logo image" className="w-16 sm:w-20" />
        <p className="text-xs font-medium text-text-muted sm:text-sm">
          Questions {activeQuestionIndex + 1} of {QUESTIONS.length}
        </p>
      </div>

      <div>
        {/* Time limit */}
        <div className="w-full h-2 rounded-full bg-track mb-9 overflow-hidden">
          {answerState.selectedAnswer && (
            <QuestionTimer key={maxTime} timeout={maxTime} color={timerColor} />
          )}
        </div>

        <div className="flex items-start gap-2">
          <span className="flex h-5 w-4 shrink-0 items-center justify-center rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-accent text-xs font-bold text-white">
            {activeQuestionIndex + 1}
          </span>

          <span className="text-base font-semibold text-text sm:text-base">
            {question}
          </span>
        </div>

        <Answer
          answers={answers}
          handleSelectAnswer={handleSelectAnswer}
          answerState={answerState}
        />
      </div>
    </div>
  );
}

export default Question;
