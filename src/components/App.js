// src/components.App.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.css";

import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App() {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const WEATHER_APP_API = "https://mcr-codes-weather.herokuapp.com/forecast";

  const getForecast = () => {
    axios.get(WEATHER_APP_API).then((res) => {
      setSelectedDate(res.data.forecasts[0].date);
      setForecasts(res.data.forecasts);
      setLocation(res.data.location);
    });
  };

  useEffect(() => {
    getForecast();
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
