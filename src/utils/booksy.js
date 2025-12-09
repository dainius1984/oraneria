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
      // Set up click-outside handler and apply styles after opening
      setTimeout(() => {
        setupClickOutsideHandler();
        // Import and apply theme styles
        import('./styleBooksyWidget.js').then(module => {
          module.styleBooksyWidget();
        });
      }, 100);
      return;
    } catch (error) {
      console.log('Booksy button click failed:', error);
    }
  }

  // Method 2: Try Booksy widget API (if available)
  if (window.BooksyWidget && typeof window.BooksyWidget.open === 'function') {
    try {
      window.BooksyWidget.open();
      setTimeout(() => {
        setupClickOutsideHandler();
        import('./styleBooksyWidget.js').then(module => {
          module.styleBooksyWidget();
        });
      }, 100);
      return;
    } catch (error) {
      console.log('BooksyWidget.open() failed:', error);
    }
  }

  // Method 3: Try alternative API
  if (window.Booksy && typeof window.Booksy.open === 'function') {
    try {
      window.Booksy.open();
      setTimeout(() => {
        setupClickOutsideHandler();
        import('./styleBooksyWidget.js').then(module => {
          module.styleBooksyWidget();
        });
      }, 100);
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
        setTimeout(() => {
          setupClickOutsideHandler();
          import('./styleBooksyWidget.js').then(module => {
            module.styleBooksyWidget();
          });
        }, 100);
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

/**
 * Closes the Booksy widget dialog
 */
export const closeBooksyWidget = () => {
  // Cleanup style observer
  import('./styleBooksyWidget.js').then(module => {
    if (module.cleanupBooksyStyles) {
      module.cleanupBooksyStyles();
    }
  }).catch(() => {
    // Ignore import errors
  });
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
