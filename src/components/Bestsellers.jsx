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

        {/* Features Section with Side Cards - Improved UX/UI */}
        <div className="space-y-16 md:space-y-20">
            {features.map((feature, index) => {
              const isFirst = index === 0;
              const isSecond = index === 1;
              
              return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="w-full"
              >
                <div className={`flex flex-col ${isFirst ? 'lg:flex-row' : 'lg:flex-row'} gap-8 md:gap-10 lg:gap-12 items-stretch`}>
                  {/* Side Card - Bezpieczeństwo (left) or Nasza pasja (right) */}
                  {(isFirst || isSecond) && (
                    <motion.div
                      initial={{ opacity: 0, x: isFirst ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                      className={`w-full lg:w-72 xl:w-80 flex-shrink-0 ${isFirst ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                      <div className="bg-[#C86B46] rounded-2xl p-6 md:p-7 lg:p-8 text-white relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                        {/* Enhanced Decorative Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className={`absolute top-0 ${isFirst ? 'right-0' : 'left-0'} w-40 h-40 bg-white/20 rounded-full ${isFirst ? '-mr-20' : '-ml-20'} -mt-20`}></div>
                          <div className={`absolute bottom-0 ${isFirst ? 'left-0' : 'right-0'} w-24 h-24 bg-white/10 rounded-full ${isFirst ? '-ml-12' : '-mr-12'} -mb-12`}></div>
                        </div>
                        
                        <div className="relative z-10">
                          {/* Enhanced Icon */}
                          <div className="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 shadow-lg">
                            {isFirst ? (
                              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            ) : (
                              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            )}
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {isFirst ? 'Bezpieczeństwo' : 'Nasza pasja'}
                          </h3>
                          
                          {isFirst ? (
                            <div className="space-y-3.5 text-base md:text-lg leading-relaxed flex-grow">
                              <p className="opacity-95 flex items-start gap-2">
                                <span className="text-white/80 mt-1.5">•</span>
                                <span>Eliminujemy ryzyko powikłań.</span>
                              </p>
                              <p className="opacity-95 flex items-start gap-2">
                                <span className="text-white/80 mt-1.5">•</span>
                                <span>Nowoczesne i sprawdzone rozwiązania.</span>
                              </p>
                              <p className="opacity-95 flex items-start gap-2">
                                <span className="text-white/80 mt-1.5">•</span>
                                <span>Szkolenia u najlepszych specjalistów w Polsce i za granicą.</span>
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-3.5 text-base md:text-lg leading-relaxed flex-grow">
                              <p className="opacity-95 flex items-start gap-2">
                                <span className="text-white/80 mt-1.5">•</span>
                                <span>Kochamy swoją pracę.</span>
                              </p>
                              <p className="opacity-95 flex items-start gap-2">
                                <span className="text-white/80 mt-1.5">•</span>
                                <span>Zadbamy o Ciebie ze świadomym zaangażowaniem.</span>
                              </p>
                              {/* Spacer to match height */}
                              <div className="h-12"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Main Content - Enhanced */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className={`flex-1 ${isFirst ? 'lg:order-2' : 'lg:order-1'} bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100/50 h-full flex flex-col`}
                  >
                    {/* Tag Badge - Enhanced */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#C86B46]/10 to-[#C86B46]/5 text-[#C86B46] text-xs md:text-sm font-semibold mb-5 w-fit border border-[#C86B46]/20"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {feature.tag}
                    </motion.span>

                    {/* Title - Enhanced */}
                    <h3 
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F4F4F] mb-4 leading-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {feature.title}
                    </h3>

                    {/* Description - Enhanced */}
                    <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits List - Enhanced */}
                    <ul className="space-y-3 mb-8">
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
                          className="flex items-center gap-3 text-gray-700 group"
                        >
                          {/* Enhanced Checkmark */}
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#C86B46]/20 to-[#C86B46]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <svg 
                              className="w-3.5 h-3.5 text-[#C86B46]" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M5 13l4 4L19 7" 
                              />
                            </svg>
                          </div>
                          <span className="text-base md:text-lg font-medium">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Button - Enhanced */}
                    <motion.a
                      href={feature.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#C86B46] text-[#C86B46] font-semibold text-sm md:text-base hover:bg-[#C86B46] hover:text-white transition-all duration-300 w-fit group"
                      whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(200, 107, 70, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{feature.buttonText}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;

