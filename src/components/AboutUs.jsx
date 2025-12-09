import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutUs = () => {
  const [hoveredTeamMember, setHoveredTeamMember] = useState(null);

  const values = [
    {
      id: 1,
      title: 'Holistyczne Podejście',
      description: 'Traktujemy całą osobę, nie tylko zmarszczki.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Technologia i Bezpieczeństwo',
      description: 'Certyfikowany sprzęt najwyższej jakości.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Atmosfera Zen',
      description: 'Muzyka, aromaterapia, cisza.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Anna Kowalska',
      role: 'Kosmetolog',
      specialty: 'Specjalizuje się w terapiach anti-aging',
      image: '/img/3.jpg'
    },
    {
      id: 2,
      name: 'Maria Nowak',
      role: 'Specjalista Laseroterapii',
      specialty: 'Ekspert w zakresie redukcji cellulitu',
      image: '/img/4.jpg'
    },
    {
      id: 3,
      name: 'Katarzyna Wiśniewska',
      role: 'Terapeuta Masażu',
      specialty: 'Masaże relaksacyjne i lecznicze',
      image: '/img/5.jpg'
    },
    {
      id: 4,
      name: 'Magdalena Zielińska',
      role: 'Kosmetolog',
      specialty: 'Zabiegi na problemy skórne',
      image: '/img/6.jpg'
    }
  ];

  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop', alt: 'Recepcja' },
    { id: 2, src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop', alt: 'Gabinet zabiegowy' },
    { id: 3, src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop', alt: 'Detale wnętrza' },
    { id: 4, src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop', alt: 'Strefa relaksu' }
  ];

  return (
    <div className="w-full bg-[#FFFAF5]">
      {/* Section 1: Hero Header */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/554358974_24832431279721695_407827954530258314_n.jpg"
            alt="Salon Oranżeria"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Więcej niż salon kosmetyczny.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-light"
          >
            Twój azyl spokoju w sercu miasta.
          </motion.p>
        </div>
      </section>

      {/* Section 2: The Philosophy */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Dlaczego Oranżeria?
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Wierzymy, że prawdziwe piękno rodzi się z harmonii. Połączyliśmy zaawansowaną technologię Hi-Tech z energią natury, tworząc przestrzeń, w której nie tylko dbasz o skórę, ale też odpoczywasz.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/img/469171614_17842771176380714_7787508925189487850_n.jpg"
                  alt="Zabieg w Oranżerii"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Values */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nasze Wartości
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-orange-100/50 text-center"
              >
                <div className="text-[#C86B46] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 
                  className="text-xl md:text-2xl font-bold text-[#2F4F4F] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Meet the Team */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nasi Eksperci
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredTeamMember(member.id)}
                onMouseLeave={() => setHoveredTeamMember(null)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=600&fit=crop';
                    }}
                  />
                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredTeamMember === member.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4"
                  >
                    <p className="text-white text-sm leading-relaxed">
                      {member.specialty}
                    </p>
                  </motion.div>
                </div>
                <div className="mt-4 text-center">
                  <h3 
                    className="text-lg md:text-xl font-bold text-[#2F4F4F] mb-1"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-[#C86B46] font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: The Interior Gallery */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Poczuj klimat Oranżerii
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Poczuj klimat Oranżerii przed pierwszą wizytą.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl shadow-lg ${
                  index === 0 ? 'md:row-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  style={{ minHeight: index === 0 ? '500px' : '300px' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

