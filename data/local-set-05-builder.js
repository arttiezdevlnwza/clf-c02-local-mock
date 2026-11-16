(() => {
  const rows = window.LOCAL_SET_05_ROWS || [];
  if (typeof window.buildClfLocalExamSet !== 'function') {
    console.error('CLF-C02 Set 5: exam factory is unavailable');
    return;
  }
  window.buildClfLocalExamSet(5, rows);
})();
