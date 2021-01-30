import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";

import React from "react";
import FilmDetails from ".././Components/FilmDetails/FilmDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";

//import { Link } from "react-router-dom";

const filmDetails = () => {
  return (
    <div className="App">
      <Navbar />

      <FilmDetails/>

      <Footer />
    </div>
  );
};

export default filmDetails;