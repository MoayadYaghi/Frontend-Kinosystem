import Navbar from ".././Components/Navbar/Navbar"; 
import Footer from ".././Components/Footer/Footer"; 
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";


const Warenkorb = () => {
    return (
        <div>
            
            <Navbar/>

            <h1>Warenkorb Seite</h1>

            <Footer/>        
        </div>
    )
}

export default Warenkorb;