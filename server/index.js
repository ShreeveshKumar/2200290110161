const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compress = require("compression");
const stockRoutes = require("./api/v1/stockRoute");
const dotenv = require("dotenv");
const http = require("http");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

dotenv.config({
  path: "./config.env"
})

app.use(cors({
  origin: [process.env.FRONTEND_URL],
}));
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Backend Service API",
    version: "1.0.0",
    description: "API exchange",
  },
  servers: [
    {
      url: "http://localhost:8000",
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./api/v1/*.js"], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);




app.use(helmet());
app.use(compress());



app.get("/swagger.json", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/v1/", stockRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: false,
    errors: [{ msg: err.message }],
  });
});

app.get("/", (req, res) => {
  res.send("Backend is working");
});

const port = parseInt(process.env.PORT, 10) || 8000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => console.log(`App listening on port no: ${port}`));