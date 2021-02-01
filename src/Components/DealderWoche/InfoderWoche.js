import React, { Component } from "react";
import "./DealDW.css";


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
          <div className="DESIGNHeadline2" onClick={this.clickhandler}>
            {" "}
            &#160; Wichtige Informationen &#160;
          </div>
        </div>
        <div className="DESIGNBOX" onClick={this.clickhandler} style={{cursor: "default"}}>
          <div className ="DESIGNTextField">
          Aktuell dürfen aufgrund der aktuellen Coronabeschränkungen keine
          Vorstellung gezeigt werden. Diese Beschränkungen betreffen leider auch
          unser Autokino. Dennoch stehen wir euch gerne zur Verfügung wenn ihr
          Fragen zu unserem Kino und dem Programm habt. Wir wünschen Frohe
          Weihnachten, einen guten Rutsch ins neue Jahr und bleibt Gesund!
        </div></div>
      </div>
    );
  }
}
export default DealDW;
