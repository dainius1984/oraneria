import { openBooksyWidget, openBooksyPage } from '../utils/booksy';

const BooksyButton = ({ 
  text = 'Umów Wizytę', 
  variant = 'primary',
  className = '',
  size = 'default',
  centered = false,
  action = 'widget' // 'widget' or 'page' - widget opens modal, page opens URL
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (action === 'page') {
      openBooksyPage(e);
    } else {
      openBooksyWidget(e);
    }
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
      className={`${baseClasses} hover:scale-105 active:scale-95`}
      style={buttonStyles}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.backgroundColor = '#C86B46';
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 8px 20px rgba(200, 107, 70, 0.4)';
        } else {
          e.target.style.backgroundColor = '#C86B46';
          e.target.style.color = 'white';
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 8px 20px rgba(200, 107, 70, 0.3)';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.target.style.backgroundColor = '#B85C3A';
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        } else {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#C86B46';
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }
      }}
    >
      {text}
    </button>
  );
};

export default BooksyButton;
