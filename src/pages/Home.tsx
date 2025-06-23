import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Footer from '../components/ui/footer';
import ThemeToggle from '../components/ui/ThemeToggle';
import { FaUtensils, FaUsers, FaQuestionCircle, FaCamera } from 'react-icons/fa';
import { MessageSquare } from 'lucide-react';
import { useTheme } from '../components/ui/ThemeContext';

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const Home: React.FC = () => {
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Quote | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch('https://api.npoint.io/e472ad697822468ffbc4')
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((json: Quote[]) => {
        const random = json[Math.floor(Math.random() * json.length)];
        setData(random);
      })
      .catch(console.error);
  }, []);

  if (loading) {
    return (
      <div className={styles.loader}>
        <img src="/logo.png" alt="Adı Kuru Pilav Logo" className={styles.logo} />
        <div className={styles.spinner}></div>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  const containerClass = `${styles['home-container']} ${darkMode ? styles['dark-mode'] : styles['light-mode']}`;

  return (
    <div className={containerClass}>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>

      <section className={styles.hero}>
        <h1>Adı Kuru Pilav</h1>
        {data && (
          <div className={styles.quoteWrapper}>
            <p className={styles.quote}>"{data.quote}"</p>
            <p className={styles.quoteAuthor}>– {data.author ?? 'Bilinmeyen'}</p>
          </div>
        )}
        <p className={styles.tagline}>Ev tarzı kuru fasulye ve pilavın lezzetli adresi.</p>
        <div className={styles.buttonGroup}>
          <Link to="/menu" className={styles.homeButton}>
            <FaUtensils className={styles.icon} /> Menüyü Gör
          </Link>
          <Link to="/about" className={styles.homeButton}>
            <FaUsers className={styles.icon} /> Bizi Tanıyın
          </Link>
          <Link to="/sorular" className={styles.homeButton}>
            <FaQuestionCircle className={styles.icon} /> Sıkça Sorulan Sorular
          </Link>
          <Link to="/contact" className={styles.homeButton}>
            <MessageSquare className={styles.icon} /> İletişim
          </Link>
        </div>
      </section>

      <section className={styles.about}>
        <h2>Hakkımızda</h2>
        <p>
          Adı Kuru Pilav, yıllardır süregelen lezzetiyle ev tarzı yemekleri sizlerle buluşturuyor. 
          Sadece kuru fasulye ve pilav değil; her öğün damak tadınıza hitap edecek doyurucu ve güvenilir yemeklerle hizmetinizdeyiz.
        </p>
      </section>

      <section className={styles.features}>
        <h2>Neden Bizi Tercih Etmelisiniz?</h2>
        <ul>
          <li>✔️ Günlük taze malzemeler</li>
          <li>✔️ Hızlı ve sıcak teslimat</li>
          <li>✔️ Ekonomik ve sabit fiyatlar</li>
        </ul>
      </section>

      <section className={styles.customerFeedback}>
        <h2>Müşteri Yorumları & Fotoğraflar</h2>
        <p>
          Siz de deneyimlerinizi ve yemek fotoğraflarınızı bizimle paylaşmak ister misiniz? 
          Aşağıdaki butona tıklayarak Google Form üzerinden kolayca yorum ve fotoğraf gönderebilirsiniz.
        </p>
        <a
          href="https://www.google.com/search?sca_esv=137efc39dde293df&sxsrf=AE3TifMHHvF7XOv_J_ckw9AEgRC1A3h8kg:1750636491070&uds=AOm0WdE2fekQnsyfYEw8JPYozOKzd_f15QZoBU42Y19e4AjyRibW6stTC92v5XETk7omoTiMRT2nlm9yLrY3Ai4-m2mf46SiKQ1X6r6xXn0j7yGkn0I5E-hoDPxLfUB03C7TcpjMf4vNglPxRzsifN4RctvYUeBtDw&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-ExnjEqaKl2ATYF3yknWA-sHNWTpstXcp3HzAXdPQlw05lfp9R7Jt43ea7ls_eDrpAT6-GlA%3D&q=Ad%C4%B1+Kuru+Pilav+Yorumlar&sa=X&ved=2ahUKEwi60riRnYaOAxXOGRAIHXcXNaIQ3PALegQITxAF&biw=1920&bih=945&dpr=1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.homeButton}
          style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <FaCamera /> Yorum & Fotoğraf Gönder
        </a>
        <div className={styles.imageSection}>
          <img src="/dükkan.webp" alt="Dükkan" className={styles.homeImage} />
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
