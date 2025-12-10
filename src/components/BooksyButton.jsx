import { motion } from 'framer-motion';
import { openBooksyWidget } from '../utils/booksy';

const BooksyButton = ({ 
  text = 'Umów Wizytę', 
  variant = 'primary',
  className = '',
  size = 'default',
  centered = false
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openBooksyWidget(e);
  };

  const baseStyles = {
    primary: {
      backgroundColor: '#C86B46',
      color: 'white',
      fontFamily: 'Playfair Display, serif',
      letterSpacing: '0.1em',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#C86B46',
      border: '2px solid #C86B46',
      fontFamily: 'Playfair Display, serif',
      letterSpacing: '0.1em',
    }
  };

  const sizeStyles = {
    small: 'px-6 py-2.5 text-sm',
    default: 'px-8 md:px-12 py-4 md:py-5 text-base md:text-lg',
    large: 'px-10 md:px-16 py-5 md:py-6 text-lg md:text-xl'
  };

  const buttonClasses = `
    booksy-business-link
    rounded-full
    font-medium
    tracking-wide
    uppercase
    shadow-xl
    cursor-pointer
    relative
    overflow-hidden
    transition-all
    duration-300
    ${sizeStyles[size]}
    ${centered ? 'mx-auto block' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const hoverStyles = variant === 'primary' 
    ? { 
        scale: 1.05,
        backgroundColor: '#E08D6D',
        boxShadow: '0 15px 35px rgba(200, 107, 70, 0.4)'
      }
    : {
        scale: 1.05,
        backgroundColor: '#C86B46',
        color: 'white',
        boxShadow: '0 15px 35px rgba(200, 107, 70, 0.4)'
      };

  return (
    <motion.button
      onClick={handleClick}
      className={buttonClasses}
      style={baseStyles[variant]}
      whileHover={hoverStyles}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <span className="relative z-10">{text}</span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut'
          }}
        />
      )}
    </motion.button>
  );
};

export default BooksyButton;

