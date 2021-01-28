import React, { useState } from "react";
import "../../Components/Slider/Slider.scss";
/* import Images from "./Img";
import pic1 from "../../Pics/pic1.jpg";
import pic2 from "../../Pics/pic2.jpg";
import pic3 from "../../Pics/pic3.jpg";
import { TransitionGroup, CSSTransition } from "react-transition-group"; */

    var RandomCount1
    var RandomCount2
    var Geburtsdatum
    var mail
    var vorname
    var nachname
    var passwortHash
    var newsletter
    var preiskategorie
    var username
    var alter
    var Sitzplatz
    var all



function MoviesSlider() {

    RandomCount1 = Math.random()*10000000000000000
    RandomCount2 = Math.random()*10000000000000000

    
    mail = ("a"+RandomCount1+"."+RandomCount2+"@KG42.de")
    vorname = RandomCount1
    nachname = RandomCount2
    passwortHash = "abc"
    newsletter =false
    preiskategorie ="ERWACHSENER"
    username ="USER"+RandomCount1+RandomCount2
    alter ="2000-01-01"
    Sitzplatz ="MITTE_MITTE"

    all = [mail, vorname, nachname, passwortHash, newsletter, preiskategorie, username, alter, Sitzplatz]





  return (
    
    <div>
        {console.log(all)}
    <div>{RandomCount1}</div>
    <div>{RandomCount2}</div>
    </div>
  );
}

export default MoviesSlider;
