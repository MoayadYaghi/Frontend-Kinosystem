import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";

import FilmSuche from "../Components/FIlmAufruf/FilmSuche";

//import { Link } from "react-router-dom";

const AdminFilmAuswahl = () => {
  return (
    <div className="App">
      <Navbar />

      <FilmSuche />

      <Footer />
    </div>
  );
};

export default AdminFilmAuswahl;
