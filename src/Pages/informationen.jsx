import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import Smoroll from ".././Components/Smoroll/Smoroll";
import React from "react";
import ".././App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//import { Link } from "react-router-dom";

const Informationen = () => {
  return (
    <div className="App">
      <Navbar />
      <Smoroll />
      <Footer />
    </div>
  );
};

export default Informationen;
