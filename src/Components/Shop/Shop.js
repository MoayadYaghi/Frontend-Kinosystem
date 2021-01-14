import React, { Component } from "react";
import { Button } from "../Button";
import "./Shop.css";
import Fanshop from "./FanShop";
import Gutscheine from "./Gutscheine";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fanshop: true,
      Gutscheine: false,
    };
    this.FanshopHandler = this.FanshopHandler.bind(this);
    this.GutscheineHandler = this.GutscheineHandler.bind(this);
  }

  FanshopHandler = () => {
    this.setState({ Fanshop: true });
    this.setState({ Gutscheine: false });
  };

  GutscheineHandler = () => {
    this.setState({ Fanshop: false });
    this.setState({ Gutscheine: true });
  };

  render() {
    return (
      <div className="Shop">
        <Button className="Warenkorb"> In den Warenkorb legen </Button>
        <Button className="Kasse"> Zur Kasse gehen </Button>
        <Paper>
          <Tabs>
            <Tab label="Fanshop" onClick={this.FanshopHandler}></Tab>
            <Tab label="Gutscheine" onClick={this.GutscheineHandler}></Tab>
          </Tabs>
        </Paper>
        {this.state.Fanshop ? <Fanshop /> : null}
        {this.state.Gutscheine ? <Gutscheine /> : null}
      </div>
    );
  }
}
export default Shop;
