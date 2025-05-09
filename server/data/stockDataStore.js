const { sampleData } = require('./mockData');

exports.getPrices = (ticker, minutes) => {
  const now = Date.now();
  const cutoff = now - minutes * 60 * 1000;

  return (sampleData[ticker] || []).filter(p =>
    new Date(p.lastUpdatedAt).getTime() >= cutoff
  );
};
