import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Quiz from './components/Quiz.jsx';
import Language from './components/Language.jsx';
import { LanguageContextProvider } from './store/language-context.jsx';
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/quiz', element: <Quiz /> },
  { path: '/language', element: <Language /> },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContextProvider>
      <RouterProvider router={router} />
    </LanguageContextProvider>
  </StrictMode>,
);
