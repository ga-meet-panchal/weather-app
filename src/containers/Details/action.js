import * as actionTypes from "./actionTypes";
import { fetchWeatherDetails } from "../../Services";

export const getCapitalDetails = country => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_CAPITAL_WEATHER_DETAILS_INIT
    });

    fetchWeatherDetails(country)
      .then(response => {
        if (response && response.status && response.status === 200) {
          dispatch({
            type: actionTypes.GET_CAPITAL_WEATHER_DETAILS_SUCCESS,
            payload: response.data
          });
        }
      })
      .catch(error => {
        if (error && error.response && error.response.status === 404) {
          dispatch({
            type: actionTypes.GET_CAPITAL_WEATHER_DETAILS_FAILURE,
            payload: "Capital Not Found"
          });
        } else {
          dispatch({
            type: actionTypes.GET_CAPITAL_WEATHER_DETAILS_FAILURE,
            payload: "Something went wrong"
          });
        }
      });
  };
};
