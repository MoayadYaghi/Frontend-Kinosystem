import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import React from "react";
import ".././App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import ShopGetraenke from "../Components/SnaGet/ShopGetraenke";
//import { Link } from "react-router-dom";

const Getraenke = () => {
  return (
    <div className="App">
      <Navbar />

      <ShopGetraenke/>

      <Footer />
    </div>
  );
};

export default Getraenke;
