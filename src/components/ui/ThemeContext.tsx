import React, { createContext, useState, useEffect, useContext } from 'react';

// Context için tip tanımları
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Varsayılan değer
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider bileşeni
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // localStorage'dan tema ayarını al, yoksa false (aydınlık mod) varsayılan
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Tema değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
    // Tema değiştiğinde body sınıfını güncelle (isteğe bağlı)
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};