import React from "react";
//for "react-router-dom"V6, change Redirect to Navigate
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Statis from "./pages/Statistics";
import Todo from "./pages/Todo";

function App() {
  return (
    <Router>
      <div className="APP"></div>
      <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
      <Route path="/home" component={Home}></Route>
    </Router>
  );
}

export default App;
