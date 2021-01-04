import Navbar from ".././Components/Navbar/Navbar"; 
import Footer from ".././Components/Footer/Footer"; 
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";

//import { Link } from "react-router-dom";


const Bekleidung = () => {
    return (
        <div className = "App">
            
            <Navbar/>

            <h1>Bekleidung Seite</h1>

            <Footer/>        
        </div>
    )
}

export default Bekleidung;