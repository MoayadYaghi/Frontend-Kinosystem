
import React, { Component } from "react";
import "./Profilübersicht.scss";
import GetProfil from "../../API_Pulls/GetProfil";
import UpdateBenutzer from "../../API_Pulls/UpdateBenutzer";

class Profilübersicht extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vorname: "",
      nachname: "",
      email: "",
      Ticket: [],
      alter: "",
      bezahlmethode: "",
      Karteninhaber: "",
      Kartennummer: "",
      Kreditkartentyp: "",
      Gültig: "",
      Datum: "",
      Zeit: "",
      IBAN: "",
      lieblingszone: "",
      zustand: "",
      merkliste: [],
      bestellungen: [],
      angemeldet: false,
      ErrorMessage: false,
      tokenLeer: false,
      benutzer: [],
      geladen: false,
      profilBearbeitbar: false,
      merklisteBearbeitbar: false,
    };
    this.ProfilBearbeiten = this.ProfilBearbeiten.bind(this);
    this.ProfilBearbeitet = this.ProfilBearbeitet.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.vornameBearbeiten = this.vornameBearbeiten.bind(this);
    this.nachnameBearbeiten = this.nachnameBearbeiten.bind(this);
    this.emailBearbeiten = this.emailBearbeiten.bind(this);
    this.alterBearbeiten = this.alterBearbeiten.bind(this);
    this.bezahlmethodeBearbeiten = this.bezahlmethodeBearbeiten.bind(this);
    this.lieblingszoneBearbeiten = this.lieblingszoneBearbeiten.bind(this);
  }

  componentDidMount() {
    GetProfil.getProfil().then((Response) => {
      console.log(Response);
      this.setState({ benutzer: Response.data, geladen: true });
    });
  }

  vornameBearbeiten(event) {
    let benutzer = this.state.benutzer;
    benutzer.vorname = event.target.value;
    this.setState({ vorname: event.target.value });
    this.setState({ benutzer: benutzer });
  }

  nachnameBearbeiten(event) {
    let benutzer = this.state.benutzer;
    benutzer.nachname = event.target.value;
    this.setState({ nachname: event.target.value });
    this.setState({ benutzer: benutzer });
  }

  emailBearbeiten(event) {
    let benutzer = this.state.benutzer;
    benutzer.email = event.target.value;
    this.setState({ email: event.target.value });
    this.setState({ benutzer: benutzer });
  }

  alterBearbeiten(event) {
    let benutzer = this.state.benutzer;
    benutzer.alter = event.target.value;
    this.setState({ alter: event.target.value });
    this.setState({ benutzer: benutzer });
  }

  bezahlmethodeBearbeiten(event) {
    let benutzer = this.state.benutzer;
    benutzer.bezahlmethode = event.target.value;
    this.setState({ bezahlmethode: event.target.value });
    this.setState({ benutzer: benutzer });
  }

  lieblingszoneBearbeiten(event) {
    let benutzer = this.state.benutzer;
    benutzer.lieblingszone = event.target.value;
    this.setState({ lieblingszone: event.target.value });
    this.setState({ benutzer: benutzer });
  }

  handleChange(event) {
    const zustand = event.target.value;
    let benutzer = this.state.benutzer;
    benutzer.preiskategorie = zustand;
    this.setState({ zustand: zustand });
    this.setState({ benutzer: benutzer });
    UpdateBenutzer.updateProfil(this.state.benutzer);
  }

  MerklisteBearbeiten() {
    this.setState({ merklisteBearbeitbar: true });
  }

  ProfilBearbeiten() {
    if (!this.profilBearbeitbar) {
      this.setState({ profilBearbeitbar: true });
    } else if (this.profilBearbeitbar) {
      this.setState({ profilBearbeitbar: false });
    }
  }

  ProfilBearbeitet() {
    this.setState({ profilBearbeitbar: false });
    UpdateBenutzer.updateProfil(this.state.benutzer);
  }

  render() {
    return (
      <div className="ProfilÃ¼bersichtSeite">
        {this.state.geladen ? (
          <div>
            <div className="Oben">
              <div className="ObenLinks">
                <div className="AngabenÃœberschrift">
                  Ihre Angaben: <br></br>
                </div>
                <div className="ObenLinksAngaben">
                  <div className="ObenLinksLinks">
                    Vorname
                    <input
                      className="AngabenFelderLinks"
                      type="text"
                      placeholder="Vorname"
                      disabled={!this.state.profilBearbeitbar}
                      value={this.state.benutzer.vorname}
                      onChange={this.vornameBearbeiten}
                    />
                    Nachname
                    <input
                      className="AngabenFelderLinks"
                      type="text"
                      placeholder={this.state.benutzer.nachname}
                      disabled={!this.state.profilBearbeitbar}
                      value={this.state.benutzer.nachname}
                      onChange={this.nachnameBearbeiten}
                    />
                    Email-Adresse
                    <input
                      className="AngabenFelderLinks"
                      type="text"
                      placeholder={this.state.benutzer.email}
                      disabled={!this.state.profilBearbeitbar}
                      value={this.state.benutzer.email}
                      onChange={this.emailBearbeiten}
                    />
                    Alter
                    <input
                      className="AngabenFelderLinks"
                      type="text"
                      placeholder={this.state.benutzer.alter}
                      disabled={!this.state.profilBearbeitbar}
                      value={this.state.benutzer.alter}
                      onChange={this.alterBearbeiten}
                    />
                  </div>
                  <div className="ObenLinksRechts">
                    Bezahlmethode
                    <input
                      className="AngabenFelderRechts"
                      type="text"
                      placeholder={this.state.benutzer.bezahlmethode}
                      disabled={!this.state.profilBearbeitbar}
                      value={this.state.benutzer.bezahlmethode}
                      onChange={this.bezahlmethodeBearbeiten}
                    />
                    Lieblingszone
                    <input
                      className="AngabenFelderRechts"
                      type="text"
                      placeholder={this.state.benutzer.lieblingszone}
                      disabled={!this.state.profilBearbeitbar}
                      value={this.state.benutzer.lieblingszone}
                      onChange={this.bezahlmethodeBearbeiten}
                    />
                  </div>
                </div>
              </div>
              <div className="ObenRechts">
                <div className="PersZustandÃœberschrift">
                  Ihr Zustand: <br></br>
                </div>
                <form>
                  <label>
                    <select
                      className="PersZustand"
                      value={this.state.value}
                      // value={this.state.benutzer.preiskategorie}
                      onChange={this.handleChange}
                      name="value"
                    >
                      <option value="PersZustand">Zustand Auswählen</option>
                      <option value="ERWACHSENER">Erwachsen</option>
                      <option value="KIND">Kind</option>
                      <option value="STUDIEREND">Student</option>
                      <option value="SENIOR">Senior</option>
                      <option value="MENSCH_MIT_BEHINDERUNG">Behindert</option>
                      <option value="BEGLEITPERSON">Begleitperson</option>
                    </select>
                  </label>
                </form>
                <button
                  className="ProfilBearbeitenButton"
                  onClick={this.ProfilBearbeiten}
                >
                  {" "}
                  Profil Bearbeiten{" "}
                </button>
                <button
                  className="ProfilBearbeitenButton"
                  onClick={this.ProfilBearbeitet}
                >
                  {" "}
                  Fertig{" "}
                </button>
              </div>
            </div>

            <div className="Unten">
              {/** 
              <div className="UntenLinks">
                <div className="MerklisteÃœberschrift">
                  Ihre Merkliste: <br></br>
                </div>
                <div className="UntenLinksMerkliste">
                  <div className="UntenLinksMerklisteText">
                    {this.state.benutzer.wunschliste}
                    Test <br></br>
                    Test <br></br>
                    Test <br></br>
                    Test <br></br>
                  </div>
                  <div className="UntenLinksMerklisteButton">
                    <button
                      className="BearbeitenButton"
                      onClick={this.MerklisteBearbeiten}
                    >
                      {" "}
                      Bearbeiten{" "}
                    </button>
                  </div>
                </div>
              </div> */}
              <div className="UntenRechts">
                <div className="BestellungenÃœberschrift">
                  Ihre Bestellungen: <br></br>
                </div>
                <div className="UntenRechtsBestellungen">
                  {this.state.benutzer.warenkorb}
                  Test <br></br>
                  Test <br></br>
                  Test <br></br>
                  Test <br></br>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Profilübersicht;
