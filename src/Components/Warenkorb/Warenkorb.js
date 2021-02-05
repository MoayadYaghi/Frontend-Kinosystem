import React, { Component } from "react";
import "./Warenkorb.css";
import { Link } from "react-router-dom";

class Warenkorb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticket: [],
      value: "",
      vorname: "",
      nachname: "",
      mail: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ ZahlungsDetails: event.target.value });
  }

  handleChange(event) {
    const target = event.target;
    const Value = target.value;

    const name = target.name;

    this.setState({ [name]: Value });
    /* this.setState({[name]: Pass}); */
  }

  render() {
    return (
      <div className="Warenkorb">
        {
          //this.state.ticket.map( (tickets) => (
          <div className="Links">
            <div className="LinkeSeite">
              <div className="Tickezs">
                <div className="WarenkorbTicket">
                  Ihr Warenkorb: <br />
                </div>
                <div className="KinoTicket">
                  Ticket: {/* tickets.amount */} <br />
                  Sitzplatz: {/* tickets.seats */}
                  <br />
                  Datum: {/* {tickets.date} */}
                  <br />
                  Zeit: {/* {tickets.vorstellung} */}
                  <br />
                  Preis: {/* {tickets.preis} */}
                  <br />
                </div>
                <div className="FilmÄndern">
                  <Link className="FilmNeu" to={"/programm"}>
                    Film ändern
                  </Link>
                </div>
              </div>

              <div className="WarenkorbSnacks">
                Weitere Artikel in ihrem Warenkorb:
              </div>
              <div className="KinoExtras">
                Snacks: <br />
                Getränke: <br />
                Gutscheine: <br />
                {/*tickets.snacks*/}
              </div>
              <div className="SnackHinzufügen">
                <Link className="SnackNeu" to={"/programm"}>
                  Snack hinzufügen
                </Link>
              </div>
            </div>{" "}
          </div>

          //))
        }

        <div className="Rechts">
          <div className="rechteSeite">
            <div className="ZahlungsdetailSchrift">Zahlungsdetails:</div>
            <div>
              <form on onSubmit={this.handleSubmit}>
                <label>
                  <select
                    className="ZahlungsdetailsSelect"
                    value={this.state.value}
                    onChange={this.handleChange}
                    name="value"
                  >
                    <option value="PreisKategorie">
                      Zahlungsmöglichkeit Auswählen
                    </option>
                    <option value="Paypal">Paypal</option>
                    <option value="Überweisung"> Auf Rechnung</option>
                    <option value="Kreditkarte">Kreditkarte</option>
                    <option value="KassenZahler">An der Kasse bezahlen</option>
                  </select>
                </label>
              </form>

              <div className="PersonenSchrift">Angaben zur Person</div>

              <div className="AngabenPerson">
                <label>
                  <input
                    className="InputTextWarenkorb"
                    placeholder="Vorname"
                    name="vorname"
                    type="text"
                    value={this.state.vorname}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  <input
                    className="InputTextWarenkorb"
                    placeholder="Nachname"
                    name="nachname"
                    type="text"
                    value={this.state.nachname}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  <input
                    className="InputTextWarenkorb"
                    placeholder="E-Mail Adresse"
                    name="mail"
                    type="text"
                    value={this.state.mail}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="BezahlMethodenText">Bezahlmethode</div>
              <div>
                {this.state.value === "" ? (
                  <div className="BezahlMethoden">
                    Bitte Bezahlmöglichkeit Auswählen
                  </div>
                ) : null}
                {this.state.value === "Paypal" ? (
                  <div>
                    Sie werden nach der Bestellung an die Paypal Seite
                    weitergeleitet
                  </div>
                ) : null}
                {this.state.value === "Überweisung" ? (
                  <div>
                    Sie erhalten im Anschluss eine E-Mail mit der Rechnung, das
                    Ticket wird erst gültig wenn die Bezahlung bei uns
                    eingegangen ist{" "}
                  </div>
                ) : null}
                {this.state.value === "Kreditkarte" ? (
                  <div>
                    <div className="KreditKarteText">
                      Kreditkarten Informationen:
                    </div>

                    <div>
                      <label>
                        <input
                          className="InputTextWarenkorb"
                          placeholder="Kreditkartentyp"
                          name="mail"
                          type="text"
                          value={this.state.mail}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          className="InputTextWarenkorb"
                          placeholder="Karteninhaber"
                          name="mail"
                          type="text"
                          value={this.state.mail}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          className="InputTextWarenkorb"
                          placeholder="Kartennummer"
                          name="mail"
                          type="text"
                          value={this.state.mail}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          className="InputTextWarenkorb"
                          placeholder="Gültig bis"
                          name="mail"
                          type="text"
                          value={this.state.mail}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                  </div>
                ) : null}
                {this.state.value === "KassenZahler" ? (
                  <div>KassenZahler</div>
                ) : null}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}
export default Warenkorb;
