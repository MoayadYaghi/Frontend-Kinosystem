import React, { useState } from "react";
import "./App.css";
import MoviesSlider from "./Components/Slider/Slider";
import Navbar from "./Components/Navbar/Navbar";
//import Navbar1 from "./Components/Footer/Navbar";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [id, setid] = useState([]);

  const runQuery = () => {
    fetch(
      `https://pixabay.com/api/?key=17555646-e40df9968035314583cab5eca&q=${query}`
    )
    .then((response) => response.json())
    .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL))
    .then(setImages);
  
    fetch(
      `https://pixabay.com/api/?key=17555646-e40df9968035314583cab5eca&q=${query}`
    )
    .then((response) => response.json())
    .then(({ hits }) => hits.map(({ id }) => id))
    .then(setid);
  }

  return (
    <div className="App">
      <Navbar/>
      <MoviesSlider images={images} text = {id}/>
      <button onClick ={runQuery}>Call API</button>
      <Footer />
    </div>
  );
}

export default App;