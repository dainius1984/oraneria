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

        {/* Feature Rows */}
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`
                flex flex-col 
                ${feature.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}
                items-center gap-8 md:gap-12
              `}
            >
              {/* Image */}
              <motion.div
                initial={{ 
                  opacity: 0, 
                  x: feature.imagePosition === 'right' ? 50 : -50 
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                className="w-full md:w-1/2 h-full flex items-center"
              >
                <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full min-h-[300px] md:min-h-[400px] object-cover rounded-2xl"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.src = index === 0 
                        ? 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop'
                        : 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                className="w-full md:w-1/2 flex flex-col justify-center min-h-[300px] md:min-h-[400px]"
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
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F4F4F] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
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
                      className="checkmark-item"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span>{benefit}</span>
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
                  className="btn-outline w-fit mx-auto md:mx-0"
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

