import React, { useEffect, useState } from 'react';
import styles from './About.module.css';
import { Link } from 'react-router-dom';
import Footer from '../components/ui/footer';
import ThemeToggle from '../components/ui/ThemeToggle';
import { FaQuestionCircle, FaUsers, FaUtensils } from 'react-icons/fa';
import { MessageSquare } from 'lucide-react';
import { useTheme } from '../components/ui/ThemeContext';

const About: React.FC = () => {
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
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

  return (
    <div className={`${styles['about-container']} ${darkMode ? styles['dark-mode'] : styles['light-mode']}`}>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>

      <section className={styles.hero}>
        <h1>Kuru Pilav Bir Sanatsa, Biz Ustasını Biliyoruz!</h1>
        <div className={styles.buttonGroup}>
          <Link to="/menu" className={styles.homeButton}>                 
            <FaUtensils className={styles.icon} /> Menüyü Gör
          </Link>
          <Link to="/" className={styles.homeButton}>
            Ana Sayfa
          </Link>
          <Link to="/contact" className={styles.homeButton}>
            <MessageSquare className={styles.icon} /> İletişim
          </Link>
          <Link to="/sorular" className={styles.homeButton}>
            <FaQuestionCircle className={styles.icon} /> Sıkça Sorulan Sorular
          </Link>
        </div>
      </section>

      <section className={styles.team}>
        <h2>Biz Kimiz?</h2>
        <p>
          Serkan Samur, 21 yıllık aşçılık geçmişiyle Türkiye’nin dört bir yanında, gelenekselden moderne uzanan birçok mutfakta görev aldı. Bu süreçte sadece yemek yapmayı değil, aynı zamanda lezzetlerin ardındaki kültürü, emeği ve ustalığı da derinlemesine öğrendi. Edindiği bu birikimle artık kendi mutfağını kurma vaktinin geldiğini hissetti.
          Uzun yıllar boyunca kazandığı deneyimi, tutkusu ve lezzet anlayışını bir araya getirerek “Adı Kuru Pilav” markasını kurdu. Serkan Usta'nın amacı sadece kuru fasulye ve pilav sunmak değil; bu geleneksel yemeği özenle seçilmiş malzemeler, usta işi dokunuşlar ve samimi bir ortamla birleştirerek Bodrum’da yepyeni bir lezzet durağı yaratmaktı.
          Bugün “Adı Kuru Pilav”, sadece bir esnaf lokantası değil; geçmişin tatlarıyla bugünün sunumunu bir araya getiren bir lezzet hikayesidir. Her tabakta bir anı, her kaşıkta bir ustalık gizlidir.
        </p>
      </section>

      <section className={styles.details}>
        <h2>Dükkanımız</h2>
        <p>Adı Kuru Pilav, Bodrum Gündoğan’da sıcak, samimi ve nostaljik atmosferiyle ev yemeklerini özleyenlerin vazgeçilmezi olmuştur.</p>

        <h2>Yemeklerimiz</h2>
        <p>Her gün taze malzemelerle hazırlanan kuru fasulye, pilav, turşu ve ayran dörtlüsüyle damaklarda iz bırakıyoruz.</p>
      </section>

      <section className={styles.chef}>
        <img src="/birincilik.png" alt="Serkan Samur" className={styles.image} />
        <h2>Birincilik Menüsü</h2>
        <p className={styles.p}>
          Enginar çorbasıyla açılış, steak tartarla zarafet, şeftali kebabıyla şaşırtan bir orta, pazı diblesiyle yöresel dokunuş, Van cacığıyla serinlik ve tavukgöğsü tatlısıyla kapanış...
          Bu tabaklar sadece mideleri değil, jüriyi de fethetti!
          Lezzetin ustası Serkan Samur, bu özel menüyle birincilik kürsüsüne adını altın harflerle yazdırdı.
        </p>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default About;