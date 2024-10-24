import React, {useEffect, useState} from "react";
import "../styles/weatherWidget.css"
const WeatherWidget = () => {

    const [weather, setWeather] = useState(null);

    const constantData = {
        apiKey : "8d5ba03d1366f8056e56b7c7548726e7",
        city : "Toronto",
    }


    const getWeather = async (city) => {
        console.log(city)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${constantData.apiKey}&units=metric`);
        const data = await response.json();
            setWeather(data);
    }

    useEffect(()=> {
        getWeather("Kathmandu")
    }, [])





    return (
        <div className="weather-widget">
        <h3>Weather</h3>
        
        {/* Input field for city name */}
        <input
          type="text"
   
          placeholder="Enter city name"
        />
    
        {/* Button to trigger the weather fetch */}
        <button className="weatherButton">Get Weather</button>
        
        {/* Display weather details */}
        {weather ? (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
}

export default WeatherWidget