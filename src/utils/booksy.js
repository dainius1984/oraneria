/**
 * Waits for Booksy script to load
 */
const waitForBooksyScript = (callback, maxAttempts = 10) => {
  let attempts = 0;
  const checkInterval = setInterval(() => {
    attempts++;
    const hasBooksyElements = document.querySelector('.booksy-widget-button, .booksy-widget-container, a.booksy-business-link');
    const hasBooksyAPI = window.BooksyWidget || window.Booksy || window.openBooksyWidget;
    
    if (hasBooksyElements || hasBooksyAPI || attempts >= maxAttempts) {
      clearInterval(checkInterval);
      callback();
    }
  }, 200);
};

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

  // Wait for Booksy script to load, then try to open
  waitForBooksyScript(() => {
    openBooksyWidgetInternal(booksyUrl);
  });
};

/**
 * Internal function that actually opens the widget
 */
const openBooksyWidgetInternal = (booksyUrl) => {

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

  // Method 2.6: Check if dialog is already open and just show it
  const existingDialog = document.querySelector('.booksy-widget-container-dialog');
  if (existingDialog) {
    try {
      existingDialog.style.display = 'block';
      existingDialog.style.visibility = 'visible';
      existingDialog.style.opacity = '1';
      existingDialog.style.pointerEvents = 'auto';
      existingDialog.style.zIndex = '99999';
      setTimeout(() => {
        setupClickOutsideHandler();
      }, 100);
      return;
    } catch (error) {
      console.log('Showing existing dialog failed:', error);
    }
  }

  // Method 3: Find and click the Booksy widget button
  const tryOpenWidget = () => {
    // First, try to find the booksy-business-link (this is the actual link that opens the widget)
    const booksyLink = document.querySelector('a.booksy-business-link[href*="booksy.com"]');
    if (booksyLink) {
      try {
        // Temporarily make link visible and clickable
        const originalDisplay = booksyLink.style.display;
        const originalVisibility = booksyLink.style.visibility;
        const originalOpacity = booksyLink.style.opacity;
        const originalPointerEvents = booksyLink.style.pointerEvents;
        const originalTarget = booksyLink.target;
        
        booksyLink.style.display = 'block';
        booksyLink.style.visibility = 'visible';
        booksyLink.style.opacity = '1';
        booksyLink.style.pointerEvents = 'auto';
        booksyLink.style.position = 'fixed';
        booksyLink.style.top = '50%';
        booksyLink.style.left = '50%';
        booksyLink.style.width = '1px';
        booksyLink.style.height = '1px';
        booksyLink.style.zIndex = '9999';
        
        // Remove target="_blank" so it doesn't open in new tab
        // Booksy script should intercept this and open widget instead
        booksyLink.target = '_self';
        
        // Create a click event that Booksy can intercept
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
          buttons: 1
        });
        
        // Try to let Booksy's event handler catch this
        booksyLink.dispatchEvent(clickEvent);
        
        // Also try direct click
        if (typeof booksyLink.click === 'function') {
          booksyLink.click();
        }
        
        // Restore original styles and target
        setTimeout(() => {
          booksyLink.style.display = originalDisplay;
          booksyLink.style.visibility = originalVisibility;
          booksyLink.style.opacity = originalOpacity;
          booksyLink.style.pointerEvents = originalPointerEvents;
          booksyLink.style.position = '';
          booksyLink.style.top = '';
          booksyLink.style.left = '';
          booksyLink.style.width = '';
          booksyLink.style.height = '';
          booksyLink.style.zIndex = '';
          booksyLink.target = originalTarget;
        }, 200);
        
        setTimeout(() => {
          setupClickOutsideHandler();
        }, 300);
        return true;
      } catch (error) {
        console.log('Booksy link click failed:', error);
      }
    }

    // Second, try to find the booksy-widget-button inside the container
    const booksyContainer = document.querySelector('.booksy-widget-container');
    if (booksyContainer) {
      const booksyButton = booksyContainer.querySelector('.booksy-widget-button');
      if (booksyButton) {
        try {
          // Temporarily make button visible and clickable
          const originalDisplay = booksyButton.style.display;
          const originalVisibility = booksyButton.style.visibility;
          const originalOpacity = booksyButton.style.opacity;
          const originalPointerEvents = booksyButton.style.pointerEvents;
          
          booksyButton.style.display = 'block';
          booksyButton.style.visibility = 'visible';
          booksyButton.style.opacity = '1';
          booksyButton.style.pointerEvents = 'auto';
          booksyButton.style.position = 'fixed';
          booksyButton.style.top = '50%';
          booksyButton.style.left = '50%';
          booksyButton.style.transform = 'translate(-50%, -50%)';
          booksyButton.style.zIndex = '9999';
          booksyButton.style.width = 'auto';
          booksyButton.style.height = 'auto';
          
          // Create and dispatch multiple event types
          const events = ['mousedown', 'mouseup', 'click', 'touchstart', 'touchend'];
          events.forEach(eventType => {
            const event = new MouseEvent(eventType, {
              bubbles: true,
              cancelable: true,
              view: window,
              buttons: 1
            });
            booksyButton.dispatchEvent(event);
          });
          
          // Also try direct click
          if (typeof booksyButton.click === 'function') {
            booksyButton.click();
          }
          
          // Restore original styles
          setTimeout(() => {
            booksyButton.style.display = originalDisplay;
            booksyButton.style.visibility = originalVisibility;
            booksyButton.style.opacity = originalOpacity;
            booksyButton.style.pointerEvents = originalPointerEvents;
            booksyButton.style.position = '';
            booksyButton.style.top = '';
            booksyButton.style.left = '';
            booksyButton.style.transform = '';
            booksyButton.style.zIndex = '';
            booksyButton.style.width = '';
            booksyButton.style.height = '';
          }, 200);
          
          setTimeout(() => {
            setupClickOutsideHandler();
          }, 300);
          return true;
        } catch (error) {
          console.log('Booksy button click failed:', error);
        }
      }
    }

    // Third, try standalone booksy-widget-button (not inside container)
    const allButtons = document.querySelectorAll('.booksy-widget-button');
    for (const standaloneButton of allButtons) {
      // Skip if it's inside a container (we already tried those)
      if (standaloneButton.closest('.booksy-widget-container')) {
        continue;
      }
      
      try {
        const originalDisplay = standaloneButton.style.display;
        const originalVisibility = standaloneButton.style.visibility;
        const originalOpacity = standaloneButton.style.opacity;
        const originalPointerEvents = standaloneButton.style.pointerEvents;
        
        standaloneButton.style.display = 'block';
        standaloneButton.style.visibility = 'visible';
        standaloneButton.style.opacity = '1';
        standaloneButton.style.pointerEvents = 'auto';
        standaloneButton.style.position = 'fixed';
        standaloneButton.style.top = '50%';
        standaloneButton.style.left = '50%';
        standaloneButton.style.zIndex = '9999';
        
        // Try multiple event types
        const events = ['mousedown', 'mouseup', 'click', 'touchstart', 'touchend'];
        events.forEach(eventType => {
          const event = new MouseEvent(eventType, {
            bubbles: true,
            cancelable: true,
            view: window,
            buttons: 1
          });
          standaloneButton.dispatchEvent(event);
        });
        
        if (typeof standaloneButton.click === 'function') {
          standaloneButton.click();
        }
        
        setTimeout(() => {
          standaloneButton.style.display = originalDisplay;
          standaloneButton.style.visibility = originalVisibility;
          standaloneButton.style.opacity = originalOpacity;
          standaloneButton.style.pointerEvents = originalPointerEvents;
          standaloneButton.style.position = '';
          standaloneButton.style.top = '';
          standaloneButton.style.left = '';
          standaloneButton.style.zIndex = '';
        }, 200);
        
        setTimeout(() => {
          setupClickOutsideHandler();
        }, 300);
        return true;
      } catch (error) {
        console.log('Standalone Booksy button click failed:', error);
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
