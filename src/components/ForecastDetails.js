// src/componants/ForecastDetails.js

import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
  const { forecast } = props;
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-datails" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div
        className="forecast-details__temperature"
        data-testid="forecast-details__temp-max"
      >
        Max Temperature:
        {temperature.max}&deg;C
      </div>
      <div
        className="forecast-details__temperature"
        data-testid="forecast-details__temp-min"
      >
        <b>Min Temperature: </b>
        {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">
        <b>Humidity: </b>
        {humidity}%
      </div>
      <div className="forecast-wind" data-testid="forecast-details__wind">
        <b>Wind: </b>
        {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
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
  }).isRequired,
};

export default ForecastDetails;
