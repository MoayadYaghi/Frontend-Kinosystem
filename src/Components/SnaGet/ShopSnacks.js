import { Checkbox } from "@material-ui/core";
import React, { Component } from "react";
import "./ShopNahrung.css"

//import { Link } from "react-router-dom";

class ShopSnacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked:false,
      POPSAL: null,
      POPSU: null,
      NACHOS: null,
      POSPALCheck0: false,
      POSPALCheck1: false,
      POSPALCheck2: false,
      NACHOSCheck0: false,
      NACHOSCheck1: false,
      NACHOSCheck2: false,
      POSPSUCheck0: false,
      POSPSUCheck1: false,
      POSPSUCheck2: false,
      MengePOPSAL0: 0,
      MengePOPSAL1: 0,
      MengePOPSAL2: 0,
      MengeNACHOS0: 0,
      MengeNACHOS1: 0,
      MengeNACHOS2: 0,
      MengePOSPSU0: 0,
      MengePOSPSU1: 0,
      MengePOSPSU2: 0,
      GummiCheck0: false,
      GummiCheck1: false,
      GummiCheck2: false,
      MengeGummi0: 0,
      MengeGummi1: 0,
      MengeGummi2: 0,
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
      [{Name:"Popcorn Salzig", id:"POPSAL", check:"POSPALCheck" }, {Name: "Popcorn Süß", id:"POPSU", check:"POSPSUCheck" },{Name:"Nachos ", id:"NACHOS", check:"NACHOSCheck" },{Name:"Gummibärchen ", id:"Gummi", check:"GummiCheck" }]
    
    return <div>
      
      
      <div className="ÜberschriftSHOP">
      <div className="DESIGNHeadline3">Bitte wählen Sie einen Snack für Ihren Kinobesuch aus</div></div>
      <div className="CheckBoxReihe">
      <div className="DESIGNBOX">
      <div className="DESIGNTextField">
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
      </div> <div className ="ButtonAlign"><button className="RestButton" onClick={this.addWarenkorb}> Zum Warenkorb hinzufügen </button></div></div>
      




    </div></div>
  }
}
export default ShopSnacks;