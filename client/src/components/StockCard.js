import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StockCard = ({ stock }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{stock.symbol}</Typography>
        <Typography variant="body2">Price: ${stock.price}</Typography>
        <Typography variant="body2">Change: {stock.change}</Typography>
      </CardContent>
    </Card>
  );
};

export default StockCard;
