/**
 * Booksy Business URL - Direct link to Booksy booking page
 * This opens in a new tab/window
 */
export const BOOKSY_BUSINESS_URL = 'https://booksy.com/pl-pl/dl/show-business/263937';

/**
 * Opens Booksy widget (modal/dialog on the page)
 * This is different from the URL - widget opens without leaving the page
 * 
 * The Booksy script (https://booksy.com/widget/code.js?id=263937&country=pl&lang=pl)
 * creates an <a class="booksy-business-link"> element that, when clicked, opens the widget.
 * We need to find this link and click it properly.
 */
export const openBooksyWidget = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  console.log('=== Opening Booksy Widget ===');

  // Helper function to try opening the widget
  const tryOpenWidget = () => {
    // Method 1: Try clicking the Booksy widget button directly
    // Booksy creates: <div class="booksy-widget-button"></div>
    const booksyButton = document.querySelector('.booksy-widget-button');
    if (booksyButton) {
      console.log('Found booksy-widget-button, clicking...');
      try {
        // Temporarily make button visible and clickable if hidden
        const originalDisplay = booksyButton.style.display;
        const originalVisibility = booksyButton.style.visibility;
        const originalOpacity = booksyButton.style.opacity;
        const originalPointerEvents = booksyButton.style.pointerEvents;
        
        booksyButton.style.display = 'block';
        booksyButton.style.visibility = 'visible';
        booksyButton.style.opacity = '1';
        booksyButton.style.pointerEvents = 'auto';
        
      // Click the button
      booksyButton.click();
      
      // Restore styles after click
      setTimeout(() => {
        booksyButton.style.display = originalDisplay;
        booksyButton.style.visibility = originalVisibility;
        booksyButton.style.opacity = originalOpacity;
        booksyButton.style.pointerEvents = originalPointerEvents;
      }, 100);
      
      // Ensure dialog is visible after opening - check multiple times
      const ensureDialogVisible = () => {
        const dialog = document.querySelector('.booksy-widget-container-dialog');
        if (dialog) {
          // Force dialog to be visible
          dialog.style.setProperty('display', 'flex', 'important');
          dialog.style.setProperty('visibility', 'visible', 'important');
          dialog.style.setProperty('opacity', '1', 'important');
          dialog.style.setProperty('pointer-events', 'auto', 'important');
          dialog.style.setProperty('position', 'fixed', 'important');
          dialog.style.setProperty('top', '0', 'important');
          dialog.style.setProperty('left', '0', 'important');
          dialog.style.setProperty('width', '100%', 'important');
          dialog.style.setProperty('height', '100%', 'important');
          dialog.style.setProperty('z-index', '99999', 'important');
          
          // Make sure any iframe inside is visible
          const iframe = dialog.querySelector('iframe');
          if (iframe) {
            iframe.style.setProperty('display', 'block', 'important');
            iframe.style.setProperty('visibility', 'visible', 'important');
            iframe.style.setProperty('opacity', '1', 'important');
          }
          
          console.log('Dialog forced to be visible');
          return true;
        }
        return false;
      };
      
      // Check immediately, then after delays
      setTimeout(() => {
        if (ensureDialogVisible()) {
          setupClickOutsideHandler();
        }
      }, 200);
      
      setTimeout(() => {
        if (ensureDialogVisible()) {
          setupClickOutsideHandler();
        }
      }, 500);
      
      setTimeout(() => {
        if (ensureDialogVisible()) {
          setupClickOutsideHandler();
        }
      }, 1000);
      
      console.log('Widget button clicked');
      return true;
      } catch (error) {
        console.error('Error clicking widget button:', error);
      }
    }
    return false;
  };

  // Try immediately
  if (tryOpenWidget()) {
    return;
  }

  // Method 2: Try clicking the business link
  const businessLink = document.querySelector('a.booksy-business-link[href*="booksy.com"]');
  if (businessLink) {
    console.log('Found booksy-business-link, clicking...');
    try {
      const originalTarget = businessLink.target;
      businessLink.removeAttribute('target');
      
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1
      });
      
      businessLink.dispatchEvent(clickEvent);
      businessLink.click();
      
      setTimeout(() => {
        if (originalTarget) {
          businessLink.target = originalTarget;
        }
        setupClickOutsideHandler();
      }, 300);
      
      console.log('Business link clicked');
      return;
    } catch (error) {
      console.error('Error clicking business link:', error);
    }
  }

  // If not found, wait a bit for Booksy script to load and try again
  setTimeout(() => {
    if (tryOpenWidget()) {
      return;
    }
    
    // Try business link again
    const retryLink = document.querySelector('a.booksy-business-link[href*="booksy.com"]');
    if (retryLink) {
      try {
        retryLink.removeAttribute('target');
        retryLink.click();
        setTimeout(() => setupClickOutsideHandler(), 300);
        return;
      } catch (error) {
        console.error('Error clicking retry link:', error);
      }
    }
    
    // Fallback: Try to show dialog directly
    const dialog = document.querySelector('.booksy-widget-container-dialog');
    if (dialog) {
      console.log('Trying to show dialog directly...');
      
      const iframe = dialog.querySelector('iframe');
      dialog.style.display = 'flex';
      dialog.style.visibility = 'visible';
      dialog.style.opacity = '1';
      dialog.style.pointerEvents = 'auto';
      dialog.style.position = 'fixed';
      dialog.style.top = '0';
      dialog.style.left = '0';
      dialog.style.width = '100%';
      dialog.style.height = '100%';
      dialog.style.zIndex = '9999';
      
      if (iframe) {
        iframe.style.display = 'block';
        iframe.style.visibility = 'visible';
        iframe.style.opacity = '1';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
      }
      
      setTimeout(() => setupClickOutsideHandler(), 300);
      return;
    }
    
    // Final fallback: open Booksy page in new tab
    console.warn('Widget could not be opened, opening Booksy page instead');
    window.open(BOOKSY_BUSINESS_URL, '_blank', 'noopener,noreferrer');
  }, 500);
};

