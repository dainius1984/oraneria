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

  // Hide "Rezerwuj" floating buttons by text content
  document.querySelectorAll('div, a, button').forEach(el => {
    if (el.classList.contains('booksy-business-link') || 
        el.closest('.booksy-business-link') ||
        el.closest('.booksy-widget-container-dialog') ||
        el.id === 'root') {
      return;
    }

    const style = window.getComputedStyle(el);
    if (style.position === 'fixed') {
      const text = (el.textContent || '').toLowerCase();
      if (text.includes('rezerwuj') && text.length < 30) {
        el.style.setProperty('display', 'none', 'important');
      }
    }
  });
};

// Run on load with simple interval (avoids MutationObserver recursion)
if (typeof window !== 'undefined') {
  let checks = 0;
  const interval = setInterval(() => {
    hideBooksyWidget();
    if (++checks > 10) clearInterval(interval);
  }, 1000);
}
