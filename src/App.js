import React from "react";
import "./App.css";
import MoviesSlider from "./Components/Slider/Slider";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MoviesSlider />
    </div>
  );
}

export default App;
