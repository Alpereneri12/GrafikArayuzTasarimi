import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ui/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import SikcaSorulanSorular from './pages/SikcaSorulanSorular';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sorular" element={<SikcaSorulanSorular />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

//Router:Tüm sayfa yönlendirmesini yönetir
//Link: Sayfa geçişi yapar, sayfa yenilenmez
//Route:Adrese göre hangi sayfa (bileşen) gösterilecek
//Path:URL’deki adres yoludur (/, /about, /menu gibi)
//Element:O adrese karşılık gelen React bileşenidir
