import Navbar from ".././Components/Navbar/Navbar"; 
import Footer from ".././Components/Footer/Footer"; 
import PostList from ".././PostRequest/PostForm"; 
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
import PostForm from ".././PostRequest/PostForm";
import FilmSuche from "../Components/FIlmAufruf/FilmSuche";

//import { Link } from "react-router-dom";


const AdminFilmAuswahl = () => {
    return (
        <div>
            
            

            
            <FilmSuche/>
            <PostForm/>

            

                   
        </div>
    )
}

export default AdminFilmAuswahl;