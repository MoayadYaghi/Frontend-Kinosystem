import React, { Component } from "react";
import "./Smoroll.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Menue1 from "./Menue1";
import Menue2 from "./Menue2";
import Menue3 from "./Menue3";
import Menue4 from "./Menue4";

class Navigation extends Component {
  /* scrollToTop: () => {
    scroll.scrollToTop();
  }, */

  render() {
    return (
      <div className="Flex">
        <div className="Tabelle">
          <div className="SpalteW">
            <Link
              className="SpalteW"
              activeClass="active"
              to="menue1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Menue-1
            </Link>
          </div>
          <div className="SpalteS">
            <Link
              className="SpalteS"
              activeClass="active"
              to="menue2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Menue-2
            </Link>
          </div>
          <div className="SpalteW">
            <Link
              className="SpalteW"
              activeClass="active"
              to="menue3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Menue-3
            </Link>
          </div>
          <div className="SpalteS">
            <Link
              className="SpalteS"
              activeClass="active"
              to="menue4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Menue-4
            </Link>
          </div>
        </div>

        <div>
          <Menue1 />
          <Menue2 />
          <Menue3 />
          <Menue4 />
        </div>
        {/* </Sticky>  */}

        {/* </view> */}
      </div>
    );
  }
}
export default Navigation;