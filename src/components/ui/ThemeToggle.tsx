import React from 'react';
import styles from './ThemeToggle.module.css';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      className={`${styles.themeToggle} ${darkMode ? styles['dark-mode'] : ''}`}
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Gündüz Moduna Geç' : 'Gece Moduna Geç'}
    >
      {darkMode ? '🌞 Gündüz Modu' : '🌙 Gece Modu'}
    </button>
  );
};

export default ThemeToggle;