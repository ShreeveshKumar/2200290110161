exports.sampleData = {
    AAPL: [
      { price: 100, lastUpdatedAt: new Date(Date.now() - 60 * 1000).toISOString() },
      { price: 105, lastUpdatedAt: new Date(Date.now() - 30 * 1000).toISOString() }
    ],
    TSLA: [
      { price: 200, lastUpdatedAt: new Date(Date.now() - 60 * 1000).toISOString() },
      { price: 195, lastUpdatedAt: new Date(Date.now() - 30 * 1000).toISOString() }
    ]
  };
  