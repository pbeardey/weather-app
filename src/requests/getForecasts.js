// src/requests/getForecasts.js

/* eslint-disable no-console */

import axios from "axios";

const WEATHER_APP_API = "https://mcr-codes-weather.herokuapp.com/forecast";

function getForecasts(
  searchText,
  setSearchText,
  setErrorMessage,
  setForecasts,
  setLocation,
  setSelectedDate
) {
  let queryText = "";
  setErrorMessage("");
  if (searchText) {
    queryText += `?city=${searchText}`;
  }
  return axios
    .get(`${WEATHER_APP_API}${queryText}`)
    .then((res) => {
      setSelectedDate(res.data.forecasts[0].date);
      setForecasts(res.data.forecasts);
      setLocation(res.data.location);
      setSearchText("");
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Town or City not found! Please try again.");
        console.log("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage(
          "Oh dear! Server Error. Hmmmm...please try again later."
        );
        console.log("Server error", error);
      }
    });
}

export default getForecasts;
