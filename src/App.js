import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";

const HatsPage = () => (
  <div>
    <h1>HAT PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" componenet={HomePage} />
        <Route path="/hats" componenet={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
