import React, { Component } from "react";
import "./Smoroll.css";

class Menue2 extends Component {
  state = {};
  render() {
    return (
      <div className="Informationen" id="menue2">
        <div className="Inf-Box">Eintrittspreise</div>
        <div className="TextS">
          Die Eintrittspreise für reguläre Filmvorstellungen stellen sich wie
          folgt zusammen:
          <div>Alle Preise sind in relation zu dem im Programm angegeben Preis zu betrachten.</div>
          <table className="table table-striped">
            <thead>
              <tr>
                <td></td>
                <td>Verkauf im Kino</td>
                
              </tr>
            </thead>
            <tbody>
              
               {/* <div className ="TabellenLinie">
                Aktuelle Blockbuster
                </div>
                {/* <td> </td>
                <td> </td> */}
                
            </tbody>
            <tbody>
            <div className ="TabellenLinie">

              
                Mo-So

                </div>
              
            </tbody>
            <tbody>
              <tr><td>
                {" "}
                Regulär</td>
                <td> 100%</td>
                
              </tr>
            </tbody>
            <tbody>
              <tr><td>
                {" "}
                Kind</td>
                <td>  60%</td>
                
              </tr>
            </tbody>
            <tbody>
              <tr><td>
                {" "}
                Schüler/Student</td>
                <td> 80%</td>
                
              </tr>
            </tbody>
            <tbody>
              <tr><td>
                {" "}
                Rüstige Rentner</td>
                <td> 70%</td>
                
              </tr>
            </tbody>
            <tbody>
              <tr><td>
                {" "}
                Menschen mit Behinderungen </td>
                <td> 50%</td>
                
              </tr>
            </tbody>
             <tbody>
              <tr><td>
                {" "}
                Begleitpersonen</td>
                <td> 0</td>
                
              </tr>
            </tbody>
            
            
            
           
            
          </table>
          <div>
            
            Informationen für Rollstuhlfahrer: <br />
            Alle Kinos sind ausgestattet mit extra Plätzen für Rollstuhlfahrer.
            Sollen Sie einen solchen benötigen, bitte wählen sie einen solchen
            in der Reservierung Ihrer Sitze aus. Sollten Sie zu diesem Thema
            Fragen haben, kontaktieren sie uns gerne unter folgenden
            Kontaktdaten: <br />
            Telefonnummer: 01754 0542621 <br />
            E-Mail: Informationen-B@KG42.de
          </div>
        </div>
      </div>
    );
  }
}
export default Menue2;
