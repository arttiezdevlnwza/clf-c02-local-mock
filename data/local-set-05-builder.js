(() => {
  const rows = window.LOCAL_SET_05_ROWS || [];
  if (typeof window.buildClfLocalExamSet !== 'function') {
    console.error('CLF-C02 Set 5: exam factory is unavailable');
    return;
  }
  window.buildClfLocalExamSet(5, rows);
  // First completed Set 5 attempt, shown when browser-local progress is absent.
  // A completed browser attempt takes precedence over historical numbers.
  const completedSet = (window.QUIZ_SETS || []).find(set => set.id === 'local-set-05');
  if (completedSet) {
    completedSet.historicalAnswered = 65;
    completedSet.historicalScore = 54;
  }
})();
