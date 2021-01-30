import Navbar from ".././Components/Navbar/Navbar";
import Sitzplatzreservierung from ".././Components/Sitzplatzreservierung/Sitzplatzreservierung";
import Footer from ".././Components/Footer/Footer";
import Sitzplatzreservierung from "../Components/Sitzplatzreservierung/Sitzplatzreservierung";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
// import { Link } from "react-router-dom";

const SitzplatzRes = () => {
  return (
    <div className="App">
      <Navbar />

      <Sitzplatzreservierung />

      <Footer />
    </div>
  );
};

export default SitzplatzRes;
