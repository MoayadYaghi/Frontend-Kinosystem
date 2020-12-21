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
      <div className="DealDWKomplett">
        <a className="DealDWÜberschrift" href="https://react.school/ui/button">
          <i class="fas fa-arrow-right"> </i>
          <div className="DealDWSchrift">Der Deal der Woche </div>
          <i class="fas fa-arrow-left"> </i>
        </a>
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
