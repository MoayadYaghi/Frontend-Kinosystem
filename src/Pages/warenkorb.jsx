import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import Warenkorb from ".././Components/Warenkorb/Warenkorb"
import React from "react";
import ".././App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";

const warenkorb = () => {
  return (
    <div className="App">
      <Navbar />

      <Warenkorb/>

      <Footer />
    </div>
  );
};

export default warenkorb;
