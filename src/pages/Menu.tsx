import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import Footer from "../components/ui/footer";
import ThemeToggle from "../components/ui/ThemeToggle";
import ImageSlider from "../components/ui/ImageSlider";
import { FaQuestionCircle, FaUsers, FaUtensils } from "react-icons/fa";
import { MessageSquare } from "lucide-react";
import { useTheme } from '../components/ui/ThemeContext';

interface Meal {
  id: number;
  name: string;
  image: string[];
  price: string;
  steps: string[];
}

interface MealProps {
  id: number;
  name: string;
  steps: string[];
}

const images = [
  "/fasulye.jpg",
  "/pilav.jpg",
  "/patlıcan.webp",
  "/tavuklupilav.jpg",
  "/mantı.webp",
  "/tost.jpeg",
  "/hayrabolutatlisi.jpg",
  "/kazandibi.jpg",
];

const meals: Meal[] = [
  {
    id: 1,
    name: "Porsiyon Kuru Fasulye",
    image: ["/fasulye.jpg"],
    price: "190 TL",
    steps: ["İspir fasulyesi", "Kuru soğan", "Tereyağı", "Domates Salçası", "Tuz"],
  },
  {
    id: 2,
    name: "Porsiyon Tereyağlı Pirinç Pilavı",
    image: ["/pilav.jpg"],
    price: "110 TL",
    steps: ["Pirinç", "Erzurum Tereyağı"],
  },
  {
    id: 3,
    name: "Porsiyon Fırın Patlıcan Musakka",
    image: ["/patlıcan.webp"],
    price: "210 TL",
    steps: ["Patlıcan", "Dana Kıyma", "Soğan", "Domates salçası"],
  },
  {
    id: 4,
    name: "Kuru Fasulye + Pilav + Karışık Turşu(ikramımız)",
    image: ["/fasulye.jpg", "/pilav.jpg", "/tursu.jpg"],
    price: "300 TL",
    steps: ["İspir fasulyesi", "Kuru soğan", "Tereyağı", "Domates Salçası", "Pirinç", "Erzurum Tereyağı", "Tuz"],
  },
  {
    id: 5,
    name: "Tereyağlı Tavuklu Pirinç Pilavı + Karışık Turşu(ikramımız)",
    image: ["/tavuklupilav.jpg", "/tursu.jpg"],
    price: "180 TL",
    steps: ["Tavuk Göğsü", "Soğan", "Sarımsak", "Tereyağı", "Pirinç"],
  },
  {
    id: 6,
    name: "Tereyağlı Süzme Yoğurtlu Mantı + Karışık Turşu(ikramımız)",
    image: ["/mantı.webp", "/tursu.jpg"],
    price: "290 TL",
    steps: ["Tereyağ", "Sarımsaklı Yoğurt", "El Yapımı Mantı"],
  },
  {
    id: 7,
    name: "Fırın Patlıcan Musakka+ Tereyağlı Pirinç Pilavı +Karışık Turşu(ikramımız)",
    image: ["/patlıcan.webp", "/pilav.jpg", "/tursu.jpg"],
    price: "320 TL",
    steps: ["Patlıcan", "Dana Kıyma", "Soğan", "Domates salçası"],
  },
  {
    id: 8,
    name: "3/4 Ekmek Tost Çeşitleri +Karışık Turşu(ikramımız)",
    image: ["/tost.jpeg", "/tursu.jpg"],
    price: "250 TL",
    steps: ["Kangal Sucuk-Kaşar", "Sade Kaşar", "Ayvalık Tost"],
  },
  {
    id: 9,
    name: "Tatlı Çeşitlerimiz",
    image: ["/hayrabolutatlisi.jpg", "/kazandibi.jpg"],
    price: "160 TL",
    steps: ["Meşhur Hayrabolu Peynir Tatlısı", "Kazandibi"],
  },
];

const mealProps: MealProps[] = [
  {
    id: 10,
    name: "Ekstralar ve İçeceklerimiz",
    steps: [
      "Karışık Turşu  50 TL",
      "Ayran  50 TL",
      "Yoğurt  60 TL",
      "Soda  50 TL",
      "Su  25 TL",
      "Bodrum Mandalina  70 TL",
      "Kola  80 TL",
      "Türk Kahvesi  50 TL",
    ],
  },
];

const Menu: React.FC = () => {
  const { darkMode } = useTheme();
  const [openImage, setOpenImage] = useState<string[] | null>(null);
  const [openStepsId, setOpenStepsId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSteps = (id: number) => {
    setOpenStepsId(openStepsId === id ? null : id);
  };

  if (loading) {
    return (
      <div className={`${styles.loader} ${loading ? '' : styles.fadeOut}`}>
        <img src="/logo.png" alt="Adı Kuru Pilav Logo" className={styles.logo} />
        <div className={styles.spinner}></div>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className={`${styles.menuContainer} ${darkMode ? styles['dark-mode'] : styles['light-mode']}`}>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>

      <section className={styles.hero}>
        <div>
          <h2 className={styles.heroTitle}>Menümüz</h2>
          <ImageSlider images={images} interval={4000} />
        </div>
        <div className={styles.buttonGroup}>
          <Link to="/" className={styles.homeButton}>
            Ana Sayfa
          </Link>
          <Link to="/about" className={styles.homeButton}>
            <FaUsers className={styles.icon} /> Bizi Tanıyın
          </Link>
          <Link to="/contact" className={styles.homeButton}>
            <MessageSquare className={styles.icon} /> İletişim
          </Link>
          <Link to="/sorular" className={styles.homeButton}>
            <FaQuestionCircle className={styles.icon} /> Sıkça Sorulan Sorular
          </Link>
        </div>
      </section>

      <div className={styles.mealList}>
        {meals.map((meal) => (
          <div key={meal.id} className={styles.mealCard}>
            <h2 className={styles.mealName} onClick={() => setOpenImage(meal.image)}>
              {meal.name}
            </h2>
            <p className={styles.mealPrice}>Fiyat: {meal.price}</p>
            <button onClick={() => toggleSteps(meal.id)} className={styles.stepsButton}>
              {openStepsId === meal.id ? "İçeriği Gizle" : "İçeriği Gör"}
            </button>
            {openStepsId === meal.id && (
              <ul className={`${styles.stepsList} ${styles.stepsListShow}`}>
                {meal.steps.map((step, idx) => (
                  <li key={idx}>
                    {idx + 1}. {step}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className={styles.mealList}>
        {mealProps.map((meal) => (
          <div key={meal.id} className={styles.mealCard}>
            <h2 className={styles.mealName}>{meal.name}</h2>
            <button onClick={() => toggleSteps(meal.id)} className={styles.stepsButton}>
              {openStepsId === meal.id ? "İçeriği Gizle" : "İçeriği Gör"}
            </button>
            {openStepsId === meal.id && (
              <ul className={`${styles.stepsList} ${styles.stepsListShow}`}>
                {meal.steps.map((step, idx) => (
                  <li key={idx}>
                    {idx + 1}. {step}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {openImage && (
        <div className={styles.imageModal} onClick={() => setOpenImage(null)}>
          {openImage.map((img, i) => (
            <img key={i} src={img} alt={`Yemek Görseli ${i + 1}`} className={styles.modalImage} />
          ))}
        </div>
      )}

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Menu;