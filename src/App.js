import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Oferta from './pages/Oferta.jsx';
import AboutUs from './components/AboutUs.jsx';
import Pricing from './components/Pricing.jsx';
import { hideBooksyWidget } from './utils/hideBooksyWidget';

function App() {
  useEffect(() => {
    // Hide Booksy floating widget
    hideBooksyWidget();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/cennik" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
