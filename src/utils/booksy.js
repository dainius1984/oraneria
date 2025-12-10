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

  // The Booksy script creates a link with class "booksy-business-link"
  // When this link is clicked, Booksy intercepts it and shows the widget
  const businessLink = document.querySelector('a.booksy-business-link[href*="booksy.com"]');
  
  if (businessLink) {
    console.log('Found booksy-business-link:', businessLink);
    console.log('Link href:', businessLink.href);
    console.log('Link target:', businessLink.target);
    
    try {
      // Save original target
      const originalTarget = businessLink.target;
      
      // Booksy script intercepts clicks on this link when target is NOT "_blank"
      // So we need to make sure target is empty or "_self"
      businessLink.removeAttribute('target');
      
      // Create a native click event
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1
      });
      
      console.log('Dispatching click event...');
      businessLink.dispatchEvent(clickEvent);
      
      // Also try direct click
      businessLink.click();
      
      // Restore target after a moment
      setTimeout(() => {
        if (originalTarget) {
          businessLink.target = originalTarget;
        }
      }, 500);
      
      console.log('Click dispatched');
      return;
    } catch (error) {
      console.error('Error clicking business link:', error);
    }
  } else {
    console.error('Business link not found!');
  }

  // Fallback: Try to show dialog directly
  const dialog = document.querySelector('.booksy-widget-container-dialog');
  if (dialog) {
    console.log('Trying to show dialog directly...');
    
    // Check if dialog has any content
    const iframe = dialog.querySelector('iframe');
    console.log('Dialog has iframe:', !!iframe);
    
    if (iframe) {
      console.log('Iframe src:', iframe.src);
    }
    
    // Show dialog
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
    
    // If there's an iframe, make sure it's visible
    if (iframe) {
      iframe.style.display = 'block';
      iframe.style.visibility = 'visible';
      iframe.style.opacity = '1';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
    }
    
    return;
  }

  // Final fallback: open Booksy page in new tab
  console.warn('Widget could not be opened, opening Booksy page instead');
  window.open(BOOKSY_BUSINESS_URL, '_blank', 'noopener,noreferrer');
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
