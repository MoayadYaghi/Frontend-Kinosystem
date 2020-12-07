import React, {useState} from "react";
import "../../Slider.scss";
import Images from "./Img";
import pic1 from "../../Pics/pic1.jpg";
import pic2 from "../../Pics/pic2.jpg";
import pic3 from "../../Pics/pic3.jpg";

function MoviesSlider() {
  const [x, setX] = useState(0);
  let sliderArr = [<Images src={pic1} />, <Images src={pic2} />, <Images src={pic3} />];

  const goLeft = () => {
  x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  // if 
};
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
};

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div key={index} className="slide" style={{transform:`translateX(${x}%)`}} >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>left</button>
      <button id="goRight" onClick={goRight}>right</button>
    </div>
  );
}

export default MoviesSlider;
