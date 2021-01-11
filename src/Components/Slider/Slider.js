import React, { useState } from "react";
import "../../Components/Slider/Slider.scss";
/* import Images from "./Img";
import pic1 from "../../Pics/pic1.jpg";
import pic2 from "../../Pics/pic2.jpg";
import pic3 from "../../Pics/pic3.jpg";
import { TransitionGroup, CSSTransition } from "react-transition-group"; */

var ReactCSSTransitionGroup = require("react-transition-group");



function MoviesSlider({ images, text }) {
  /* console.log(images) */
  
  const [index, setIndex] = useState(0);

  const goLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };
  const goRight = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    images.length > 0 && (
      <div>
        <div className="slider">
          <button id="goLeft" onClick={goLeft}>
            {"<"}
          </button>
          <img className="image" alt="" src={images[index]} />
          <button id="goRight" onClick={goRight}>
            {">"}
          </button>
        </div>
        <div className="TextDisplay">
          <div key={index} className="slide">
            {text[index]}
          </div>
        </div>
      </div>
    )
  );

}

export default MoviesSlider;
