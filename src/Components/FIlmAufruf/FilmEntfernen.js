import { Component } from "react";

import "./FilmAufruf.css";
import getAllFilmAPI from "../../API_Pulls/GetAllFilmAPI"
import getAllVorstellungenAPI from "../../API_Pulls/GetAllVorstellungenAPI"
import VorstellungInaktivSetzenAPI from "../../PostRequest/VorstellungInaktivSetzen"
import FilmInaktivSetzenAPI from "../../PostRequest/FilmInaktivSetzen"
import { Redirect } from 'react-router-dom';

var text;
var id;

class FilmSuche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmEntfernen:false,
      vorstellungEntfernen: false, 
      filmBildVisible: false,
      vorstellungBildVisible:false,
      value:"Es wurde noch kein Film hinzugefügt",
      value2:0,
      aktiveFilme:[],
      aktiveVorstellungen:[],
      choosenMovie:[],
      choosenVorstellung:[],
      vorstellungId:0,
      filmReaktivieren: 0,
      vorstellungReaktivieren:0,
      nochNichtEntfernt: true,
      entfernt: false,
      wasEntferntWurde:"",
      deOderReAktivierung:"deaktiviert",
      redirect:false,
      
     


    };//this.state
   /*  this.handleWasWirdEntfernt = this.handleWasWirdEntfernt.bind(this); */
    /* this.handleSubmit = this.handleSubmit.bind(this); */
    this.handleChoosenMovie = this.handleChoosenMovie.bind(this);
    this.handleChoosenVorstellung = this.handleChoosenVorstellung.bind(this);
    this.handleVorstellungEntfernen = this.handleVorstellungEntfernen.bind(this);
    this.handleFilmEntfernen = this.handleFilmEntfernen.bind(this);
    this.handleFilmSollEntferntWerden = this.handleFilmSollEntferntWerden.bind(this);
    this.handleVorstellungSollEntferntWerden = this.handleVorstellungSollEntferntWerden.bind(this);
    this.handleReaktivierung = this.handleReaktivierung.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }//constructor



  setRedirect = (event) => {
    let id = event.target.id 
    console.log(id)
    if (id="1"){
          this.setState({redirect: true});
    }
       
  }
  renderRedirect = () => {
    if (this.state.redirect){
      return <Redirect to={`/admincontrol`} />
    }
   // 
  }

  erfolgreichEntfernt = (a)=>{
    this.setState({nochNichtEntfernt: false ,
      filmEntfernen:false,
      vorstellungEntfernen: false, 
      filmBildVisible: false,
      VorstellungBildVisible:false,
      entfernt:true})
      if (a=="vorstellung"){
        let data = this.state.choosenVorstellung.id
        this.setState({wasEntferntWurde:data})
      }
      if(a=="film"){
        let data =this.state.choosenMovie.name
        this.setState({wasEntferntWurde:data})
      }
  }

  erfolgreichreaktiviert=(a)=>{
    this.setState({nochNichtEntfernt: false ,
      filmEntfernen:false,
      vorstellungEntfernen: false, 
      filmBildVisible: false,
      vorstellungBildVisible:false,
      entfernt:true,
      deOderReAktivierung: "reaktiviert"})
      
      if (a=="vorstellung"){
        let data = this.state.choosenVorstellung.id
        this.setState({wasEntferntWurde:data})
      }
      if(a=="film"){
        let data =this.state.choosenMovie.name
        this.setState({wasEntferntWurde:data})
      }
  }


