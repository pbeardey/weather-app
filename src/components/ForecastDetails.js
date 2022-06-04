// src/componants/ForecastDetails.js

import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div
        className="forecast-details__temperature"
        data-testid="forecast-details__temp-max"
      >
        Max Temperature: {temperature.max}&deg;C
      </div>
      <div
        className="forecast-details__temperature"
        data-testid="forecast-details__temp-min"
      >
        Min Temperature: {temperature.min}&deg;C
      </div>
      <div
        className="forecast-details__humidity"
        data-testid="forecast-details__humidity"
      >
        Humidity: {humidity}%
      </div>
      <div className="forecast-wind" data-testid="forecast-details__wind">
        Wind: {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    // description: PropTypes.string,
    humidity: PropTypes.number,
    // icon: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      direction: PropTypes.string,
      speed: PropTypes.number,
    }),
  }).isRequired,
};

export default ForecastDetails;
