import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  let weatherData = props.data;

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
            {props.unit === "celsius"
              ? weatherData.temperature
              : convertToFahrenheit()}
          </span>

          <span className="unit">
            <span onClick={props.toggleUnit}>°C / °F</span>
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
