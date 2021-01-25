import React, { Component } from "react";
import "./Smoroll.css";
import JS from "../../assets/Übersicht_Möglichkeiten.jpg";
class Menue5 extends Component {
  state = {};
  render() {
    return (
      <div className="Informationen" id="menue5">
        <div className="Inf-Box">FSK</div>
        <div className="TextS">
          Für jede Vorstellung sind die FSK (Freiwilige Selbstkontrolle der
          Filmwirtschaft) zu beachten. Wir behalten es uns vor, Sie bei bedarf
          nach einem amtlichen Ausweisdokument zu fragen.
          <br />
          <br />
          <div className="Inf-Boxsmall">Jugendschutz-Gesetz</div>
          Durch den Gesetzgeber sind vorgegeben, zu welchen Zeiten welche Filme
          gespielt werden dürfen:
          <img
            className="Logos"
            alt="Jugendschutz-Gesetz"
            key="Jugendschutz-Gesetz"
            src={JS}
          ></img>{" "}
          <br />
          (müssen wir noch selner machen !!!)
          <br />
          Ausnahmen hierzu bestehen, wenn eine Erziehungsbeauftragte Person als
          Begleitung mitkommt. Dies kann jede Person über 18 Jahren sein. Diese
          Ausnahmeregel tritt nur in Kraft wenn das Formular für
          Erziehungsbeauftragte (Mutti-Zettel) unterschrieben vorliegt. Bitte
          beachten Sie dies, da ansonsten kein Zugang zum Kino möglich ist.
        </div>
      </div>
    );
  }
}
export default Menue5;
