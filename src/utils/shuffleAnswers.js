export default function shuffleAnswers(answers) {
  const shuffledAnswers = [...answers];

  for (let index = shuffledAnswers.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledAnswers[index], shuffledAnswers[randomIndex]] = [
      shuffledAnswers[randomIndex],
      shuffledAnswers[index],
    ];
  }

  return shuffledAnswers;
}
