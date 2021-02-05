import Navbar from ".././Components/Navbar/Navbar";
import Profilübersicht from ".././Components/Profilübersicht/Profilübersicht";
import Footer from ".././Components/Footer/Footer";
import React from "react";
import ".././App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";

const Profil = () => {
  return (
    <div className="App">
      <Navbar />
      <Profilübersicht />
      <Footer />
    </div>
  );
};

export default Profil;
