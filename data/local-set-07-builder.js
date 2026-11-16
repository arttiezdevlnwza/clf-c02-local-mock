(() => {
  const rows = window.LOCAL_SET_07_ROWS || [];
  if (typeof window.buildClfLocalExamSet !== 'function') {
    console.error('CLF-C02 Set 7: exam factory is unavailable');
    return;
  }
  window.buildClfLocalExamSet(7, rows);
})();
