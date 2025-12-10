import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import BooksyButton from '../components/BooksyButton';

// Service Item Component - Restaurant Menu Style
const ServiceItem = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="py-6 md:py-8 border-b border-gray-200 last:border-b-0"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
        {/* Left Side: Service Info */}
        <div className="flex-1">
          <h3 
            className="text-xl md:text-2xl font-bold text-[#2F4F4F] mb-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {service.title}
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Right Side: Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 flex-shrink-0">
          {/* Primary Action: Booksy Booking Button */}
          <BooksyButton
            text="Umów wizytę"
            variant="primary"
            size="small"
            className="whitespace-nowrap"
          />

          {/* Secondary Action: Details Link */}
          <motion.a
            href="https://booksy.com/pl-pl/dl/show-business/263937"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 rounded-full font-medium text-sm md:text-base border-2 border-[#2F4F4F] text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sprawdź szczegóły
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Oferta = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  // Group services by category
  const servicesByCategory = {
    'twarz': [
      {
        id: 'kosmetologia',
        title: 'KOSMETOLOGIA',
        description: 'Skuteczne i bezpieczne zabiegi pielęgnacyjne oraz terapeutyczne - od oczyszczania po anti-aging. Pomagamy skórze odzyskać równowagę, zdrowy blask i jędrność.'
      },
      {
        id: 'laseroterapia',
        title: 'LASEROTERAPIA',
        description: 'Wykorzystujemy nowoczesną technologię laserową w terapii skóry i depilacji. Pomagamy pozbyć się przebarwień, naczynek, zmian skórnych i niechcianego owłosienia.'
      },
      {
        id: 'medycyna-estetyczna',
        title: 'MEDYCYNA ESTETYCZNA',
        description: 'Bezpieczne i subtelne zabiegi z użyciem certyfikowanych preparatów: mezoterapia, toksyna botulinowa, stymulatory tkankowe i wiele innych. Tu mniej znaczy więcej - stawiamy na naturalność.'
      }
    ],
    'okolica-oka': [
      {
        id: 'stylizacja-oprawy-oka',
        title: 'STYLIZACJA OPRAWY OKA',
        description: 'Laminacja brwi i rzęs, farbowanie, regulacja - by spojrzenie nabrało wyrazistości i charakteru, a oprawa oka była idealnie dopasowana do Twojej urody.'
      },
      {
        id: 'makijaz-permanentny',
        title: 'MAKIJAŻ PERMANENTNY',
        description: 'Naturalne efekty, które podkreślają urodę - bez przerysowania. Wykonujemy również korekty i usuwanie nieudanego PMU. Brwi, usta, kreski - w najlepszym wydaniu.'
      }
    ],
    'skora-glowy': [
      {
        id: 'pigmentacja-skory',
        title: 'PIGMENTACJA SKÓRY',
        description: 'Zabiegi z zakresu mikropigmentacji skóry głowy (SMP) oraz pigmentacji piegów - dla naturalnego efektu zagęszczenia włosów lub subtelnych akcentów na skórze.'
      }
    ],
    'cialo': [
      {
        id: 'zabiegi-na-cialo',
        title: 'ZABIEGI NA CIAŁO',
        description: 'Nie tylko twarz zasługuje na uwagę. W ORANŻERII zadbamy też o skórę pleców, dłoni i innych wymagających obszarów.'
      },
      {
        id: 'masaze-rytualy',
        title: 'MASAŻE / RYTUAŁY RELAKSACYJNE',
        description: 'Zabiegi, które łączą pielęgnację z relaksem. Pomagają rozluźnić napięcia, poprawić krążenie i zadbać o kondycję skóry w harmonii z ciałem i umysłem.'
      }
    ],
    'all': []
  };

  // Flatten all services for "all" category
  servicesByCategory.all = Object.values(servicesByCategory)
    .filter(cat => Array.isArray(cat))
    .flat();

  const categories = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'twarz', name: 'Twarz' },
    { id: 'okolica-oka', name: 'Okolica Oka' },
    { id: 'skora-glowy', name: 'Skóra Głowy' },
    { id: 'cialo', name: 'Ciało' }
  ];

  // Sticky nav effect
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      const offset = 100; // Account for sticky nav
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentServices = servicesByCategory[activeCategory] || [];

  return (
    <div className="w-full bg-[#FFFAF5] min-h-screen">
      {/* Hero Section - Seamless Integration */}
      <section className="relative w-full pt-24 md:pt-28 pb-12 md:pb-16 px-4 md:px-8 bg-[#FFFAF5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2F4F4F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nasza Oferta
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Zadbaj o swoje ciało i duszę
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
              W ORANŻERII tworzymy indywidualne plany pielęgnacyjne, dopasowane do potrzeb skóry i stylu życia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div 
        ref={navRef}
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${
          isSticky ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 py-4 md:py-5 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-5 md:px-7 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-[#B85C3A] text-white shadow-lg'
                    : 'bg-transparent text-[#2F4F4F] border-2 border-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section - Menu Style */}
      <section id="services-section" className="w-full py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {currentServices.length > 0 ? (
            <div className="space-y-0">
              {currentServices.map((service, index) => (
                <ServiceItem key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">Wybierz kategorię, aby zobaczyć dostępne usługi.</p>
            </div>
          )}
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#FFFAF5]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nie wiesz, od czego zacząć?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 leading-relaxed">
              Umów się na konsultację - stworzymy dla Ciebie plan pielęgnacji idealnie dopasowany do Twoich potrzeb.
            </p>
            <div className="flex justify-center">
              <BooksyButton 
                text="Umów Konsultację" 
                variant="primary"
                size="default"
                centered={true}
                className="min-w-[280px]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Oferta;
