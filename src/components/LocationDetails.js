import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

function LocationDetails({ city, country, errorMessage }) {
  return errorMessage ? (
    <h1 className="location-details">{`${errorMessage}`}</h1>
  ) : (
    <h1>{`${city}, ${country}`}</h1>
  );
}
LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default LocationDetails;
