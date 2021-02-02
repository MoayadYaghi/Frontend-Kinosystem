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
       visible: true,
       Fehler: false,
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
    var username = this.state.username
    var passwortHash = this.state.passwortHash

     postLogin.sendnewLogin({username, passwortHash}).then(res => {
       console.log(res)
        this.setState({visible: false}) 
        this.setState({Fehler: false}) 
      sessionStorage.setItem('token', res.data)
      sessionStorage.setItem('NutzerName', this.state.username)
      sessionStorage.setItem('AllgemeinLogin', false)
      sessionStorage.setItem('LoginFehler', false)
   
      
      sessionStorage.removeItem('LoginFehler')
      sessionStorage.removeItem('LoginNutzerName')


      
      
      console.log(res.data)
    }).catch(error =>(
      sessionStorage.setItem('LoginFehler', true),
      sessionStorage.setItem('LoginNutzerName', this.state.username),
    window.location.reload())
      ) 
    
    
    /* console.log("Ergebnisse: ");
    console.log(this.state.Benutzername);
    console.log(this.state.Passwort); */


  }

    componentDidMount(){
      var Nutzername
      var FehlerSession
      FehlerSession = sessionStorage.getItem('LoginFehler')
        this.setState({Fehler: FehlerSession })
        Nutzername = sessionStorage.getItem('LoginNutzerName')
        this.setState({username: Nutzername})
    }


  render() {
    const RegistrierenLink = "/Registrieren";
    


    return (
      <div>
      {
         this.state.Fehler?
        <div> Leider gab es einen Fehler bei der Anmeldung, bitte versuchen Sie es erneut</div>:null
      }
      {this.state.visible?(<div className="LogInField">
        

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
            
             <input className="DESIGNButton" type="submit" value=" Einloggen" />
            <br />
            <Link className="DESIGNButton" to={RegistrierenLink}>
              
              Neu re­gis­t­rie­ren
            </Link>
          </div>
        </form>
      </div>):<div>Das Login hat funktioniert</div>
  }
      </div>
    );
  }
}
export default LoginScreen;
