import trophy from '../assets/trophy.svg';
import medal from '../assets/medal.svg';
import flower from '../assets/flower.svg';

// Object.freeze() is used to make object immutable

export const QUIZ_TIMINGS = Object.freeze({
  question: 20000,
  answerPending: 1000,
  answerFeedback: 3000,
});

export const RESULT_TIERS = Object.freeze([
  {
    min: 0.8,
    image: trophy,
    title: 'Relationship Guru!',
    blurb: "You've got healthy relationships figured out.",
  },
  {
    min: 0.5,
    image: medal,
    title: 'Growing Strong',
    blurb: 'Good instincts - a little more practice and you are golden.',
  },
  {
    min: 0,
    image: flower,
    title: 'Room to Grow',
    blurb:
      "Every relationship is a learning curve. Here's a great place to start.",
  },
]);

export const RESULT_CIRCLE_RADIUS = 45;
