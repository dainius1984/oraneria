/**
 * Opens the Booksy booking widget
 * Tries multiple methods to ensure compatibility
 */
export const openBooksyWidget = () => {
  // Method 1: Try BooksyWidget API (if available)
  if (window.BooksyWidget && typeof window.BooksyWidget.open === 'function') {
    window.BooksyWidget.open();
    return;
  }

  // Method 2: Try Booksy global function (alternative API)
  if (window.Booksy && typeof window.Booksy.open === 'function') {
    window.Booksy.open();
    return;
  }

  // Method 3: Try to find and click the Booksy floating button
  const booksyButton = document.querySelector('[data-booksy-widget]') || 
                       document.querySelector('.booksy-widget-button') ||
                       document.querySelector('a[href*="booksy.com"]');
  
  if (booksyButton) {
    booksyButton.click();
    return;
  }

  // Method 4: Fallback to direct link
  window.open('https://booksy.com/pl-pl/dl/show-business/263937', '_blank');
};

