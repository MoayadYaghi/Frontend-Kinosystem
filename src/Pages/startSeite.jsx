import Navbar from ".././Components/Navbar/Navbar"; 
import Footer from ".././Components/Footer/Footer"; 
import SliderAufruf from ".././Components/Slider/SliderAufruf"; 
import DealDW from ".././Components/DealderWoche/DealDW"; 
import InfoderWoche from ".././Components/DealderWoche/InfoderWoche"; 
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";

//import { Link } from "react-router-dom";


const StartSeite = () => {
    return (
        <div className = "App">
            
            <Navbar/>

            <SliderAufruf/>
            <InfoderWoche/>
            <DealDW/>
            
            

            <Footer/>        
        </div>
    )
}

export default StartSeite;