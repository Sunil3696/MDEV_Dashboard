import React, { useEffect, useState } from "react";
import "../styles/weatherWidget.css";
const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Barrie");
  const [error, setError] = useState(null);

  const constantData = {
    apiKey: "8d5ba03d1366f8056e56b7c7548726e7",
  };

  const getWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${constantData.apiKey}&units=metric`
      );

      // Check if the response is OK (status 200)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found. Please try again.");
        } else {
          throw new Error("Failed to fetch weather data.");
        }
      }

      const data = await response.json();
      setWeather(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Set the error message
      setWeather(null); // Clear the weather data
    }
  };

  useEffect(() => {
    getWeather("Katmandu");
  }, []);

  const handleChange = (event) => {
    const CITY = event.target.value;
    setCity(CITY);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(city)

    getWeather(city);
  };

  return (
    <div className="weather-widget">
      <h3>Weather</h3>

      {/* Input field for city name */}
      <input
        type="text"
        placeholder="Enter city name"
        name="cityName"
        onChange={handleChange}
      />

      {/* Button to trigger the weather fetch */}
      <button className="weatherButton" onClick={onSubmit}>
        Get Weather
      </button>
      {error && <p className="error">{error}</p>}
      {/* Display weather details */}
      {weather ? (
        <div>
          <p className="cityNames">{weather.name}</p>
          <p>{weather.main.temp}°C</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default WeatherWidget;
