import React, { Component } from "react";
import "./DealDW.css";

import { Link } from "react-router-dom";

class DealDW extends Component {

  render() {
    const SnacksLink = "/Shop/Snacks";
    return (
      <div className="">
        <div className="InfoDWÜberschrift">
        <Link className="DESIGNHeadline2MitHover" to={SnacksLink}>
          Der Deal der Woche
        </Link>
        </div>
        <div className="DESIGNBOX" style={{cursor: "pointer"}} >
        <Link className="DESIGNTextField" to={SnacksLink}>
          
            
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Link></div><br/><br/>
      </div>
    );
  }
}
export default DealDW;
