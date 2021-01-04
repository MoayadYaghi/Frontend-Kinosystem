import React, { Component } from "react";
import "./DealDW.css";
import { Link } from "react-router-dom";

class Fehler404 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomeLink = "/";
    return (
      <div className="DealDWKomplett">
        <div className="DealDWÜberschrift">
          <div className="Fehler"> Sorry, da hat etwas nicht geklappt</div>
        </div>
        <div className="DealDWText">
          Der von Ihnen aufgerufene Link kann leider nicht verarbeitet werden.
          Dies tut uns sehr Leid. <br />
          Über diesen Link gelangen Sie wieder zurück auf die Startseite: <br />
          <Link to={HomeLink}>Startseite</Link>
        </div>
        <br />
      </div>
    );
  }
}
export default Fehler404;
