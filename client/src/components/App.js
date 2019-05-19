import React from "react";
import Navbar from "./layout/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import jwt_decode from "jwt-decode";
import store from "../store";
import AuthProvider from "../providers/authProvider";
import { setCurrentUser, logout } from "../actions/authActions";
import { withRouter } from 'react-router-dom';

if (localStorage.jwtToken) {
  AuthProvider.SetAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logout());
    this.props.history.push('/login');
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default withRouter(App);
