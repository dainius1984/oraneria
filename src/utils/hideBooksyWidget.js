/**
 * Hide Booksy floating widget button (but keep widget container functional)
 * We only hide the visible floating button, not the widget container itself
 * This allows our custom buttons to trigger the widget dialog
 */
export const hideBooksyWidget = () => {
  // Function to hide only the floating button, not the widget container or dialog
  const hideFloatingButton = () => {
    // Find all widget containers
    const widgetContainers = document.querySelectorAll('.booksy-widget-container');
    
    widgetContainers.forEach(widgetContainer => {
      if (!widgetContainer) return;
      
      // DON'T hide dialog containers - they need to be visible when opened
      if (widgetContainer.classList.contains('booksy-widget-container-dialog')) {
        return;
      }
      
      const style = window.getComputedStyle(widgetContainer);
      
      // Only hide if it's a floating button (fixed at bottom, small size)
      if (style.position === 'fixed' || style.position === 'absolute') {
        const bottom = parseInt(style.bottom) || 0;
        const right = parseInt(style.right) || 0;
        const width = parseInt(style.width) || 0;
        const height = parseInt(style.height) || 0;
        
        // Hide only small floating buttons (not dialogs which are larger)
        // Floating buttons are typically small (less than 200px width/height)
        if (bottom >= 0 && (right >= 0 || style.right === 'auto') && 
            (width < 200 && height < 200)) {
          widgetContainer.style.opacity = '0';
          widgetContainer.style.pointerEvents = 'none';
          widgetContainer.style.visibility = 'hidden';
          widgetContainer.style.display = 'none';
        }
      }
    });

    // Hide floating buttons, but keep them functional for clicking
    // We'll hide them visually but keep them in DOM so we can trigger them
    const floatingButtons = document.querySelectorAll('.booksy-widget-button');
    floatingButtons.forEach(button => {
      const container = button.closest('.booksy-widget-container');
      
      // Don't hide buttons inside dialog containers
      if (container && container.classList.contains('booksy-widget-container-dialog')) {
        return;
      }
      
      if (container) {
        const containerStyle = window.getComputedStyle(container);
        const containerWidth = parseInt(containerStyle.width) || 0;
        const containerHeight = parseInt(containerStyle.height) || 0;
        
        // Only hide if it's a small floating button (not a dialog)
        if ((containerStyle.position === 'fixed' || containerStyle.position === 'absolute') &&
            parseInt(containerStyle.bottom) >= 0 &&
            containerWidth < 200 && containerHeight < 200) {
          // Hide visually but keep functional
          button.style.opacity = '0';
          button.style.visibility = 'hidden';
          button.style.pointerEvents = 'none';
          // Don't set display: none - keep in DOM for programmatic access
        }
      } else {
        // Standalone button, check if it's floating
        const buttonStyle = window.getComputedStyle(button);
        const buttonWidth = parseInt(buttonStyle.width) || 0;
        const buttonHeight = parseInt(buttonStyle.height) || 0;
        
        if ((buttonStyle.position === 'fixed' || buttonStyle.position === 'absolute') &&
            parseInt(buttonStyle.bottom) >= 0 &&
            buttonWidth < 200 && buttonHeight < 200) {
          button.style.opacity = '0';
          button.style.visibility = 'hidden';
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

