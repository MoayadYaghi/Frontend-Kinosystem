import React, { useState } from "react";
import "./App.css";
import MoviesSlider from "./Components/Slider/Slider";
import FilmInfoComponent from "./Components/APIStartseite/FilmInfoComponent"
import Navbar from "./Components/Navbar/Navbar";
import SliderInfoComponent from "./Components/Slider/SliderInfoComponent"
//import Navbar1 from "./Components/Footer/Navbar";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SliderAufruf from "./Components/Slider/SliderAufruf";

function App() {

  /* const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [id, setid] = useState([]);
 */
  //const runQuery = 
  
      /* const runQuery = () => {
     
     
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
 */

  return (
    <div className="App">
      <Navbar/>

      {/*  <SliderInfoComponent/> */}

       <SliderAufruf/> 
      
      
         {/* <MoviesSlider images = {images} text = {id} />  */}

       {/*  <button onClick ={runQuery}>Call API</button>   */}

      {/* <FilmInfoComponent/> 
      <Footer /> */}
    </div>
  );
}

export default App;
