/**
 * Applies website theme styling to Booksy widget
 * This runs when the widget is loaded/opened
 */
export const styleBooksyWidget = () => {
  const applyStyles = () => {
    // Find the widget dialog/container
    const widgetDialog = document.querySelector('.booksy-widget-container-dialog');
    
    if (widgetDialog) {
      // Apply theme colors to overlay
      const overlay = widgetDialog.querySelector('[class*="overlay"], [class*="backdrop"]') || widgetDialog;
      if (overlay) {
        overlay.style.backgroundColor = 'rgba(47, 79, 79, 0.85)'; // Dark Slate Green
        overlay.style.backdropFilter = 'blur(4px)';
      }

      // Apply styles to dialog content
      const content = widgetDialog.querySelector('[class*="content"], [class*="dialog"] > div') || widgetDialog.firstElementChild;
      if (content) {
        content.style.backgroundColor = '#FFFAF5'; // Warm Alabaster
        content.style.borderRadius = '16px';
        content.style.boxShadow = '0 20px 60px rgba(47, 79, 79, 0.3)';
      }
    }

    // Style all buttons
    const buttons = document.querySelectorAll('[class*="booksy"] button, [class*="booksy"] [class*="button"]');
    buttons.forEach(button => {
      const buttonText = button.textContent?.toLowerCase() || '';
      const buttonClasses = button.className?.toLowerCase() || '';
      
      // Style primary/submit buttons
      if (button.type === 'submit' || 
          buttonClasses.includes('primary') || 
          buttonClasses.includes('submit') ||
          buttonText.includes('rezerwuj') ||
          buttonText.includes('book') ||
          buttonText.includes('zapisz')) {
        button.style.backgroundColor = '#C86B46'; // Terracotta Orange
        button.style.color = 'white';
        button.style.borderColor = '#C86B46';
        button.style.borderRadius = '9999px';
        button.style.fontFamily = 'Playfair Display, serif';
        button.style.transition = 'all 0.3s ease';
        
        // Add hover effect
        button.addEventListener('mouseenter', () => {
          button.style.backgroundColor = '#E08D6D'; // Soft Terracotta
          button.style.transform = 'translateY(-1px)';
          button.style.boxShadow = '0 4px 12px rgba(200, 107, 70, 0.4)';
        });
        
        button.addEventListener('mouseleave', () => {
          button.style.backgroundColor = '#C86B46';
          button.style.transform = 'translateY(0)';
          button.style.boxShadow = 'none';
        });
      }
    });

    // Style headings
    const headings = document.querySelectorAll('[class*="booksy"] h1, [class*="booksy"] h2, [class*="booksy"] h3, [class*="booksy"] h4, [class*="booksy"] [class*="title"]');
    headings.forEach(heading => {
      heading.style.color = '#2F4F4F'; // Dark Slate Green
      heading.style.fontFamily = 'Playfair Display, serif';
    });

    // Style inputs
    const inputs = document.querySelectorAll('[class*="booksy"] input, [class*="booksy"] select, [class*="booksy"] textarea');
    inputs.forEach(input => {
      input.style.borderColor = '#C86B46';
      input.style.borderRadius = '8px';
      input.style.color = '#2F4F4F';
      
      input.addEventListener('focus', () => {
        input.style.borderColor = '#C86B46';
        input.style.boxShadow = '0 0 0 3px rgba(200, 107, 70, 0.1)';
        input.style.outline = 'none';
      });
      
      input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
      });
    });

    // Style links
    const links = document.querySelectorAll('[class*="booksy"] a');
    links.forEach(link => {
      link.style.color = '#C86B46';
      link.style.transition = 'color 0.3s ease';
      
      link.addEventListener('mouseenter', () => {
        link.style.color = '#E08D6D';
      });
      
      link.addEventListener('mouseleave', () => {
        link.style.color = '#C86B46';
      });
    });
  };

  // Run immediately
  applyStyles();

  // Use MutationObserver to apply styles when widget content is added
  const observer = new MutationObserver(() => {
    applyStyles();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Also run after delays to catch dynamically loaded content
  setTimeout(applyStyles, 500);
  setTimeout(applyStyles, 1000);
  setTimeout(applyStyles, 2000);

  return observer;
};

