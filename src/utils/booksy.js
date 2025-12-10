/**
 * Opens Booksy widget by clicking the actual Booksy widget button
 * Based on Booksy's standard implementation from their script
 */
export const openBooksyWidget = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const booksyUrl = 'https://booksy.com/pl-pl/dl/show-business/263937';

  // Simple function to click the Booksy button
  const clickBooksyButton = () => {
    // Find the widget button - Booksy creates: <div class="booksy-widget-button"></div>
    const widgetButton = document.querySelector('.booksy-widget-button');
    
    if (widgetButton) {
      // Force it to be visible and clickable
      const originalStyles = {
        display: widgetButton.style.display,
        visibility: widgetButton.style.visibility,
        opacity: widgetButton.style.opacity,
        pointerEvents: widgetButton.style.pointerEvents,
        position: widgetButton.style.position
      };

      // Make it visible
      widgetButton.style.cssText = `
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
        position: fixed !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        z-index: 99999 !important;
        width: auto !important;
        height: auto !important;
      `;
      
      // Click it multiple ways
      try {
        // Direct click
        widgetButton.click();
        
        // Dispatch click event
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
          buttons: 1
        });
        widgetButton.dispatchEvent(clickEvent);
        
        // Also try mousedown/mouseup
        widgetButton.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
        widgetButton.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true }));
        
        return true;
      } catch (error) {
        console.log('Error clicking Booksy button:', error);
      }
    }

    // Fallback: Try business link
    const businessLink = document.querySelector('a.booksy-business-link[href*="booksy.com"]');
    if (businessLink) {
      try {
        businessLink.target = '_self';
        businessLink.click();
        return true;
      } catch (error) {
        console.log('Error clicking business link:', error);
      }
    }

    return false;
  };

  // Try immediately
  if (clickBooksyButton()) {
    return;
  }

  // Wait for Booksy script to load (check every 200ms, max 3 seconds)
  let attempts = 0;
  const maxAttempts = 15;
  const checkInterval = setInterval(() => {
    attempts++;
    if (clickBooksyButton()) {
      clearInterval(checkInterval);
    } else if (attempts >= maxAttempts) {
      clearInterval(checkInterval);
      // Final fallback: open Booksy page
      window.open(booksyUrl, '_blank', 'noopener,noreferrer');
    }
  }, 200);
};

/**
 * Closes Booksy widget
 */
export const closeBooksyWidget = () => {
  if (window.BooksyWidget && typeof window.BooksyWidget.close === 'function') {
    try {
      window.BooksyWidget.close();
      return;
    } catch (error) {
      console.log('BooksyWidget.close() failed:', error);
    }
  }
  
  const dialog = document.querySelector('.booksy-widget-container-dialog');
  if (dialog) {
    dialog.style.display = 'none';
    dialog.style.visibility = 'hidden';
    dialog.style.opacity = '0';
    dialog.style.pointerEvents = 'none';
  }
};
