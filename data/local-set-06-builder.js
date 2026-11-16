(() => {
  const rows = window.LOCAL_SET_06_ROWS || [];
  if (typeof window.buildClfLocalExamSet !== 'function') {
    console.error('CLF-C02 Set 6: exam factory is unavailable');
    return;
  }
  window.buildClfLocalExamSet(6, rows);
})();
