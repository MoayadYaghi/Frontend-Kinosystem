import React, { Component } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../../assets/LOGO1.png";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <div className="Headline1">
          <a className="Link" alt="logo" href="/">
            <img alt="Logo" border="0" src={logo} className="Logo"></img>
          </a>
        </div>

        <nav className="NavbarItems">
          <div className="navbar-logo"></div>
          <h1 className="navbar-logo"></h1>

          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.titel}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button className="sign-up-button"> Sign Up </Button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
