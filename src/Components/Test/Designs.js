import React, { Component } from "react";
import "./Designs.css";
import "./Designs.scss";

//import { Link } from "react-router-dom";

class Designs extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div>
        <div className="DESIGNHeadline1MitHover">Überschrift 1</div>
        <div className="DESIGNHeadline1">Überschrift 1</div>
        <div className="DESIGNHeadline2">Überschrift 2</div>
        <div className="DESIGNHeadline3">Überschrift 3</div>
        <div className="DESIGNTextField">Text Felder </div>

        <button className="DESIGNButton"> Buttons</button>
        <br />

        <div className="DESIGNBOX">
          <div className="DESIGNTextField">
            Überschrift Nummer 2 hier Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
          </div>
          <br />
          <button className="DESIGNButton"> Super</button>
        </div>
        <br />
      </div>
    );
  }
}
export default Designs;
