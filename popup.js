document.addEventListener('DOMContentLoaded', () => {
  const etfToggle = document.getElementById('etfToggle');
  const rasporedToggle = document.getElementById('rasporedToggle');
  const elToggle = document.getElementById('elToggle');
  const studentToggle = document.getElementById('studentToggle');

  // Učitavanje stanja (podrazumijevano true)
  chrome.storage.local.get(
    { etfEnabled: true, rasporedEnabled: true, elEnabled: true, studentEnabled: true },
    (items) => {
      etfToggle.checked = items.etfEnabled;
      rasporedToggle.checked = items.rasporedEnabled;
      elToggle.checked = items.elEnabled;
      studentToggle.checked = items.studentEnabled;
    }
  );

  // Čuvanje izmjena
  const saveState = () => {
    chrome.storage.local.set({
      etfEnabled: etfToggle.checked,
      rasporedEnabled: rasporedToggle.checked,
      elEnabled: elToggle.checked,
      studentEnabled: studentToggle.checked
    });
  };

  etfToggle.addEventListener('change', saveState);
  rasporedToggle.addEventListener('change', saveState);
  elToggle.addEventListener('change', saveState);
  studentToggle.addEventListener('change', saveState);
});