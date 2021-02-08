import React, { Component } from "react";
import "./DealDW.css";
import { Link } from "react-router-dom";

class DealDW extends Component {
  constructor(props) {
    super(props);
    this.clickhandler = this.clickhandler.bind(this);
  }
  state = {};

  clickhandler(event) {
    alert("Clicked !!!!!");
  }

  render() {
    return (
      <div className="" style={{marginTop:"10rem"}}>
        <div className="InfoDWÜberschrift">
          <div className="DESIGNHeadline2" >
            {" "}
            &#160; Wichtige Informationen &#160;
          </div>
        </div>
        <div className="DESIGNBOX"  style={{cursor: "default"}}>
          <div className ="DESIGNTextField">
            Aufgrund der aktuellen Maßnahmen gegen das Coronavirus dürfen wir Sie momentan nicht im Kino begrüßen. Wir hoffen, dass sich diese Maßnahmen bald ändern und unser Kino bald wieder öffnen darf. Unser Autokino, welches zwischendurch angeboten wurde, haben wir leider einstellen müssen, aufgrund der geringen Nachfrage. Bis zur Öffnung unseres Kinos wünschen wir Ihnen alles gut, bleiben Sie gesund und wir sehen uns hoffentlich bald wieder.<br/>
            Für weitere Informationen zu den Maßnahmen gegen das Coronavirus: <br/>
            <a href ={"https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-massnahmen-1734724"}>Infoseite der Bundesregierung Deutschland</a>
         
        </div></div>
      </div>
    );
  }
}
export default DealDW;
