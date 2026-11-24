(() => {
  const rows = window.LOCAL_SET_13_ROWS || [];
  if (typeof window.buildClfLocalExamSet !== 'function') {
    console.error('CLF-C02 Set 13: exam factory is unavailable');
    return;
  }
  // Stable question ordering within each new set so browser progress and review IDs remain deterministic.
  const mixed = rows.slice();
  let seed = (20261117 + 13 * 9973) >>> 0;
  for (let i = mixed.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = Math.floor((seed / 4294967296) * (i + 1));
    [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
  }
  window.buildClfLocalExamSet(13, mixed);
})();
