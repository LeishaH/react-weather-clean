import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");

  function handleResponse(response) {
    const dailyData = response.data.list.filter((item) =>
      item.dt_txt.includes("12:00:00"),
    );

    setForecast(dailyData);
    setError("");
  }

  useEffect(() => {
    if (props.coordinates) {
      setForecast(null);
      setError("");

      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;

      axios
        .get(apiUrl)
        .then(handleResponse)
        .catch(function () {
          setError("Forecast unavailable.");
        });
    }
  }, [props.coordinates]);

  function formatDay(timestamp) {
    const date = new Date(timestamp * 1000);

    return date.toLocaleDateString("en-AU", {
      weekday: "short",
    });
  }

  function convertTemperature(celsius) {
    if (props.unit === "fahrenheit") {
      return Math.round((celsius * 9) / 5 + 32);
    }

    return Math.round(celsius);
  }

  if (error) {
    return <div className="WeatherForecast">{error}</div>;
  }

  if (!forecast) {
    return <div className="WeatherForecast">Loading forecast...</div>;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.slice(0, 5).map(function (dailyForecast, index) {
          return (
            <div className="col" key={index}>
              <div className="WeatherForecastDay">
                <div>{formatDay(dailyForecast.dt)}</div>

                <WeatherIcon icon={dailyForecast.weather[0].icon} />

                <div className="WeatherForecastTemperatures">
                  <span className="WeatherForecastTemperatureMax">
                    {convertTemperature(dailyForecast.main.temp_max)}°
                  </span>
                  <span className="WeatherForecastTemperatureMin">
                    {convertTemperature(dailyForecast.main.temp_min)}°
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
