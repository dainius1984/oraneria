/**
 * Applies website theme styling to Booksy widget
 * This runs when the widget is loaded/opened
 */
let styledElements = new WeakSet();
let observerInstance = null;
let isApplyingStyles = false;
let isInitialized = false;

export const styleBooksyWidget = () => {
  // Prevent multiple initializations
  if (isInitialized && observerInstance) {
    return observerInstance;
  }
  
  // Disconnect existing observer if any
  if (observerInstance) {
    observerInstance.disconnect();
    observerInstance = null;
  }
  
  isInitialized = true;

  const applyStyles = () => {
    // Prevent infinite loops
    if (isApplyingStyles) return;
    isApplyingStyles = true;

    try {
      // Find the widget dialog/container
      const widgetDialog = document.querySelector('.booksy-widget-container-dialog');
      
      if (widgetDialog && !styledElements.has(widgetDialog)) {
        // Apply theme colors to overlay
        const overlay = widgetDialog.querySelector('[class*="overlay"], [class*="backdrop"]') || widgetDialog;
        if (overlay) {
          overlay.style.backgroundColor = 'rgba(47, 79, 79, 0.85)'; // Dark Slate Green
          overlay.style.backdropFilter = 'blur(4px)';
        }

        // Apply styles to dialog content
        const content = widgetDialog.querySelector('[class*="content"], [class*="dialog"] > div') || widgetDialog.firstElementChild;
        if (content) {
          content.style.backgroundColor = '#FFFAF5'; // Warm Alabaster
          content.style.borderRadius = '16px';
          content.style.boxShadow = '0 20px 60px rgba(47, 79, 79, 0.3)';
        }
        
        styledElements.add(widgetDialog);
      }

      // Style buttons (only if not already styled)
      const buttons = document.querySelectorAll('[class*="booksy"] button, [class*="booksy"] [class*="button"]');
      buttons.forEach(button => {
        if (styledElements.has(button)) return;
        
        const buttonText = button.textContent?.toLowerCase() || '';
        const buttonClasses = button.className?.toLowerCase() || '';
        
        // Style primary/submit buttons
        if (button.type === 'submit' || 
            buttonClasses.includes('primary') || 
            buttonClasses.includes('submit') ||
            buttonText.includes('rezerwuj') ||
            buttonText.includes('book') ||
            buttonText.includes('zapisz')) {
          button.style.backgroundColor = '#C86B46'; // Terracotta Orange
          button.style.color = 'white';
          button.style.borderColor = '#C86B46';
          button.style.borderRadius = '9999px';
          button.style.fontFamily = 'Playfair Display, serif';
          button.style.transition = 'all 0.3s ease';
          
          // Add hover effect (only once)
          const handleMouseEnter = () => {
            button.style.backgroundColor = '#E08D6D'; // Soft Terracotta
            button.style.transform = 'translateY(-1px)';
            button.style.boxShadow = '0 4px 12px rgba(200, 107, 70, 0.4)';
          };
          
          const handleMouseLeave = () => {
            button.style.backgroundColor = '#C86B46';
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
          };
          
          button.addEventListener('mouseenter', handleMouseEnter);
          button.addEventListener('mouseleave', handleMouseLeave);
          
          styledElements.add(button);
        }
      });

      // Style headings (only if not already styled)
      const headings = document.querySelectorAll('[class*="booksy"] h1, [class*="booksy"] h2, [class*="booksy"] h3, [class*="booksy"] h4, [class*="booksy"] [class*="title"]');
      headings.forEach(heading => {
        if (!styledElements.has(heading)) {
          heading.style.color = '#2F4F4F'; // Dark Slate Green
          heading.style.fontFamily = 'Playfair Display, serif';
          styledElements.add(heading);
        }
      });

      // Style inputs (only if not already styled)
      const inputs = document.querySelectorAll('[class*="booksy"] input, [class*="booksy"] select, [class*="booksy"] textarea');
      inputs.forEach(input => {
        if (styledElements.has(input)) return;
        
        input.style.borderColor = '#C86B46';
        input.style.borderRadius = '8px';
        input.style.color = '#2F4F4F';
        
        const handleFocus = () => {
          input.style.borderColor = '#C86B46';
          input.style.boxShadow = '0 0 0 3px rgba(200, 107, 70, 0.1)';
          input.style.outline = 'none';
        };
        
        const handleBlur = () => {
          input.style.boxShadow = 'none';
        };
        
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);
        
        styledElements.add(input);
      });

      // Style links (only if not already styled)
      const links = document.querySelectorAll('[class*="booksy"] a');
      links.forEach(link => {
        if (styledElements.has(link)) return;
        
        link.style.color = '#C86B46';
        link.style.transition = 'color 0.3s ease';
        
        const handleMouseEnter = () => {
          link.style.color = '#E08D6D';
        };
        
        const handleMouseLeave = () => {
          link.style.color = '#C86B46';
        };
        
        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);
        
        styledElements.add(link);
      });
    } finally {
      isApplyingStyles = false;
    }
  };

  // Run immediately
  applyStyles();

  // Use MutationObserver with debouncing to prevent infinite loops
  let timeoutId = null;
  const debouncedApplyStyles = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      applyStyles();
    }, 100);
  };

  observerInstance = new MutationObserver((mutations) => {
    // Only process if Booksy widget elements are involved
    const hasBooksyChanges = mutations.some(mutation => {
      const target = mutation.target;
      const className = target.className || '';
      const id = target.id || '';
      return className.toLowerCase().includes('booksy') || 
             id.toLowerCase().includes('booksy') ||
             Array.from(mutation.addedNodes).some(node => {
               if (node.nodeType === 1) {
                 const nodeClass = node.className || '';
                 const nodeId = node.id || '';
                 return nodeClass.toLowerCase().includes('booksy') || 
                        nodeId.toLowerCase().includes('booksy');
               }
               return false;
             });
    });

    if (hasBooksyChanges) {
      debouncedApplyStyles();
    }
  });

  // Only observe the widget container if it exists, otherwise observe body but filter
  const widgetDialog = document.querySelector('.booksy-widget-container-dialog');
  if (widgetDialog) {
    observerInstance.observe(widgetDialog, {
      childList: true,
      subtree: true,
      attributes: false // Don't watch attribute changes to avoid loops
    });
  } else {
    observerInstance.observe(document.body, {
      childList: true,
      subtree: false // Only watch direct children to reduce mutations
    });
  }

  // Run after delays to catch dynamically loaded content
  setTimeout(applyStyles, 500);
  setTimeout(applyStyles, 1000);
  setTimeout(applyStyles, 2000);

  // Auto-disconnect after 30 seconds to prevent memory leaks
  setTimeout(() => {
    if (observerInstance) {
      observerInstance.disconnect();
      observerInstance = null;
    }
  }, 30000);

  return observerInstance;
};

// Function to cleanup when widget closes
export const cleanupBooksyStyles = () => {
  if (observerInstance) {
    observerInstance.disconnect();
    observerInstance = null;
  }
  isInitialized = false;
  isApplyingStyles = false;
  // Note: We keep styledElements WeakSet as it will auto-cleanup when elements are removed
};

