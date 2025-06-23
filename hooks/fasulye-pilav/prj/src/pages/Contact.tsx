import React, { useState, useRef, useEffect } from 'react';
import styles from './Contact.module.css';
import Footer from '../components/ui/footer';
import ThemeToggle from '../components/ui/ThemeToggle';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaQuestionCircle, FaUsers, FaUtensils, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ui/ThemeContext';

const Contact: React.FC = () => {
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Formda verileri almak için useRef kullandık yani sadece useState değil useRef de kullandık.
    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const message = messageRef.current?.value.trim();

    if (!name || !email || !message) {
      alert("Lütfen tüm alanları eksiksiz doldurun.");
      return;
    }

    console.log("Form verileri:", { name, email, message });

    // Form başarıyla gönderildi
    setSuccess(true);

    // Alanları temizle
    if (nameRef.current) nameRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
    if (messageRef.current) messageRef.current.value = '';

    // Başarı mesajını 5 saniye sonra kaldır
    setTimeout(() => setSuccess(false), 5000);
  };

  if (loading) {
    return (
      <div className={styles.loader}>
        <img src="/logo.png" alt="Adı Kuru Pilav Logo" className={styles.logo} />
        <div className={styles.spinner}></div>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  const containerClass = `${styles['contact-container']} ${darkMode ? styles['dark-mode'] : styles['light-mode']}`;

  return (
    <div className={containerClass}>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>

      <section className={styles.hero}>
        <h1>İletişim</h1>
        <p className={styles.tagline}>Bize ulaşın, lezzetli yemeklerimizle tanışın!</p>
        <div className={styles.buttonGroup}>
          <Link to="/" className={styles.homeButton}>Ana Sayfa</Link>
          <Link to="/menu" className={styles.homeButton}><FaUtensils className={styles.icon} /> Menüyü Gör</Link>
          <Link to="/about" className={styles.homeButton}><FaUsers className={styles.icon} /> Bizi Tanıyın</Link>
          <Link to="/sorular" className={styles.homeButton}><FaQuestionCircle className={styles.icon} /> Sıkça Sorulan Sorular</Link>
        </div>
      </section>

      <section className={styles.contactInfo}>
        <h2>Bize Ulaşın</h2>
        <ul className={styles.infoList}>
          <li>
            <p>Telefon:
              <a className={styles.socialLink} href="tel:+905454588980" target="_blank" rel="noopener noreferrer">
                <FaPhone />
              </a>
            </p>
          </li>
          <li>
            <p>Instagram:
              <a href="https://www.instagram.com/adikurupilav/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram />
              </a>
            </p>
          </li>
          <li><FaEnvelope className={styles.icon} /> <span>info@adikurupilav.com</span></li>
          <li><FaMapMarkerAlt className={styles.icon} /> <span>Gündoğan, Şht. Uğur Öztop Cd. No:40, 48965 Bodrum/Muğla</span></li>
        </ul>
      </section>
      
      <section className={styles.contactForm}>
        <h2>Mesaj Gönderin</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ad Soyad</label>
            <input type="text" id="name" name="name" required className={styles.input} ref={nameRef} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-posta</label>
            <input type="email" id="email" name="email" required className={styles.input} ref={emailRef} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mesajınız</label>
            <textarea id="message" name="message" rows={5} required className={styles.textarea} ref={messageRef}></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Gönder</button>
        </form>

        {success && (
          <div className={styles.successMessage}>
            Mesajınız başarıyla gönderildi. Teşekkür ederiz!
          </div>
        )}
      </section>

      <section className={styles.map}>
        <h2>Bizi Bulun</h2>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.305!2d27.3401646!3d37.1301473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be7038251d7897%3A0xffd721638acae8d9!2zR8O8bmRvxJ9hbiwgxZ5odC4gVcCndxVyIMOWenRvcCBDZC4gTm86NDAsIDQ4OTY1IEJvZHJ1bS9NdcSfbLE!5e0!3m2!1str!2str!4v1698765432109!5m2!1str!2str"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Adı Kuru Pilav Konum"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Contact;
