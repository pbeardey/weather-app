// src/components/ForecastSummary.js

import React from "react";
import PropTypes from 'prop-types';

function ForecastSummary(props) {
  const { date, description, icon, temperature } = props;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    Max: PropTypes.number,
    Min: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
