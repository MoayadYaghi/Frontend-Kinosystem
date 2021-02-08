import React, { Component } from "react";
import "./Smoroll.css";

class Menue3 extends Component {
  state = {};
  render() {
    return (
      <div className="Informationen" id="menue3">
        <div className="Inf-Box">Öffnungszeiten &amp; Anfahrt </div>
        <div className="TextW">
          <div className="Inf-Boxsmall">Öffnungszeiten</div>
          Aufgrund der aktuellen Corona-Beschränkungen sind wir aktuell nicht
          vor Ort erreichbar. Sollten dennoch Fragen an uns bestehen, kommen Sie
          gerne auf uns zu. Dies ist entweder per Mail oder Telefon möglich:{" "}
          <br />
          Telefon: 0176/824592
          <br />
          E-Mail: Info@KG42.de <br /> <br />
          Normalerweise sind wir für Sie zu Folgenden Zeiten erreichbar:
          <br />
          So-Do: 14-21 Uhr
          <br />
          Fr + Sa: 13 - 23 Uhr
          <br />
          <div className="Inf-Boxsmall">Anfahrt</div>
          <iframe
            key="Maps"
            title="Maps"
            width="100%"
            height="600"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyChCzVT4n_S7YW3JmBWS5YRImn_4bL9TIs
                            &q=Coblitzallee+9,Mannheim&zoom=13"
            allowFullScreen
          ></iframe>
          <div className="Inf-Boxsmaller">Öffentliche Verkehrsmittel</div>
          Das Kino ist mit Öffentlichen Verkehrsmitteln zu erreichen. <br />
          Die Anfahrt erfolgt mit der Straßenbahnlinie Nummer 5. <br />
          Die Haltestelle heißt: Duale Hochschule <br />
          <div className="Inf-Boxsmaller">Parken</div>
          Vor dem Kino befinden sich mehrere Parkplätze, welche von unseren
          Kunden kostenlos verwendet werden können. Außerdem ist es möglich, an
          der Straße direkt vor dem Kino zu parken. Wir bitten Sie jedoch diese
          Parkplätze für Menschen mit Beeinträchtigungen freizuhalten.
        </div>
      </div>
    );
  }
}
export default Menue3;
