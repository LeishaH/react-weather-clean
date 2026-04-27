import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">
            <div>Thu</div>
            <WeatherIcon icon="10d" />
            <div className="WeatherForecastTemperatures">
              <span className="WeatherForecastTemperatureMax">10°</span>
              <span className="WeatherForecastTemperatureMin">5°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
