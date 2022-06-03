// src/requests/getForecasts.js

import axios from "axios";

const WEATHER_APP_API = "https://mcr-codes-weather.herokuapp.com/forecast";

function getForecasts(searchText, setSelectedDate, setForecasts, setLocation) {
  let queryText = "";
  if (searchText) {
    queryText += `?city=${searchText}`;
  }
  return axios.get(`${WEATHER_APP_API}${queryText}`).then((res) => {
    setSelectedDate(res.data.forecasts[0].date);
    setForecasts(res.data.forecasts);
    setLocation(res.data.location);
  });
}

export default getForecasts;
