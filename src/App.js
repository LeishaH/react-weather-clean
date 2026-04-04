import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container text-center mt-5">
        <h1 className="mb-4">Weather App</h1>

        <Weather />

        <footer>
          <p>This project was coded by Leisha Henry and is</p>

          <a
            href="https://github.com/LeishaH/react-weather-clean"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
