import React, { Component } from "react";
import "./VorHinZu.css";
<<<<<<< HEAD
import getFilme from "../../API_Pulls/GetAllFilmAPI.js"
import VorstellungHinzufügen from "../../PostRequest/VorstellungHinzufügen"
import getAllSaal from "../../API_Pulls/GetAllSaal.js" 
=======
import getFilme from "../../API_Pulls/GetAllFilmAPI.js";
import VorstellungHinzufügen from "../../PostRequest/VorstellungHinzufügen";
>>>>>>> 00f40ccfa5909c38a5819ec26bda7fcb9f93f08f
/* import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap'; */

let FilmListe = [];

class VorHinZu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filme: [],
      choosenMovie: [],
      value: "Es wurde noch kein Film ausgewählt",
      visible: false,
      visible2: false,
<<<<<<< HEAD
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
=======
      blockVisible: false,
      dayAndMonth: [],
      yearCollection: [],
      saal: 98,
      day: 0,
      month: 0,
      year: 2021,
      stunde: 0,
      minute: 0,
      startZeit: 0,
      minuteCollection: [],
      preis: 0,
      anzahlWiederholungen: 0,
      wiederholungsRythmus: 0,
      filmId: 0,
      aktiv: 0,
      grundpreis: 0,
    };
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
    this.handleAnzahlWiederholungen = this.handleAnzahlWiederholungen.bind(
      this
    );
    this.handleWiederholungsRythmus = this.handleWiederholungsRythmus.bind(
      this
    );
  } //constructor
  state = {};

  componentDidMount() {
    let data2 = [];
    let data3 = [];
    getFilme.getAllFilmAPI().then((response) => {
      var data = response.data;
      this.setState({ filme: response.data });
      console.log(response);
      this.setState({ Filme: data });
>>>>>>> 00f40ccfa5909c38a5819ec26bda7fcb9f93f08f
      //console.log(this.state.filme.data)
      this.setState({ visible: true });
    });

    for (let i = 0; i <= 1; i++) {
      let data1 = [];
      for (let i = 1; i <= 31; i++) {
        data1.push(i);
      }
      this.setState({ dayAndMonth: data1 });
    }

    do {
      for (let i = 2021; i <= 2100; i++) {
        data2.push(i);
      }
      this.setState({ yearCollection: data2 });
    } while (false);

    do {
      for (let i = 0; i <= 59; i++) {
        data3.push(i);
      }
<<<<<<< HEAD
      this.setState({minuteCollection:data3})
    }while(false)


=======
      this.setState({ minuteCollection: data3 });
    } while (false);
>>>>>>> 00f40ccfa5909c38a5819ec26bda7fcb9f93f08f
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
    this.setState({ value: event.target.value });

<<<<<<< HEAD
  
  }

  handleSaal(event){
    this.setState({choosenSaal: event.target.value})
    console.log(event.target.value)
    console.log(this.state.choosenSaal)
=======
    /*    return(
        <div className = "bild">
            {console.log(this.state.choosenMovie)}
        </div>
    ) */
  }

  handleSaal(event) {
    this.setState({ saal: event.target.value });
>>>>>>> 00f40ccfa5909c38a5819ec26bda7fcb9f93f08f
  }
  handleDay(event) {
    this.setState({ day: event.target.value });
  }
  handleMonth(event) {
    this.setState({ month: event.target.value });
  }
  handleYear(event) {
    this.setState({ year: event.target.value });
  }
  handleStunde(event) {
    this.setState({ stunde: event.target.value });
  }
  handleMinute(event) {
    this.setState({ minute: event.target.value });
  }
  handlePreis(event) {
    this.setState({ preis: event.target.value });
  }
  handleAnzahlWiederholungen(event) {
    this.setState({ anzahlWiederholungen: event.target.value });
  }
  handleWiederholungsRythmus(event) {
    this.setState({ wiederholungsRythmus: event.target.value });
  }

