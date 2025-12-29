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

  // Try clicking the Booksy widget button (created by Booksy script)
  // Find button even if it's hidden (outside #root)
  const booksyButton = document.querySelector('body > .booksy-widget-button, .booksy-widget-button');
  
  if (booksyButton) {
    try {
      // Temporarily make button clickable
      const originalDisplay = booksyButton.style.display;
      const originalOpacity = booksyButton.style.opacity;
      const originalVisibility = booksyButton.style.visibility;
      const originalPointerEvents = booksyButton.style.pointerEvents;
      
      booksyButton.style.setProperty('display', 'block', 'important');
      booksyButton.style.setProperty('opacity', '1', 'important');
      booksyButton.style.setProperty('visibility', 'visible', 'important');
      booksyButton.style.setProperty('pointer-events', 'auto', 'important');
      
      booksyButton.click();
      
      // Restore hidden state after click
      setTimeout(() => {
        booksyButton.style.setProperty('display', originalDisplay || 'none', 'important');
        booksyButton.style.setProperty('opacity', originalOpacity || '0', 'important');
        booksyButton.style.setProperty('visibility', originalVisibility || 'hidden', 'important');
        booksyButton.style.setProperty('pointer-events', originalPointerEvents || 'none', 'important');
        setupClickOutsideHandler();
      }, 500);
      return;
    } catch (error) {
      console.error('Error clicking widget button:', error);
    }
  }

  // Fallback: Try business link
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
  
  // Final fallback: Open in new tab
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
  // Try Booksy API first
  if (window.BooksyWidget?.close) {
    try {
      window.BooksyWidget.close();
    } catch (error) {
      console.error('BooksyWidget.close error:', error);
    }
  }
  
  // Hide dialog containers
  const dialogs = document.querySelectorAll('.booksy-widget-container-dialog, [class*="booksy"][class*="dialog"]');
  dialogs.forEach(dialog => {
    dialog.style.setProperty('display', 'none', 'important');
    dialog.style.setProperty('visibility', 'hidden', 'important');
    dialog.style.setProperty('opacity', '0', 'important');
    dialog.style.setProperty('pointer-events', 'none', 'important');
    dialog.style.setProperty('z-index', '-1', 'important');
  });
  
  // Remove overlays/backdrops
  const overlays = document.querySelectorAll('[class*="booksy"][class*="overlay"], [class*="booksy"][class*="backdrop"]');
  overlays.forEach(overlay => {
    overlay.style.setProperty('display', 'none', 'important');
  });
  
  // Restore body scrolling
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

  // Hide floating "Rezerwuj" button
  try {
    hideBooksyWidget();
  } catch (e) {
    console.error('hideBooksyWidget error:', e);
  }
  
  // Final cleanup check
  setTimeout(() => {
    document.querySelectorAll('.booksy-widget-container-dialog').forEach(d => {
      d.style.setProperty('display', 'none', 'important');
    });
  }, 100);
};

/**
 * Sets up click-outside handler
 */
let clickOutsideHandler = null;

const setupClickOutsideHandler = () => {
  // Remove existing handler
  if (clickOutsideHandler) {
    document.removeEventListener('click', clickOutsideHandler);
    clickOutsideHandler = null;
  }

  const handleOutsideClick = (event) => {
    // Ignore clicks on our custom buttons
    if (event.target.closest('.booksy-business-link') || 
        event.target.classList.contains('booksy-business-link')) {
      return;
    }

    const widgetDialog = document.querySelector('.booksy-widget-container-dialog');
    if (!widgetDialog) return;
    
    const style = window.getComputedStyle(widgetDialog);
    if (style.display === 'none' || style.visibility === 'hidden') return;

    // Check if click is outside widget content
    const content = widgetDialog.querySelector('iframe') || widgetDialog.querySelector('div > div');
    
    if (content && !content.contains(event.target)) {
      closeBooksyWidget();
      document.removeEventListener('click', clickOutsideHandler);
      clickOutsideHandler = null;
    }
  };

  clickOutsideHandler = handleOutsideClick;
  
  // Delay to avoid immediate trigger
  setTimeout(() => {
    document.addEventListener('click', clickOutsideHandler);
  }, 200);
};
