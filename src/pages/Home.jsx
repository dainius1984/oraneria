import Hero from '../components/Hero.jsx';
import TreatmentFinder from '../components/TreatmentFinder.jsx';
import Bestsellers from '../components/Bestsellers.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TreatmentFinder />
      <Bestsellers />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;

