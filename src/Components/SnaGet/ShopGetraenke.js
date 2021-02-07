import { Checkbox } from "@material-ui/core";
import React, { Component } from "react";
import GeneratorAufruf from "../ZahlenGenerator/GeneratorAufruf";

import "./ShopNahrung.css"

//import { Link } from "react-router-dom";

class ShopGetraenke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      CheckCola0: false,
      CheckCola1: false,
      CheckCola2: false,
      MengeCola0: 0,
      MengeCola1: 0,
      MengeCola2: 0,
      CheckFanta0: false,
      CheckFanta1: false,
      CheckFanta2: false,
      MengeFanta0: 0,
      MengeFanta1: 0,
      MengeFanta2: 0,
      CheckSprite0: false,
      CheckSprite1: false,
      CheckSprite2: false,
      MengeSprite0: 0,
      MengeSprite1: 0,
      MengeSprite2: 0,
      CheckSpezi0: false,
      CheckSpezi1: false,
      CheckSpezi2: false,
      MengeSpezi0: 0,
      MengeSpezi1: 0,
      MengeSpezi2: 0,
      CheckApfelschorle0: false,
      CheckApfelschorle1: false,
      CheckApfelschorle2: false,
      MengeApfelschorle0: 0,
      MengeApfelschorle1: 0,
      MengeApfelschorle2: 0,
      CheckWasser0: false,
      CheckWasser1: false,
      CheckWasser2: false,
      MengeWasser0: 0,
      MengeWasser1: 0,
      MengeWasser2: 0,
      BierCheck0: false,
      BierCheck1: false,
      BierCheck2: false,
      MengeBier0: 0,
      MengeBier1: 0,
      MengeBier2: 0,
      
    }
   
    this.Anklicked = this.Anklicked.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }
  Anklicked(id, sizeID,sizeName, checked){
    
    const ID = id
    const Sizes = sizeID
    const SizeN = sizeName
    const Checked = checked
    const checkedaktuell = Checked+(Sizes)
    const checked1 = Checked+((Sizes+1)%3)
    const checked2 = Checked+((Sizes+2)%3)
    
    //console.log(checkedaktuell, checked1, checked2)

    
     /*  this.setState({
        [checkedaktuell]: !this.state[checkedaktuell],
        [ID]: SizeN
      },()=>{      
        if(checked1 || checked2){
        this.setState({
          [checked1]: false, 
          [checked2]: false,
        },()=>console.log(this.state))
      }

    }) */

    this.setState({
      [checkedaktuell]: !this.state[checkedaktuell]
    })

      


    
    /* if(this.state[Checked+Sizes] !== true){
      this.setState({[Checked+Sizes]: true},()=>{
       if(this.state[ID] === null){
        this.setState({ [ID]: Sizes},()=>{
          console.log(this.state[ID])
    
    })} })
  }
    else if(this.state[Checked+Sizes] === true){
      this.setState({ [Checked+Sizes]: false },()=>{
        if(this.state[ID] !== null){
          this.setState({ [ID]: Sizes},()=>{
            console.log(this.state[ID])
          })} }) */
  
}
handleDropdown(event){

  const target = event.target;
  const Value = target.value === "on" ? true : target.value;

  const name = target.name;

  this.setState({ [name]: Value }, ()=>

  /* const Menge = "Menge"
  const NameItem = Name
  const GrößeItem = Größe */
  console.log(this.state[name], this.state/* , value,
  this.state[Menge+NameItem+GrößeItem] */));
  
}


  render() {
    var Array = [{Name:"Groß", id:0},{Name:"Mittel", id:1},{Name:"Klein", id:2}]
    var SnackArray = 
      [{Name:"Cola", id:"Cola", check:"CheckCola" }, {Name:"Fanta", id:"Fanta", check:"CheckFanta" },{Name:"Sprite", id:"Sprite", check:"CheckSprite" },{Name:"Spezi", id:"Spezi", check:"CheckSpezi" },{Name:"Apfelschorle", id:"Apfelschorle", check:"CheckApfelschorle" },{Name:"Wasser", id:"Wasser", check:"CheckWasser" }, {Name:"Bier", id:"Bier", check:"BierCheck" },]
    

      //,{Name:"Krombacher(Pilsener)", id:"Pils", check:"CheckPils" }
    return <div>
      <GeneratorAufruf/>
      
      <div className="ÜberschriftSHOP">
      <div className="DESIGNHeadline3">Bitte wählen Sie Getränke für Ihren Kinobesuch aus</div></div>
      <div className="CheckBoxReihe">
      <div className="DESIGNBOX">
       {
         SnackArray.map((SnacksKino)=>(
           
           <div className="EineItemReihe">
           <div className="DESIGNTextField"><strong>{SnacksKino.Name}</strong><div>
             
             </div>
           <div className="SnackName">
           {Array.map(Größe =>( 
           
           
           <div className="CheckBoxReihe" >
             
             <Checkbox
        color="primary"
        checked={this.state[SnacksKino.check+Größe.id]}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
       onChange = {()=> this.Anklicked(SnacksKino.id, Größe.id, Größe.Name, SnacksKino.check )}
        />
        <div className="NameundMenge"><div className="DESIGNTextField">
        {Größe.Name}</div>
        {
        this.state[SnacksKino.check+Größe.id]?(
          <div>
            <form >
                     <label>
                        <select className ="" 
                        value={this.state["Menge"+SnacksKino.id+Größe.id]} 
                        onChange={this.handleDropdown}
                        name={"Menge"+SnacksKino.id+Größe.id}>

                            <option value= {0}></option> 
                            <option value= {1}>1</option> 
                            <option value={2}>2</option> 
                            <option value= {3}>3</option> 
                           
                        </select>
                      </label>
                      </form>
          </div>): null
        
        } </div>
           </div>))}


           </div>

           {/* <div>
           {Array.map(Größe =>( 
           Menge: <div>
           <form >
                     <label>
                        <select className ="" 
                        value={this.state["Menge"+SnacksKino+]} 
                        onChange={this.handleDropdown}>
                         {this.state.dayAndMonth.map((day)=> (
                            <option value={day}>{day}</option> 
                           ))
                          }
                        </select>
                      </label>
                      </form>
                      
           )}</div> */}
           
           </div></div>
         ))
                        
       }
        {/* <Checkbox
        defaultchecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
       onChange ={this.Anklicked}
        />Popkorn
      </div>
      <div>
        <Checkbox
        defaultchecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
       onChange ={this.Anklicked}
        />
      </div>
      <div>
        <Checkbox
        defaultchecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
       onChange ={this.Anklicked}
       
        /> */}
      </div>
      




    </div></div>
  }
}
export default ShopGetraenke;