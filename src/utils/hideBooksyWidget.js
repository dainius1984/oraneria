/**
 * Hide Booksy floating widget after it loads
 * This ensures the widget is hidden even if CSS doesn't catch it
 */
export const hideBooksyWidget = () => {
  // Function to hide Booksy elements
  const hideBooksyElements = () => {
    // Find all possible Booksy widget elements
    const selectors = [
      '[id*="booksy"]',
      '[id*="Booksy"]',
      '[class*="booksy-widget"]',
      '[class*="booksy-button"]',
      '[class*="BooksyWidget"]',
      'iframe[src*="booksy.com"]',
      '[data-booksy-widget]'
    ];

    selectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el && !el.classList.contains('booksy-business-link')) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.style.height = '0';
            el.style.width = '0';
            el.style.pointerEvents = 'none';
          }
        });
      } catch (e) {
        // Ignore errors
      }
    });

    // Also check for fixed positioned elements at bottom (common for floating widgets)
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
      const style = window.getComputedStyle(div);
      if (
        (style.position === 'fixed' || style.position === 'absolute') &&
        (style.bottom !== 'auto' && parseInt(style.bottom) >= 0) &&
        (div.textContent?.toLowerCase().includes('booksy') || 
         div.id?.toLowerCase().includes('booksy') ||
         div.className?.toLowerCase().includes('booksy'))
      ) {
        div.style.display = 'none';
        div.style.visibility = 'hidden';
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

