import React from "react";
import { Component } from "react";
import Header from "./Header";
import Menus from "./Menus";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <section id="Home">
        <Header />
        <About />
        <Menus />
        <Gallery />
        <Contact />
      </section>
    );
  }
}

export default Home;
