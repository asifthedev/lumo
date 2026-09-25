export default function shuffleAnswers(answers) {
  const shuffledAnswers = [...answers];

  return shuffledAnswers.sort(() => Math.random() - 0.5);
}
