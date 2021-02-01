//Allgemeines
import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
  Redirect,
} from "react-router-dom";


//Pages
import StartSeite from "./Pages/startSeite";
import Fehler from "./Pages/fehler";
import Programm from "./Pages/programm";
import ProgrammAktuell from "./Pages/aktuell";
import ProgrammDemnächst from "./Pages/demnächst";
import Informationen from "./Pages/informationen";
import Shop from "./Pages/shop";
import Kontakt from "./Pages/kontakt";
import LogIn from "./Pages/LogIn";
import Registrieren from "./Pages/registrieren";
import Profil from "./Pages/profil";
import Snacks from "./Pages/snacks";
import Getraenk from "./Pages/getraenke";
import Bekleidung from "./Pages/bekleidung";
import Gutscheine from "./Pages/gutscheine";
import Warenkorb from "./Pages/warenkorb";
import Impressum from "./Pages/impressum";
import Wunschliste from "./Pages/wunschliste";
import Sitzplatzreservierung from "./Pages/sitzplatzres";
import filmDetails from "./Pages/filmDetails";
import Admin from "./Pages/AdminFilmAuswahl";
import VorstellungHinzufügen from "./Pages/VorstellungHinzufügen";
import Test1 from "./Pages/Test1";
import Test2 from "./Pages/Test2";
import AdminÜbersicht from "./Pages/AdminUebersicht";

class App extends Component {
  
render(){
  // Links
  const HomeLink = "/";
  const ProgrammLink = "/Programm";
  const ProgrammAktuellLink = "/Programm/Aktuell";
  const ProgrammDemnächstLink = "/Programm/Demnächst";
  const InformationsLink = "/Information";
  const ShopLink = "/Shop";
  const KontaktLink = "/Kontakt";
  const LogInLink = "/Login";
  const RegistrierenLink = "/Registrieren";
  const ProfilLink = "/Profil";
  const SnacksLink = "/Shop/Snacks";
  const GetraenkeLink = "/Shop/Getraenk";
  const BekleidungLink = "/Shop/Bekleidung";
  const GutscheineLink = "/Shop/Geschenke";
  const WarenkorbLink = "/Warenkorb";
  const ImpressumLink = "/Impressum";
  const FehlerLink = "/Fehler404";
  const WunschlisteLink = "/Wunschliste"
  const SitzplatzresLink = "/Sitzplatz"
  const FilmDetailsLink = "/FilmDetails"
  const AdminLink ="/Admin"
  const VorstellungHinzufügenLink ="/VorHin"
  const AdminÜbersichtsSeiteLink ="/aÜbersicht"


  
  


  return<Router>
    <Switch>
       <Route exact path= {HomeLink} component={StartSeite}/>
       <Route exact path= {ProgrammLink} component={Programm}/>
       <Route exact path= {ProgrammAktuellLink} component={ProgrammAktuell}/>
       <Route exact path= {ProgrammDemnächstLink} component={ProgrammDemnächst}/>
       <Route exact path= {InformationsLink} component={Informationen}/>
       <Route exact path= {ShopLink} component={Shop}/>
       <Route exact path= {KontaktLink} component={Kontakt}/>
       <Route exact path= {LogInLink} component={LogIn}/>
       <Route exact path= {RegistrierenLink} component={Registrieren}/>
       <Route exact path= {ProfilLink} component={Profil}/>
       <Route exact path= {SnacksLink} component={Snacks}/>
       <Route exact path= {GetraenkeLink} component={Getraenk}/>
       <Route exact path= {BekleidungLink} component={Bekleidung}/>
       <Route exact path= {GutscheineLink} component={Gutscheine}/>
       <Route exact path= {WarenkorbLink} component={Warenkorb}/>
       <Route exact path= {ImpressumLink} component={Impressum}/>
       <Route exact path= {WunschlisteLink} component={Wunschliste}/>
       <Route exact path= {SitzplatzresLink} component={Sitzplatzreservierung}/>
       <Route exact path= {FilmDetailsLink} component={filmDetails}/>
       <Route exact path= {AdminLink} component={Admin}/>
       <Route exact path= {VorstellungHinzufügenLink} component={VorstellungHinzufügen}/>
       <Route exact path= {AdminÜbersichtsSeiteLink} component={AdminÜbersicht}/>









       <Route exact path={FehlerLink} component={Fehler}/>
       {/*Fehlerseite*/}
       <Redirect to={FehlerLink}/>
      
       </Switch>
     </Router>



  
  
}
}

export default App;
