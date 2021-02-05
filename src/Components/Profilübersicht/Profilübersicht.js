import React, { Component } from "react";
import "./Profilübersicht.scss";

class Profilübersicht extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ PersZustand: event.target.value });
  }

  MerklisteBearbeiten() {
  }

  handleChange(event) {
    const target = event.target;
    const Value = target.value;
    const name = target.name;
    this.setState({ [name]: Value });
  }

  render() {
    return (
      <div className="ProfilübersichtSeite">
        <div className="Oben">
          <div className="ObenLinks">
            <div className="AngabenÜberschrift">
              Ihre Angaben: <br></br>
            </div>
            <div className="ObenLinksAngaben">
              <div className="ObenLinksLinks">
                Vorname
                <input
                  className="AngabenFelderLinks"
                  type="text"
                  placeholder="Vorname"
                />
                Nachname
                <input
                  className="AngabenFelderLinks"
                  type="text"
                  placeholder="Nachname"
                />
                Email-Adresse
                <input
                  className="AngabenFelderLinks"
                  type="text"
                  placeholder="Email Adresse"
                />
                Alter
                <input
                  className="AngabenFelderLinks"
                  type="text"
                  placeholder="Alter"
                />
              </div>
              <div className="ObenLinksRechts">
                Bezahlmethode
                <input
                  className="AngabenFelderRechts"
                  type="text"
                  placeholder="Bezahlmethode"
                />
                Lieblingszone
                <input
                  className="AngabenFelderRechts"
                  type="text"
                  placeholder="Lieblingszone"
                />
              </div>
            </div>
          </div>
          <div className="ObenRechts">
            <div className="PersZustandÜberschrift">
              Ihr Zustand: <br></br>
            </div>
            <form on onSubmit={this.handleSubmit}>
              <label>
                <select
                  className="PersZustand"
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="value"
                >
                  <option value="PersZustand">Zustand Auswählen</option>
                  <option value="Erwachsen">Erwachsen</option>
                  <option value="Kind">Kind</option>
                  <option value="Student">Student</option>
                  <option value="Senior">Senior</option>
                  <option value="Behindert">Behindert</option>
                </select>
              </label>
            </form>
          </div>
        </div>

        <div className="Unten">
          <div className="UntenLinks">
            <div className="MerklisteÜberschrift">
              Ihre Merkliste: <br></br>
            </div>
            <div className="UntenLinksMerkliste">
              <div className="UntenLinksMerklisteText">
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
          </div>
          <div className="UntenRechts">
            <div className="BestellungenÜberschrift">
              Ihre Bestellungen: <br></br>
            </div>
            <div className="UntenRechtsBestellungen">
              Test <br></br>
              Test <br></br>
              Test <br></br>
              Test <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profilübersicht;
