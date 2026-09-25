import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import QuizSession from './components/QuizSession.jsx';
import LanguageSelection from './components/LanguageSelection.jsx';
import { LanguageContextProvider } from './store/language-context.jsx';
import QuizResults from './components/QuizResults.jsx';
import AnswerSummary from './components/AnswerSummary.jsx';
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/quiz', element: <QuizSession /> },
  { path: '/language', element: <LanguageSelection /> },
  { path: '/summary', element: <AnswerSummary /> },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContextProvider>
      <RouterProvider router={router} />
    </LanguageContextProvider>
  </StrictMode>,
);
