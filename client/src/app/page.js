"use client"
import React, { useState, useEffect } from 'react';
import StockCard from '../components/StockCard';
import { Grid, Typography } from '@mui/material';
import { getStockData } from '../api/apiService';

const StockPage = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      const data = await getStockData();
      setStockData(data);
    };
    fetchStockData();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Stock Price Aggregation
      </Typography>
      <Grid container spacing={3}>
        {stockData ? (
          stockData.map((stock, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StockCard stock={stock} />
            </Grid>
          ))
        ) : (
          <Typography>Loading stock data...</Typography>
        )}
      </Grid>
    </div>
  );
};

export default StockPage;