<<<<<<< HEAD
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
=======
  handleButton(event) {
    var startZeit =
      "0" +
      this.state.month +
      "0" +
      this.state.day +
      this.state.year +
      this.state.stunde +
      this.state.minute;
    var filmId = this.state.choosenMovie.id;
    var grundpreis = this.state.preis;
    var aktiv = 1;
    var saal = this.state.saal;
    console.log(grundpreis, filmId, startZeit);
    //this.setState({minute: event.target.value})
    alert("film wurde hinzugefügt für " + this.state.preis);
    event.preventDefault();
    this.setState(
      {
        startZeit:
          "0" +
          this.state.month +
          "0" +
          this.state.day +
          this.state.year +
          this.state.stunde +
          this.state.minute,
        /* this.setState({startZeit: this.state.year+"-"+"0"+this.state.month+"0"+this.state.day+"T"+this.state.stunde+":"+this.state.minute+":00.000", */
        filmId: this.state.choosenMovie.id,
        grundpreis: this.state.preis,
        aktiv: 1,
      },
      () =>
        VorstellungHinzufügen.vorhinzu(
          startZeit,
          filmId,
          saal,
          grundpreis
        ).then((res) => console.log(res))
    );
>>>>>>> 00f40ccfa5909c38a5819ec26bda7fcb9f93f08f
  }

  handleSubmit(event) {
    this.setState({ visible2: true });
    for (let i = 0; i < this.state.filme.length; i++) {
      if (this.state.value == this.state.filme[i].name) {
        //console.log(this.state.value)
        this.setState({ choosenMovie: this.state.filme[i] });
        console.log(this.state.choosenMovie.bild);
      } //if
    } //for
    this.setState({ blockVisible: true });

    event.preventDefault();
  }

  render() {
    return (
      <div className="gesamterBlock">
        <div>
          {this.state.visible ? (
            <form onSubmit={this.handleSubmit}>
              <label>
                Filmwahl:
                <select value={this.state.value} onChange={this.handleChange}>
                  {this.state.Filme.map((filme) => (
                    <option value={filme.name}>{filme.name}</option>
                  ))}
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
          ) : null}
          {this.state.visible2 ? (
            <div>
              {/* hier könnte ihr Bild auftauchen von {this.state.value} */}
              <img
                key={this.state.choosenMovie.id}
                alt=" "
                className="image"
                src={this.state.choosenMovie.bild}
              />
            </div>
<<<<<<< HEAD
                <div className = 'InformationsEingabe'>
                    <div className="abfrage">
                        
                          Film: <br/>
                          Saal: <br/>
                          Datum: <br/>
                          Uhrzeit: <br/>
                          Preis: <br/>
                        
                    </div>
                    <div className= 'antwort'>
                     
                      {/* Film */}
                      <div className ="nameDesFilmes">
                     {this.state.value} 
                      </div>
                     {/* dropdown für den Saal */}
                     <form>
                     <label>
                        <select value={this.state.choosenSaal} onChange={this.handleSaal}>
                        <option value="--Select--">--Select--</option>
                        {this.state.allSaal.map((saal)=>(
                            <option value={saal.id}> {saal.id}</option>
                        ))
                        } 
                        
                       
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

=======
          ) : null}
        </div>
>>>>>>> 00f40ccfa5909c38a5819ec26bda7fcb9f93f08f

        {this.state.blockVisible ? (
          <div className="VorstellungsBlock">
            <div className="Überschrift">
              <h5>Vorstellung Hinzufügen für: {this.state.value}</h5>
            </div>
            <div className="InformationsEingabe">
              <div className="abfrage">
                Film: <br />
                Saal: <br />
                Datum: <br />
                Uhrzeit: <br />
                Preis: <br />
              </div>
              <div className="antwort">
                {/* Film */}
                <div className="nameDesFilmes">{this.state.value}</div>
                {/* dropdown für den Saal */}
                <form>
                  <label>
                    <select value={this.state.saal} onChange={this.handleSaal}>
                      <option value="0">98</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </label>
                </form>
                <div className="datum">
                  {/* dropdown für das Datum */}
                  <form className="date">
                    <label>
                      <select value={this.state.day} onChange={this.handleDay}>
                        {this.state.dayAndMonth.map((day) => (
                          <option value={day}>{day}</option>
                        ))}
                      </select>
                    </label>
                  </form>

                  {/* dropdown für das Monat */}
                  <form className="month">
                    <label>
                      <select
                        value={this.state.month}
                        onChange={this.handleMonth}
                      >
                        {this.state.dayAndMonth.slice(0, 12).map((month) => (
                          <option value={month}>{month}</option>
                        ))}
                      </select>
                    </label>
                  </form>

                  {/* dropdown für das Jahr */}
                  <form className="year">
                    <label>
                      <select
                        value={this.state.year}
                        onChange={this.handleYear}
                      >
                        {this.state.yearCollection.map((year) => (
                          <option value={year}>{year}</option>
                        ))}
                      </select>
                    </label>
                  </form>
                </div>
                <div className="uhrzeit">
                  {/* dropdown für die Stunde */}
                  <form className="stunde">
                    <label>
                      <select
                        value={this.state.stunde}
                        onChange={this.handleStunde}
                      >
                        {this.state.minuteCollection
                          .slice(0, 24)
                          .map((stunde) => (
                            <option value={stunde}>{stunde}</option>
                          ))}
                      </select>
                    </label>
                  </form>

                  {/* dropdown für die minute */}
                  <form className="minute">
                    <label>
                      :
                      <select
                        value={this.state.minute}
                        onChange={this.handleMinute}
                      >
                        {this.state.minuteCollection.map((minute) => (
                          <option value={minute}>{minute}</option>
                        ))}
                      </select>
                      Uhr
                    </label>
                  </form>
                </div>
                <div>
                  {/* div für den Preis */}

                  <input
                    type="number"
                    onInput={this.handlePreis}
                    value={this.state.preis}
                  />
                </div>{" "}
                {/* div für den Preis */}
              </div>{" "}
              {/* div für den Antwort Block */}
            </div>
            {/* div für den VorstellungsBlock */}
            <div className="wiederholung">
              {/* div für Wiederholung */}

              <form className="wiederholungsRythmus">
                <label>
                  Vorstellung im
                  <select
                    value={this.state.wiederholungsRythmus}
                    onChange={this.handleWiederholungsRythmus}
                  >
                    {this.state.minuteCollection
                      .slice(0, 8)
                      .map((wiederholungsRythmus) => (
                        <option value={wiederholungsRythmus}>
                          {wiederholungsRythmus}
                        </option>
                      ))}
                  </select>
                  Tage Rythmus Wiederholen
                </label>
              </form>

              <form className="anzahlWiederholungen">
                <label>
                  Anzahl Wiederholungen:
                  <select
                    value={this.state.anzahlWiederholungen}
                    onChange={this.handleAnzahlWiederholungen}
                  >
                    {this.state.minuteCollection
                      .slice(0, 15)
                      .map((anzahlWiederholungen) => (
                        <option value={anzahlWiederholungen}>
                          {anzahlWiederholungen}
                        </option>
                      ))}
                  </select>
                </label>
              </form>
            </div>{" "}
            {/* div für Wiederholung */}
            <div className="hinzufügen">
              <button className="buttonHinzufügen" onClick={this.handleButton}>
                Hinzufügen
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
} //class
export default VorHinZu;
