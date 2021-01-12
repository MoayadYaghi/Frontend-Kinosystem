import React, { Component } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../../assets/LOGO1.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const LogInLink = "/Login";
    return (
      <div>
        <div className="Headline1">
          <a className="Link" alt="logo" href="/">
            <img alt="Logo" border="0" src={logo} className="Logo"></img>
          </a>
          <h1 className="Gruppenname">Kreative Gruppe 42</h1>
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
          <Link className="signIn" to={LogInLink}>
            {" "}
            Sign In{" "}
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
