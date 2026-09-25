# Lumo

Lumo is a simple Quiz Web App about relationship.

## Demo

- [Live Demo](https://lumo-asifthedev.vercel.app/)

[![Watch the Lumo video demo](https://img.youtube.com/vi/GD31iz_UsWE/maxresdefault.jpg)](https://www.youtube.com/watch?v=GD31iz_UsWE)

Click the preview above to watch the video demo on YouTube.

## Features

- Choose between English and Roman Urdu.
- Answer relationship-focused questions at your own pace.
- Get immediate visual feedback after selecting an answer.
- View your total score and percentage at the end of the quiz.
- Receive a relationship-awareness result based on your performance.
- Review every question with the selected and correct answers.
- Retake the quiz whenever you want to try for a better score.
- Responsive layout for comfortable use across screen sizes.

## User Flow

1. Start the relationship quiz.
2. Select English or Roman Urdu.
3. Read each question and choose an answer.
4. Review the feedback before continuing.
5. See your final score and result.
6. Explore the question-by-question answer breakdown.

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

Clone the repository, open the project directory, and install the dependencies:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the application.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Check the project with Oxlint. |

## Project Structure

```text
src/
├── components/
│   ├── AnswerFeedbackTimer.jsx
│   ├── AnswerOptions.jsx
│   ├── AnswerReviewList.jsx
│   ├── AnswerSummary.jsx
│   ├── LanguageSelection.jsx
│   ├── QuizLanding.jsx
│   ├── QuizQuestion.jsx
│   ├── QuizResults.jsx
│   └── QuizSession.jsx
├── constants/
├── data/
├── store/
├── utils/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

