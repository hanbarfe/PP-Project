import React from "react";
import "./App.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/store";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Products from "./components/product/Products";
import Orders from "./components/order/Orders";

import PrivateRoute from "./components/common/PrivateRoute";

import env from "./environment";

axios.defaults.baseURL = env.API_URL;
console.log(`Running at ${env.NAME} with ${env.API_URL}`);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Landing} />
        <Switch>
          <PrivateRoute
            exact
            path="/dashboard"
            component={Products}
          ></PrivateRoute>
          <PrivateRoute exact path="/orders" component={Orders}></PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
