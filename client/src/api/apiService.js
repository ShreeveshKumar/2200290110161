export const getStockData = async () => {
    const response = await fetch('/api/stocks');  // Replace with your actual API endpoint
    const data = await response.json();
    return data;
  };
  
  export const getStockCorrelation = async () => {
    const response = await fetch('/api/correlation');  // Replace with your actual API endpoint
    const data = await response.json();
    return data;
  };
  