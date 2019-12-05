import React from "react";
import "../src/Sass/App.scss";
//import Header from './Components/Header'
import { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Menus from "./Components/Menus";
import Navigator from "./Components/Navigator";
import Home from "./Components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Navigator />
        <Home />
        <Route path="/home" component={Home} />{" "}
        <Route path="/About" component={About} />{" "}
        <Route path="/Contact" component={Contact} />{" "}
        <Route path="/Gallery" component={Gallery} />{" "}
        <Route path="/Header" component={Gallery} />{" "}
        <Route path="/Menus" component={Menus} />{" "}
      </BrowserRouter>
    );
  }
}

export default App;
