import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container text-center mt-5">
        <h1 className="mb-4">Weather App</h1>

        <button className="btn btn-danger mb-3">TEST BUTTON</button>

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