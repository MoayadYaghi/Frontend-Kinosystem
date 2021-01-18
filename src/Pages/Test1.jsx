import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import Test1 from ".././Components/Test/Test1";


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";

//import { Link } from "react-router-dom";




const StartSeite = () => {
  return (
    <div className="App">
      <Navbar />
      <Test1/>
            
            


      <Footer />
    </div>
  );
};

export default StartSeite;
