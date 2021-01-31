import Navbar from ".././Components/Navbar/Navbar";
import ProgrammSeite from ".././Components/ProgrammSeite/ProgrammSeite";
import Footer from ".././Components/Footer/Footer";
import React from "react";
import ".././App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";

// Temporary, just for testing easily
import Sitzplatzreservierung from "../Components/Sitzplatzreservierung/Sitzplatzreservierung";

const Programm = () => {
  return (
    <div className="App">
      <Navbar />

      <Sitzplatzreservierung />

      <Footer />
    </div>
  );
};

export default Programm;
