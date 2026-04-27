import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState("");

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      description:
        response.data.weather[0].description.charAt(0).toUpperCase() +
        response.data.weather[0].description.slice(1),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      time: response.data.dt,
      timezone: response.data.timezone,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    setError("");
    setReady(true);
  }

  const search = useCallback((searchCity) => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

    if (!apiKey) {
      setError("Missing API key.");
      setReady(false);
      return;
    }

    const cleanedCity = searchCity.trim();

    if (!cleanedCity) {
      setError("Please enter a city.");
      setReady(false);
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      cleanedCity,
    )}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function () {
        setError("City not found or weather data unavailable.");
        setReady(false);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  useEffect(() => {
    search(props.defaultCity);
  }, [props.defaultCity, search]);

  return (
    <div className="Weather">
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus
              name="city"
              onChange={handleCityChange}
              value={city}
            />
          </div>

          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      {error ? (
        <div className="weather-body">
          <p>{error}</p>
        </div>
      ) : ready ? (
        <>
          <WeatherInfo data={weatherData} />
          <WeatherForecast />
        </>
      ) : (
        <div className="weather-body">Loading...</div>
      )}
    </div>
  );
}
