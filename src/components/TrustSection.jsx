import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const TrustSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Anna K.',
      rating: 5,
      text: 'Fantastyczne miejsce! Profesjonalna obsługa i wspaniała atmosfera. Zabiegi przynoszą realne efekty, a zespół jest zawsze pomocny i życzliwy.',
      service: 'Zabiegi kosmetologiczne'
    },
    {
      id: 2,
      name: 'Magdalena W.',
      rating: 5,
      text: 'ORANŻERIA to miejsce, gdzie czuję się naprawdę zadbana. Indywidualne podejście i świetne efekty. Polecam każdemu!',
      service: 'Rytuał Oranżeria'
    },
    {
      id: 3,
      name: 'Katarzyna S.',
      rating: 5,
      text: 'Najlepszy salon w mieście! Nowoczesne urządzenia, wykwalifikowany personel i piękne wnętrze. Warto każdej złotówki.',
      service: 'Icoone Laser 2'
    }
  ];

  const brands = [
    { name: 'Brand 1', logo: '/img/logo/logo.png' }, // Replace with actual brand logos
    { name: 'Brand 2', logo: '/img/logo/logo.png' },
    { name: 'Brand 3', logo: '/img/logo/logo.png' },
    { name: 'Brand 4', logo: '/img/logo/logo.png' }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4F4F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Co mówią nasi klienci?
            </h2>
            {/* 5-Star Rating Visual */}
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 md:w-8 md:h-8 text-[#C86B46]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-sm md:text-base">Średnia ocena: 5.0 / 5.0</p>
          </div>

          {/* Testimonial Card */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-[#FFFAF5] rounded-2xl p-8 md:p-12 shadow-lg border border-[#C86B46]/10"
              >
                {/* Quote Icon */}
                <div className="text-[#C86B46]/20 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#2F4F4F] text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].service}</p>
                  </div>
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#C86B46]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#C86B46] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Przejdź do opinii ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-200 pt-12 md:pt-16"
        >
          <p className="text-center text-sm md:text-base text-gray-500 mb-6 md:mb-8 uppercase tracking-wider">
            Współpracujemy z najlepszymi markami
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-12 md:h-16 w-auto"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;