handleReaktivierung(event){
  if (event.target.id == "vorstellung"){
    this.setState({vorstellungReaktivieren:1})
  }  
  if (event.target.id == "film"){
    this.setState({filmReaktivieren:1})
  }
}

  handleFilmSollEntferntWerden(event){
    event.preventDefault();
      this.setState({filmEntfernen:true})
      this.setState({vorstellungEntfernen:false})
  }
      
  handleVorstellungSollEntferntWerden(event) {
    event.preventDefault();
      this.setState({vorstellungEntfernen:true})
      this.setState({filmEntfernen:false})

    }
  
  handleFilmEntfernen(event){
    event.preventDefault();
    let filmId= this.state.choosenMovie.id
    let filmReaktivieren = this.state.filmReaktivieren
    /* console.log(filmId)
    console.log(this.state.choosenMovie) */
     alert("Film wurde entfernt") 
     FilmInaktivSetzenAPI.vorstellungInaktivieren(filmId, filmReaktivieren)
     if (filmReaktivieren){
       this.erfolgreichreaktiviert("film")
     }else{
       this.erfolgreichEntfernt("film")
     }
     

     
  }  
  handleVorstellungEntfernen(event){
    let vorstellungId=this.state.value2;
    let vorstellungReaktivieren = this.state.vorstellungReaktivieren
    event.preventDefault();
/*     console.log(this.state.choosenVorstellung)
    console.log(this.state.value2)
    console.log(this.state.vorstellungId) */
   /*  console.log(vorstellungId)
    console.log(vorstellungReaktivieren) */
    VorstellungInaktivSetzenAPI.vorstellungInaktivieren(vorstellungId, vorstellungReaktivieren)/* .then(res=>console.log(res))*/
    if (vorstellungReaktivieren){
      this.erfolgreichreaktiviert("vorstellung")
    }else{
      this.erfolgreichEntfernt("vorstellung")
    }
    
  }


  handleChoosenMovie(event){
    this.setState({value: event.target.value})
    for(let i=0; i<this.state.aktiveFilme.length; i++){
      if (event.target.value == this.state.aktiveFilme[i].name){
        //console.log(this.state.value)
        this.setState({choosenMovie:this.state.aktiveFilme[i]})
        /* console.log(this.state.choosenMovie) */
      }//if
    }//for
  
    this.setState({filmBildVisible:true})
  }  
  handleChoosenVorstellung(event){
    event.preventDefault();
    this.setState({value2: event.target.value})
    for(let i=0;i<this.state.aktiveVorstellungen.length;i++){
      if(event.target.value == this.state.aktiveVorstellungen[i].id){
        this.setState({choosenVorstellung:this.state.aktiveVorstellungen[i]})
      }
    }
    
    this.setState({VorstellungBildVisible:true})
  }

  restartProcess=()=>{
    this.setState({nochNichtEntfernt: true ,
      filmEntfernen:false,
      vorstellungEntfernen: false, 
      filmBildVisible: false,
      vorstellungBildVisible:false,
      entfernt:false,
      deOderReAktivierung: "deaktiviert"})
  }

  componentDidMount(){
      getAllFilmAPI.getAllFilmAPI().then((response)=>{
        let data =response.data;
         console.log(data);
        this.setState({aktiveFilme:data})
        /* console.log(this.state.aktiveFilme) */
      })

      getAllVorstellungenAPI.getAllVorstellungenAPI().then((response)=>{
        let data = response.data
        console.log(data)
        this.setState({aktiveVorstellungen: data})

      })
  }

  render() {
    return (
     <div className="gesamterBlock">

        {this.state.nochNichtEntfernt?
       <div className ="4Buttons">

        <form onSubmit = {this.handleFilmSollEntferntWerden}>
        <div> {/* Button um die Auswahl zu bestätigen */}
        <input type="submit" value="Film deaktivieren" />
        </div> 
        </form> 

        <form onSubmit = {this.handleFilmSollEntferntWerden}>
        <div> {/* Button um die Auswahl zu bestätigen */}
        <input id ="film" type="submit" value="Film reaktivieren" onClick={this.handleReaktivierung}/>
        </div> 
        </form>

        <form onSubmit = {this.handleVorstellungSollEntferntWerden}>
        <div> {/* Button um die Auswahl zu bestätigen */}
        <input type="submit" value="Vorstellung deaktivieren" />
        </div> 
        </form>        
        
        <form onSubmit = {this.handleVorstellungSollEntferntWerden}>
        <div> {/* Button um die Auswahl zu bestätigen */}
        <input id ="vorstellung" type="submit" value="Vorstellung reaktivieren" onClick={this.handleReaktivierung} />
        </div> 
        </form>

      </div>:null}

      

{/* Für den Fall das FilmEntfernen ausgewählt wurde: */}
      {this.state.filmEntfernen ?
      <div className="filmEntfernen">
      

        <h5>
          Wähle den Film aus, der aus dem Programm genommen werden soll
        </h5>
        <div> {/* Dropdown für Filmauswahl */}
          <form onSubmit = {this.handleFilmEntfernen}>
            <label>
            <select value={this.state.value} onChange={this.handleChoosenMovie}>
            <option value="--Select--">--Select--</option>
            {this.state.aktiveFilme.map((filme)=>
              <option value={filme.name}>{filme.name}</option>
            )}
            </select>
          </label>
            <div> {/* Button um die Auswahl zu bestätigen */}

              <input type="submit" value="Auswahl Bestätigen" />
              
            </div> 
          </form>
          
       </div>

       {this.state.vorstellungBildVisible ?
       <div> {/* Bild des Films */}
         <img key={this.state.choosenMovie.id} alt=" " className="image" src={this.state.choosenMovie.bild}/>
      </div> /* Bild des Films */
      :null}
        
      </div>:null}{/* FilmEntfernen */}
       




{/* Für den Fall das VorstellungEntfernen ausgewählt wurde: */}
      {this.state.vorstellungEntfernen ?
      <div>
        {/* {console.log("eine Vorstellung wird Entfernt")} */}

        <h5>
          Wähle die Vorstellung aus, die aus dem Programm genommen werden soll
        </h5>
        <div> {/* Dropdown für Vorstellungsauswahl */}
          <form onSubmit = {this.handleVorstellungEntfernen}>
            <label>
            <select value={this.state.value2} onChange={this.handleChoosenVorstellung}>
            <option value="--Select--">--Select--</option>
            {this.state.aktiveVorstellungen.map((vorstellungen)=>
              <option value={vorstellungen.id}>{vorstellungen.id}</option>
            )}
            </select>
          </label>
          <div> {/* Button um die Auswahl zu bestätigen */}

            <input type="submit" value="Auswahl Bestätigen" />

          </div> 
          </form>
          
       </div>

      {this.state.vorstellungBildVisible ?
      <div> {/* Bild der Vorstellung */}
         <img key={this.state.choosenMovie.id} alt=" " className="image" src={this.state.choosenMovie.bild}/>
      </div> /* Bild der Vorstellung */
      :null }
        
        </div>:null}{/* VorstellungEntfernen */}



        {this.state.entfernt?
        <div>
          <h3>{this.state.wasEntferntWurde} wurde erfolgreich {this.state.deOderReAktivierung}</h3>
          <button className="DESIGNButton" onClick={this.restartProcess}>Weitere Filme/Vorstellungen re/deaktivieren</button>
          
          {this.renderRedirect()}
          <button id =" 1" className="DESIGNButton" onClick={this.setRedirect}>Zur Admin Control Seite</button>


        </div>:null}
        
      
      
      

    </div>
  )}
}
export default FilmSuche;


{/* <button className="nextButton" onClick={this.setRedirect} disabled={!this.state.nextButton}>Weiter zur Sitzplatzreservierung</button>

<button key = {vorstellung.vorstellungId} id={vorstellung.vorstellungId} onClick={this.showNext}>{vorstellung.uhrzeit}</button>
 */}