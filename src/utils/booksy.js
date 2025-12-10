/**
 * Simple function to open Booksy widget
 * Based on Booksy's standard implementation
 * The script creates: <div class="booksy-widget-button"></div>
 */
export const openBooksyWidget = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // Function to find and click the Booksy button
  const clickBooksyButton = () => {
    // Method 1: Find the widget button that Booksy creates
    const widgetButton = document.querySelector('.booksy-widget-button');
    if (widgetButton) {
      // Make sure it's clickable
      widgetButton.style.display = 'block';
      widgetButton.style.visibility = 'visible';
      widgetButton.style.opacity = '1';
      widgetButton.style.pointerEvents = 'auto';
      widgetButton.style.position = 'fixed';
      widgetButton.style.top = '50%';
      widgetButton.style.left = '50%';
      widgetButton.style.zIndex = '99999';
      
      // Click it
      widgetButton.click();
      return true;
    }

    // Method 2: Try the widget container button
    const container = document.querySelector('.booksy-widget-container');
    if (container) {
      const button = container.querySelector('.booksy-widget-button');
      if (button) {
        button.style.display = 'block';
        button.style.visibility = 'visible';
        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';
        button.click();
        return true;
      }
    }

    // Method 3: Try the business link
    const businessLink = document.querySelector('a.booksy-business-link[href*="booksy.com"]');
    if (businessLink) {
      businessLink.target = '_self';
      businessLink.click();
      return true;
    }

    return false;
  };

  // Try immediately
  if (clickBooksyButton()) {
    return;
  }

  // Wait for Booksy script to load (max 2 seconds)
  let attempts = 0;
  const maxAttempts = 10;
  const interval = setInterval(() => {
    attempts++;
    if (clickBooksyButton() || attempts >= maxAttempts) {
      clearInterval(interval);
      if (attempts >= maxAttempts) {
        // Fallback: open Booksy page
        window.open('https://booksy.com/pl-pl/dl/show-business/263937', '_blank', 'noopener,noreferrer');
      }
    }
  }, 200);
};

/**
 * Closes Booksy widget
 */
export const closeBooksyWidget = () => {
  if (window.BooksyWidget && typeof window.BooksyWidget.close === 'function') {
    window.BooksyWidget.close();
    return;
  }
  
  const dialog = document.querySelector('.booksy-widget-container-dialog');
  if (dialog) {
    dialog.style.display = 'none';
    dialog.style.visibility = 'hidden';
    dialog.style.opacity = '0';
  }
};
