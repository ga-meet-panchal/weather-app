import * as actionTypes from "./actionTypes";

import { fetchCountryDetails } from "../../Services/";

export const getCountryDetails = country => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_COUNTRY_DETAILS_INIT
    });

    fetchCountryDetails(country)
      .then(response => {
        if (response && response.status && response.status === 200) {
          dispatch({
            type: actionTypes.GET_COUNTRY_DETAILS_SUCCESS,
            payload: response.data[0]
          });
        }
      })
      .catch(error => {
        if (error && error.response && error.response.status === 404) {
          dispatch({
            type: actionTypes.GET_COUNTRY_DETAILS_FAILURE,
            payload: "Please enter valid country"
          });
        } else {
          dispatch({
            type: actionTypes.GET_COUNTRY_DETAILS_FAILURE,
            payload: "Something went wrong"
          });
        }
      });
  };
};
