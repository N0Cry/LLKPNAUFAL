// src/contexts/LanguageContext.jsx
import { createContext, useState, useContext } from 'react';

// 1. Buat context
const LanguageContext = createContext();

// 2. Buat provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('id'); // 'id' = bahasa Indonesia

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'id' ? 'en' : 'id'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Buat custom hook supaya gampang pakai di komponen
export function useLanguage() {
  return useContext(LanguageContext);
}
