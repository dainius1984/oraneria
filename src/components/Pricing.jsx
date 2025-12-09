import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { openBooksyWidget } from '../utils/booksy';

const categories = ['Twarz', 'Ciało', 'Medycyna Estetyczna', 'Rytuały SPA', 'Dodatki'];

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('Twarz');
  const [searchQuery, setSearchQuery] = useState('');
  const categoryRefs = useRef({});

  const pricingData = {
    'Twarz': {
      'Oczyszczanie': [
        { name: 'Peeling kawitacyjny', description: 'Głębokie oczyszczanie', time: '60 min', price: '150 zł' },
        { name: 'Oczyszczanie manualne', description: 'Klasyczne oczyszczanie', time: '75 min', price: '180 zł' },
        { name: 'Oczyszczanie z ekstrakcją', description: 'Kompleksowe oczyszczanie', time: '90 min', price: '220 zł' }
      ],
      'Anti-Aging': [
        { name: 'Masaż twarzy liftingujący', description: 'Masaż manualny', time: '45 min', price: '120 zł' },
        { name: 'Zabieg anti-aging z kwasami', description: 'Odmładzanie skóry', time: '60 min', price: '250 zł' },
        { name: 'Mikrodermabrazja', description: 'Wygładzanie zmarszczek', time: '50 min', price: '200 zł' }
      ]
    },
    'Ciało': {
      'Modelowanie Sylwetki': [
        { name: 'Icoone Laser 2', description: 'Bezinwazyjny lifting', time: '60 min', price: '300 zł' },
        { name: 'Seria 5 zabiegów Icoone', description: 'Pakiet promocyjny', time: '5x60 min', price: '1350 zł', oldPrice: '1500 zł' },
        { name: 'Endermologia', description: 'Redukcja cellulitu', time: '45 min', price: '180 zł' }
      ],
      'Masaże': [
        { name: 'Masaż relaksacyjny', description: 'Pełne odprężenie', time: '60 min', price: '150 zł' },
        { name: 'Masaż sportowy', description: 'Rozluźnienie mięśni', time: '90 min', price: '220 zł' }
      ]
    },
    'Medycyna Estetyczna': {
      'Zabiegi Laserowe': [
        { name: 'Laserowe usuwanie przebarwień', description: 'Bezpieczna technologia', time: '30 min', price: '400 zł' },
        { name: 'Laserowe zamykanie naczynek', description: 'Redukcja rumienia', time: '45 min', price: '350 zł' }
      ],
      'Mezoterapia': [
        { name: 'Mezoterapia igłowa', description: 'Odmładzanie skóry', time: '60 min', price: '450 zł' },
        { name: 'Mezoterapia bezigłowa', description: 'Bezbolesna alternatywa', time: '45 min', price: '300 zł' }
      ]
    },
    'Rytuały SPA': {
      'Rytuały Oranżeria': [
        { name: 'Rytuał Oranżeria', description: 'Gorące kamienie i olejki', time: '90 min', price: '280 zł' },
        { name: 'Rytuał Anti-Stress', description: 'Pełne odprężenie', time: '75 min', price: '250 zł' },
        { name: 'Rytuał Detoks', description: 'Oczyszczanie i relaks', time: '120 min', price: '350 zł' }
      ],
      'Zabiegi na Ciało': [
        { name: 'Peeling całego ciała', description: 'Wygładzanie skóry', time: '60 min', price: '180 zł' },
        { name: 'Maska algowa', description: 'Nawilżenie i odżywienie', time: '45 min', price: '150 zł' }
      ]
    },
    'Dodatki': {
      'Uzupełnienia': [
        { name: 'Przedłużenie rzęs', description: 'Rzęsy klasyczne', time: '120 min', price: '200 zł' },
        { name: 'Henna brwi', description: 'Koloryzacja brwi', time: '30 min', price: '80 zł' },
        { name: 'Makijaż okolicznościowy', description: 'Pełny makijaż', time: '60 min', price: '150 zł' }
      ]
    }
  };

  const packages = [
    {
      name: 'Pakiet Anti-Aging',
      description: 'Seria 5 zabiegów anti-aging',
      oldPrice: '1250 zł',
      newPrice: '1100 zł',
      savings: '150 zł'
    },
    {
      name: 'Pakiet Relaks',
      description: '3 rytuały SPA',
      oldPrice: '840 zł',
      newPrice: '750 zł',
      savings: '90 zł'
    },
    {
      name: 'Pakiet Kompleksowy',
      description: 'Twarz + Ciało (5 zabiegów)',
      oldPrice: '1500 zł',
      newPrice: '1350 zł',
      savings: '150 zł'
    }
  ];

  useEffect(() => {
    // Set refs for smooth scrolling
    categories.forEach(cat => {
      const element = document.getElementById(`category-${cat}`);
      if (element) {
        categoryRefs.current[cat] = element;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const element = categoryRefs.current[category];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filterServices = (services) => {
    if (!searchQuery) return services;
    
    const filtered = {};
    Object.keys(services).forEach(subCategory => {
      const items = services[subCategory].filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (items.length > 0) {
        filtered[subCategory] = items;
      }
    });
    return filtered;
  };

  return (
    <section id="cennik" className="w-full bg-[#FFFAF5] pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F4F4F] mb-4 md:mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Cennik Usług
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Inwestycja w Twoje piękno i relaks.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sticky top-16 md:top-24 z-40 mb-8 md:mb-10 bg-[#FFFAF5] py-4 md:py-6 -mx-4 md:-mx-8 px-4 md:px-8"
        >
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 md:gap-4 min-w-max pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`
                    px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base
                    transition-all duration-300 whitespace-nowrap
                    ${activeCategory === category
                      ? 'bg-[#C86B46] text-white shadow-md'
                      : 'bg-white/60 text-[#2F4F4F] border-2 border-[#C86B46]/30 hover:border-[#C86B46]/60'
                    }
                  `}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 md:mb-14"
        >
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Szukaj zabiegu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 pl-12 rounded-full border-2 border-[#C86B46]/30 bg-white/60 backdrop-blur-sm focus:outline-none focus:border-[#C86B46] transition-colors text-[#2F4F4F]"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C86B46]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>

        {/* Pricing Lists by Category */}
        <div className="space-y-12 md:space-y-16">
          {categories.map((category) => {
            const categoryData = pricingData[category];
            if (!categoryData) return null;

            // Filter data for this category
            const categoryFilteredData = filterServices(categoryData);

            return (
              <div
                key={category}
                id={`category-${category}`}
                className="scroll-mt-24 md:scroll-mt-32"
              >
                {Object.keys(categoryFilteredData).length === 0 && searchQuery ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">Nie znaleziono zabiegów dla "{searchQuery}" w kategorii {category}</p>
                  </div>
                ) : Object.keys(categoryFilteredData).length > 0 ? (
                  Object.keys(categoryFilteredData).map((subCategory, subIndex) => (
                    <motion.div
                      key={subCategory}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: subIndex * 0.1 }}
                      className="mb-10 md:mb-12"
                    >
                      <h3 
                        className="text-2xl md:text-3xl font-bold text-[#2F4F4F] mb-6"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {subCategory}
                      </h3>
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-md border border-orange-100/50">
                        {categoryFilteredData[subCategory].map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                            className="group relative py-4 md:py-5 border-b border-gray-200/50 last:border-0 hover:bg-white/80 rounded-lg px-3 md:px-4 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start gap-3 md:gap-4 flex-wrap">
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-base md:text-lg font-bold text-[#2F4F4F] mb-1">
                                      {item.name}
                                    </h4>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                      <span>{item.description}</span>
                                      <span className="text-[#C86B46]">•</span>
                                      <span>{item.time}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    {item.oldPrice && (
                                      <span className="text-sm text-gray-400 line-through">
                                        {item.oldPrice}
                                      </span>
                                    )}
                                    <span className="text-lg md:text-xl font-bold text-[#C86B46] whitespace-nowrap">
                                      {item.price}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <motion.button
                                onClick={openBooksyWidget}
                                className="booksy-business-link opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-full text-white text-sm font-medium whitespace-nowrap cursor-pointer"
                                style={{ backgroundColor: '#C86B46' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Rezerwuj
                              </motion.button>
                            </div>
                            {/* Dotted separator line */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Packages Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-8 md:mb-12 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Pakiety Promocyjne
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border-2 border-[#C86B46]/30 hover:border-[#C86B46] transition-all duration-300"
              >
                <h3 
                  className="text-xl md:text-2xl font-bold text-[#2F4F4F] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {pkg.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-3 mb-4">
                  {pkg.oldPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {pkg.oldPrice}
                    </span>
                  )}
                  <span className="text-2xl md:text-3xl font-bold text-[#C86B46]">
                    {pkg.newPrice}
                  </span>
                </div>
                <div className="text-sm text-[#C86B46] font-medium mb-4">
                  Oszczędzasz {pkg.savings}
                </div>
                <motion.button
                  onClick={openBooksyWidget}
                  className="booksy-business-link block w-full text-center px-6 py-3 rounded-full text-white font-medium cursor-pointer"
                  style={{ backgroundColor: '#C86B46' }}
                  whileHover={{ scale: 1.02, backgroundColor: '#E08D6D' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Rezerwuj Pakiet
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-xs md:text-sm text-gray-500 italic max-w-3xl mx-auto">
            Cennik nie stanowi oferty handlowej w rozumieniu prawa. Ceny mogą ulec zmianie.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

