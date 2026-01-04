import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Anna K.',
      text: 'Fantastyczne miejsce! Profesjonalna obsługa i wspaniałe efekty. Polecam każdemu!',
      rating: 5
    },
    {
      id: 2,
      name: 'Magdalena W.',
      text: 'Najlepszy salon w mieście. Atmosfera jest niesamowita, a efekty zabiegów przekraczają oczekiwania.',
      rating: 5
    },
    {
      id: 3,
      name: 'Katarzyna M.',
      text: 'Zespół ORANŻERII to prawdziwi profesjonaliści. Czułam się zaopiekowana na każdym etapie.',
      rating: 5
    },
    {
      id: 4,
      name: 'Joanna P.',
      text: 'Rewelacyjne zabiegi i indywidualne podejście. Wróciłam do siebie i czuję się pięknie!',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">
            Co mówią nasi klienci
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative min-h-[300px] md:min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="bg-[#FFFAF5] rounded-2xl p-8 md:p-10 shadow-lg border border-orange-100/50"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <svg 
                  className="w-12 h-12 text-[#C86B46]/30" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <p 
                className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-6 italic"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                "{testimonials[currentIndex].text}"
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
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

              {/* Author Name */}
              <p className="text-center text-[#2F4F4F] font-semibold">
                {testimonials[currentIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#C86B46] w-8' 
                    : 'bg-[#C86B46]/30 hover:bg-[#C86B46]/50'
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

