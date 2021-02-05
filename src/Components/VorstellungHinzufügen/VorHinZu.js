import React, { Component } from "react";
import "./VorHinZu.css";
import getFilme from "../../API_Pulls/GetAllFilmAPI.js"
import VorstellungHinzufügen from "../../PostRequest/VorstellungHinzufügen"
import getAllSaal from "../../API_Pulls/GetAllSaal.js" 
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
      allSaal: [],
      choosenSaal: 0,
      day:0,
      month:0,
      year:2021,
      stunde:0,
      minute:0,
      startZeit:0,
      minuteCollection:[],
      preis:0,
      anzahlWiederholungen:0,
      wiederholungsRythmus:0,
      filmId:0,
      aktiv:0,
      grundpreis:0,
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
      this.handlePreis = this.handlePreis.bind(this);
      this.handleAnzahlWiederholungen = this.handleAnzahlWiederholungen.bind(this);
      this.handleWiederholungsRythmus= this.handleWiederholungsRythmus.bind(this);
  }//constructor
  state = {};

  componentDidMount () {

    let data4 = [];
    getAllSaal.GetAllSaalAPI().then((res)=>{
      data4=res.data
      this.setState({allSaal:data4})
      console.log(data4)
    })
    

    let data2 =[];
    let data3 =[];
    getFilme.getAllFilmAPI().then((response )=> {
      var data = response.data
      this.setState({filme: response.data})
      //console.log(response);
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
    
    

  
  }

  handleSaal(event){
    this.setState({choosenSaal: event.target.value})
    console.log(event.target.value)
    console.log(this.state.choosenSaal)
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
  handlePreis(event){
    this.setState({preis: event.target.value})
  }   
  handleAnzahlWiederholungen(event){
    this.setState({anzahlWiederholungen: event.target.value})
  }    
  handleWiederholungsRythmus(event){
    this.setState({wiederholungsRythmus: event.target.value})
  }  



  handleButton(event){
    let month=""
    let day=""
    let stunde=""
    let minute=""

    if (this.state.month<10){
      month = "0"+this.state.month
    }else{
      month = this.state.month
    }
    if (this.state.day<10){
      day = "0"+this.state.day
    }else{
      day = this.state.day
    }
    if (this.state.stunde<10){
      stunde = "0"+this.state.stunde
    }else{
      stunde = this.state.stunde
    } 
    if (this.state.minute<10){
      minute = "0"+this.state.minute
    }else{
      minute = this.state.minute
    }
    let startZeit = month+day+this.state.year+stunde+minute  
    console.log(startZeit) 
    var filmId = this.state.choosenMovie.id
    var grundpreis = this.state.preis
    var aktiv = 1
    var saal = this.state.saal
/*     console.log(grundpreis, filmId, startZeit) */
    //this.setState({minute: event.target.value})
   /*  alert("film wurde hinzugefügt für "+ this.state.preis) */
    event.preventDefault();
    this.setState({startZeit: this.state.month+this.state.day+this.state.year+this.state.stunde+this.state.minute,
    /* this.setState({startZeit: this.state.year+"-"+"0"+this.state.month+"0"+this.state.day+"T"+this.state.stunde+":"+this.state.minute+":00.000", */
    filmId: this.state.choosenMovie.id,
    grundpreis: this.state.preis,
    aktiv: 1}, 
    ()=> VorstellungHinzufügen.vorhinzu(startZeit, filmId, saal, grundpreis).then(res=>console.log(res))
    )
  }


  handleSubmit(event){
    console.log(this.state.value)
    if(this.state.value !== "Es wurde noch kein Film ausgewählt"){
    this.setState({visible2: true,
      visible3: true
    })
        }
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
    <div className ="HeightFilmWahl">

   
      <div>
           {this.state.visible? (<div className="FilmWahlFlex">
        <form className ="FilmForm" onSubmit={this.handleSubmit}>
          <label className ="">
            <div className = "FilmWahlDiv">
            <div className="DESIGNHeadline2">
  
              Filmwahl: 
              </div></div>

            <select className="SelectFilmVorHin" value={this.state.value} onChange={this.handleChange}>
           <option value="">--select--</option>
           

            {this.state.Filme.map((filme)=> (
              <option value={filme.name}>{filme.name}</option>
            ))
            }
            </select>
           
          </label>
          <input className ="DESIGNButton" type="submit" value="Submit" />
        </form> </div>
     ): null}
        <div className="VorstellungDivFlex">
      {this.state.visible2 ? <div className ="ImageHeight">{/* hier könnte ihr Bild auftauchen von {this.state.value} */}
        <img key={this.state.choosenMovie.id} alt=" " className="imageVorHin" src={this.state.choosenMovie.bild}/>
      </div>:null}
     


      {this.state.blockVisible ? 
      <div className = 'VorstellungsBlockFlex'>
        <div className = 'VorstellungsBlock'>
          <div className ="VorHinBOXDES">
            <div className='Überschrift'>
                <div className="DESIGNHeadline3">Vorstellung Hinzufügen für: {this.state.value}</div>
            </div>
                <div className = 'InformationsEingabe'>
                <div className= "BalkenFlex">
                <div className ="BalkenlinkSeit"><div className="DESIGNTextField">
                        Film: 
                        </div> </div>  
                        <div className ="nameDesFilmes">
                        <div className ="Balkenrechtseit">
                        <div className="DESIGNTextField">
                     {this.state.value} 
                      </div>
                        </div> </div>
                        </div> 
                        <div className= "BalkenFlex">
                        <div className ="BalkenlinkSeit"><div className="DESIGNTextField">
                        Saal: 
                        </div> </div>  
                        <div className ="Balkenrechtseit">
                        <form>
                     <label>
                        <select className ="selectVorhinzu" value={this.state.choosenSaal} onChange={this.handleSaal}>
                          <option value="--Select--">--Select--</option>
                            {this.state.allSaal.map((saal)=>(
                                <option value={saal.id}> {saal.id}</option>
                            ))
                            } 
                        
                       
                        </select>
                      </label>
                      </form>
                      </div> </div> 
                      <div className= "BalkenFlex">
                        <div className ="BalkenlinkSeit"><div className="DESIGNTextField">
                        Datum: 
                        </div> </div> 
                        <div className ="Balkenrechtseit">
                        <div className= "datum">
                      {/* dropdown für das Datum */}
                      <form className="date">
                     <label>
                        <select className ="selectVorhinzu" value={this.state.day} onChange={this.handleDay}>
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
                        <select className ="selectVorhinzu" value={this.state.month} onChange={this.handleMonth}>
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
                        <select className ="selectVorhinzu" value={this.state.year} onChange={this.handleYear}>
                         {this.state.yearCollection.map((year)=> (
                            <option value={year}>{year}</option> 
                          ))
                          }
                        </select>
                      </label>
                      </form> 
                </div> 


                      </div>
                        </div> 
                        <div className= "BalkenFlex">
                        <div className ="BalkenlinkSeit"><div className="DESIGNTextField">
                        Uhrzeit: 
                        </div> </div> 
                        <div className ="Balkenrechtseit">
                        <div className = "uhrzeit">
                  {/* dropdown für die Stunde */}
                  <form className="stunde">
                     <label>
                        <select className ="selectVorhinzu" value={this.state.stunde} onChange={this.handleStunde}>
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
                        <select className ="selectVorhinzu" value={this.state.minute} onChange={this.handleMinute}>
                         {this.state.minuteCollection.map((minute)=> (
                            <option value={minute}>{minute}</option> 
                          ))
                          }
                        </select>Uhr
                      </label>
                      </form>
                    </div>



                      </div>
                        </div> 
                        <div className= "BalkenFlex">
                        <div className ="BalkenlinkSeit"><div className="DESIGNTextField">
                        Preis: 
                        </div> </div> 
                        <div className ="Balkenrechtseit">
                        <div>{/* div für den Preis */}
                    
                    <input className ="inputVorHinZu" type="number"
                    onInput={this.handlePreis} value={this.state.preis} />

                    
                    
                    </div>


                      </div>
                        </div> 
                       
                    

                        </div></div>
                <div className ="hinzufügen">
                <div className ="ButtonAnordnungVorhin">
                   <button className="DESIGNButton" onClick={this.handleButton}>
                            Hinzufügen
                  </button> 
                  </div></div>

                </div>
       </div>:null}     
      
     
        






    </div></div></div>
     
    );
  }

} //class
export default VorHinZu;

