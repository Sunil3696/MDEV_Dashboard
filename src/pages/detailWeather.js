import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../components/sidebar.component"; // Import the Sidebar component
import "../styles/detailWeather.css";

const DetailWeather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [sidebarVisible, setSidebarVisible] = useState(false); // Sidebar toggle state
    const [error, setError] = useState("");

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const fetchWeatherData = async () => {
        if (!city) {
            setError("Please enter a city name.");
            return;
        }
        try {
            setError("");
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d5ba03d1366f8056e56b7c7548726e7&units=metric`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError("Failed to fetch weather data. Please try again.");
        }
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="detail-weather-page">
            {/* Toggle Button */}
            <button className={`sidebar-toggle ${sidebarVisible ? 'cross' : ''}`} onClick={toggleSidebar}>
                {sidebarVisible ? "✖" : "≡"}
            </button>

            <div className={sidebarVisible ? "visible" : "hidden"}>
                <Sidebar />
                <button className="sidebar-toggle cross" onClick={toggleSidebar}>
                    ✖
                </button>
            </div>

            <div className="detail-weather-main-content">
                <h2>Get Weather Details</h2>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={handleInputChange}
                    />
                    <button onClick={fetchWeatherData}>Get Weather</button>
                </div>
                {error && <p className="error">{error}</p>}
                {weatherData && (
                    <div className="weather-info">
                        <h3>Weather in {weatherData.name}, {weatherData.sys.country}</h3>
                        <p>Temperature: {weatherData.main.temp}°C</p>
                        <p>Feels Like: {weatherData.main.feels_like}°C</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                        <p>Weather: {weatherData.weather[0].description}</p>
                        <p>Coordinates: [{weatherData.coord.lat}, {weatherData.coord.lon}]</p>
                        <p>Visibility: {weatherData.visibility} meters</p>
                        <p>Pressure: {weatherData.main.pressure} hPa</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailWeather;
