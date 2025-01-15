const axios = require("axios");

const IQAIR_API_KEY = process.env.IQAIR_API_KEY;

const getAirQuality = async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await axios.get(
      `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${IQAIR_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching air quality:", error);
    res.status(500).json({ error: "Failed to fetch air quality data" });
  }
};

module.exports = { getAirQuality };
