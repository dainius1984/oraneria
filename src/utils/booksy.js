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
      // Set up click-outside handler after opening
      setTimeout(() => setupClickOutsideHandler(), 100);
      return;
    } catch (error) {
      console.log('Booksy button click failed:', error);
    }
  }

  // Method 2: Try Booksy widget API (if available)
  if (window.BooksyWidget && typeof window.BooksyWidget.open === 'function') {
    try {
      window.BooksyWidget.open();
      setTimeout(() => setupClickOutsideHandler(), 100);
      return;
    } catch (error) {
      console.log('BooksyWidget.open() failed:', error);
    }
  }

  // Method 3: Try alternative API
  if (window.Booksy && typeof window.Booksy.open === 'function') {
    try {
      window.Booksy.open();
      setTimeout(() => setupClickOutsideHandler(), 100);
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
        setTimeout(() => setupClickOutsideHandler(), 100);
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
  // Try to find and click the close button
  const closeButton = document.querySelector('.booksy-widget-container-dialog [class*="close"], .booksy-widget-container-dialog button[aria-label*="close" i], .booksy-widget-container-dialog [class*="Close"]');
  if (closeButton) {
    try {
      closeButton.click();
      return;
    } catch (error) {
      console.log('Close button click failed:', error);
    }
  }

  // Try Booksy API close method
  if (window.BooksyWidget && typeof window.BooksyWidget.close === 'function') {
    try {
      window.BooksyWidget.close();
      return;
    } catch (error) {
      console.log('BooksyWidget.close() failed:', error);
    }
  }

  // Try to find the overlay/backdrop and click it
  const overlay = document.querySelector('.booksy-widget-container-dialog, [class*="booksy"][class*="overlay"], [class*="booksy"][class*="backdrop"]');
  if (overlay) {
    // Hide the dialog by removing it or hiding it
    const dialog = document.querySelector('.booksy-widget-container-dialog');
    if (dialog) {
      dialog.style.display = 'none';
      dialog.style.visibility = 'hidden';
      dialog.style.opacity = '0';
    }
  }
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
    
    if (widgetDialog || widgetContainer) {
      // Check if click/touch is inside the widget
      const clickedInside = 
        (widgetDialog && widgetDialog.contains(event.target)) ||
        (widgetContainer && widgetContainer.contains(event.target)) ||
        event.target.closest('.booksy-widget-container-dialog') ||
        event.target.closest('.booksy-widget-container') ||
        event.target.closest('[class*="booksy"]') ||
        // Also check for overlay/backdrop clicks
        event.target.classList.contains('booksy-overlay') ||
        event.target.classList.contains('booksy-backdrop');

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
