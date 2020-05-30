import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import HomeReducer from "./containers/Home/reducer";
import DetailsReducer from "./containers/Details/reducer";

const rootReducer = combineReducers({
  home: HomeReducer,
  details: DetailsReducer
});

const configureStore = () => {
  const middleware = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const enhancer = [middlewareEnhancer];
  const composedEnhancer = compose(...enhancer);
  const store = createStore(rootReducer, composedEnhancer);

  return store;
};

export default configureStore;
