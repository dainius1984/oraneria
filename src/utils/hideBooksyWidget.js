/**
 * Hide Booksy floating widget button
 * Simplified to prevent call stack errors
 */
export const hideBooksyWidget = () => {
  // 1. Hide the standard floating widget button provided by Booksy script
  const floatingButtons = document.querySelectorAll('.booksy-widget-button');
  
  floatingButtons.forEach(button => {
    // Verify it's not inside the dialog (we want to keep the dialog functional)
    if (button.closest('.booksy-widget-container-dialog')) {
      return;
    }
    
    // Hide it visually but keep it functional for our programmatic clicks
    button.style.setProperty('opacity', '0', 'important');
    button.style.setProperty('visibility', 'hidden', 'important');
    button.style.setProperty('pointer-events', 'none', 'important');
    // We don't use display:none so we can still click() it via JS
  });

  // 2. Hide any other container that isn't the dialog
  const containers = document.querySelectorAll('.booksy-widget-container');
  containers.forEach(container => {
    if (container.classList.contains('booksy-widget-container-dialog')) {
      return;
    }
    
    const style = window.getComputedStyle(container);
    // If it looks like a floating button (small and fixed)
    if (style.position === 'fixed' || style.position === 'absolute') {
      container.style.setProperty('opacity', '0', 'important');
      container.style.setProperty('pointer-events', 'none', 'important');
      container.style.setProperty('visibility', 'hidden', 'important');
    }
  });

  // 3. Hide any explicit "Rezerwuj" floating buttons that Booksy might inject
  // We identify them by text content + fixed position, avoiding our own UI
  const allFixed = document.querySelectorAll('div, a, button');
  allFixed.forEach(el => {
    // Skip if it's our own element or part of the dialog
    if (el.classList.contains('booksy-business-link') || 
        el.closest('.booksy-business-link') ||
        el.closest('.booksy-widget-container-dialog') ||
        el.id === 'root') {
      return;
    }

    // Check computed style cheaply first
    if (el.style.position === 'fixed' || (window.getComputedStyle(el).position === 'fixed')) {
      // Check text content
      const text = el.textContent || '';
      if (text.toLowerCase().includes('rezerwuj') && text.length < 30) {
        // It's likely the floating button
        el.style.setProperty('display', 'none', 'important');
      }
    }
  });
};

// Run once on load
if (typeof window !== 'undefined') {
  // Simple interval instead of MutationObserver to avoid recursion
  // Check every 1s, stop after 10s
  let checks = 0;
  const interval = setInterval(() => {
    hideBooksyWidget();
    checks++;
    if (checks > 10) clearInterval(interval);
  }, 1000);
}
