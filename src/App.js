import React from "react";
//for "react-router-dom"V6, change Redirect to Navigate
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Statis from "./pages/Statistics";
import Todo from "./pages/Todo";

function App() {
  //用于改变主题颜色
  // console.log(
  //   "--bg",
  //   getComputedStyle(document.documentElement).getPropertyValue("--Theme-6")
  // );
  // document.documentElement.style.setProperty("--Theme-6", "#4d79ff");
  return (
    <Router>
      <div className="APP"></div>
      <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
      <Route path="/home" component={Home}></Route>
    </Router>
  );
}

export default App;
