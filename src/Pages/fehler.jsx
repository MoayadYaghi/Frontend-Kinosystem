import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
import Fehler404 from "../Components/DealderWoche/Fehler404";

//import { Link } from "react-router-dom";

const Fehler = () => {
  return (
    <div className="App">
      <Navbar />

      <Fehler404 />

      <Footer />
    </div>
  );
};

export default Fehler;
