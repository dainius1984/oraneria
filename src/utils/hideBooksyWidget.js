/**
 * Hide Booksy floating widget button (but keep widget container functional)
 * We only hide the visible floating button, not the widget container itself
 * This allows our custom buttons to trigger the widget dialog
 */
export const hideBooksyWidget = () => {
  // Function to hide only the floating button, not the widget container
  const hideFloatingButton = () => {
    // Find all widget containers
    const widgetContainers = document.querySelectorAll('.booksy-widget-container');
    
    widgetContainers.forEach(widgetContainer => {
      if (!widgetContainer) return;
      
      const style = window.getComputedStyle(widgetContainer);
      
      // If the container is positioned fixed at the bottom (floating button), hide it
      if (style.position === 'fixed' || style.position === 'absolute') {
        const bottom = parseInt(style.bottom) || 0;
        const right = parseInt(style.right) || 0;
        
        // Hide floating buttons (typically at bottom-right or bottom)
        if (bottom >= 0 && (right >= 0 || style.right === 'auto')) {
          widgetContainer.style.opacity = '0';
          widgetContainer.style.pointerEvents = 'none';
          widgetContainer.style.visibility = 'hidden';
          widgetContainer.style.display = 'none'; // Completely hide floating buttons
        }
      }
    });

    // Hide any standalone floating buttons
    const floatingButtons = document.querySelectorAll('.booksy-widget-button');
    floatingButtons.forEach(button => {
      const container = button.closest('.booksy-widget-container');
      if (container) {
        const containerStyle = window.getComputedStyle(container);
        
        // If it's in a fixed container at bottom, hide it completely
        if ((containerStyle.position === 'fixed' || containerStyle.position === 'absolute') &&
            parseInt(containerStyle.bottom) >= 0) {
          button.style.display = 'none';
          button.style.visibility = 'hidden';
          button.style.opacity = '0';
          button.style.pointerEvents = 'none';
        }
      } else {
        // Standalone button, check if it's floating
        const buttonStyle = window.getComputedStyle(button);
        if ((buttonStyle.position === 'fixed' || buttonStyle.position === 'absolute') &&
            parseInt(buttonStyle.bottom) >= 0) {
          button.style.display = 'none';
          button.style.visibility = 'hidden';
          button.style.opacity = '0';
          button.style.pointerEvents = 'none';
        }
      }
    });

    // Hide any other floating Booksy elements (like iframes)
    const selectors = [
      'iframe[src*="booksy.com"]',
      '[data-booksy-widget]'
    ];

    selectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          // Only hide if it's positioned fixed at bottom (floating)
          const style = window.getComputedStyle(el);
          if ((style.position === 'fixed' || style.position === 'absolute') &&
              parseInt(style.bottom) >= 0) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';
          }
        });
      } catch (e) {
        // Ignore errors
      }
    });

    // Hide any fixed positioned divs at the bottom that contain "rezerwuj" or "booksy"
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
      // Skip our custom buttons
      if (div.classList.contains('booksy-business-link') || 
          div.querySelector('.booksy-business-link')) {
        return;
      }
      
      const style = window.getComputedStyle(div);
      const text = div.textContent?.toLowerCase() || '';
      const className = div.className?.toLowerCase() || '';
      
      // Hide floating elements at bottom that are Booksy-related
      if ((style.position === 'fixed' || style.position === 'absolute') &&
          parseInt(style.bottom) >= 0 &&
          (text.includes('rezerwuj') || 
           text.includes('booksy') ||
           className.includes('booksy') ||
           className.includes('rezerw'))) {
        div.style.display = 'none';
        div.style.visibility = 'hidden';
        div.style.opacity = '0';
        div.style.pointerEvents = 'none';
      }
    });
  };

  // Run immediately
  hideFloatingButton();

  // Run after delays to catch dynamically loaded elements
  setTimeout(hideFloatingButton, 500);
  setTimeout(hideFloatingButton, 1000);
  setTimeout(hideFloatingButton, 2000);
  setTimeout(hideFloatingButton, 3000);

  // Use MutationObserver to catch elements added dynamically
  if (typeof window !== 'undefined' && window.MutationObserver) {
    const observer = new MutationObserver(() => {
      hideFloatingButton();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
};

