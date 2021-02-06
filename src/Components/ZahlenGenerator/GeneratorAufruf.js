import React, { Component } from "react";
import postRegister from "../../PostRequest/postRegister";

import postLogin from "../../PostRequest/postLogin";

//import { Link } from "react-router-dom";

    var RandomCount1
    var RandomCount2
    var mail1
    var vorname1
    var nachname1
    var passwortHash1
    var preiskategorie1
    var username1
    var alter1
    var Sitzplatz1
    var Informationen
    


class GeneratorAufruf extends Component {
  constructor(props) {
    super(props);
    this.state = {
    email: "",
    vorname: "",
    nachname: "",
    passwortHash: "",
    newsletter: false,
    preiskategorie: "",
    username: "",
    alter: "",
    lieblingszone: "",
   
    };
  
  }
  Register(){
    Informationen = this.state
    postRegister.sendnewRegister(this.state)
    //.then((res) => {
      //console.log(res)})
  }
  

  componentDidMount(){
    var token = sessionStorage.getItem('token')
    if(token === null){
    RandomCount1 = Math.random()*10000000000000000
    RandomCount2 = Math.random()*10000000000000000

    
    mail1 = ("MAIL"+RandomCount1+"."+RandomCount2+"@KG42.de")
    vorname1 = "VOR"+RandomCount1.toString()
    nachname1 = "NACH" +RandomCount2.toString()
    passwortHash1 = "abc"
    preiskategorie1 ="ERWACHSENER"
    username1 ="USER"+RandomCount1+RandomCount2
    alter1 ="18"
    Sitzplatz1 ="MITTE_MITTE"

    this.setState({
        email : mail1,
        vorname : vorname1,
        nachname : nachname1,
        passwortHash : passwortHash1,
        preiskategorie : preiskategorie1,
        username : username1,
        alter : alter1,
        lieblingszone : Sitzplatz1
    }, () => (this.Register(), setTimeout(function(){
     // console.log(Informationen)
      postLogin.sendnewLogin(Informationen)
      .then((respon) => {
      sessionStorage.setItem('token', respon.data)
      //console.log(sessionStorage.getItem('token'))
      })
    },3000) 
    ))
    
  }
  
  
}

  render() {
    return(null)
        {/* <div>
            {RandomCount1}<br/>
            {RandomCount2}<br/>
            {this.state.mail}<br/>
        </div> */}
    
  }
}
export default GeneratorAufruf;
