import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import postLogin from "../../PostRequest/postLogin"

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      passwortHash: "",
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
    console.log(this.state)

     postLogin.sendnewLogin(this.state).then(res => {
      sessionStorage.setItem('token', res.data)
      sessionStorage.setItem('NutzerName', this.state.username)

      
      
      console.log(res.data)
    }) 
    
    
    /* console.log("Ergebnisse: ");
    console.log(this.state.Benutzername);
    console.log(this.state.Passwort); */


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
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                className="InputTextField"
                placeholder="Passwort"
                name="passwortHash"
                type="password"
                value={this.state.passwortHash}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br />
          <div className="SubmitField">
            <input className="Submitbutton" type="submit" value=" Einloggen" />

            <Link className="Registrieren" to={RegistrierenLink}>
              
              Neu re­gis­t­rie­ren
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default LoginScreen;
