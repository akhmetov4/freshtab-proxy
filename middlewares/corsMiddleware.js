const cors = require("cors");

const allowedOrigins = ["chrome-extension://your-extension-id"];

const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
});

module.exports = corsMiddleware;
