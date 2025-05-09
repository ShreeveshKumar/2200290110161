function calculateCorrelation(data1, data2) {
    const minLength = Math.min(data1.length, data2.length);
    const x = data1.slice(0, minLength).map(p => p.price);
    const y = data2.slice(0, minLength).map(p => p.price);
  
    const avgX = x.reduce((a, b) => a + b, 0) / x.length;
    const avgY = y.reduce((a, b) => a + b, 0) / y.length;
  
    let numerator = 0;
    let denomX = 0;
    let denomY = 0;
  
    for (let i = 0; i < x.length; i++) {
      const dx = x[i] - avgX;
      const dy = y[i] - avgY;
      numerator += dx * dy;
      denomX += dx ** 2;
      denomY += dy ** 2;
    }
  
    return numerator / Math.sqrt(denomX * denomY);
  }
  
  module.exports = { calculateCorrelation };
  