const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
require("colors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
