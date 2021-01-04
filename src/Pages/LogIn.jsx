import Navbar from ".././Components/Navbar/Navbar"; 
import Footer from ".././Components/Footer/Footer"; 
import LoginScreen from ".././Components/Login/LoginScreen"; 
import React from "react";
import ".././App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";


const LogIn = () => {
    return (
        <div className = "App">
            
            <Navbar/>

            <LoginScreen/>

      <Footer />
    </div>
  );
};

export default LogIn;
