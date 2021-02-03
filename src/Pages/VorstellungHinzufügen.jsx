import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import VorHinZu from ".././Components/VorstellungHinzufügen/VorHinZu";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";

import FilmSuche from "../Components/FIlmAufruf/FilmSuche";

//import { Link } from "react-router-dom";

const VorstellungHinzufügen = () => {
  return (
    <div className="App">
      <Navbar />

      <VorHinZu />

      <Footer />
    </div>
  );
};

export default VorstellungHinzufügen;