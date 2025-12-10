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

  // Simple size classes
  const sizeClasses = {
    small: 'px-6 py-2.5 text-sm',
    default: 'px-8 md:px-12 py-4 md:py-5 text-base md:text-lg',
    large: 'px-10 md:px-16 py-5 md:py-6 text-lg md:text-xl'
  };

  // Base button classes - minimal styling
  const baseClasses = `
    rounded-full
    font-medium
    cursor-pointer
    transition-all
    duration-200
    ${sizeClasses[size]}
    ${centered ? 'mx-auto block' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Simple inline styles
  const buttonStyles = variant === 'primary' 
    ? {
        backgroundColor: '#B85C3A',
        color: 'white',
        fontFamily: 'Playfair Display, serif',
        letterSpacing: '0.1em',
      }
    : {
        backgroundColor: 'transparent',
        color: '#C86B46',
        border: '2px solid #C86B46',
        fontFamily: 'Playfair Display, serif',
        letterSpacing: '0.1em',
      };

  return (
    <button
      onClick={handleClick}
      className={baseClasses}
      style={buttonStyles}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.backgroundColor = '#C86B46';
        } else {
          e.target.style.backgroundColor = '#C86B46';
          e.target.style.color = 'white';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.target.style.backgroundColor = '#B85C3A';
        } else {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#C86B46';
        }
      }}
    >
      {text}
    </button>
  );
};

export default BooksyButton;
