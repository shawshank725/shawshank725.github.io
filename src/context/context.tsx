import { createContext, useContext, useState, type ReactNode } from 'react';

interface DarkModeContextType {
  darkModeOn: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkModeOn, setDarkModeOn] = useState(false);

  const toggleDarkMode = () => {
    console.log("dark mode is: " + darkModeOn);
    setDarkModeOn(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkModeOn, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within DarkModeProvider');
  }
  return context;
};