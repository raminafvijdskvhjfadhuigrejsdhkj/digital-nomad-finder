import { useEffect, useState } from "react";

function useWeather(capital) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      if (!capital || capital === "N/A") return;

      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${capital}&count=1`
        );

        const geoData = await geoRes.json();
        if (!geoData.results) return;

        const lat = geoData.results[0].latitude;
        const lon = geoData.results[0].longitude;

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );

        const weatherData = await weatherRes.json();
        setWeather(weatherData.current_weather);
      } catch (error) {
        console.log(error);
      }
    }

    fetchWeather();
  }, [capital]);

  return weather;
}

export default useWeather;