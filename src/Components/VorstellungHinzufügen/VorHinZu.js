import React, { Component } from "react";
import "./VorHinZu.css";
import getFilme from "../../API_Pulls/getFilmAPI.js"
/* import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap'; */

let FilmListe = [];






class VorHinZu extends Component {
  constructor(props) {
    super(props);
    this.state= {
      filme:[],
      choosenMovie:[],
      value: 'Es wurde noch kein Film ausgewählt',
      visible :false,
      visible2: false,
      blockVisible:false,
      dayAndMonth : [],
      yearCollection : [],
      saal: 0,
      day:0,
      month:0,
      year:0,
      stunde:0,
      minute:0,
      minuteCollection:[],
    }
     this.handleChange = this.handleChange.bind(this);
     this.handleSaal = this.handleSaal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDay = this.handleDay.bind(this);
      this.handleMonth = this.handleMonth.bind(this);
      this.handleYear = this.handleYear.bind(this);
      this.handleStunde = this.handleStunde.bind(this);
      this.handleMinute = this.handleMinute.bind(this);
      this.handleButton = this.handleButton.bind(this);
  }//constructor
  state = {};

  componentDidMount () {
    let data2 =[];
    let data3 =[];
    getFilme.getFilme().then((response )=> {
      var data = response.data
      this.setState({filme: response.data})
      console.log(response);
      this.setState({Filme: data})
      //console.log(this.state.filme.data)
      this.setState({visible: true})
      })

      for (let i=0; i<=1; i++){
        let data1 =[];
        for(let i=1; i<=31; i++){ 
               data1.push(i)
             }
         this.setState({dayAndMonth: data1})
      }


        do{
      for(let i=2021; i<=2100; i++){
        data2.push(i)
      }
      this.setState({yearCollection:data2})
    }while(false)
     

    do{
      for(let i=0; i<=59; i++){
        data3.push(i)
      }
      this.setState({minuteCollection:data3})
    }while(false)
  }

/*    componentDidMount(){
    let data1 =[];
    let data2 =[]; */
/*     for (let i=0; i<=1; i++){
      
       for(let i=1; i<=31; i++){ 
              data1.push(i)
            }
        this.setState({dayAndMonth: data1})
     } */
        
/*     do{
      for(let i=2000; i<=2100; i++){
        data2.push(i)
      }
      this.setState({year:data2})
    }while(false) 
  } */

  handleChange(event) {
    this.setState({value: event.target.value});


 /*    return(
        <div className = "bild">
            {console.log(this.state.choosenMovie)}
        </div>
    ) */
  
  }

  handleSaal(event){
    this.setState({saal: event.target.value})
  }
  handleDay(event){
    this.setState({day: event.target.value})
  }
  handleMonth(event){
    this.setState({month: event.target.value})
  }
  handleYear(event){
    this.setState({year: event.target.value})
  }  
  handleStunde(event){
    this.setState({stunde: event.target.value})
  }  
  handleMinute(event){
    this.setState({minute: event.target.value})
  }  



  handleButton(event){
    //this.setState({minute: event.target.value})
    alert("film wurde hinzugefügt")
    event.preventDefault();
  }


  handleSubmit(event){
    this.setState({visible2: true})
    for(let i=0; i<this.state.filme.length; i++){
      if (this.state.value == this.state.filme[i].name){
        //console.log(this.state.value)
        this.setState({choosenMovie:this.state.filme[i]})
        console.log(this.state.choosenMovie.bild)
      }//if
    }//for
    this.setState({blockVisible: true})

    event.preventDefault();
  
  }


  
  render() {
    return (
    <div className ="gesamterBlock">

   
      <div>
           {this.state.visible? (
        <form onSubmit={this.handleSubmit}>
          <label>
            Filmwahl:
            <select value={this.state.value} onChange={this.handleChange}>
           

            {this.state.Filme.map((filme)=> (
              <option value={filme.name}>{filme.name}</option>
            ))
            }
            </select>
           
          </label>
          <input type="submit" value="Submit" />
        </form> 
     ): null}
      {this.state.visible2 ? <div>{/* hier könnte ihr Bild auftauchen von {this.state.value} */}
        <img key={this.state.choosenMovie.id} alt=" " className="image" src={this.state.choosenMovie.bild}/>
      </div>:null}
     </div>


      {this.state.blockVisible ? 
        <div className = 'VorstellungsBlock'>
            <div className='Überschrift'>
                <h5>Vorstellung Hinzufügen für: {this.state.value}</h5>
            </div>
                <div className = 'InformationsEingabe'>
                    <div className="abfrage">
                        
                          Film: <br/>
                          Saal: <br/>
                          Datum: <br/>
                          Uhrzeit: <br/>
                        
                    </div>
                    <div className= 'antwort'>
                     
                      {/* Film */}
                      <div className ="nameDesFilmes">
                     {this.state.value} 
                      </div>
                     {/* dropdown für den Saal */}
                     <form>
                     <label>
                        <select value={this.state.saal} onChange={this.handleSaal}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                      </label>
                      </form>

                    <div className= "datum">
                      {/* dropdown für das Datum */}
                      <form className="date">
                     <label>
                        <select value={this.state.day} onChange={this.handleDay}>
                         {this.state.dayAndMonth.map((day)=> (
                            <option value={day}>{day}</option> 
                          ))
                          }
                        </select>
                      </label>
                      </form>



        {/* dropdown für das Monat */}
        <form className="month">
                     <label>
                        <select value={this.state.month} onChange={this.handleMonth}>
                         {this.state.dayAndMonth.slice(0,12).map((month)=> (
                            <option value={month}>{month}</option> 
                          ))
                          }
                        </select>
                      </label>
                      </form>



                  {/* dropdown für das Jahr */}
                     <form className="year">
                     <label>
                        <select value={this.state.year} onChange={this.handleYear}>
                         {this.state.yearCollection.map((year)=> (
                            <option value={year}>{year}</option> 
                          ))
                          }
                        </select>
                      </label>
                      </form> 
                </div> 


                <div className = "uhrzeit">
                  {/* dropdown für die Stunde */}
                  <form className="stunde">
                     <label>
                        <select value={this.state.stunde} onChange={this.handleStunde}>
                         {this.state.minuteCollection.slice(0,24).map((stunde)=> (
                            <option value={stunde}>{stunde}</option> 
                          ))
                          }
                        </select>
                      </label>
                      </form>

                            

                      {/* dropdown für die minute */}
                     <form className="minute">
                     <label>:
                        <select value={this.state.minute} onChange={this.handleMinute}>
                         {this.state.minuteCollection.map((minute)=> (
                            <option value={minute}>{minute}</option> 
                          ))
                          }
                        </select>
                      </label>
                      </form>
                    </div>

                    </div>
                    
                  
                </div>
                <div className ="hinzufügen">

                   <button className="buttonHinzufügen" onClick={this.handleButton}>
                            Hinzufügen
                  </button> 


                </div>
       </div>:null}     
      
     
        






    </div>
     
    );
  }

} //class
export default VorHinZu;

