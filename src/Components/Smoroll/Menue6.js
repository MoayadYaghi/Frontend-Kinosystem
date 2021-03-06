import React, { Component } from "react";
import "./Smoroll.css";
import logoP from "../../assets/Logo_PayPal.png";
import logoM from "../../assets/Logo_mastercard.png";
import logoK from "../../assets/BIld_Sepa.jpg"

class Menue6 extends Component {
  state = {};
  render() {
    return (
      <div className="Informationen" id="menue6">
        <div className="Inf-Box">Zahlungsmittel</div>
        <div className="TextS">
          Auf unserer Webseite bieten wir verschiedene Zahlungsmöglichkeiten an.{" "}
          <br />
          Im Überblick: <br />
          <br />
          <img
            className="Logos"
            alt="Mastercard Logo"
            key="Mastercard"
            src={logoM}
          ></img>{" "}
          <br />
          Kreditkarte <br />
          Wir akzeptieren Kreditkarten von mastercard und VISA. Diese Bezahlung
          funktioniert ohne Benutzerkonto.
          <br />
          <br />
          <img
            className="Logos"
            alt="Paypal Logo"
            key="Paypal"
            src={logoP}
          ></img>{" "}
          <br />
          Paypal
          <br />
          Nach dem Bezahlvorgang werdet Ihr automatisch an Paypal
          weitergeleitet. Ihr könnt euer PayPal Konto direkt im Benutzerkonto
          hinterlegen.
          <br />
          <br />
          <img
            className="Logos"
            alt="Paypal Logo"
            key="Sepa"
            src={logoK}
          ></img>{" "}
          <br />
          Sepa Lastschriftverfahren
          <br />
          Nachdem die Bestellung bei uns eingegangen ist, bearbeiten wir diese und buchen das Geld innerhalb von 3 Tagen ab.
          <br />
        </div>
      </div>
    );
  }
}
export default Menue6;
