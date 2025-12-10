// Import hideBooksyWidget to ensure floating buttons are hidden when closing
import { hideBooksyWidget } from './hideBooksyWidget.js';

/**
 * Booksy Business URL - Direct link to Booksy booking page
 * This opens in a new tab/window
 */
export const BOOKSY_BUSINESS_URL = 'https://booksy.com/pl-pl/dl/show-business/263937';

/**
 * Opens Booksy widget (modal/dialog on the page)
 * This is different from the URL - widget opens without leaving the page
 */
export const openBooksyWidget = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  console.log('=== Opening Booksy Widget (Simplified) ===');

  // Method 1: Try clicking the Booksy widget button directly
  // The Booksy script creates a hidden button that triggers the widget
  const booksyButton = document.querySelector('.booksy-widget-button');
  
  if (booksyButton) {
    try {
      // Ensure the button is clickable
      const originalPointerEvents = booksyButton.style.pointerEvents;
      booksyButton.style.pointerEvents = 'auto';
      
      booksyButton.click();
      
      // Restore pointer events
      setTimeout(() => {
        booksyButton.style.pointerEvents = originalPointerEvents;
      }, 100);
      
      // Setup close handlers
      setTimeout(setupClickOutsideHandler, 500);
      return;
    } catch (error) {
      console.error('Error clicking widget button:', error);
    }
  }

  // Method 2: Try clicking the business link
  const businessLink = document.querySelector('a.booksy-business-link[href*="booksy.com"]');
  if (businessLink) {
    try {
      businessLink.click();
      setTimeout(setupClickOutsideHandler, 500);
      return;
    } catch (error) {
      console.error('Error clicking business link:', error);
    }
  }
  
  // Fallback: If widget can't be opened, open in new tab
  console.log('Falling back to opening Booksy page');
  window.open(BOOKSY_BUSINESS_URL, '_blank', 'noopener,noreferrer');
};

/**
 * Opens Booksy page directly (URL in new tab)
 */
export const openBooksyPage = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  window.open(BOOKSY_BUSINESS_URL, '_blank', 'noopener,noreferrer');
};

/**
 * Closes Booksy widget - Simplified version
 */
export const closeBooksyWidget = () => {
  console.log('=== Closing Booksy Widget ===');
  
  // 1. Try Booksy API
  if (window.BooksyWidget && typeof window.BooksyWidget.close === 'function') {
    try {
      window.BooksyWidget.close();
    } catch (error) {
      console.log('BooksyWidget.close error:', error);
    }
  }
  
  // 2. Hide dialog containers using standard classes
  const dialogs = document.querySelectorAll('.booksy-widget-container-dialog, [class*="booksy"][class*="dialog"]');
  dialogs.forEach(dialog => {
    // Force hide
    dialog.style.setProperty('display', 'none', 'important');
    dialog.style.setProperty('visibility', 'hidden', 'important');
    dialog.style.setProperty('opacity', '0', 'important');
    dialog.style.setProperty('pointer-events', 'none', 'important');
    dialog.style.setProperty('z-index', '-1', 'important');
  });
  
  // 3. Remove any overlays/backdrops
  const overlays = document.querySelectorAll('[class*="booksy"][class*="overlay"], [class*="booksy"][class*="backdrop"]');
  overlays.forEach(overlay => {
    overlay.style.setProperty('display', 'none', 'important');
  });
  
  // 4. Restore body scrolling
  if (document.body) {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    document.body.style.setProperty('overflow', 'auto', 'important');
  }
  
  if (document.documentElement) {
    document.documentElement.style.removeProperty('overflow');
    document.documentElement.style.setProperty('overflow', 'auto', 'important');
  }

  // 5. Hide the floating "Rezerwuj" button if it appeared
  try {
    hideBooksyWidget();
  } catch (e) {
    console.error(e);
  }
  
  // Double check cleanup after a delay
  setTimeout(() => {
    const leftoverDialogs = document.querySelectorAll('.booksy-widget-container-dialog');
    leftoverDialogs.forEach(d => {
      d.style.setProperty('display', 'none', 'important');
    });
  }, 100);
};

/**
 * Sets up click-outside handler
 */
let clickOutsideHandler = null;

const setupClickOutsideHandler = () => {
  // Remove existing
  if (clickOutsideHandler) {
    document.removeEventListener('click', clickOutsideHandler);
    clickOutsideHandler = null;
  }

  const handleOutsideClick = (event) => {
    // If clicking on one of our custom buttons, don't interfere
    if (event.target.closest('.booksy-business-link') || 
        event.target.classList.contains('booksy-business-link')) {
      return;
    }

    // Check if widget is visible
    const widgetDialog = document.querySelector('.booksy-widget-container-dialog');
    if (!widgetDialog) return;
    
    const style = window.getComputedStyle(widgetDialog);
    if (style.display === 'none' || style.visibility === 'hidden') return;

    // Check if click is outside the content
    // Booksy usually has a content wrapper inside the dialog
    const content = widgetDialog.querySelector('iframe') || widgetDialog.querySelector('div > div');
    
    if (content && !content.contains(event.target)) {
      console.log('Clicked outside widget content');
      closeBooksyWidget();
      
      // Cleanup listener
      document.removeEventListener('click', clickOutsideHandler);
      clickOutsideHandler = null;
    }
  };

  clickOutsideHandler = handleOutsideClick;
  
  // Delay attachment to avoid immediate trigger
  setTimeout(() => {
    document.addEventListener('click', clickOutsideHandler);
  }, 200);
};
