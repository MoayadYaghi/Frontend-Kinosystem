import React, { useState } from "react";
import "./App.css";
import MoviesSlider from "./components/Slider/Slider";
import Navbar from "./components/Navbar/Navbar";
//import Navbar1 from "./components/Footer/Navbar";
import Footer from "./components/Footer/Footer";
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
      
      <button onClick ={runQuery}>Test Button 1</button>
      <button onClick={(e) => setQuery(e.target.value)}>Test Button 2</button>
      
      <Footer />
    </div>
  );
}

export default App;