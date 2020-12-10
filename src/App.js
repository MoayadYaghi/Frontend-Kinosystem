import React from "react";
import "./App.css";
import MoviesSlider from "./Components/Slider/Slider";
import Navbar from "./Components/Navbar/Navbar";
import Navbar1 from "./Components/Footer/Navbar";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MoviesSlider />

      <Footer />
    </div>
  );
}

export default App;
