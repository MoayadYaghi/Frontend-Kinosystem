import React, { useState } from "react";
import "../../Components/Slider/Slider.scss";
import { Link } from "react-router-dom";
/* import Images from "./Img";
import pic1 from "../../Pics/pic1.jpg";
import pic2 from "../../Pics/pic2.jpg";
import pic3 from "../../Pics/pic3.jpg";
import { TransitionGroup, CSSTransition } from "react-transition-group"; */

function MoviesSlider({ images, text, id }) {
  /* console.log(images); */
  const Länge = images.length;
  const ProgrammLink = "/programm/"

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

  function clickHandler(Eingabewert){
    if(index === 0 && Eingabewert < 0 ){
      setIndex(Länge - 2)
    }
    else if(index === 0 && Eingabewert === (-1) ){
      setIndex( Länge)
    }
    else if(index === 1 && Eingabewert === (-2) ){
      setIndex( Länge -1)
    }
    else{
      setIndex((index + Eingabewert)%Länge)
    }
  };


  return (
    images.length > 0 && (
      <div className="DESIGNTextField">
      <div className="SliderKOmplett">
        <div className="linkeSeitediv">
          <div className="linkeSeitedivBlock2">
        {/* <Link className="linkeSeitedivBlock2" to={
          ProgrammLink + (index === 0 || index === 1)
          ? index === 0
            ? id[Länge - 2]
            : id[Länge - 1]
          : id[index - 2]
          
          
          }> */}
            {/* { console.log(ProgrammLink + ((index === 0 || index === 1)
          ? index === 0
            ? id[Länge - 2]
            : id[Länge - 1]
          : id[index - 2]))
            } */}
            {
              <img
                className="linkeSeiteSliderBild2"
                alt=""
                src={
                  index === 0 || index === 1
                    ? index === 0
                      ? images[Länge - 2]
                      : images[Länge - 1]
                    : images[index - 2]
                }
                onClick={()=>clickHandler(-2)}
              />
            }
            {
              <div className="TextDisplay">
                <div key={index + 2} className="slide">
                  {index === 0 || index === 1
                    ? index === 0
                      ? text[Länge - 2]
                      : text[Länge - 1]
                    : text[index - 2]}
                </div>
              </div>
            }
          </div>
        </div>

        <div className="linkeSeitediv">
          <div className="linkeSeitedivBlock"> 
        {/* <Link className="linkeSeitedivBlock" to={ProgrammLink + (index === 0
                    ? Länge !== 0
                      ? id[Länge - 1]
                      : null
                    : id[index - 1])}> */}
          {
            
            (
              <img
                className="linkeSeiteSliderBild"
                alt=""
                src={
                  index === 0
                    ? Länge !== 0
                      ? images[Länge - 1]
                      : null
                    : images[index - 1]
                }
                onClick={()=>clickHandler(-1)}
              />
            )
          }
          {
              <div className="TextDisplay">
                <div key={index + 2} className="slide">
                  {
                  index === 0
                  ? Länge !== 0
                    ? text[Länge - 1]
                    : null
                  : text[index - 1]
                  }
                </div>
              </div>
            }
        </div></div>

        <div className="flexboxContainer" >
          <div className="slider" >
            
            <Link className="slider"to={ProgrammLink + id[index]}>
            <img className="image" alt="" src={images[index]} />
            </Link>
            <button id="goLeft" onClick={goLeft}>
              {"<"}
            </button>
            <button id="goRight" onClick={goRight}>
              {">"}
            </button>
            
          </div>
          <Link className="TextDisplayMitte"to={ProgrammLink + id[index]}>
          
            <div key={index} className="slide">
              {text[index]}
            </div>
          </Link>
          </div>

        <div className="rechteSeitediv">
        {/* <Link className="rechteSeitedivBlock" to={ProgrammLink + id[(index+1)%Länge]}> */}
        <div className="rechteSeitedivBlock">
            {
              <img
                className="rechteSeiteSliderBild"
                alt=""
                src={images[(index + 1) % Länge]}
                onClick={()=>clickHandler(1)}
              />
            }
            <div className="TextDisplay">
              <div key={index + 1} className="slide">
                {text[index + 1]}
              </div>
            </div>
          </div>
        </div>

        <div className="rechteSeitediv">
          {/* <Link className="rechteSeitedivBlock2" to={ProgrammLink + id[(index+2)%Länge]}> */}
          <div className="rechteSeitedivBlock2"> 
            {console.log(ProgrammLink + id[(index+2)%Länge])
}
            {
              <img
                className="rechteSeiteSliderBild2"
                alt=""
                src={images[(index + 2) % Länge]}
                onClick={()=>clickHandler(2)}
              />
            }
            <div className="TextDisplay">
              <div key={index + 2} className="slide">
                {text[index + 2]}
              </div>
            </div>
            </div>
          {//</Link>
          }
        </div>
      </div>
      </div>
    )
  );
}

export default MoviesSlider;
