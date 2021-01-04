import Navbar from ".././Components/Navbar/Navbar"; 
import SmoImpAuf from "../Components/SmorollImpres/SmoImpAuf"

import Footer from ".././Components/Footer/Footer"; 
import React, {Button} from "react";
import ".././App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";




const Impressum = () => {
  return (
    <div className="App">
      <Navbar />

            <SmoImpAuf/>
           

      <Footer />
    </div>
  );
};

export default Impressum;
