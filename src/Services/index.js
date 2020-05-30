import axios from "axios";

export const fetchCountryDetails = country => {
  return axios.get(`${process.env.REACT_APP_GET_COUNTRY}${country}`);
};

export const fetchWeatherDetails = capital => {
  return axios.get(
    `${process.env.REACT_APP_GET_WEATHER}${capital}&access_key=${process.env.REACT_APP_API_KEY}`
  );
};
