(function() {
  const hostname = window.location.hostname;
  let cssFile = '';
  let siteKey = '';

  if (hostname.includes('el.etfbl.net')) {
    cssFile = 'dark.css';
    siteKey = 'elEnabled';
  } else if (hostname.includes('efee.etf.unibl.org')) {
    cssFile = 'raspored.css';
    siteKey = 'rasporedEnabled';
  } else if (hostname.includes('etf.unibl.org')) {
    cssFile = 'etf.css';
    siteKey = 'etfEnabled';
  } else if (hostname.includes('student.unibl.org')) {
    cssFile = 'estudent.css';
    siteKey = 'studentEnabled';
  }

  if (!cssFile) return;

  function updateTheme() {
    chrome.storage.local.get(
      { etfEnabled: true, rasporedEnabled: true, elEnabled: true, studentEnabled: true },
      (items) => {
        const isEnabled = items[siteKey] !== false;
        const existingLink = document.getElementById('etfbl-dark-theme-style');

        if (isEnabled) {
          if (!existingLink) {
            const link = document.createElement('link');
            link.id = 'etfbl-dark-theme-style';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = chrome.runtime.getURL(cssFile);
            (document.head || document.documentElement).appendChild(link);
          }
        } else {
          if (existingLink) {
            existingLink.remove();
          }
        }
      }
    );
  }

  // Učitavanje teme odmah
  updateTheme();

  // Reagovanje na prekidače u realnom vremenu
  chrome.storage.onChanged.addListener(() => {
    updateTheme();
  });
})();