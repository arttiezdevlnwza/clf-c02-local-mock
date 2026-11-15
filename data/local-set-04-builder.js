(() => {
  const rows = window.LOCAL_SET_04_ROWS || [];
  if (typeof window.buildClfLocalExamSet !== 'function') {
    console.error('CLF-C02 Set 4: exam factory is unavailable');
    return;
  }
  window.buildClfLocalExamSet(4, rows);
  // First completed Set 4 attempt, for Dashboard history when browser state is absent.
  // An actual completed browser attempt takes precedence over these historic numbers.
  const completedSet = (window.QUIZ_SETS || []).find(set => set.id === 'local-set-04');
  if (completedSet) {
    completedSet.historicalAnswered = 65;
    completedSet.historicalScore = 49;
  }
})();
