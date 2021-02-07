import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import React from "react";
//import ShopSeite from "../Components/Shop/Shop";
import ".././App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopÜbersicht from "../Components/SnaGet/ShopÜbersicht";
//import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="App">
      <Navbar />
      
      {//<ShopSeite />
}
      <ShopÜbersicht/>
      <Footer />
    </div>
  );
};

export default Shop;
