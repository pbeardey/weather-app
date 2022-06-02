// src/components.App.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/App.css";

import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  // eslint-disable-next-line no-unused-vars
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const { city, country } = location;

  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
}

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      humidity: PropTypes.number,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
      wind: PropTypes.shape({
        direction: PropTypes.string,
        speed: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
