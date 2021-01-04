import Navbar from ".././Components/Navbar/Navbar"; 
import Footer from ".././Components/Footer/Footer"; 
import React from "react";
import ".././App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";


const Shop = () => {
    return (
        <div className = "App">
            
            <Navbar/>

            <h1>Shop Seite</h1>

            <Footer/>        
        </div>
    )
}

export default Shop;