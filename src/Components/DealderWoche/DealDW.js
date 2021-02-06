import React, { Component } from "react";
import "./DealDW.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

class DealDW extends Component {
  clicked(){
    scroll.scrollToTop()
  }

  render() {
    const SnacksLink = "/Registrieren";
    return (
      <div className="">
        <div className="InfoDWÜberschrift">
        <Link className="DESIGNHeadline2MitHover" to={SnacksLink}>
          Der Deal der Woche
        </Link>
        </div>
        <div className="DESIGNBOX" style={{cursor: "pointer"}} >
        <Link className="DESIGNTextField" onClick={this.clicked()} to={SnacksLink}>
          
          Leider haben wir momentan keine Angebote. Sobald unser Kino jedoch wieder öffnet, erhalten Sie wie gewohnt wöchentlich neue Angebot. Sollten Sie immer auf dem Laufenden über unser Kino und die Deals der Woche bleiben wollen, erstellen Sie sich gerne einen Account und aktivieren den Newsletter.
            
          
        </Link></div><br/><br/>
      </div>
    );
  }
}
export default DealDW;
