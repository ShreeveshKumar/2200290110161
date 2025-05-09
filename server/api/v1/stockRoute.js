const express = require("express");
const router = express.Router();
const stockService = require("../../services/stockService");

/**
 * @swagger
 * /v1/stocks/{ticker}/average:
 *   get:
 *     summary: Get average stock price
 *     parameters:
 *       - in: path
 *         name: ticker
 *         required: true
 *         description: Stock ticker symbol (e.g. AAPL)
 *         schema:
 *           type: string
 *       - in: query
 *         name: minutes
 *         required: true
 *         description: Time window in minutes
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Average price and price history
 */
router.get("/stocks/:ticker/average", async (req, res, next) => {
  try {
    const { ticker } = req.params;
    const { minutes } = req.query;
    const result = await stockService.getAverageStockPrice(ticker, Number(minutes));
    res.json(result);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /v1/stocks/correlation/{ticker1}/{ticker2}:
 *   get:
 *     summary: Get correlation between two stocks
 *     parameters:
 *       - in: path
 *         name: ticker1
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: ticker2
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: minutes
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Correlation and stock data
 */
router.get("/stocks/correlation/:ticker1/:ticker2", async (req, res, next) => {
  try {
    const { ticker1, ticker2 } = req.params;
    const { minutes } = req.query;
    const result = await stockService.getStockCorrelation(ticker1, ticker2, Number(minutes));
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
