import React from "react";
import Home from "./containers/Home";
import Details from "./containers/Details";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import configureStore from "./configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/country-details/:country">
            <Details />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
