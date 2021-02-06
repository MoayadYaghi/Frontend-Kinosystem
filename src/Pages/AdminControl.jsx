import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import AdminControl from "../Components/AdminControl/AdminControl";


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";


//import { Link } from "react-router-dom";




const AdminControlSeite = () => {
  return (
    <div className="App">
      <Navbar />
      
      
      <AdminControl/>
            
            


      <Footer />
    </div>
  );
};

export default AdminControlSeite;