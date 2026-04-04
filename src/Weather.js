import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-4">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus
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

      <div className="weather-body">
        <div className="overview">
          <h1>New York</h1>
          <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>

        <div className="weather-data">
          <div className="weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
              className="weather-icon"
            />
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>

          <div className="weather-details">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
