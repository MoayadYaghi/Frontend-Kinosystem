import React, { Component } from "react";
import "./Programm.css";
import { Link } from "react-router-dom";

class ProgrammSeite extends Component {
  render() {
    return (
      <div className="ProgramSeite">
        <div className="Program Sitzplan">
          <div className="Sitzplatzreservierung">
            Sitzplatzreservierung<br></br>
          </div>
          {this.sitzplanGenerieren(221, 221)}
        </div>
        <div className="Rest">
          <button id="SnacksButton"> Snacks hinzufügen </button>
          <div className="Tickets">
            {" "}
            Ticket Preise: <br></br>
            <label> Normal </label>
            <input type="number" />
            <br></br>
            <label> Familie </label>
            <input type="number" />
            <br></br>
            <label> Kind </label>
            <input type="number" />
            <br></br>
            <label> Student </label>
            <input type="number" />
            <br></br>
            <label> Senior </label>
            <input type="number" />
            <br></br>
            <label> Behindert </label>
            <input type="number" />
            <br></br>
            <label> Begleitperson </label>
            <input type="number" />
            <br></br>
          </div>
          <div className="BezahlMöglichkeiten">
            Bezahlmöglichkeiten wählen<br></br>
          </div>
          <button id="Paypal"> Paypal </button>
          <button id="Kreditkarte"> Kreditkarte </button>
          <button id="Bankeinzug"> Bankeinzug </button>
        </div>
      </div>
    );
  }

  sitzplanGenerieren(reihenAnzahl, spaltenAnzahl) {
    const Sizsplan = [reihenAnzahl, spaltenAnzahl];
    var i = 0;
    for (var r = 0; r < reihenAnzahl; r++) {
      for (var s = 0; s < spaltenAnzahl; s++) {
        Sizsplan[(r, s)] = <button>Sitz</button>;
        i++;
      }
    }
    return Sizsplan;
  }

  reihenPlanGenerieren() {}
}

export default ProgrammSeite;
