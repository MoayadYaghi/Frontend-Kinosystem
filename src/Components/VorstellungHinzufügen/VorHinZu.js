import React, { Component } from "react";
import "./VorHinZu.css";
import getFilme from "../../API_Pulls/getFilmAPI.js"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';

let FilmListe = [];



class VorHinZu extends Component {
  constructor(props) {
    super(props);
    this.state= {
      Filme:[]
    }
    
  }//constructor
  state = {};

  componentDidMount () {
    getFilme.getFilme().then((response )=> {
      var data = response.data
      console.log(response);
      this.setState({Filme: data})
    })
  }
bla(){
  <div> 
  {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
    (variant) => (
      <SplitButton
        key={variant}
        id={`dropdown-split-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    ),
  )}
  </div>
}
  
  

  render() {
    
    return (
      <div className = 'button'>
          
        <p id="F0" >{this.state.Filme.map((movies) => (
          <div  >
            {
              movies.name
            }
          </div>
        )
        )}</p>
        
        
      </div>
    );
  }//render
} //class
export default VorHinZu;

