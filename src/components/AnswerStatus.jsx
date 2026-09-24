import { use } from 'react';
import { LanguageContext } from '../store/language-context.jsx';
import { QUESTIONS_ENGLISH, QUESTIONS_URDU } from '../data/questions.js';
import { CheckIcon, CircleCheck, X } from 'lucide-react';

function AnswerStatus({ userAnswers }) {
  const { language } = use(LanguageContext);
  const QUESTIONS = language === 'english' ? QUESTIONS_ENGLISH : QUESTIONS_URDU;

  return (
    <ul className={'mt-8 flex flex-col gap-4'}>
      {userAnswers.map((answer, index) => {
        const correctAnswer = QUESTIONS[index].answers[0];
        let answerStatus = '';

        if (answer === correctAnswer) {
          answerStatus = 'correct';
        } else if (answer === null) {
          answerStatus = 'skipped';
        } else {
          answerStatus = 'wrong';
        }

        return (
          <li
            className={
              'flex gap-3 bg-white border border-border p-4 rounded-2xl'
            }
          >
            <p
              className={
                'bg-[#eceae5] h-6 w-6 flex items-center justify-center rounded-md text-text-muted font-medium text-sm'
              }
            >
              {index + 1}
            </p>
            <div className={'flex-1 flex flex-col gap-3'}>
              <h3 className={'flex justify-between font-semibold'}>
                <span>{QUESTIONS[index].text}</span>
                <CircleCheck color={'#15803d'} size={20} />
              </h3>

              {/*Answer is wrong*/}
              {answerStatus === 'wrong' && (
                <p
                  className={'bg-red-50 flex items-center p-2 rounded-lg gap-1'}
                >
                  {' '}
                  <X color={'#e7000b'} size={16} />{' '}
                  <span className={'text-red-600 font-medium text-[13px]'}>
                    {answer}
                  </span>
                </p>
              )}

              {/*Answer is skipped*/}
              {answerStatus === 'skipped' && (
                <p
                  className={
                    'bg-[#eceae5] flex items-center p-2 rounded-lg gap-1'
                  }
                >
                  <span className={'text-text-muted font-medium text-sm '}>
                    <span className={'text-text-muted font-bold text-[13px]'}>
                      SKIPPED{' '}
                    </span>
                    You didn't answer this one
                  </span>
                </p>
              )}

              <p
                className={
                  'bg-[#e9f7ee] flex items-center p-2 rounded-lg gap-1'
                }
              >
                {' '}
                <CheckIcon color={'#15803d'} size={16} />{' '}
                <span className={'text-[#15803d] font-medium text-[13px]'}>
                  {correctAnswer}
                </span>
              </p>
            </div>
            <span></span>
          </li>
        );
      })}
    </ul>
  );
}

export default AnswerStatus;
