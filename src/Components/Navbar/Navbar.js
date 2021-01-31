import React, { Component } from "react";

import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../../assets/LOGO1.png";
import { Link } from "react-router-dom";

  var Nutzername = sessionStorage.getItem("NutzerName");

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
          

        

          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index} >
                  <a className={item.cName} href={item.url}>
                    {item.titel}
                  </a>
                </li>
              );
            })}
          </ul>
          <div>
            {/* {console.log(Nutzername)} */}
            
          <Link className="signIn" to={LogInLink}>
          {(Nutzername ===null )?(
            "Sign In" ): Nutzername }        
             </Link>
  
          </div>
        </nav>

       
      </div>
    );
  }
}

export default Navbar;
