/**
 * Opens Booksy widget by clicking the actual Booksy widget button
 * Based on Booksy's standard implementation
 */
export const openBooksyWidget = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // Wait for Booksy script to load, then click the button
  const tryClickBooksyButton = () => {
    // Find the Booksy widget button that Booksy creates
    const booksyButton = document.querySelector('.booksy-widget-button');
    
    if (booksyButton) {
      // Temporarily make it visible and clickable
      const wasHidden = booksyButton.style.display === 'none' || 
                       booksyButton.style.visibility === 'hidden' ||
                       booksyButton.style.opacity === '0';
      
      if (wasHidden) {
        booksyButton.style.display = 'block';
        booksyButton.style.visibility = 'visible';
        booksyButton.style.opacity = '1';
        booksyButton.style.pointerEvents = 'auto';
      }
      
      // Click it
      booksyButton.click();
      
      return true;
    }
    
    // Fallback: try the business link
    const businessLink = document.querySelector('a.booksy-business-link[href*="booksy.com"]');
    if (businessLink) {
      businessLink.click();
      return true;
    }
    
    return false;
  };

  // Try immediately
  if (tryClickBooksyButton()) {
    return;
  }

  // Wait a bit for script to load
  setTimeout(() => {
    if (!tryClickBooksyButton()) {
      // Final fallback: open Booksy page
      window.open('https://booksy.com/pl-pl/dl/show-business/263937', '_blank', 'noopener,noreferrer');
    }
  }, 300);
};

/**
 * Closes Booksy widget
 */
export const closeBooksyWidget = () => {
  if (window.BooksyWidget && typeof window.BooksyWidget.close === 'function') {
    window.BooksyWidget.close();
    return;
  }
  
  const dialog = document.querySelector('.booksy-widget-container-dialog');
  if (dialog) {
    dialog.style.display = 'none';
  }
};
