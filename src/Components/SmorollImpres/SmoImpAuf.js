import React, { Component } from "react";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import AGBs from "./AGBs";
import ".././Smoroll/Smoroll.css"
import { Link, animateScroll as scroll } from "react-scroll";
import { duration } from "@material-ui/core";

class SmoImpAus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AGB: false,
      Impressum: true,
      Datenschutz: false,
    };

   /*  this.AGBHandler = this.AGBHandler.bind(this);
    this.ImpressumHandler = this.ImpressumHandler.bind(this);
    this.DatenschutzHandler = this.DatenschutzHandler.bind(this); */

    /* this.APIaufruf= this.APIaufruf.bind(this) */
  }

  /* AGBHandler() {
    this.setState({ AGB: true });
    this.setState({ Impressum: false });
    this.setState({ Datenschutz: false });
  }

  ImpressumHandler() {
    this.setState({ AGB: false });
    this.setState({ Impressum: true });
    this.setState({ Datenschutz: false });
  }

  DatenschutzHandler() {
    this.setState({ AGB: false });
    this.setState({ Impressum: false });
    this.setState({ Datenschutz: true });
  } */

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="Flex">

<view className="Tabelle">
            <div className="Hintergrund">
              <div className="SpalteBL">
                <Link
                  className="SpalteW"
                  activeClass="active"
                  to="Impressum"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                >
                  Impressum
                </Link>
              </div>
              <div className="SpalteBL">
                <Link
                  className="SpalteS"
                  activeClass="active"
                  to="Datenschutz"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={3000}
                >
                  Datenschutz
                </Link>
              </div>
              <div className="SpalteBL">
                <Link
                  className="SpalteW"
                  activeClass="active"
                  to="AGB"
                  
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={4000}
                >
                  AGB
                </Link>
              </div>
              
            </div>
          </view>

          <div>
            <Impressum />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>
            <Datenschutz />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>
            <AGBs />
            <div className="BacktoTop" onClick={this.scrollToTop}>
              {" "}
              Zurück an den Start
            </div>



 {/* <div className="ButtonsBack">
          <button className="Buttons" onClick={this.ImpressumHandler}>
            {" "}
            Impressum{" "}
          </button>
          <button className="Buttons" onClick={this.DatenschutzHandler}>
            {" "}
            Datenschutz{" "}
          </button>
          <button className="Buttons" onClick={this.AGBHandler}>
            {" "}
            AGB{" "}
          </button>
        </div>

        {this.state.Impressum ? <ImpressumText /> : null}
        {this.state.Datenschutz ? <Datenschutz /> : null}
        {this.state.AGB ? <AGBs /> : null}
      </div>  */}

      </div> </div> 
    );
  }
}
export default SmoImpAus;
