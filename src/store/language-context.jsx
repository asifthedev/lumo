import { createContext, useState } from 'react';

const LanguageContext = createContext({
  language: '',
});

function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState('');

  return (
    <LanguageContext value={{ language, setLanguage }}>
      {children}
    </LanguageContext>
  );
}

export { LanguageContextProvider, LanguageContext };
