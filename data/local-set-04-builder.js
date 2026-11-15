(() => {
  const rows = window.LOCAL_SET_04_ROWS || [];
  if (typeof window.buildClfLocalExamSet !== 'function') {
    console.error('CLF-C02 Set 4: exam factory is unavailable');
    return;
  }
  window.buildClfLocalExamSet(4, rows);
})();
