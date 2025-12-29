import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import BooksyButton from './BooksyButton';

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

      {/* Enhanced Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-8 pt-20 pb-20">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={videoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Headline with Enhanced Text Shadow */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={videoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            Naturalne Piękno w Twoim Rytmie
          </motion.h1>

          {/* Subheadline with Enhanced Readability */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={videoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            className="text-lg md:text-xl lg:text-2xl text-white font-light max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10"
            style={{
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Odkryj miejsce, gdzie nowoczesna kosmetologia spotyka energię natury.
          </motion.p>

          {/* Enhanced CTA Button with High Contrast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={videoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.9, ease: 'easeOut' },
              y: { duration: 0.8, delay: 0.9, ease: 'easeOut' }
            }}
            className="flex justify-center"
          >
            <div className="relative">
              <BooksyButton 
                text="Umów Wizytę" 
                variant="primary"
                size="large"
                centered={true}
                className="shadow-2xl hover:shadow-[#C86B46]/50 transition-shadow duration-300"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

