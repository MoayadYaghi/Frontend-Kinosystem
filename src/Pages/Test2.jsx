import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import Test2 from ".././Components/Test/Test2";
//import Verlinkungen from "src/Pages/verlinkungen.js"

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";

//import { Link } from "react-router-dom";

const StartSeite = () => {
  return (
    <div className="App">
      <Navbar />
      <Test2/>
      <Footer />
    </div>
  );
};

export default StartSeite;
