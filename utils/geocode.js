const axios = require("axios");

async function getCoordinates(place) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(place)}&format=json&limit=1`;

  const response = await axios.get(url, {
    headers: {
      "User-Agent": "wanderlust-app"
    }
  });

  if (response.data.length === 0) {
    return null;
  }

  return {
    lat: parseFloat(response.data[0].lat),
    lon: parseFloat(response.data[0].lon),
  };
}

module.exports = getCoordinates;