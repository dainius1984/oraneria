import { motion } from 'framer-motion';
import { useState } from 'react';

const TreatmentFinder = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const treatments = [
    {
      id: 'anti-aging',
      title: 'Anti-Aging & Lifting',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Face contour icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C8 2 5 5 5 9c0 2 1 3.5 2 4.5M12 2c4 0 7 3 7 7 0 2-1 3.5-2 4.5M12 2v20M5 13.5c-1 1-2 2.5-2 4.5 0 3 3 6 9 6s9-3 9-6c0-2-1-3.5-2-4.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9h.01M15 9h.01" />
        </svg>
      ),
      href: '#anti-aging'
    },
    {
      id: 'redukcja',
      title: 'Redukcja & Wyszczuplanie',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Waist curve icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4c0-2 2-4 4-4s4 2 4 4v16c0 2-2 4-4 4s-4-2-4-4V4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16M8 8h8M8 16h8" />
        </svg>
      ),
      href: '#redukcja'
    },
    {
      id: 'relaks',
      title: 'Relaks & Spa',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Leaf/lotus icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C8 2 5 5 5 9c0 4 3 7 7 9 4-2 7-5 7-9 0-4-3-7-7-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v10M5 9l7-7M19 9l-7-7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12c2 2 4 2 8 0" />
        </svg>
      ),
      href: '#relaks'
    },
    {
      id: 'problemy',
      title: 'Problemy Skórne',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Magnifying glass with sparkle */}
          <circle cx="11" cy="11" r="7" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 20l-4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 7h.01M15 9h.01M9 11h.01" />
        </svg>
      ),
      href: '#problemy'
    }
  ];

  const handleCardClick = (href) => {
    // Navigate to Oferta page with filter or scroll to section
    if (href.startsWith('#')) {
      window.location.href = `/oferta${href}`;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="oferta" className="w-full bg-[#FFFAF5] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">
            Czego potrzebuje Twoja skóra?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Dobierzemy idealną terapię do Twoich celów.
          </p>
        </motion.div>

        {/* Interactive Solution Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(treatment.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(treatment.href)}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md h-full flex flex-col items-center justify-center border-2 border-transparent transition-all duration-300"
                style={{
                  borderColor: hoveredCard === treatment.id ? '#C86B46' : 'transparent'
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 12px 30px rgba(200, 107, 70, 0.2)',
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
              >
                {/* Icon with Color Change on Hover */}
                <motion.div 
                  className="mb-4"
                  animate={{
                    color: hoveredCard === treatment.id ? '#C86B46' : '#2F4F4F',
                    scale: hoveredCard === treatment.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={hoveredCard === treatment.id ? 'text-[#C86B46]' : 'text-[#2F4F4F]'}>
                    {treatment.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 
                  className={`
                    text-base md:text-lg font-bold text-center mb-2
                    transition-colors duration-300
                    ${hoveredCard === treatment.id ? 'text-[#C86B46]' : 'text-[#2F4F4F]'}
                  `}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {treatment.title}
                </h3>

                {/* View Arrow - Always Visible but Animated */}
                <motion.div
                  animate={{ 
                    opacity: hoveredCard === treatment.id ? 1 : 0.6,
                    x: hoveredCard === treatment.id ? 0 : -5
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-[#C86B46] font-medium text-sm mt-2"
                >
                  <span>Zobacz</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{
                      x: hoveredCard === treatment.id ? 4 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentFinder;

