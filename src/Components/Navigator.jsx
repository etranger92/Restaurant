import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import Scrollchor from "react-scrollchor";

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      burger: false,
      classnav: ["nav_link"],
      onScroll: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 5;
      this.setState({
        isTop
      });
    });
  };

  handleBurger = () => {
    this.setState({
      burger: !this.state.burger
    });
  };

  render() {
    const navBar = ["Home", "About", "Menus", "Gallery", "Contact"];

    return (
      <React.Fragment>
        <nav className="nav_desktop">
          <ul className={this.state.isTop ? "nav_scroll" : ""}>
            {navBar.map(link => (
              <li>
                <Scrollchor
                  className="nav_link"
                  activeClassName={"selected"}
                  exact
                  to={"#" + link}
                  style={
                    this.state.isTop
                      ? { color: "rgb(82, 58, 58)" }
                      : { color: "white" }
                  }
                >
                  {" "}
                  {link}{" "}
                </Scrollchor>{" "}
              </li>
            ))}
          </ul>
        </nav>
        <nav className="nav_mobile">
          <div id="burger" onClick={this.handleBurger}>
            <span> </span>
            <span> </span>
            <span> </span>
          </div>

          <ul
            className={this.state.burger ? "effect_header" : false}
            style={{ display: this.state.burger ? "flex" : "none" }}
          >
            {navBar.map((link, index) => (
              <li
                className={this.state.burger ? "li_effect" : false}
                key={index}
              >
                <NavLink
                  className={"navLink"}
                  activeClassName={"selected"}
                  exact
                  to={"/" + link}
                >
                  {" "}
                  {link}{" "}
                </NavLink>{" "}
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigator;
