import React, { Component } from "react";
import ImpressumText from "./Impressum"
import Datenschutz from "./Datenschutz"
import AGBs from "./AGBs"
import "./SmorollImpres.css";

class SmoImpAus extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
          
          AGB: false,
          Impressum: true,
          Datenschutz: false,
          };
    
        this.AGBHandler = this.AGBHandler.bind(this);
        this.ImpressumHandler = this.ImpressumHandler.bind(this);
        this.DatenschutzHandler = this.DatenschutzHandler.bind(this);
        
        /* this.APIaufruf= this.APIaufruf.bind(this) */
        
      }

      AGBHandler(){
          this.setState({AGB: true})
          this.setState({Impressum: false})
          this.setState({Datenschutz: false})
    }

    ImpressumHandler(){
        this.setState({AGB: false})
        this.setState({Impressum: true})
        this.setState({Datenschutz: false})
    }

    DatenschutzHandler(){
        this.setState({AGB: false})
        this.setState({Impressum: false})
        this.setState({Datenschutz: true})
    }

render() {
    
    return (
      <div >
          <div className ="ButtonsBack">
        <button className ="Buttons" onClick = {this.ImpressumHandler}> Impressum </button>
        <button className ="Buttons" onClick = {this.DatenschutzHandler}> Datenschutz </button>
        <button className ="Buttons" onClick = {this.AGBHandler}> AGB </button>
        </div>


        {
        this.state.Impressum ? <ImpressumText/> : null
}
{
        this.state.Datenschutz ? <Datenschutz/> : null
}
{
        this.state.AGB ? <AGBs/> : null
}
            
       
      </div>
    );
  }
}
export default SmoImpAus;