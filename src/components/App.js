import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import NavBar from "./NavBar";

function App() {
  return <div>
    <NavBar />
    <Switch>
      <Route path='/movies'>
        <Movies/>
      </Route>
      <Route path='/directors'>
        <Directors/>
      </Route>
      <Route path='/actors'>
        <Actors/>
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
    </Switch>
  </div>;
}

export default App;
