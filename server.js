require("dotenv").config();
const express = require("express");
const corsMiddleware = require("./middlewares/corsMiddleware");
const rateLimiter = require("./middlewares/rateLimiter");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

// Apply middlewares
app.use(corsMiddleware);
app.use(rateLimiter);
app.use("/api", apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Backend proxy running at http://localhost:${PORT}`);
});
