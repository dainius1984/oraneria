/**
 * Opens the Booksy booking widget
 * Uses the Booksy widget API if available, otherwise falls back to clicking the widget button
 */
export const openBooksyWidget = (e) => {
  // Prevent default if it's an event
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const booksyUrl = 'https://booksy.com/pl-pl/dl/show-business/263937';

  // Method 1: Try Booksy Widget API (if available)
  if (window.BooksyWidget && typeof window.BooksyWidget.open === 'function') {
    try {
      window.BooksyWidget.open();
      setTimeout(() => {
        setupClickOutsideHandler();
      }, 300);
      return;
    } catch (error) {
      console.log('BooksyWidget.open() failed:', error);
    }
  }

  // Method 2: Try alternative Booksy API
  if (window.Booksy && typeof window.Booksy.open === 'function') {
    try {
      window.Booksy.open();
      setTimeout(() => {
        setupClickOutsideHandler();
      }, 300);
      return;
    } catch (error) {
      console.log('Booksy.open() failed:', error);
    }
  }

  // Method 2.5: Try Booksy global function
  if (typeof window.openBooksyWidget === 'function') {
    try {
      window.openBooksyWidget();
      setTimeout(() => {
        setupClickOutsideHandler();
      }, 300);
      return;
    } catch (error) {
      console.log('window.openBooksyWidget() failed:', error);
    }
  }

  // Method 3: Find and click the Booksy widget button
  const tryOpenWidget = () => {
    // Look for Booksy widget button with multiple selectors
    const selectors = [
      '.booksy-widget-button',
      '[data-booksy-widget]',
      '[class*="booksy"][class*="button"]',
      '[id*="booksy"]',
      'a[href*="booksy.com"]',
      'button[onclick*="booksy"]'
    ];
    
    let booksyButton = null;
    for (const selector of selectors) {
      booksyButton = document.querySelector(selector);
      if (booksyButton) break;
    }
    
    if (booksyButton) {
      try {
        // Temporarily make button visible and clickable if it's hidden
        const originalDisplay = booksyButton.style.display;
        const originalVisibility = booksyButton.style.visibility;
        const originalOpacity = booksyButton.style.opacity;
        const originalPointerEvents = booksyButton.style.pointerEvents;
        const originalZIndex = booksyButton.style.zIndex;
        
        booksyButton.style.display = 'block';
        booksyButton.style.visibility = 'visible';
        booksyButton.style.opacity = '1';
        booksyButton.style.pointerEvents = 'auto';
        booksyButton.style.zIndex = '9999';
        booksyButton.style.position = 'fixed';
        
        // Create and dispatch click event
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        booksyButton.dispatchEvent(clickEvent);
        
        // Also try direct click
        if (typeof booksyButton.click === 'function') {
          booksyButton.click();
        }
        
        // Restore original styles after a brief moment
        setTimeout(() => {
          booksyButton.style.display = originalDisplay;
          booksyButton.style.visibility = originalVisibility;
          booksyButton.style.opacity = originalOpacity;
          booksyButton.style.pointerEvents = originalPointerEvents;
          booksyButton.style.zIndex = originalZIndex;
          if (!originalDisplay) {
            booksyButton.style.position = '';
          }
        }, 200);
        
        // Set up click-outside handler
        setTimeout(() => {
          setupClickOutsideHandler();
        }, 300);
        return true;
      } catch (error) {
        console.log('Booksy button click failed:', error);
      }
    }

    // Method 4: Try to find iframe and trigger it
    const booksyIframe = document.querySelector('iframe[src*="booksy.com"]');
    if (booksyIframe && booksyIframe.contentWindow) {
      try {
        booksyIframe.contentWindow.postMessage({ type: 'open' }, '*');
        booksyIframe.contentWindow.postMessage('open', '*');
        setTimeout(() => {
          setupClickOutsideHandler();
        }, 300);
        return true;
      } catch (error) {
        console.log('Booksy iframe postMessage failed:', error);
      }
    }

    return false;
  };

  // Try immediately
  if (tryOpenWidget()) {
    return;
  }

  // If not found, wait a bit and try again (Booksy script might still be loading)
  // Try multiple times with increasing delays
  let attempts = 0;
  const maxAttempts = 3;
  const tryWithDelay = () => {
    attempts++;
    if (tryOpenWidget()) {
      return;
    }
    
    if (attempts < maxAttempts) {
      setTimeout(tryWithDelay, 300 * attempts);
    } else {
      // Final fallback: Open Booksy page directly
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = booksyUrl;
      } else {
        window.open(booksyUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };
  
  setTimeout(tryWithDelay, 300);
};

/**
 * Closes the Booksy widget dialog
 */
export const closeBooksyWidget = () => {
  // Method 1: Try Booksy API close method first
  if (window.BooksyWidget && typeof window.BooksyWidget.close === 'function') {
    try {
      window.BooksyWidget.close();
      return;
    } catch (error) {
      console.log('BooksyWidget.close() failed:', error);
    }
  }

  // Method 2: Try alternative API
  if (window.Booksy && typeof window.Booksy.close === 'function') {
    try {
      window.Booksy.close();
      return;
    } catch (error) {
      console.log('Booksy.close() failed:', error);
    }
  }

  // Method 3: Try to find and click the close button
  const closeSelectors = [
    '.booksy-widget-container-dialog [class*="close"]',
    '.booksy-widget-container-dialog button[aria-label*="close" i]',
    '.booksy-widget-container-dialog [class*="Close"]',
    '[class*="booksy"] [class*="close-button"]',
    '[class*="booksy"] [class*="close-btn"]',
    '[class*="booksy"] button[aria-label*="zamknij" i]',
    '[class*="booksy"] button[aria-label*="Close" i]'
  ];

  for (const selector of closeSelectors) {
    const closeButton = document.querySelector(selector);
    if (closeButton) {
      try {
        closeButton.click();
        return;
      } catch (error) {
        console.log(`Close button click failed for ${selector}:`, error);
      }
    }
  }

  // Method 4: Hide the dialog manually
  const dialog = document.querySelector('.booksy-widget-container-dialog');
  if (dialog) {
    dialog.style.display = 'none';
    dialog.style.visibility = 'hidden';
    dialog.style.opacity = '0';
    dialog.style.pointerEvents = 'none';
  }

  // Also hide any Booksy overlays
  const overlays = document.querySelectorAll('[class*="booksy"][class*="overlay"], [class*="booksy"][class*="backdrop"], [class*="booksy"][class*="modal"]');
  overlays.forEach(overlay => {
    overlay.style.display = 'none';
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
  });
};

/**
 * Sets up click-outside handler to close the widget
 * Works for both mouse clicks and touch events (mobile)
 */
let clickOutsideHandler = null;
let touchOutsideHandler = null;

const setupClickOutsideHandler = () => {
  // Remove existing handlers if any
  if (clickOutsideHandler) {
    document.removeEventListener('click', clickOutsideHandler);
    clickOutsideHandler = null;
  }
  if (touchOutsideHandler) {
    document.removeEventListener('touchend', touchOutsideHandler);
    touchOutsideHandler = null;
  }

  // Handler for mouse clicks and touch events
  const handleOutsideClick = (event) => {
    // Check if click/touch is outside the Booksy widget
    const widgetDialog = document.querySelector('.booksy-widget-container-dialog');
    const widgetContainer = document.querySelector('.booksy-widget-container');
    const widgetIframe = document.querySelector('iframe[src*="booksy.com"]');
    
    // Get all Booksy-related elements
    const allBooksyElements = document.querySelectorAll('[class*="booksy"], [id*="booksy"], iframe[src*="booksy.com"]');
    
    if (widgetDialog || widgetContainer || widgetIframe || allBooksyElements.length > 0) {
      // Check if click/touch is inside any Booksy element
      let clickedInside = false;
      
      // Check if clicked inside dialog
      if (widgetDialog && widgetDialog.contains(event.target)) {
        clickedInside = true;
      }
      
      // Check if clicked inside container
      if (widgetContainer && widgetContainer.contains(event.target)) {
        clickedInside = true;
      }
      
      // Check if clicked inside iframe (we can't detect this directly, but check parent)
      if (widgetIframe && (widgetIframe.contains(event.target) || event.target === widgetIframe)) {
        clickedInside = true;
      }
      
      // Check if clicked on any Booksy element or its children
      allBooksyElements.forEach(el => {
        if (el.contains(event.target) || el === event.target) {
          clickedInside = true;
        }
      });
      
      // Check if clicked on element with Booksy classes
      const targetElement = event.target;
      if (targetElement) {
        const targetClasses = targetElement.className || '';
        const targetId = targetElement.id || '';
        if (targetClasses.toLowerCase().includes('booksy') || 
            targetId.toLowerCase().includes('booksy') ||
            targetElement.closest('[class*="booksy"]') ||
            targetElement.closest('[id*="booksy"]')) {
          clickedInside = true;
        }
      }

      // If clicked outside, close the widget
      if (!clickedInside) {
        closeBooksyWidget();
        // Remove handlers after closing
        document.removeEventListener('click', clickOutsideHandler);
        document.removeEventListener('touchend', touchOutsideHandler);
        clickOutsideHandler = null;
        touchOutsideHandler = null;
      }
    } else {
      // Widget not found, remove handlers
      document.removeEventListener('click', clickOutsideHandler);
      document.removeEventListener('touchend', touchOutsideHandler);
      clickOutsideHandler = null;
      touchOutsideHandler = null;
    }
  };

  // Create handlers
  clickOutsideHandler = handleOutsideClick;
  touchOutsideHandler = handleOutsideClick;

  // Add handlers with a small delay to avoid immediate trigger
  setTimeout(() => {
    document.addEventListener('click', clickOutsideHandler, true);
    document.addEventListener('touchend', touchOutsideHandler, true);
  }, 100);
};
