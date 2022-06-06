// src/components.App.js

import React, { useEffect, useState } from "react";
import "../styles/App.css";

import getForecasts from "../requests/getForecasts";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";

function App() {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getForecasts(
      searchText,
      setSearchText,
      setErrorMessage,
      setForecasts,
      setLocation,
      setSelectedDate
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecasts(
      searchText,
      setSearchText,
      setErrorMessage,
      setForecasts,
      setLocation,
      setSelectedDate
    );
  };

  return (
    <div className="weather-app">
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      {!errorMessage && (
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
          onSubmit={handleCitySearch}
        />
      )}
      {!errorMessage && selectedForecast && (
        <ForecastDetails forecast={selectedForecast} />
      )}
    </div>
  );
}

export default App;
