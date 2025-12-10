import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import BooksyButton from './BooksyButton';
import { useState } from 'react';

const DesktopNavbar = ({ isVisible }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
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
      className="hidden md:block fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 w-full"
    >
      <div className="max-w-7xl mx-auto w-full px-0">
        <div className="bg-[#FFFAF5]/90 backdrop-blur-md rounded-2xl px-4 md:px-8 py-3 md:py-4 shadow-lg border border-orange-100/30 w-full box-border">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center">
                <img 
                  src="/img/logo/logo.png" 
                  alt="Oranżeria Logo" 
                  className="h-10 md:h-12 w-auto"
                />
              </Link>
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8 flex-1 justify-center">
              {navLinks.map((link, index) => {
                const isHashLink = link.href.startsWith('/#');
                const handleClick = (e) => {
                  if (isHashLink && location.pathname !== '/') {
                    e.preventDefault();
                    window.location.href = link.href;
                  }
                };
                
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="relative"
                  >
                    {isHashLink ? (
                      <a
                        href={link.href}
                        onClick={handleClick}
                        className="relative text-[#2F4F4F] font-light text-sm tracking-[0.1em] uppercase px-2 py-2 cursor-pointer transition-colors hover:text-[#C86B46] block"
                        style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.15em' }}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {link.name}
                        {hoveredLink === link.name && (
                          <motion.div
                            layoutId="hoverShape"
                            className="absolute bottom-0 left-0 right-0 h-2"
                            initial={false}
                            transition={{ 
                              type: 'spring', 
                              stiffness: 500, 
                              damping: 40,
                              mass: 0.5
                            }}
                          >
                            <motion.svg
                              viewBox="0 0 120 25"
                              className="w-full h-full"
                              preserveAspectRatio="none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                            >
                              <motion.path
                                d="M 0,20 Q 20,8 40,12 Q 60,16 80,10 Q 100,4 120,12 L 120,25 L 0,25 Z"
                                fill="#C86B46"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.85 }}
                                transition={{ 
                                  pathLength: { 
                                    duration: 0.5, 
                                    ease: [0.43, 0.13, 0.23, 0.96] 
                                  },
                                  opacity: { duration: 0.2 }
                                }}
                              />
                            </motion.svg>
                          </motion.div>
                        )}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="relative text-[#2F4F4F] font-light text-sm tracking-[0.1em] uppercase px-2 py-2 cursor-pointer transition-colors hover:text-[#C86B46] block"
                        style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.15em' }}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {link.name}
                        {hoveredLink === link.name && (
                          <motion.div
                            layoutId="hoverShape"
                            className="absolute bottom-0 left-0 right-0 h-2"
                            initial={false}
                            transition={{ 
                              type: 'spring', 
                              stiffness: 500, 
                              damping: 40,
                              mass: 0.5
                            }}
                          >
                            <motion.svg
                              viewBox="0 0 120 25"
                              className="w-full h-full"
                              preserveAspectRatio="none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                            >
                              <motion.path
                                d="M 0,20 Q 20,8 40,12 Q 60,16 80,10 Q 100,4 120,12 L 120,25 L 0,25 Z"
                                fill="#C86B46"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.85 }}
                                transition={{ 
                                  pathLength: { 
                                    duration: 0.5, 
                                    ease: [0.43, 0.13, 0.23, 0.96] 
                                  },
                                  opacity: { duration: 0.2 }
                                }}
                              />
                            </motion.svg>
                          </motion.div>
                        )}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Social Media & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-shrink-0 items-center gap-4"
            >
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://www.instagram.com/oranzeria_wroclaw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2F4F4F] hover:text-[#C86B46] transition-all p-2 rounded-full hover:bg-orange-50"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/salon.oranzeria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2F4F4F] hover:text-[#C86B46] transition-all p-2 rounded-full hover:bg-orange-50"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
              </div>

              {/* CTA Button */}
              <BooksyButton 
                text="Rezerwacja"
                action="page" 
                variant="primary"
                size="small"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default DesktopNavbar;

