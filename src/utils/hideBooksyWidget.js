/**
 * Hide Booksy floating widget button
 * Keeps dialog functional while hiding the floating button
 */
export const hideBooksyWidget = () => {
  // Hide floating widget button (keep functional for programmatic clicks)
  document.querySelectorAll('.booksy-widget-button').forEach(button => {
    if (!button.closest('.booksy-widget-container-dialog')) {
      button.style.setProperty('opacity', '0', 'important');
      button.style.setProperty('visibility', 'hidden', 'important');
      button.style.setProperty('pointer-events', 'none', 'important');
    }
  });

  // Hide floating containers (not dialogs)
  document.querySelectorAll('.booksy-widget-container').forEach(container => {
    if (!container.classList.contains('booksy-widget-container-dialog')) {
      const style = window.getComputedStyle(container);
      if (style.position === 'fixed' || style.position === 'absolute') {
        container.style.setProperty('opacity', '0', 'important');
        container.style.setProperty('pointer-events', 'none', 'important');
        container.style.setProperty('visibility', 'hidden', 'important');
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
