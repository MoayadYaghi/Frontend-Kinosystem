import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import FilmEntfernen from ".././Components/FIlmAufruf/FilmEntfernen";


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";

//import { Link } from "react-router-dom";




const StartSeite = () => {
  return (
    <div className="App">
      <Navbar />
      
      
      <FilmEntfernen/>
            
            


      <Footer />
    </div>
  );
};

export default StartSeite;