/**
 * Opens Booksy page directly (URL in new tab)
 * This is different from the widget - opens the full Booksy booking page
 */
export const openBooksyPage = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  window.open(BOOKSY_BUSINESS_URL, '_blank', 'noopener,noreferrer');
};

/**
 * Closes Booksy widget
 */
export const closeBooksyWidget = () => {
  const dialog = document.querySelector('.booksy-widget-container-dialog');
  if (dialog) {
    dialog.style.display = 'none';
    dialog.style.visibility = 'hidden';
    dialog.style.opacity = '0';
    dialog.style.pointerEvents = 'none';
  }
  
  // Also try API if available
  if (window.BooksyWidget && typeof window.BooksyWidget.close === 'function') {
    try {
      window.BooksyWidget.close();
    } catch (error) {
      console.log('BooksyWidget.close() failed:', error);
    }
  }
};

/**
 * Sets up click-outside handler to close the widget
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
    const widgetDialog = document.querySelector('.booksy-widget-container-dialog');
    const widgetContainer = document.querySelector('.booksy-widget-container');
    const widgetIframe = document.querySelector('iframe[src*="booksy.com"]');
    
    if (widgetDialog || widgetContainer || widgetIframe) {
      let clickedInside = false;
      
      if (widgetDialog && widgetDialog.contains(event.target)) {
        clickedInside = true;
      }
      
      if (widgetContainer && widgetContainer.contains(event.target)) {
        clickedInside = true;
      }
      
      if (widgetIframe && (widgetIframe.contains(event.target) || event.target === widgetIframe)) {
        clickedInside = true;
      }
      
      // Check if clicked on Booksy element
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

  // Add handlers with a delay
  setTimeout(() => {
    document.addEventListener('click', clickOutsideHandler, true);
    document.addEventListener('touchend', touchOutsideHandler, true);
  }, 100);
};
