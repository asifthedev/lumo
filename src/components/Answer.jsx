import { useState } from 'react';
import shuffleAnswers from '../utils/shuffleAnswers.js';

function getLetter(index) {
  return String.fromCharCode(65 + index);
}

function Answer({ answers, answerState, handleSelectAnswer }) {
  // Keep the answer order stable while the question is being displayed.
  const [shuffledAnswers] = useState(() => shuffleAnswers(answers));

  return (
    <ul className={'mt-3 flex flex-col gap-2'}>
      {shuffledAnswers.map((answer, index) => {
        const isSelected = answer === answerState.selectedAnswer;
        const isPending = isSelected && answerState.isCorrect === null;
        const isCorrectSelection = isSelected && answerState.isCorrect === true;
        const isWrongSelection = isSelected && answerState.isCorrect === false;

        const answerClassName = `group flex h-full w-full cursor-pointer items-center gap-2 rounded-lg border-[1.7px] px-2 py-5 hover:border-accent hover:bg-accent/10 disabled:text-gray-700 ${
          isPending ? 'border-accent bg-accent/10' : 'border-border'
        } ${isWrongSelection ? 'border-red-500 bg-red-100 text-red-500' : ''} ${
          isCorrectSelection
            ? 'border-green-700 bg-green-100 text-green-700'
            : ''
        }`;

        const letterClassName = `inline-block rounded border-[1.5px] px-2 font-bold group-hover:border-accent group-hover:bg-accent-soft group-hover:text-accent ${
          isPending
            ? 'border-accent bg-accent-soft text-accent'
            : 'border-border'
        } ${isWrongSelection ? 'border-red-500 bg-red-500 text-white' : ''} ${
          isCorrectSelection ? 'border-green-700 bg-green-700 text-white' : ''
        }`;

        return (
          <li key={answer} className="h-10 w-full">
            <button
              className={answerClassName}
              onClick={() => handleSelectAnswer(answer)}
              disabled={answerState.selectedAnswer !== ''}
            >
              <span className={letterClassName}>{getLetter(index)}</span>

              <span>{answer}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answer;
