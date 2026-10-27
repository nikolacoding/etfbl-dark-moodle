document.addEventListener('DOMContentLoaded', () => {
  const etfToggle = document.getElementById('etfToggle');
  const rasporedToggle = document.getElementById('rasporedToggle');
  const elToggle = document.getElementById('elToggle');

  chrome.storage.local.get(
    { etfEnabled: true, rasporedEnabled: true, elEnabled: true },
    (items) => {
      etfToggle.checked = items.etfEnabled;
      rasporedToggle.checked = items.rasporedEnabled;
      elToggle.checked = items.elEnabled;
    }
  );

  const saveState = () => {
    chrome.storage.local.set({
      etfEnabled: etfToggle.checked,
      rasporedEnabled: rasporedToggle.checked,
      elEnabled: elToggle.checked
    });
  };

  etfToggle.addEventListener('change', saveState);
  rasporedToggle.addEventListener('change', saveState);
  elToggle.addEventListener('change', saveState);
});