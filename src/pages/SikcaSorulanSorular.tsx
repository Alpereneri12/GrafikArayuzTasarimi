import React, { useEffect, useState } from "react";
import styles from "./SikcaSorulanSorular.module.css";
import Footer from "../components/ui/footer";
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ui/ThemeToggle';
import { FaQuestionCircle, FaUsers, FaUtensils } from "react-icons/fa";
import { MessageSquare } from "lucide-react";
import { useTheme } from '../components/ui/ThemeContext';

const SikcaSorulanSorular: React.FC = () => {
  const { darkMode } = useTheme();
  const [loading, setIsLoading] = useState(true);
  const [acikIndex, setAcikIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAcikIndex(acikIndex === index ? null : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const faqList = [
    {
      soru: "Evde servis hizmetiniz var mı?",
      cevap: "Şu anda sadece dükkanımızda yerinde servis yapıyoruz, evlere servisimiz bulunmamaktadır.",
    },
    {
      soru: "Rezervasyon yapabilir miyim?",
      cevap: "Evet, telefonla rezervasyon kabul ediyoruz. Lütfen arayarak yerinizi ayırtın.",
    },
    {
      soru: "Çalışma saatleriniz nedir?",
      cevap: "Hafta içi ve hafta sonu 11:00 - 21:00 saatleri arasında hizmet vermekteyiz.",
    },
    {
      soru: "Menünüz sabit midir?",
      cevap: "Evet, menümüzde değişiklik yapılmamaktadır, klasik ev yemeklerimizi bulabilirsiniz.",
    },
    {
      soru: "Ödeme seçenekleriniz nelerdir?",
      cevap: "Nakit ve kredi kartı ile ödeme kabul ediyoruz.",
    },
    {
      soru: "Toplu sipariş alıyor musunuz?",
      cevap: "Evet, özel günler ve etkinlikler için toplu sipariş kabul etmekteyiz. Lütfen önceden iletişime geçin.",
    },
    {
      soru: "Çocuklar için özel menü var mı?",
      cevap: "Şu anda özel bir çocuk menümüz bulunmamaktadır.",
    },
    {
      soru: "Gıda alerjisi olanlar için özel önlem alıyor musunuz?",
      cevap: "Evet, alerjen bilgileri için lütfen personelimize danışınız.",
    },
    {
      soru: "Yemeklerinizi nasıl hazırlıyorsunuz?",
      cevap: "Tüm yemeklerimiz günlük taze malzemelerle, ev yapımı tariflere uygun olarak hazırlanır.",
    },
    {
      soru: "Siparişimi değiştirebilir veya iptal edebilir miyim?",
      cevap: "Evet, siparişinizi dükkanı arayarak değiştirebilir veya iptal edebilirsiniz; lütfen en kısa sürede iletişime geçin.",
    },
  ];

  if (loading) {
    return (
      <div className={`${styles.loader} ${loading ? '' : styles['fade-out']}`}>
        <img src="/logo.png" alt="Adı Kuru Pilav Logo" className={styles.logo} />
        <div className={styles.spinner}></div>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className={`${styles.faqContainer} ${darkMode ? styles['dark-mode'] : styles['light-mode']}`}>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>

      <section className={styles.hero}>
        <h1>Sıkça Sorulan Sorular</h1>
        <div className={styles.buttonGroup}>
          <Link to="/" className={styles.homeButton}>
            Ana Sayfa
          </Link>
          <Link to="/menu" className={styles.homeButton}>                 
            <FaUtensils className={styles.icon} /> Menüyü Gör
          </Link>
          <Link to="/about" className={styles.homeButton}>
            <FaUsers className={styles.icon} /> Bizi Tanıyın
          </Link>
          <Link to="/contact" className={styles.homeButton}>
            <MessageSquare className={styles.icon} /> İletişim
          </Link>
        </div>
      </section>

      <div>
        {faqList.map((item, index) => (
          <div key={index} className={styles.faqItem} onClick={() => toggle(index)}>
            <h3 className={styles.faqQuestion}>{item.soru}</h3>
            {acikIndex === index && <p className={`${styles.faqAnswer} ${acikIndex === index ? styles.show : ''}`}>{item.cevap}</p>}
          </div>
        ))}
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default SikcaSorulanSorular;