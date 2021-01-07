import React, { Component } from "react";
import { Button } from "../Button";
import "./Shop.css";
import { Link } from "react-router-dom";

class Gutscheine extends Component {
  render() {
    return (
      <div className="Gutscheine">
        <select
          name="Größe"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        >
          <option value="S-Gutschein">10€</option>
          <option value="M-Gutschein">20€</option>
          <option value="L-Gutschein">50€</option>
        </select>

        <input type="checkbox"> Geschenkbox </input>

        <div className="Produktbeschreibung"> Produktbeschreibung </div>
      </div>
    );
  }
}
export default Gutscheine;