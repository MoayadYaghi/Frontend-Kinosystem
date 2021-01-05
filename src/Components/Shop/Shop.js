import React, { Component } from "react";
import { Button } from "../Button";
import "./Shop.css";
import Fanshop from "./FanShop";
import Gutscheine from "./FanShop";
import { Link } from "react-router-dom";

class Shop extends Component {
  state = {};

  render() {
    return (
      <div className="Shop">
        <Button className="Warenkorb-button"> In den Warenkorb legen </Button>
        <Button className="Kasse-button"> Zur Kasse gehen </Button>
        <div className="FanShopTab">
        <Fanshop/>
        </div>
        <div className="Gutscheine">
        <Gutscheine/>
        </div>
      </div>
    );
  }
}
export default Shop;
