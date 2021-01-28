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
          <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <td></td>
                <td>Bis 20 Uhr</td>
                <td>Bis 22 Uhr</td>
                <td>Bis 24 Uhr</td>
                <td>Später als 24 Uhr</td>
                
              </tr>
            </thead>
            
            <tbody>
              <tr>
                
                <td>bis 6 Jahre</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                
                <td>6-13 Jahre</td>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                
                <td>14-15 Jahre</td>
                <th></th>
                <th></th>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                
                <td>16-17 Jahre</td>
                <th></th>
                <th></th>
                <th></th>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                
                <td>Ab 18 Jahre</td>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
            
            
          </table>
          </div>
         
          
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
