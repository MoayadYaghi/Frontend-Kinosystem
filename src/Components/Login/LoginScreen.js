import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Benutzername: "",
      Passwort: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const Value = target.value;

    const name = target.name;

    this.setState({ [name]: Value });
    /* this.setState({[name]: Pass}); */
  }

  handleSubmit(event) {
    event.preventDefault();

   /*  postLogin.sendnewLogin(this.state).then(res => {
      localStorage.setItem('token', res.token)
    }) */

    
    console.log("Ergebnisse: ");
    console.log(this.state.Benutzername);
    console.log(this.state.Passwort);
  }

  render() {
    const RegistrierenLink = "/Registrieren";

    return (
      <div className="LogInField">
        <form className="FormFenster" onSubmit={this.handleSubmit}>
          <div className="InputField">
            <label>
              <input
                className="InputTextField"
                placeholder="Benutzername"
                name="Benutzername"
                type="text"
                value={this.state.Benutzername}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                className="InputTextField"
                placeholder="Passwort"
                name="Passwort"
                type="password"
                value={this.state.Passwort}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br />
          <div className="SubmitField">
            <input className="Submitbutton" type="submit" value=" Einloggen" />

            <Link className="Registrieren" to={RegistrierenLink}>
              {" "}
              Neu re­gis­t­rie­ren
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default LoginScreen;
