import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Header";
import Home from "./Home";
import Search from "./Search";
import Random from "./Random";
import "./App.css";

function App() {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Search">
                    <Search />
                </Route>
                <Route path="/Random">
                    <Random />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
