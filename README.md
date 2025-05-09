![image](https://github.com/user-attachments/assets/444a6296-c495-4fe8-8254-c856d0c8be4e)

![image](https://github.com/user-attachments/assets/f633a995-6c48-4fa1-9144-508e392dab7a)



---

```markdown
# 📊 Stock Correlation & Price Backend API

This is a Node.js + Express-based backend service that provides stock data analytics — such as average stock prices and correlation between two stocks over a given time window. It includes Swagger-based API documentation and supports modular service architecture.

---

## 🚀 Features

- ✅ Get average stock price for a stock ticker over a time period.
- ✅ Get correlation between two stock tickers over a time period.
- ✅ In-memory datastore for simulated price data.
- ✅ Swagger UI for API exploration.
- ✅ Environment-configurable CORS and server settings.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Swagger (OpenAPI 3.0)
- Helmet, CORS, Compression

---

## 📁 Project Structure

```

server/
├── api/
│   └── v1/
│       ├── stockRoute.js         # Routes for stock API
├── data/
│   └── stockDataStore.js        # Simulated stock price data store
├── services/
│   └── stockService.js          # Business logic for stock operations
├── utils/
│   └── correlation.js           # Correlation calculation logic
├── config.env                   # Environment config
└── index.js                     # Main server file

````

---

## ⚙️ Setup Instructions

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/stock-backend-api.git
   cd stock-backend-api/server
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env` file:**

   ```env
   PORT=8000
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start the server:**

   ```bash
   npm run dev
   ```

---

## 🧪 API Endpoints

> Base URL: `http://localhost:8000/v1`

### GET `/v1/average/:ticker/:minutes`

Returns average stock price and price history for a specific ticker over a time window.

**Example:**

```bash
GET /v1/average/AAPL/30
```

### GET `/v1/correlation/:ticker1/:ticker2/:minutes`

Returns the Pearson correlation coefficient between two stock tickers.

**Example:**

```bash
GET /v1/correlation/GOOGL/MSFT/60
```

---

## 📚 API Docs (Swagger)

Visit:
**[http://localhost:8000/api-docs](http://localhost:8000/api-docs)**
to view interactive documentation.

You can also fetch raw JSON:
**[http://localhost:8000/swagger.json](http://localhost:8000/swagger.json)**

---

## 🧠 Notes

* This backend uses simulated/in-memory stock data. You can replace the logic in `stockDataStore.js` with real-time APIs (e.g., Alpha Vantage, Finnhub) for production.
* Swagger docs are generated using JSDoc comments inside route files.
* It uses OpenAPI 3.0 for compatibility and modern tooling.

---

```

```
