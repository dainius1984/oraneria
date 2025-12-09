import { useEffect, useRef, useState } from 'react';
import DesktopNavbar from './DesktopNavbar.jsx';
import MobileNavbar from './MobileNavbar.jsx';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar at the very top
      if (currentScrollY < 100) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <DesktopNavbar isVisible={isVisible} />
      <MobileNavbar isVisible={isVisible} />
    </>
  );
};

export default Navbar;

