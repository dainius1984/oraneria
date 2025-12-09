import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TreatmentFinder from './components/TreatmentFinder.jsx';
import Bestsellers from './components/Bestsellers.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TreatmentFinder />
      <Bestsellers />
      <Footer />
    </div>
  );
}

export default App;
