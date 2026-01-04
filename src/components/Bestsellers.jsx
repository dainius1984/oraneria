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

        {/* Value Cards Banner - Compact Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {/* Bezpieczeństwo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-[#C86B46] rounded-xl p-5 md:p-6 text-white relative overflow-hidden"
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            </div>
            
            <div className="relative z-10 flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Bezpieczeństwo
                </h3>
                <p className="text-sm md:text-base leading-relaxed opacity-95">
                  Nowoczesne rozwiązania, szkolenia u najlepszych specjalistów, eliminacja ryzyka powikłań.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Nasza pasja Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#C86B46] rounded-xl p-5 md:p-6 text-white relative overflow-hidden"
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -ml-16 -mt-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mb-12"></div>
            </div>
            
            <div className="relative z-10 flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Nasza pasja
                </h3>
                <p className="text-sm md:text-base leading-relaxed opacity-95">
                  Kochamy swoją pracę i dbamy o Ciebie ze świadomym zaangażowaniem.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section - Full Width */}
        <div className="space-y-12 md:space-y-16">
            {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="w-full max-w-3xl mx-auto"
            >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                className="w-full"
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
      </div>
    </section>
  );
};

export default Bestsellers;

