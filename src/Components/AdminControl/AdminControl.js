import React, { Component } from "react";
import "./AdminControl.css";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class AdminControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
    redirect: false,
    verweisAuf:0,

    };
    //this.setRedirect = this.setRedirect.bind(this);
    /* this.handleVorstellungHinzufügen = this.handleVorstellungHinzufügen.bind(this); */

}

/* setRedirect = (event) => {
    let id = event.target.id
    this.setState({redirect: true});
    this.setState({verweisAuf: id})    
  }

  
  renderRedirect = () => {
    console.log(this.state.verweisAuf)
    if (this.state.redirect) {
      if (this.state.verweisAuf == "1"){
        return <Link to={`/vorhin`} /></Link>
      }  
      if (this.state.verweisAuf == "2"){
        return <Redirect to={`/admin`} />
      }  
      if (this.state.verweisAuf == "3"){
        return <Redirect to={`/filmentfernen`} />
      }  
      if (this.state.verweisAuf == "4"){
        
      }  
      if (this.state.verweisAuf == "5"){
        
      }
      
     return <Redirect to={`/Fehler404`} />
    }
  } */



  render() {
    var VorHinZuLink = "/VorHin"
    var AdminLink = "/Admin"
    var FilmenEntLinkLink = "/filmentfernen"
    return (
        <div className ="DESIGNMindestHöhe">
            {/* <h4>Was wollen Sie tun?</h4>
{this.renderRedirect() } */}
<div className="HeadlinerAdmin">
<div className ="DESIGNHeadline3">Bitte wählen Sie eine Aktion aus</div></div>
<div className ="allButton">
  <Link to={VorHinZuLink}><div className="DESIGNButton">Vorstellung Hinzufügen</div></Link>
  <Link to={AdminLink}><div className="DESIGNButton">Film Hinzufügen</div></Link>
  <Link to={FilmenEntLinkLink}><div className="DESIGNButton">Vorstellung oder Film entfernen</div></Link>
    {/* <button id ="1"className="DESIGNButton" onClick={this.setRedirect} >Vorstellung Hinzufügen</button>
    <button id ="2" className="DESIGNButton" onClick={this.setRedirect} >Film Hinzufügen</button>
    <button id ="3" className="DESIGNButton" onClick={this.setRedirect} >Vorstellung oder Film entfernen</button> */}
    {/* <button id ="4" className="Vorstellung Hinzufügen" onClick={this.setRedirect} >Weiter zur Sitzplatzreservierung</button>
    <button id ="5" className="Vorstellung Hinzufügen" onClick={this.setRedirect} >Weiter zur Sitzplatzreservierung</button> */}
</div>



        </div>
    )
  }
}
export default AdminControl;