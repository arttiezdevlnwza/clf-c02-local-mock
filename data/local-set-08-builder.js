(() => {
  const rows = window.LOCAL_SET_08_ROWS || [];
  if (typeof window.buildClfLocalExamSet !== 'function') {
    console.error('CLF-C02 Set 8: exam factory is unavailable');
    return;
  }
  // Fixed per-set shuffle: mixed domains, stable question IDs across refreshes and saved progress.
  const mixed = rows.slice();
  let seed = (20261117 + 8 * 9973) >>> 0;
  for (let i = mixed.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = Math.floor((seed / 4294967296) * (i + 1));
    [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
  }
  window.buildClfLocalExamSet(8, mixed);
  // First completed Set 8 attempt, shown when browser-local progress is absent.
  // A completed browser attempt takes precedence over historical values.
  const completedSet = (window.QUIZ_SETS || []).find(set => set.id === 'local-set-08');
  if (completedSet) {
    completedSet.historicalAnswered = 65;
    completedSet.historicalScore = 56;
  }
})();
