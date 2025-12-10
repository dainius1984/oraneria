/**
 * Booksy Business URL - Direct link to Booksy booking page
 * This opens in a new tab/window
 */
export const BOOKSY_BUSINESS_URL = 'https://booksy.com/pl-pl/dl/show-business/263937';

/**
 * Opens Booksy widget (modal/dialog on the page)
 * This is different from the URL - widget opens without leaving the page
 * Based on Booksy's standard implementation from their script
 */
export const openBooksyWidget = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // Debug: Check what Booksy created
  const debugBooksy = () => {
    console.log('=== Booksy Debug ===');
    console.log('window.BooksyWidget:', window.BooksyWidget);
    console.log('window.Booksy:', window.Booksy);
    console.log('window.openBooksyWidget:', window.openBooksyWidget);
    
    const widgetButton = document.querySelector('.booksy-widget-button');
    const widgetContainer = document.querySelector('.booksy-widget-container');
    const businessLink = document.querySelector('a.booksy-business-link');
    const dialog = document.querySelector('.booksy-widget-container-dialog');
    
    console.log('.booksy-widget-button:', widgetButton);
    console.log('.booksy-widget-container:', widgetContainer);
    console.log('a.booksy-business-link:', businessLink);
    console.log('.booksy-widget-container-dialog:', dialog);
    
    if (widgetButton) {
      console.log('Widget button styles:', window.getComputedStyle(widgetButton));
      console.log('Widget button display:', widgetButton.style.display);
    }
  };

  // Simple function to open Booksy widget
  const openWidget = () => {
    // Method 1: Try Booksy API if available
    if (window.BooksyWidget && typeof window.BooksyWidget.open === 'function') {
      try {
        console.log('Using BooksyWidget.open()');
        window.BooksyWidget.open();
        return true;
      } catch (error) {
        console.log('BooksyWidget.open() failed:', error);
      }
    }

    if (window.Booksy && typeof window.Booksy.open === 'function') {
      try {
        console.log('Using Booksy.open()');
        window.Booksy.open();
        return true;
      } catch (error) {
        console.log('Booksy.open() failed:', error);
      }
    }

    if (typeof window.openBooksyWidget === 'function') {
      try {
        console.log('Using window.openBooksyWidget()');
        window.openBooksyWidget();
        return true;
      } catch (error) {
        console.log('window.openBooksyWidget() failed:', error);
      }
    }

    // Method 2: Show the dialog directly (it's already in DOM)
    const dialog = document.querySelector('.booksy-widget-container-dialog');
    if (dialog) {
      console.log('Found dialog, showing it directly');
      try {
        // Show the dialog
        dialog.style.display = 'block';
        dialog.style.visibility = 'visible';
        dialog.style.opacity = '1';
        dialog.style.pointerEvents = 'auto';
        dialog.style.position = 'fixed';
        dialog.style.top = '0';
        dialog.style.left = '0';
        dialog.style.width = '100%';
        dialog.style.height = '100%';
        dialog.style.zIndex = '99999';
        
        // Also try to trigger any iframes inside
        const iframe = dialog.querySelector('iframe[src*="booksy.com"]');
        if (iframe) {
          iframe.style.display = 'block';
          iframe.style.visibility = 'visible';
          iframe.style.opacity = '1';
        }
        
        return true;
      } catch (error) {
        console.log('Error showing dialog:', error);
      }
    }

    // Method 3: Try clicking the widget button
    const widgetButton = document.querySelector('.booksy-widget-button');
    if (widgetButton) {
      console.log('Found .booksy-widget-button, attempting to click');
      try {
        // Make it visible temporarily
        const originalStyles = {
          display: widgetButton.style.display,
          visibility: widgetButton.style.visibility,
          opacity: widgetButton.style.opacity,
          pointerEvents: widgetButton.style.pointerEvents
        };
        
        widgetButton.style.display = 'block';
        widgetButton.style.visibility = 'visible';
        widgetButton.style.opacity = '1';
        widgetButton.style.pointerEvents = 'auto';
        
        // Click it
        widgetButton.click();
        
        // Restore after a moment
        setTimeout(() => {
          widgetButton.style.display = originalStyles.display;
          widgetButton.style.visibility = originalStyles.visibility;
          widgetButton.style.opacity = originalStyles.opacity;
          widgetButton.style.pointerEvents = originalStyles.pointerEvents;
        }, 100);
        
        return true;
      } catch (error) {
        console.log('Error clicking widget button:', error);
      }
    }

    // Method 4: Try business link (but change target to _self so widget can intercept)
    const businessLink = document.querySelector('a.booksy-business-link[href*="booksy.com"]');
    if (businessLink) {
      console.log('Found business link, clicking with _self target');
      try {
        const originalTarget = businessLink.target;
        businessLink.target = '_self';
        businessLink.click();
        // Restore after a moment
        setTimeout(() => {
          businessLink.target = originalTarget;
        }, 100);
        return true;
      } catch (error) {
        console.log('Error clicking business link:', error);
      }
    }

    return false;
  };

  // Debug first
  debugBooksy();

  // Try immediately
  if (openWidget()) {
    return;
  }

  // Wait for Booksy script to load (check every 200ms, max 3 seconds)
  let attempts = 0;
  const maxAttempts = 15;
  const checkInterval = setInterval(() => {
    attempts++;
    
    if (attempts === 1) {
      console.log('Waiting for Booksy script to load...');
    }
    
    if (openWidget()) {
      clearInterval(checkInterval);
    } else if (attempts >= maxAttempts) {
      clearInterval(checkInterval);
      console.log('Booksy widget not found after', maxAttempts * 200, 'ms. Opening Booksy page directly.');
      debugBooksy(); // Final debug
      // Final fallback: open Booksy page (URL, not widget)
      window.open(BOOKSY_BUSINESS_URL, '_blank', 'noopener,noreferrer');
    }
  }, 200);
};

/**
 * Opens Booksy page directly (URL in new tab)
 * This is different from the widget - opens the full Booksy booking page
 */
export const openBooksyPage = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  window.open(BOOKSY_BUSINESS_URL, '_blank', 'noopener,noreferrer');
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
