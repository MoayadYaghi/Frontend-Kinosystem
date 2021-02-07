import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import Snack from "../Components/SnaGet/ShopSnacks";
import React from "react";
import ".././App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";

const Snacks = () => {
  return (
    <div className="App">
      <Navbar />

      
      <Snack/>

      <Footer />
    </div>
  );
};

export default Snacks;
