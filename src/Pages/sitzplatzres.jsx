import Navbar from ".././Components/Navbar/Navbar";
import Sitzplatzreservierung from ".././Components/Sitzplatzreservierung/Sitzplatzreservierung";
import Footer from ".././Components/Footer/Footer";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
import GeneratorAufruf from "../Components/ZahlenGenerator/GeneratorAufruf";
// import { Link } from "react-router-dom";

const SitzplatzRes = () => {
  return (
    <div className="App">
      <Navbar />
      <GeneratorAufruf/>
      <Sitzplatzreservierung />

      <Footer />
    </div>
  );
};

export default SitzplatzRes;
