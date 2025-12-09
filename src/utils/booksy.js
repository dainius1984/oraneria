/**
 * Opens the Booksy booking widget
 * Tries multiple methods to trigger the widget dialog
 */
export const openBooksyWidget = (e) => {
  // Prevent default if it's an event
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const booksyUrl = 'https://booksy.com/pl-pl/dl/show-business/263937';

  // Method 1: Try to click the Booksy widget button directly
  // This is the most reliable way to open the widget dialog
  const booksyButton = document.querySelector('.booksy-widget-button');
  if (booksyButton) {
    try {
      booksyButton.click();
      return;
    } catch (error) {
      console.log('Booksy button click failed:', error);
    }
  }

  // Method 2: Try Booksy widget API (if available)
  if (window.BooksyWidget && typeof window.BooksyWidget.open === 'function') {
    try {
      window.BooksyWidget.open();
      return;
    } catch (error) {
      console.log('BooksyWidget.open() failed:', error);
    }
  }

  // Method 3: Try alternative API
  if (window.Booksy && typeof window.Booksy.open === 'function') {
    try {
      window.Booksy.open();
      return;
    } catch (error) {
      console.log('Booksy.open() failed:', error);
    }
  }

  // Method 4: Try to find and click the widget container
  const widgetContainer = document.querySelector('.booksy-widget-container');
  if (widgetContainer) {
    const button = widgetContainer.querySelector('.booksy-widget-button');
    if (button) {
      try {
        button.click();
        return;
      } catch (error) {
        console.log('Widget container button click failed:', error);
      }
    }
  }

  // Fallback: Open Booksy page directly
  // This ensures buttons always work even if widget fails
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = booksyUrl;
  } else {
    window.open(booksyUrl, '_blank', 'noopener,noreferrer');
  }
};
