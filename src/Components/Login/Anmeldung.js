import React, { Component } from "react";
import "./Login.css";
//import { Link } from "react-router-dom";



class Anmeldung extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            EMail: '',
            Anrede: true, //true == Mann
            Vorname: '',
            Nachname: '',
            PLZ: '',
            Ort: '',
            Land: '',
            Adresse: '', //Straße & Hausnummer
            Geburtsdatum: '',
            Benutzername: '',
            Passwort1:'',
            Passwort2:'',
           
    
    
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      }

      
      
    
      handleChange(event) {
        const target = event.target;
        const Value = target.value
       
        const name = target.name;
    
         this.setState({[name]: Value});
          /* this.setState({[name]: Pass}); */
          
         
          
         
      } 
    
    
      handleSubmit(event) {
        event.preventDefault();
        if(this.state.Passwort1 !== this.state.Passwort2){
          alert("Das hat nicht geklappt")
        }else{


        console.log("Ergebnisse: ")
        console.log(this.state.Vorname )
        console.log(this.state.Nachname )
        console.log(this.state.Adresse )
        console.log(this.state.PLZ )
        console.log(this.state.Ort )
        console.log(this.state.Land )
        console.log(this.state.Geburtsdatum )
        console.log(this.state.Benutzername )
        console.log(this.state.Passwort1 )
        console.log(this.state.Passwort2) 
      }
    }
  render() {

  


     
    
    return (
      <div  ><br/>
         <form className = "FormFenster" onSubmit={this.handleSubmit}  >
              
              <div className="InputField">
              {/* <label>
              <input className ="InputTextField" name ="Anrede" type="boolean" value={this.state.Anrede} onChange={this.handleChange}/>
              
              </label> */}
              <div  className ="Zusammenhängend">
              <label>
              
              <input className ="Textfieldd" placeholder ="Vorname" name ="Vorname" type="text" value={this.state.Vorname} onChange={this.handleChange}/>
              
              </label>
              <label>
              <input className ="Textfieldd" placeholder ="Nachname" name ="Nachname" type="text" value={this.state.Nachname} onChange={this.handleChange}/>
              
              </label>
              </div>

              <label>
              <input className ="Textfielde" placeholder ="Adresse" name ="Adresse" type="text" value={this.state.Adresse} onChange={this.handleChange}/>
              
              </label>
              <div className ="Zusammenhängend">
              <label>
              <input className ="Textfields" placeholder ="PLZ" name ="PLZ" type="text" value={this.state.PLZ} onChange={this.handleChange}/>
              
              </label>
              <label>
              <input className ="Textfieldb" placeholder ="Ort" name ="Ort" type="text" value={this.state.Ort} onChange={this.handleChange}/>
              
              </label>
              </div>
              <label>
              <input className ="Textfielde" placeholder ="Land" name ="Land" type="text" value={this.state.Land} onChange={this.handleChange}/>
              
              </label>
              <label>
                Geburtsdatum:
              <input className ="Textfielde" placeholder ="Geburtsdatum" name ="Geburtsdatum" type="date" value={this.state.Geburtsdatum} onChange={this.handleChange}/>
              
              </label>
              <label>
              <input className ="Textfielde" placeholder ="Benutzername" name ="Benutzername" type="text" value={this.state.Benutzername} onChange={this.handleChange}/>
              
              </label>
              <label>
              <input className ="Textfielde" placeholder ="Passwort" name ="Passwort1" type="password" value={this.state.Passwort1} onChange={this.handleChange}/>
              
              
              </label>
              <label>
              <input className ="Textfielde" placeholder ="Passwort Wiederholen" name ="Passwort2" type="password" value={this.state.Passwort2} onChange={this.handleChange}/>
              
              </label>
               
              


              </div>
              <br/> 
              <div className="SubmitField">
             
              <input className="Submitbutton" type="submit" value=" Registrieren" /> 

              
               
              </div>
            </form>
       
      </div>
    );
  }
}
export default Anmeldung;