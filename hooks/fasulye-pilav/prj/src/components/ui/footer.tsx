import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const footerClass = `${styles.footer} ${darkMode ? styles['dark-mode'] : ''}`;

  return (
    <footer className={footerClass}>
      <p>

      </p>
      <p>© 2025 Adı Kuru Pilav - Tüm Hakları Saklıdır</p>
    </footer>
  );
};

export default Footer;