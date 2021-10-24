import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Setup from "./components/Setup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/slot" component={Setup} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
