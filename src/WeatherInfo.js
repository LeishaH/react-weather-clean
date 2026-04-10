import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  let weatherData = props.data;
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit() {
    setUnit("fahrenheit");
  }

  function showCelsius() {
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return Math.round((weatherData.temperature * 9) / 5 + 32);
  }

  return (
    <div className="weather-body">
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate
              timestamp={weatherData.time}
              timezone={weatherData.timezone}
            />
          </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>

      <div className="weather-data">
        <div className="weather-temperature">
          <img
            src={weatherData.icon}
            alt={weatherData.description}
            className="weather-icon"
          />
          <span className="temperature">
            {unit === "celsius"
              ? weatherData.temperature
              : convertToFahrenheit()}
          </span>
          <span className="unit">
            <span onClick={showCelsius}>°C</span> |{" "}
            <span onClick={showFahrenheit}>°F</span>
          </span>
        </div>

        <div className="weather-details">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
