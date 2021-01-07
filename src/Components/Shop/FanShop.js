import React, { Component } from "react";
import { Button } from "../Button";
import "./Shop.css";
import { Link } from "react-router-dom";

class FanShop extends Component {
  render() {
    return (
      <div className="FanShop">
        <select
          name="Größe"
          type="text"
          value={this.state.select}
          onChange={this.handleChange}
        >
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <input type="checkbox"> Männlich </input>
        <input type="checkbox"> Weiblich </input>
        <input type="checkbox"> Ausgewählt </input>

        <div className="Produktbeschreibung"> Produktbeschreibung </div>
      </div>
    );
  }
}
export default FanShop;
