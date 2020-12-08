import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Competitions from "./pages/Сompetitions";
import SingleCompetition from "./pages/SingleCompetition";
import Error from "./pages/Error";

import { NavBar } from "./components/NavBar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/competitions/" component={Competitions} />
        <Route exact path="/competitions/:slug" component={SingleCompetition} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
