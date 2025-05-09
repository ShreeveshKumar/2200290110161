const stockService = require('../services/stockService');

exports.getAveragePrice = (req, res) => {
  const ticker = req.params.ticker;
  const minutes = parseInt(req.query.minutes || '5');

  try {
    const result = stockService.getAverageStockPrice(ticker, minutes);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStockCorrelation = (req, res) => {
  const tickers = req.query.ticker;
  const minutes = parseInt(req.query.minutes || '5');

  if (!Array.isArray(tickers) || tickers.length !== 2) {
    return res.status(400).json({ error: 'Please provide exactly two ticker parameters.' });
  }

  try {
    const result = stockService.getStockCorrelation(tickers[0], tickers[1], minutes);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
