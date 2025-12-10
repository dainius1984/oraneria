import { motion } from 'framer-motion';
import { useState } from 'react';
import { openBooksyWidget } from '../utils/booksy';

const Oferta = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { id: 'twarz', name: 'TWARZ' },
    { id: 'okolica-oka', name: 'OKOLICA OKA' },
    { id: 'skora-glowy', name: 'SKÓRA GŁOWY' },
    { id: 'cialo', name: 'CIAŁO' }
  ];

  const services = [
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
      id: 'stylizacja-oprawy-oka',
      title: 'STYLIZACJA OPRAWY OKA',
      description: 'Laminacja brwi i rzęs, farbowanie, regulacja - by spojrzenie nabrało wyrazistości i charakteru, a oprawa oka była idealnie dopasowana do Twojej urody.'
    },
    {
      id: 'makijaz-permanentny',
      title: 'MAKIJAŻ PERMANENTNY',
      description: 'Naturalne efekty, które podkreślają urodę - bez przerysowania. Wykonujemy również korekty i usuwanie nieudanego PMU. Brwi, usta, kreski - w najlepszym wydaniu.'
    },
    {
      id: 'pigmentacja-skory',
      title: 'PIGMENTACJA SKÓRY',
      description: 'Zabiegi z zakresu mikropigmentacji skóry głowy (SMP) oraz pigmentacji piegów - dla naturalnego efektu zagęszczenia włosów lub subtelnych akcentów na skórze.'
    },
    {
      id: 'medycyna-estetyczna',
      title: 'MEDYCYNA ESTETYCZNA',
      description: 'Bezpieczne i subtelne zabiegi z użyciem certyfikowanych preparatów: mezoterapia, toksyna botulinowa, stymulatory tkankowe i wiele innych. Tu mniej znaczy więcej - stawiamy na naturalność.'
    },
    {
      id: 'zabiegi-na-cialo',
      title: 'ZABIEGI NA CIAŁO',
      description: 'Nie tylko twarz zasługuje na uwagę. W ORANŻERII zadbamy też o skórę pleców, dłoni i innych wymagających obszarów.'
    },
    {
      id: 'masaze-rytualy',
      title: 'MASAŻE / RYTUAŁY RELAKSACYJNE',
      description: 'Zabiegi, które łączą pielęgnację z relaksem. Pomagają rozluźnić napięcia, poprawić krążenie i zadbać o kondycję skóry w harmonii z ciałem i umysłem.'
    },
    {
      id: 'terapie-laczone',
      title: 'TERAPIE ŁĄCZONE I BEAUTY PLANS',
      description: 'Indywidualnie zaplanowane ścieżki pielęgnacyjne, które łączą różne technologie i techniki dla najlepszych, długotrwałych efektów. Tworzone po konsultacji ze specjalistką.'
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
    // Scroll to services section
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-[#FFFAF5] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Oferta
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              W ORANŻERII tworzymy indywidualne plany pielęgnacyjne, dopasowane do potrzeb skóry i stylu życia. Wybierz kategorię, która Cię interesuje, a my zadbamy o resztę.
            </p>
          </motion.div>

          {/* Category Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#C86B46] text-white shadow-lg scale-105'
                    : 'bg-white text-[#2F4F4F] border-2 border-[#C86B46] hover:bg-[#C86B46] hover:text-white'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="w-full py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-md border border-orange-100/50"
              >
                <h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F4F4F] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {service.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nie wiesz, od czego zacząć?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Umów się na konsultację - stworzymy dla Ciebie plan pielęgnacji idealnie dopasowany do Twoich potrzeb.
            </p>
            <motion.button
              onClick={openBooksyWidget}
              className="btn-primary booksy-business-link inline-block cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#E08D6D',
                boxShadow: '0 10px 25px rgba(200, 107, 70, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Umów Konsultację
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Check Details Button */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.a
            href="https://booksy.com/pl-pl/dl/show-business/263937"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg md:text-xl text-[#C86B46] hover:text-[#E08D6D] font-medium transition-colors duration-300 underline decoration-2 underline-offset-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Sprawdź szczegóły
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Oferta;

