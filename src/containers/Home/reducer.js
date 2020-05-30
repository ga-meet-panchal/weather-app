import * as actionTypes from "./actionTypes";

const initialState = {
  countryDetails: {},
  isFetchingCountryDetails: false,
  countryFetchFailed: false,
  countryFailMessage: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COUNTRY_DETAILS_INIT: {
      return {
        ...state,
        isFetchingCountryDetails: true,
        countryFetchFailed: false,
        countryFailMessage: ""
      };
    }

    case actionTypes.GET_COUNTRY_DETAILS_SUCCESS: {
      return {
        ...state,
        countryDetails: action.payload,
        isFetchingCountryDetails: false,
        countryFetchFailed: false,
        countryFailMessage: ""
      };
    }

    case actionTypes.GET_COUNTRY_DETAILS_FAILURE: {
      return {
        ...state,
        isFetchingCountryDetails: false,
        countryFetchFailed: true,
        countryFailMessage: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
