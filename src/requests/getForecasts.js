import axios from "axios";

const WEATHER_APP_API = "https://mcr-codes-weather.herokuapp.com/forecast";

function getForecasts(
  searchText,
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
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Town or City not found! Please try again.");
      }
      if (status === 500) {
        setErrorMessage(
          "Oh dear! Server Error. Hmmmm...please try again later."
        );
      }
    });
}

export default getForecasts;
