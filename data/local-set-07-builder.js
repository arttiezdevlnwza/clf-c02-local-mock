(() => {
  const rows = window.LOCAL_SET_07_ROWS || [];
  if (typeof window.buildClfLocalExamSet !== 'function') {
    console.error('CLF-C02 Set 7: exam factory is unavailable');
    return;
  }
  window.buildClfLocalExamSet(7, rows);
  // Historical first completed Set 7 attempt; completed local browser progress takes priority.
  const completedSet = (window.QUIZ_SETS || []).find(set => set.id === 'local-set-07');
  if (completedSet) {
    completedSet.historicalAnswered = 65;
    completedSet.historicalScore = 55;
  }
})();
