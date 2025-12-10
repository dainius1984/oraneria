/**
 * Simple function to open Booksy widget
 * Tries multiple methods to ensure it works
 */
export const openBooksyWidget = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const booksyUrl = 'https://booksy.com/pl-pl/dl/show-business/263937';

  // Method 1: Try Booksy API if available
  if (window.BooksyWidget && typeof window.BooksyWidget.open === 'function') {
    try {
      window.BooksyWidget.open();
      return;
    } catch (error) {
      console.log('BooksyWidget.open() failed:', error);
    }
  }

  if (window.Booksy && typeof window.Booksy.open === 'function') {
    try {
      window.Booksy.open();
      return;
    } catch (error) {
      console.log('Booksy.open() failed:', error);
    }
  }

  // Method 2: Find and click the actual Booksy widget button
  const findAndClickBooksyButton = () => {
    // Look for the widget button
    const widgetButton = document.querySelector('.booksy-widget-button');
    if (widgetButton) {
      try {
        // Make it visible and clickable
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
        console.log('Failed to click widget button:', error);
      }
    }

    // Try the business link
    const businessLink = document.querySelector('a.booksy-business-link[href*="booksy.com"]');
    if (businessLink) {
      try {
        businessLink.target = '_self';
        businessLink.click();
        return true;
      } catch (error) {
        console.log('Failed to click business link:', error);
      }
    }

    return false;
  };

  // Try immediately
  if (findAndClickBooksyButton()) {
    return;
  }

  // Wait a bit and try again (script might still be loading)
  setTimeout(() => {
    if (!findAndClickBooksyButton()) {
      // Final fallback: open Booksy page
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = booksyUrl;
      } else {
        window.open(booksyUrl, '_blank', 'noopener,noreferrer');
      }
    }
  }, 500);
};

/**
 * Closes the Booksy widget
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

  if (window.Booksy && typeof window.Booksy.close === 'function') {
    try {
      window.Booksy.close();
      return;
    } catch (error) {
      console.log('Booksy.close() failed:', error);
    }
  }

  // Hide dialog manually
  const dialog = document.querySelector('.booksy-widget-container-dialog');
  if (dialog) {
    dialog.style.display = 'none';
    dialog.style.visibility = 'hidden';
    dialog.style.opacity = '0';
    dialog.style.pointerEvents = 'none';
  }
};

