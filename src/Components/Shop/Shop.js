import React, { Component } from "react";
import { Button } from "../Button";
import "./Shop.css";
import { Link } from "react-router-dom";

class Shop extends Component {
  state = {};

  render() {
    // const FanShop = "/Shop/Snacks";
    return (
      <div className="FanShop">
        <Button className="Warenkorb-button"> In den Warenkorb legen </Button>
        <Button className="Kasse-button"> Zur Kasse gehen </Button>
        <div className="FanShopTab"> Fan Shop </div>
        <select
          name="Größe"
          type="text"
          value={this.state.obst}
          onChange={this.handleChange}
        >
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <div className="Produktbeschreibung"> Produktbeschreibung </div>
      </div>
    );
  }
}
export default Shop;
