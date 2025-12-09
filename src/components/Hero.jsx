import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/video/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#C86B46]/20" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-8 pt-20 pb-32">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={videoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={videoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Naturalne Piękno w Twoim Rytmie
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={videoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            className="text-lg md:text-xl lg:text-2xl text-[#FFFBF7] font-light max-w-2xl mx-auto leading-relaxed"
          >
            Odkryj miejsce, gdzie nowoczesna kosmetologia spotyka energię natury.
          </motion.p>
        </motion.div>
      </div>

      {/* Glassmorphism CTA Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={videoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-8 pb-6 md:pb-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FFFAF5]/80 backdrop-blur-md rounded-2xl px-6 md:px-8 py-4 md:py-5 shadow-2xl border border-orange-100/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* CTA Button */}
              <motion.a
                href="#rezerwacja"
                className="w-full sm:w-auto px-8 py-3 md:py-3.5 rounded-full text-white font-light text-sm md:text-base tracking-[0.1em] uppercase shadow-lg text-center"
                style={{ backgroundColor: '#C86B46', fontFamily: 'Playfair Display, serif', letterSpacing: '0.15em' }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#E08D6D',
                  boxShadow: '0 10px 25px rgba(200, 107, 70, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Umów Wizytę
              </motion.a>

              {/* Promocje Link */}
              <motion.a
                href="#promocje"
                className="text-[#2F4F4F] font-light text-sm md:text-base tracking-[0.1em] uppercase hover:text-[#C86B46] transition-colors cursor-pointer"
                style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.15em' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sprawdź Promocje
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

