const express = require("express");
const { getAirQuality } = require("../controllers/airQualityController");
const { getWeather } = require("../controllers/weatherController");

const router = express.Router();

router.get("/air-quality", getAirQuality);
router.get("/weather", getWeather);

module.exports = router;
