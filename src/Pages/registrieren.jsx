import Navbar from "../Components/Navbar/Navbar";
import Anmeldung from "../Components/Login/Anmeldung";
import Footer from "../Components/Footer/Footer";
import React from "react";
import ".././App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";

const Registrieren = () => {
  return (
    <div className="App">
      <Navbar />

      <Anmeldung />

      <Footer />
    </div>
  );
};

export default Registrieren;
