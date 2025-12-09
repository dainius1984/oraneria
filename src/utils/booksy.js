/**
 * Opens the Booksy booking widget
 * Simple approach: click the widget button that Booksy creates
 */
export const openBooksyWidget = (e) => {
  // Prevent default if it's an event
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const booksyUrl = 'https://booksy.com/pl-pl/dl/show-business/263937';

  // Wait a bit for Booksy script to load if needed
  const tryOpenWidget = () => {
    // Method 1: Find and click the Booksy widget button
    // Booksy creates: <div class="booksy-widget-button"></div>
    const booksyButton = document.querySelector('.booksy-widget-button');
    if (booksyButton) {
      try {
        // Temporarily make button visible and clickable if it's hidden
        const originalDisplay = booksyButton.style.display;
        const originalVisibility = booksyButton.style.visibility;
        const originalOpacity = booksyButton.style.opacity;
        const originalPointerEvents = booksyButton.style.pointerEvents;
        
        booksyButton.style.display = 'block';
        booksyButton.style.visibility = 'visible';
        booksyButton.style.opacity = '1';
        booksyButton.style.pointerEvents = 'auto';
        
        // Trigger click event
        booksyButton.click();
        
        // Restore original styles after a brief moment
        setTimeout(() => {
          booksyButton.style.display = originalDisplay;
          booksyButton.style.visibility = originalVisibility;
          booksyButton.style.opacity = originalOpacity;
          booksyButton.style.pointerEvents = originalPointerEvents;
        }, 100);
        
        // Set up click-outside handler
        setTimeout(() => {
          setupClickOutsideHandler();
        }, 300);
        return true;
      } catch (error) {
        console.log('Booksy button click failed:', error);
      }
    }

    // Method 2: Try to find button inside widget container
    const widgetContainer = document.querySelector('.booksy-widget-container:not(.booksy-widget-container-dialog)');
    if (widgetContainer) {
      const button = widgetContainer.querySelector('.booksy-widget-button');
      if (button) {
        try {
          // Temporarily make button visible and clickable
          const originalDisplay = button.style.display;
          const originalVisibility = button.style.visibility;
          const originalOpacity = button.style.opacity;
          const originalPointerEvents = button.style.pointerEvents;
          
          button.style.display = 'block';
          button.style.visibility = 'visible';
          button.style.opacity = '1';
          button.style.pointerEvents = 'auto';
          
          button.click();
          
          setTimeout(() => {
            button.style.display = originalDisplay;
            button.style.visibility = originalVisibility;
            button.style.opacity = originalOpacity;
            button.style.pointerEvents = originalPointerEvents;
          }, 100);
          
          setTimeout(() => {
            setupClickOutsideHandler();
          }, 300);
          return true;
        } catch (error) {
          console.log('Widget container button click failed:', error);
        }
      }
    }

    return false;
  };

  // Try immediately
  if (tryOpenWidget()) {
    return;
  }

  // If not found, wait a bit and try again (Booksy script might still be loading)
  setTimeout(() => {
    if (tryOpenWidget()) {
      return;
    }
    
    // Fallback: Open Booksy page directly
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = booksyUrl;
    } else {
      window.open(booksyUrl, '_blank', 'noopener,noreferrer');
    }
  }, 500);
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
