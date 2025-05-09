const stockDataStore = require('../data/stockDataStore');
const { calculateCorrelation } = require('../utils/correlation');

exports.getAverageStockPrice = async (ticker, minutes) => {
  const prices = stockDataStore.getPrices(ticker, minutes);
  const avg = prices.reduce((sum, p) => sum + p.price, 0) / prices.length;

  return {
    averageStockPrice: Number(avg.toFixed(6)),
    priceHistory: prices,
  };
};

exports.getStockCorrelation = async (ticker1, ticker2, minutes) => {
  const data1 = stockDataStore.getPrices(ticker1, minutes);
  const data2 = stockDataStore.getPrices(ticker2, minutes);

  const correlation = calculateCorrelation(data1, data2);

  const avg1 = data1.reduce((sum, p) => sum + p.price, 0) / data1.length;
  const avg2 = data2.reduce((sum, p) => sum + p.price, 0) / data2.length;

  return {
    correlation: Number(correlation.toFixed(4)),
    stocks: {
      [ticker1]: { averagePrice: Number(avg1.toFixed(6)), priceHistory: data1 },
      [ticker2]: { averagePrice: Number(avg2.toFixed(6)), priceHistory: data2 },
    }
  };
};
