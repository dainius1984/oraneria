import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { openBooksyWidget } from '../utils/booksy';

const MobileNavbar = ({ isVisible }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'O nas', href: '/o-nas' },
    { name: 'Oferta', href: '/oferta' },
    { name: 'Cennik', href: '/cennik' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-3 w-full"
    >
      <div className="max-w-7xl mx-auto w-full px-0">
        <div className="bg-[#FFFAF5]/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-orange-100/30 w-full box-border">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="/img/logo/logo.png" 
                  alt="Oranżeria Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </motion.div>

            {/* Hamburger Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#2F4F4F] transition-all"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-[#2F4F4F] transition-all"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#2F4F4F] transition-all"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Enhanced Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30 backdrop-blur-md z-40"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ 
                  type: 'spring', 
                  damping: 25, 
                  stiffness: 300,
                  opacity: { duration: 0.2 }
                }}
                className="fixed top-20 right-4 left-4 bg-gradient-to-br from-[#FFFAF5] via-[#FFFBF7] to-[#FFFAF5] rounded-3xl shadow-2xl border-2 border-orange-100/60 z-50 overflow-hidden max-h-[calc(100vh-6rem)] overflow-y-auto backdrop-blur-xl"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(200, 107, 70, 0.25), 0 0 0 1px rgba(200, 107, 70, 0.1)'
                }}
              >
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C86B46] to-transparent opacity-60" />
                
                <div className="px-6 py-8 space-y-6">
                  {/* Mobile Navigation Links */}
                  {navLinks.map((link, index) => {
                    const isHashLink = link.href.startsWith('/#');
                    const handleClick = () => {
                      setMobileMenuOpen(false);
                      if (isHashLink && location.pathname !== '/') {
                        window.location.href = link.href;
                      }
                    };
                    
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.08,
                          type: 'spring',
                          stiffness: 200,
                          damping: 20
                        }}
                      >
                        {isHashLink ? (
                          <a
                            href={link.href}
                            onClick={handleClick}
                            className="block text-[#2F4F4F] font-light text-lg tracking-[0.1em] uppercase py-4 px-2 border-b border-orange-100/40 transition-all duration-300 hover:text-[#C86B46] hover:bg-orange-50/50 rounded-lg -mx-2"
                            style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.15em' }}
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            onClick={handleClick}
                            className="block text-[#2F4F4F] font-light text-lg tracking-[0.1em] uppercase py-4 px-2 border-b border-orange-100/40 transition-all duration-300 hover:text-[#C86B46] hover:bg-orange-50/50 rounded-lg -mx-2"
                            style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.15em' }}
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}

                  {/* Mobile Social Media */}
                  <motion.div 
                    className="flex items-center justify-center gap-6 pt-6 pb-4 border-t-2 border-orange-100/40"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <motion.a
                      href="https://www.instagram.com/oranzeria_wroclaw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5,
                        type: 'spring',
                        stiffness: 200
                      }}
                      className="text-[#2F4F4F] hover:text-[#C86B46] transition-all p-3 rounded-full hover:bg-orange-50/80 hover:shadow-md"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Instagram"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://www.facebook.com/salon.oranzeria/"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6,
                        type: 'spring',
                        stiffness: 200
                      }}
                      className="text-[#2F4F4F] hover:text-[#C86B46] transition-all p-3 rounded-full hover:bg-orange-50/80 hover:shadow-md"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Facebook"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </motion.a>
                  </motion.div>

                  {/* Mobile CTA Button - Centered and Bigger */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7,
                      type: 'spring',
                      stiffness: 150,
                      damping: 15
                    }}
                    className="pt-2 pb-2"
                  >
                    <motion.button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openBooksyWidget();
                      }}
                      className="booksy-business-link w-full mx-auto px-8 py-5 rounded-full text-white font-light text-lg tracking-[0.15em] uppercase shadow-xl cursor-pointer relative overflow-hidden"
                      style={{ 
                        backgroundColor: '#C86B46', 
                        fontFamily: 'Playfair Display, serif', 
                        letterSpacing: '0.2em',
                        maxWidth: '90%',
                        display: 'block'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: '#E08D6D',
                        boxShadow: '0 20px 40px rgba(200, 107, 70, 0.4)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: 'easeInOut'
                        }}
                      />
                      <span className="relative z-10">Rezerwacja</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default MobileNavbar;

