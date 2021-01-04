import React, { Component } from "react";
import "./DealDW.css";

import { Link } from "react-router-dom";

class DealDW extends Component {
  constructor(props) {
    super(props);
    
  }
  state = {};

  

  render() {
    const SnacksLink = "/Shop/Snacks";
    return (
      <div className="DealDWKomplett">
        
        <Link className="DealDWÜberschrift" to = {SnacksLink}>
        <i class="fas fa-arrow-right">    </i>

        <div className="DealDWSchrift"> &#160; Der Deal der Woche &#160;</div>

          <i class="fas fa-arrow-left">    </i>
          </Link> 
        
        <div className="DealDWText">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
      </div>
    );
  }
}
export default DealDW;
