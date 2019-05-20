import React from "react";
import Navbar from "./layout/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import jwt_decode from "jwt-decode";
import store from "../store";
import AuthProvider from "../providers/authProvider";
import { setCurrentUser, logout } from "../actions/authActions";
import Graphics from "./Graphics";
import Goals from "./Goals";
import Expenses from "./Expenses";

if (localStorage.jwtToken) {
    AuthProvider.SetAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logout());
        window.location.href = "/login";
    }
}

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <div className="dashboard container">
                    <div className="row">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/graphics"
                                component={Graphics}
                            />
                            <Route
                                exact
                                path="/expenses"
                                component={Expenses}
                            />
                            <Route exact path="/goals" component={Goals} />
                            <Route exact path="/signin" component={SignIn} />
                            <Route exact path="/signup" component={SignUp} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
