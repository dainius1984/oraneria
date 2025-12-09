/**
 * Hide Booksy floating widget button (but keep widget container functional)
 * We only hide the visible floating button, not the widget container itself
 * This allows our custom buttons to trigger the widget dialog
 */
export const hideBooksyWidget = () => {
  // Function to hide only the floating button, not the widget container
  const hideFloatingButton = () => {
    // Find the widget container
    const widgetContainer = document.querySelector('.booksy-widget-container');
    
    if (widgetContainer) {
      // Hide only the visible floating button, but keep the container functional
      // The button inside can still be triggered programmatically
      const style = window.getComputedStyle(widgetContainer);
      
      // If the container is positioned fixed at the bottom, hide it visually
      // but keep it in the DOM so we can trigger it
      if (style.position === 'fixed' || style.position === 'absolute') {
        const bottom = parseInt(style.bottom) || 0;
        if (bottom >= 0) {
          // Hide visually but keep functional
          widgetContainer.style.opacity = '0';
          widgetContainer.style.pointerEvents = 'none';
          widgetContainer.style.visibility = 'hidden';
          // But don't set display: none so we can still click the button inside
        }
      }
    }

    // Also hide any standalone floating buttons
    const floatingButtons = document.querySelectorAll('.booksy-widget-button');
    floatingButtons.forEach(button => {
      const container = button.closest('.booksy-widget-container');
      const containerStyle = container ? window.getComputedStyle(container) : null;
      
      // If it's in a fixed container at bottom, hide it visually
      if (containerStyle && 
          (containerStyle.position === 'fixed' || containerStyle.position === 'absolute') &&
          parseInt(containerStyle.bottom) >= 0) {
        button.style.opacity = '0';
        button.style.pointerEvents = 'none';
        button.style.visibility = 'hidden';
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
          // Only hide if it's positioned fixed at bottom
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
  };

  // Run immediately
  hideBooksyElements();

  // Run after a delay to catch dynamically loaded elements
  setTimeout(hideBooksyElements, 1000);
  setTimeout(hideBooksyElements, 3000);

  // Use MutationObserver to catch elements added dynamically
  if (typeof window !== 'undefined' && window.MutationObserver) {
    const observer = new MutationObserver(() => {
      hideBooksyElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
};

