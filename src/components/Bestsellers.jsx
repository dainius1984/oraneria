import { motion } from 'framer-motion';

const Bestsellers = () => {
  const features = [
    {
      id: 1,
      tag: 'Modelowanie Sylwetki',
      title: 'Icoone Laser 2',
      description: 'Bezinwazyjny lifting i redukcja cellulitu. Poczuj różnicę już po pierwszym zabiegu.',
      benefits: [
        'Bezbolesny',
        'Szybkie efekty',
        'Dla każdego typu skóry'
      ],
      image: '/img/469195222_17842771191380714_3063002111071437658_n.jpg',
      imagePosition: 'left',
      buttonText: 'Szczegóły',
      href: '#icoone'
    },
    {
      id: 2,
      tag: 'Rytuał Relaksacyjny',
      title: 'Rytuał Oranżeria',
      description: 'Autorski masaż relaksacyjny z wykorzystaniem gorących kamieni i olejków eterycznych.',
      benefits: [
        'Pełne odprężenie',
        'Redukcja stresu',
        'Odmłodzenie skóry'
      ],
      image: '/img/469532008_17842771203380714_8774777161940506774_n.jpg',
      imagePosition: 'right',
      buttonText: 'Szczegóły',
      href: '#rytual'
    }
  ];

  return (
    <section className="w-full bg-[#FDFBF7] py-16 md:py-24 px-4 md:px-8">
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
            Ulubione Rytuały Naszych Klientów
          </h2>
        </motion.div>

        {/* Main Grid Layout: Orange Cards + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {/* Left Orange Card - Bezpieczeństwo - Compact Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-[#C86B46] rounded-2xl p-5 md:p-6 text-white relative overflow-hidden"
          >
            {/* Peach Icon - Compact */}
            <div className="absolute top-3 right-3 opacity-15">
              <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8 2 5 5 5 9c0 4 3 7 7 9 4-2 7-5 7-9 0-4-3-7-7-7zm0 2c3 0 5 2 5 5 0 3-2 5-5 7-3-2-5-4-5-7 0-3 2-5 5-5z"/>
                <path d="M12 8c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Bezpieczeństwo
              </h3>
              <div className="space-y-2 text-sm md:text-base leading-relaxed mb-4">
                <p className="flex items-start gap-2">
                  <span className="text-white/90 mt-1">•</span>
                  <span>Eliminujemy ryzyko powikłań.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-white/90 mt-1">•</span>
                  <span>Korzystamy z nowoczesnych i sprawdzonych rozwiązań.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-white/90 mt-1">•</span>
                  <span>Szkolimy się u najlepszych specjalistów w Polsce i za granicą.</span>
                </p>
              </div>
            </div>
            
            <div className="pt-3 mt-3 border-t border-white/20 relative z-10">
              <div className="flex items-center justify-between text-xs opacity-75">
                <span>@oranzeria_wroclaw</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Middle Column - Features */}
          <div className="lg:col-span-1 space-y-8 md:space-y-12">
            {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="w-full"
            >

              {/* Content - Simplified for middle column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                className="w-full flex flex-col justify-center"
              >
                {/* Tag Badge */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-[#C86B46]/10 text-[#C86B46] text-xs md:text-sm font-medium mb-4 w-fit"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {feature.tag}
                </motion.span>

                {/* Title */}
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2F4F4F] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List with Elegant Custom Checkmarks */}
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + 0.5 + benefitIndex * 0.1 
                      }}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      {/* Elegant Custom Checkmark */}
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C86B46]/10 flex items-center justify-center">
                        <svg 
                          className="w-3 h-3 text-[#C86B46]" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <motion.a
                  href={feature.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                  className="btn-outline w-fit text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {feature.buttonText}
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
          </div>

          {/* Right Orange Card - Nasza pasja - Compact Design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-[#C86B46] rounded-2xl p-5 md:p-6 text-white relative overflow-hidden"
          >
            {/* Peach Icon - Compact */}
            <div className="absolute top-3 right-3 opacity-15">
              <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8 2 5 5 5 9c0 4 3 7 7 9 4-2 7-5 7-9 0-4-3-7-7-7zm0 2c3 0 5 2 5 5 0 3-2 5-5 7-3-2-5-4-5-7 0-3 2-5 5-5z"/>
                <path d="M12 8c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Nasza pasja
              </h3>
              <div className="space-y-2 text-sm md:text-base leading-relaxed mb-4">
                <p className="flex items-start gap-2">
                  <span className="text-white/90 mt-1">•</span>
                  <span>Kochamy swoją pracę.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-white/90 mt-1">•</span>
                  <span>Zadbamy o Ciebie ze świadomym zaangażowaniem.</span>
                </p>
              </div>
            </div>
            
            <div className="pt-3 mt-3 border-t border-white/20 relative z-10">
              <div className="flex items-center justify-between text-xs opacity-75">
                <span>@oranzeria_wroclaw</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;

