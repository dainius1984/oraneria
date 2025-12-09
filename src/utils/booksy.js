/**
 * Opens the Booksy booking widget
 * Tries multiple methods to ensure compatibility, especially on mobile
 */
export const openBooksyWidget = () => {
  const tryOpen = () => {
    // Method 1: Try BooksyWidget API (if available)
    if (window.BooksyWidget && typeof window.BooksyWidget.open === 'function') {
      try {
        window.BooksyWidget.open();
        return true;
      } catch (e) {
        console.log('BooksyWidget.open() failed:', e);
      }
    }

    // Method 2: Try Booksy global function (alternative API)
    if (window.Booksy && typeof window.Booksy.open === 'function') {
      try {
        window.Booksy.open();
        return true;
      } catch (e) {
        console.log('Booksy.open() failed:', e);
      }
    }

    // Method 3: Try to find and click the Booksy floating button (even if hidden)
    const booksySelectors = [
      '[data-booksy-widget]',
      '.booksy-widget-button',
      '[id*="booksy"]',
      '[class*="booksy-widget"]',
      'a[href*="booksy.com"]'
    ];

    for (const selector of booksySelectors) {
      try {
        const booksyButton = document.querySelector(selector);
        if (booksyButton && !booksyButton.classList.contains('booksy-business-link')) {
          // Temporarily show and click it
          const originalDisplay = booksyButton.style.display;
          booksyButton.style.display = 'block';
          booksyButton.style.visibility = 'visible';
          booksyButton.style.opacity = '1';
          booksyButton.click();
          // Hide it again after a short delay
          setTimeout(() => {
            booksyButton.style.display = originalDisplay;
          }, 100);
          return true;
        }
      } catch (e) {
        // Continue to next method
      }
    }

    // Method 4: Try to trigger Booksy iframe or embed
    try {
      const booksyIframe = document.querySelector('iframe[src*="booksy.com"]');
      if (booksyIframe && booksyIframe.contentWindow) {
        booksyIframe.contentWindow.postMessage('open', '*');
        return true;
      }
    } catch (e) {
      // Continue to fallback
    }

    return false;
  };

  // Try immediately
  if (tryOpen()) {
    return;
  }

  // If widget not ready, wait a bit and try again (for slow loading)
  setTimeout(() => {
    if (!tryOpen()) {
      // If still not working, use direct link
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const booksyUrl = 'https://booksy.com/pl-pl/dl/show-business/263937';
      
      if (isMobile) {
        // On mobile, open in same window for better UX
        window.location.href = booksyUrl;
      } else {
        // On desktop, open in new tab
        window.open(booksyUrl, '_blank');
      }
    }
  }, 500);
};
