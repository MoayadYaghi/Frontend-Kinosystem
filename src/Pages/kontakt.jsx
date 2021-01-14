import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import SmoImpAuf from "../Components/SmorollImpres/SmoImpAuf";
import React from "react";
import ".././App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";

const kontakt = () => {
  return (
    <div className="App">
      <Navbar />

      <SmoImpAuf />

      <Footer />
    </div>
  );
};

export default kontakt;
