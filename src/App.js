import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Competitions from "./pages/Сompetitions";
import SingleCompetition from "./pages/SingleCompetition";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/competitions/" component={Competitions} />
        <Route exact path="/competitions/:slug" component={SingleCompetition} />
        <Route component={Error} />
      
      </Switch>
    </>
  );
}

export default App;