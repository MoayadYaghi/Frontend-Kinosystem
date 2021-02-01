import React, { Component } from "react";
import "./Login.css";
//import { Link } from "react-router-dom";
import postRegister from "../../PostRequest/postRegister";

class Anmeldung extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      Anrede: "",
      vorname: "",
      nachname: "",
      username: "",
      alter: "",
      passwortHash: "",
      Passwort2: "",
      preiskategorie: "",
      lieblingszone: "",
      newsletter: false,
      BG1: "Box",
      BG2: "Box",
      BG3: "Box",
      BG4: "Box",
      BG5: "Box",
      BG6: "Box",
      BG7: "Box",
      BG8: "Box",
      BG9: "Box",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const Value = target.value === "on" ? true : target.value;

    const name = target.name;

    this.setState({ [name]: Value });
    /* this.setState({[name]: Pass}); */
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.passwortHash !== this.state.Passwort2) {
      alert("Das hat nicht geklappt");
    } else {
      console.log("Ergebnisse: ");
      console.log(this.state);

      postRegister.sendnewRegister(this.state).then((res) => {
        console.log(res);
      });
    }
  }

  BoxAuswahl(Eingabe, Daten) {
    this.setState({ lieblingszone: Daten });

    this.setState({ BG1: "Box" });
    this.setState({ BG2: "Box" });
    this.setState({ BG3: "Box" });
    this.setState({ BG4: "Box" });
    this.setState({ BG5: "Box" });
    this.setState({ BG6: "Box" });
    this.setState({ BG7: "Box" });
    this.setState({ BG8: "Box" });
    this.setState({ BG9: "Box" });

    if (Eingabe === 1) {
      this.setState({ BG1: "BoxH" });
    }
    if (Eingabe === 2) {
      this.setState({ BG2: "BoxH" });
    }
    if (Eingabe === 3) {
      this.setState({ BG3: "BoxH" });
    }
    if (Eingabe === 4) {
      this.setState({ BG4: "BoxH" });
    }
    if (Eingabe === 5) {
      this.setState({ BG5: "BoxH" });
    }
    if (Eingabe === 6) {
      this.setState({ BG6: "BoxH" });
    }
    if (Eingabe === 7) {
      this.setState({ BG7: "BoxH" });
    }
    if (Eingabe === 8) {
      this.setState({ BG8: "BoxH" });
    }
    if (Eingabe === 9) {
      this.setState({ BG9: "BoxH" });
    }
  }
  render() {
    return (
      <div>
        <br />
        <form className="FormFenster" onSubmit={this.handleSubmit}>
          <div className="InputField">
            {/* <label>
              <select
                className="Textfielde"
                value={this.state.value}
                onChange={this.handleChange}
                name="Anrede"
              >
                <option value="PreisKategorie">Anrede Auswählen</option>
                <option value="Herr">Herr</option>
                <option value="Frau">Frau</option>
                <option value="Divers">Divers</option>
                
              </select>
            </label> */}

            <div className="Zusammenhängend">
              <label>
                <input
                  className="Textfieldd"
                  placeholder="Vorname"
                  name="vorname"
                  type="text"
                  value={this.state.vorname}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input
                  className="Textfieldd"
                  placeholder="Nachname"
                  name="nachname"
                  type="text"
                  value={this.state.nachname}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <label>
              Geburtsdatum:
              <input
                className="Textfielde"
                placeholder="Alter"
                name="alter"
                type="number"
                value={this.state.alter}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                className="Textfielde"
                placeholder="E-Mail Adresse"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <input
                className="Textfielde"
                placeholder="Benutzername"
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                className="Textfielde"
                placeholder="Passwort"
                name="passwortHash"
                type="password"
                value={this.state.passwortHash}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                className="Textfielde"
                placeholder="Passwort Wiederholen"
                name="Passwort2"
                type="password"
                value={this.state.Passwort2}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <select
                className="Textfielde"
                value={this.state.preiskategorie}
                onChange={this.handleChange}
                name="preiskategorie"
              >
                <option value="default">Preis Kategorie Auswählen</option>
                <option value="ERWACHSENER">Erwachsener</option>
                <option value="STUDIEREND">Student</option>
                <option value="KIND">Kind</option>
                <option value="SENIOR">Senior</option>
                <option value="MENSCH_MIT_BEHINDERUNG">
                  Mensch mit Behinderung
                </option>
                <option value="BEGLEITPERSON">Begleitperson</option>
              </select>
            </label>

            <div className="SitzplatzAuswahl">
              <div className="TitleField">
                {" "}
                Auswahl einer favorisierten Sitzplatz Region
              </div>

              <div className="Leinwand">Kino Leinwand</div>
              <div className="FlexboxDesign">
                <div
                  className={this.state.BG1}
                  onClick={() => this.BoxAuswahl(1, "VORNE_LINKS")}
                >
                  Vorne Links
                </div>
                <div
                  className={this.state.BG2}
                  onClick={() => this.BoxAuswahl(2, "VORNE_MITTE")}
                >
                  Vorne Mitte
                </div>
                <div
                  className={this.state.BG3}
                  onClick={() => this.BoxAuswahl(3, "VORNE_RECHTS")}
                >
                  Vorne Rechts
                </div>
              </div>
              <div className="FlexboxDesign">
                <div
                  className={this.state.BG4}
                  onClick={() => this.BoxAuswahl(4, "MITTE_LINKS")}
                >
                  Mitte &nbsp;Links
                </div>
                <div
                  className={this.state.BG5}
                  onClick={() => this.BoxAuswahl(5, "MITTE_MITTE")}
                >
                  Mitte{" "}
                </div>
                <div
                  className={this.state.BG6}
                  onClick={() => this.BoxAuswahl(6, "MITTE_RECHTS")}
                >
                  Mitte Rechts
                </div>
              </div>
              <div className="FlexboxDesign">
                <div
                  className={this.state.BG7}
                  onClick={() => this.BoxAuswahl(7, "HINTEN_LINKS")}
                >
                  Hinten Links
                </div>
                <div
                  className={this.state.BG8}
                  onClick={() => this.BoxAuswahl(8, "HINTEN_MITTE")}
                >
                  Hinten Mitte
                </div>
                <div
                  className={this.state.BG9}
                  onClick={() => this.BoxAuswahl(9, "HINTEN_RECHTS")}
                >
                  Hinten Rechts
                </div>
              </div>
            </div>
          </div>
          <div className="newsletterField">
            <label>
              <input
                name="newsletter"
                type="checkbox"
                checked={this.state.newsletter}
                onChange={this.handleChange}
              />
              Ich möchte den Newsletter abbonieren
            </label>
          </div>
          <br />
          <div className="SubmitField">
            <input
              className="Submitbutton"
              type="submit"
              value=" Registrieren"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Anmeldung;
