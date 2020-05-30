import * as actionTypes from "./actionTypes";

const initialState = {
  capitalDetails: {},
  isFetchingCapitalDetails: false,
  capitalFetchFailed: false,
  capitalFailMessage: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CAPITAL_WEATHER_DETAILS_INIT: {
      return {
        ...state,
        capitalDetails: {},
        isFetchingCapitalDetails: true,
        capitalFetchFailed: false,
        capitalFailMessage: ""
      };
    }

    case actionTypes.GET_CAPITAL_WEATHER_DETAILS_SUCCESS: {
      return {
        ...state,
        capitalDetails: action.payload,
        isFetchingCapitalDetails: false,
        capitalFetchFailed: false,
        capitalFailMessage: ""
      };
    }

    case actionTypes.GET_CAPITAL_WEATHER_DETAILS_FAILURE: {
      return {
        ...state,
        isFetchingCapitalDetails: false,
        capitalFetchFailed: true,
        capitalFailMessage: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
