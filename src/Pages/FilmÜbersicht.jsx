import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";

//import { Link } from "react-router-dom";

import ProgrammSeite from ".././Components/ProgrammSeite/ProgrammSeite";

const Aktuell = () => {
  return (
    <div className="App">
      <Navbar />

      <Footer />
    </div>
  );
};

export default Aktuell;
