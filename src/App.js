import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop" >
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
