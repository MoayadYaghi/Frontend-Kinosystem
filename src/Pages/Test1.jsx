import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import Test1 from ".././Components/Test/Test1";


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
import Designs from "../Components/Test/Designs";

//import { Link } from "react-router-dom";




const StartSeite = () => {
  return (
    <div className="App">
      <Navbar />
      
      
      <Designs/>
            
            


      <Footer />
    </div>
  );
};

export default StartSeite;
