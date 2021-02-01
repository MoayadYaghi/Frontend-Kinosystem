import React, { Component } from "react";
import "./Smoroll.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Menue1 from "./Menue1";
import Menue2 from "./Menue2";
import Menue3 from "./Menue3";
import Menue4 from "./Menue4";
import Menue5 from "./Menue5";
import Menue6 from "./Menue6";
import Menue7 from "./Menue7";
import Menue8 from "./Menue8";
//import {StickyContainer, Sticky} from 'react-sticky';

class Smoroll extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  render() {
    return (
      <div>
        

        <div className="Flex">
          {/* <StickyContainer>
                <Sticky>
                 */}
          <view className="Tabelle">
            <div className="Hintergrund">
              <div className="SpalteBL">
                <Link
                  className="SpalteW"
                  activeClass="active"
                  to="menue1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                >
                  {" "}
                  Über uns{" "}
                </Link>
              </div>
              <div className="SpalteBL">
                <Link
                  className="SpalteS"
                  activeClass="active"
                  to="menue2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  {" "}
                  Eintrittspreise{" "}
                </Link>
              </div>
              <div className="SpalteBL">
                <Link
                  className="SpalteW"
                  activeClass="active"
                  to="menue3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  Öffnungszeiten &amp; Anfahrt
                </Link>
              </div>
              <div className="SpalteBL">
                <Link
                  className="SpalteS"
                  activeClass="active"
                  to="menue4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  Benutzerkonto
                </Link>
              </div>

              <div className="SpalteBL">
                <Link
                  className="SpalteW"
                  activeClass="active"
                  to="menue5"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  FSK
                </Link>
              </div>
              <div className="SpalteBL">
                <Link
                  className="SpalteS"
                  activeClass="active"
                  to="menue6"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  Zahlungsmittel
                </Link>
              </div>
              <div className="SpalteBL">
                <Link
                  className="SpalteW"
                  activeClass="active"
                  to="menue7"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={3000}
                >
                  Online Ticketkauf
                </Link>
              </div>
              <div className="SpalteBL">
                <Link
                  className="SpalteS"
                  activeClass="active"
                  to="menue8"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={3000}
                >
                  Barrierefreiheit
                </Link>
              </div>
            </div>
          </view>
          {/* </Sticky>
                </StickyContainer> */}

          <div>
            <Menue1 />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>
            <Menue2 />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>
            <Menue3 />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>
            <Menue4 />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>
            <Menue5 />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>
            <Menue6 />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>
            <Menue7 />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>
            <Menue8 />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>
          </div>
          {/* </Sticky>  */}

          {/* </view> */}
        </div>

        
      </div>
    );
  }
}
export default Smoroll;
