import React, { Component } from "react";
import { Button } from "../Button";
import "./Shop.css";
import Fanshop from "./FanShop";
import Gutscheine from "./Gutscheine";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Value = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return [value, handleChange];
};

class Shop extends Component {
  render() {
    return (
      <div className="Shop">
        <Button className="Warenkorb"> In den Warenkorb legen </Button>
        <Button className="Kasse"> Zur Kasse gehen </Button>
        <Paper square>
          <Tabs
            value={Value.value}
            indicatorColor="primary"
            textColor="primary"
            onChange={Value.handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Fanshop" onClick={Fanshop} >
              <Fanshop />
            </Tab>
            <Tab label="Gutscheine">
              <Gutscheine />
            </Tab>
          </Tabs>
        </Paper>

        <div className="FanshopTab">
          <Fanshop />
        </div>
        <div className="GutscheineTab">
          <Gutscheine />
        </div>
      </div>
    );
  }
}
export default Shop;
