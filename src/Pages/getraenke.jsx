import Navbar from ".././Components/Navbar/Navbar"; 
import Footer from ".././Components/Footer/Footer"; 
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";


const Getraenke = () => {
    return (
        <div>
            
            <Navbar/>

            <h1>Getraenke Seite</h1>

            <Footer/>        
        </div>
    )
}

export default Getraenke;