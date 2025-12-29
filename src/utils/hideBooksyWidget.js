/**
 * Hide Booksy floating widget button
 * Keeps dialog functional while hiding the floating button
 */
export const hideBooksyWidget = () => {
  // Hide ALL floating widget buttons (keep functional for programmatic clicks)
  document.querySelectorAll('.booksy-widget-button').forEach(button => {
    // Only keep visible if it's inside an open dialog
    const isInDialog = button.closest('.booksy-widget-container-dialog');
    const dialogStyle = isInDialog ? window.getComputedStyle(isInDialog) : null;
    const isDialogVisible = dialogStyle && dialogStyle.display !== 'none' && dialogStyle.visibility !== 'hidden' && dialogStyle.opacity !== '0';
    
    // Hide button if not in visible dialog OR if it's outside #root
    const isInRoot = button.closest('#root');
    if (!isDialogVisible || !isInRoot) {
      button.style.setProperty('opacity', '0', 'important');
      button.style.setProperty('visibility', 'hidden', 'important');
      button.style.setProperty('pointer-events', 'none', 'important');
      button.style.setProperty('display', 'none', 'important');
    } else {
      // Keep button accessible for programmatic clicks even if hidden visually
      button.style.setProperty('pointer-events', 'auto', 'important');
    }
  });

  // Hide ALL floating containers (not dialogs) - especially those outside #root
  document.querySelectorAll('.booksy-widget-container').forEach(container => {
    const isDialog = container.classList.contains('booksy-widget-container-dialog');
    const isInRoot = container.closest('#root');
    
    // If it's not a dialog, hide it aggressively
    if (!isDialog) {
      const style = window.getComputedStyle(container);
      const rect = container.getBoundingClientRect();
      
      // Hide if fixed/absolute OR if it's outside root OR if it's at bottom of screen
      if (style.position === 'fixed' || 
          style.position === 'absolute' || 
          !isInRoot ||
          rect.bottom > window.innerHeight - 100) {
        container.style.setProperty('display', 'none', 'important');
        container.style.setProperty('opacity', '0', 'important');
        container.style.setProperty('pointer-events', 'none', 'important');
        container.style.setProperty('visibility', 'hidden', 'important');
        container.style.setProperty('z-index', '-9999', 'important');
      }
    }
  });

  // Hide "REZERWUJ" floating buttons by text content (more aggressive)
  document.querySelectorAll('div, a, button, span').forEach(el => {
    // Skip our custom buttons and dialog content
    if (el.classList.contains('booksy-business-link') || 
        el.closest('.booksy-business-link') ||
        el.closest('.booksy-widget-container-dialog') ||
        el.id === 'root' ||
        el.closest('footer') ||
        el.closest('header') ||
        el.closest('nav')) {
      return;
    }

    const style = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    
    // Check if element is fixed/absolute AND positioned at bottom of screen (below footer)
    if ((style.position === 'fixed' || style.position === 'absolute') && 
        (rect.bottom > window.innerHeight - 100 || rect.top > window.innerHeight * 0.8)) {
      const text = (el.textContent || '').trim().toLowerCase();
      // Match "rezerwuj" or "rezerwacja" buttons
      if ((text === 'rezerwuj' || text === 'rezerwacja' || text.includes('rezerwuj')) && text.length < 50) {
        el.style.setProperty('display', 'none', 'important');
        el.style.setProperty('visibility', 'hidden', 'important');
        el.style.setProperty('opacity', '0', 'important');
        el.style.setProperty('pointer-events', 'none', 'important');
        el.style.setProperty('z-index', '-9999', 'important');
      }
    }
  });

  // Also check for any fixed-position elements with Booksy-related classes
  document.querySelectorAll('[class*="booksy"][style*="position: fixed"], [class*="booksy"][style*="position:fixed"]').forEach(el => {
    if (!el.closest('.booksy-widget-container-dialog')) {
      const rect = el.getBoundingClientRect();
      // Hide if it's a small floating button (likely at bottom of screen) OR positioned below footer
      if ((rect.height < 100 && rect.width < 300) || rect.top > window.innerHeight * 0.8) {
        el.style.setProperty('display', 'none', 'important');
        el.style.setProperty('visibility', 'hidden', 'important');
        el.style.setProperty('opacity', '0', 'important');
        el.style.setProperty('pointer-events', 'none', 'important');
        el.style.setProperty('z-index', '-9999', 'important');
      }
    }
  });

  // Aggressively hide any fixed buttons with "REZERWUJ" text that appear after footer
  document.querySelectorAll('button, a, div').forEach(el => {
    if (el.closest('footer') || el.closest('header') || el.closest('nav') || el.closest('.booksy-widget-container-dialog')) {
      return;
    }
    
    const style = window.getComputedStyle(el);
    if (style.position === 'fixed') {
      const rect = el.getBoundingClientRect();
      const text = (el.textContent || '').trim().toLowerCase();
      
      // If button is at bottom of screen and contains "rezerwuj"
      if (rect.bottom > window.innerHeight - 50 && (text.includes('rezerwuj') || text.includes('rezerwacja'))) {
        el.style.setProperty('display', 'none', 'important');
        el.style.setProperty('visibility', 'hidden', 'important');
        el.style.setProperty('opacity', '0', 'important');
        el.style.setProperty('pointer-events', 'none', 'important');
        el.style.setProperty('z-index', '-9999', 'important');
      }
    }
  });

  // CRITICAL: Hide ALL Booksy containers that are direct children of body (outside #root)
  document.querySelectorAll('body > .booksy-widget-container').forEach(container => {
    // Only hide if it's NOT a visible dialog
    const isDialog = container.classList.contains('booksy-widget-container-dialog');
    if (!isDialog) {
      container.style.setProperty('display', 'none', 'important');
      container.style.setProperty('opacity', '0', 'important');
      container.style.setProperty('visibility', 'hidden', 'important');
      container.style.setProperty('pointer-events', 'none', 'important');
      container.style.setProperty('z-index', '-9999', 'important');
    } else {
      // Check if dialog is actually visible
      const dialogStyle = window.getComputedStyle(container);
      if (dialogStyle.display === 'none' || dialogStyle.visibility === 'hidden') {
        // Dialog is hidden, hide the container too
        container.style.setProperty('display', 'none', 'important');
      }
    }
  });

  // Hide ALL Booksy buttons that are direct children of body
  document.querySelectorAll('body > .booksy-widget-button, body > a.booksy-business-link[href*="booksy.com"]').forEach(button => {
    // Only hide if it's not inside a visible dialog
    const isInDialog = button.closest('.booksy-widget-container-dialog');
    if (!isInDialog) {
      button.style.setProperty('display', 'none', 'important');
      button.style.setProperty('opacity', '0', 'important');
      button.style.setProperty('visibility', 'hidden', 'important');
      button.style.setProperty('pointer-events', 'none', 'important');
      button.style.setProperty('z-index', '-9999', 'important');
    }
  });
};

// Run on load with simple interval (avoids MutationObserver recursion)
// Also run more frequently to catch dynamically added buttons
if (typeof window !== 'undefined') {
  let checks = 0;
  const interval = setInterval(() => {
    hideBooksyWidget();
    if (++checks > 20) clearInterval(interval); // Run for 20 seconds
  }, 1000);

  // Also run periodically to catch buttons added after page load
  setInterval(() => {
    hideBooksyWidget();
  }, 3000); // Check every 3 seconds indefinitely
}
