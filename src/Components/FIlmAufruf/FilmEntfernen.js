import { Component } from "react";

import "./FilmAufruf.css";
import getAllFilmAPI from "../../API_Pulls/GetAllFilmAPI"
import getAllVorstellungenAPI from "../../API_Pulls/GetAllVorstellungenAPI"
import VorstellungInaktivSetzenAPI from "../../PostRequest/VorstellungInaktivSetzen"
import FilmInaktivSetzenAPI from "../../PostRequest/FilmInaktivSetzen"
import { Redirect , Link} from 'react-router-dom';

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
      aktiveVorstellungenSchoeneAnzeige:[],
      IdDerSchönenVorstellungsanzeige:[],
      IdDerInaktivenSchönenVorstellungsanzeige:[],
      inaktiveVorstellungenSchoeneAnzeige:[],
      vorstellungenImDropdown:[],
      filmImDropdown:[],
      inaktiveFilme:[],
      Fehler403: false,
     


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
   /*  console.log(id) */
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
    this.handleVorstellungSollEntferntWerden() 
    this.setState({vorstellungenImDropdown:this.state.inaktiveVorstellungenSchoeneAnzeige})
  }  
  if (event.target.id == "film"){
    this.setState({filmReaktivieren:1})
    this.handleFilmSollEntferntWerden()
    this.setState({filmImDropdown:this.state.inaktiveFilme})
  }
}

  handleFilmSollEntferntWerden(event){
     try{ 
      if (event.target.id =="deaktivieren"){
      this.setState({filmReaktivieren:0,
        filmImDropdown:this.state.aktiveFilme})/////////////////////////////////////////////
    } 
   
      event.preventDefault();
    }catch(e){}
      this.setState({filmEntfernen:true})
      this.setState({vorstellungEntfernen:false})
  }
      
  handleVorstellungSollEntferntWerden(event) {
    try{
       if (event.target.id =="deaktivieren"){
      this.setState({vorstellungReaktivieren:0,
      vorstellungenImDropdown:this.state.aktiveVorstellungenSchoeneAnzeige})
      
    } 
    event.preventDefault();
  }catch(e){}
      this.setState({vorstellungEntfernen:true})
      this.setState({filmEntfernen:false})
  

    }
  
  handleFilmEntfernen(event){
    event.preventDefault();
    let filmId= this.state.choosenMovie.id
    let filmReaktivieren = this.state.filmReaktivieren
    /* console.log(filmId)
    console.log(this.state.choosenMovie) */
    /*  alert("Film wurde entfernt")  */
     FilmInaktivSetzenAPI.vorstellungInaktivieren(filmId, filmReaktivieren)
     if (filmReaktivieren){
       this.erfolgreichreaktiviert("film")
     }else{
       this.erfolgreichEntfernt("film")
     }
     

     
  }  
  handleVorstellungEntfernen(event){
    let vorstellungId=this.state.value2;
    vorstellungId= vorstellungId.split("(",2)
    vorstellungId[1]=vorstellungId[1].replace(")", "")
    let vorstellungReaktivieren = this.state.vorstellungReaktivieren 
      event.preventDefault();


    VorstellungInaktivSetzenAPI.vorstellungInaktivieren(vorstellungId[1], vorstellungReaktivieren)/* .then(res=>console.log(res))*/
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

    for (let k=0; k<this.state.inaktiveFilme.length; k++){
      if (event.target.value == this.state.inaktiveFilme[k].name){
        //console.log(this.state.value)
        this.setState({choosenMovie:this.state.inaktiveFilme[k]})
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
      window.location.href="/filmentfernen"
  }

  componentDidMount(){

      getAllFilmAPI.getAllFilmAPI().then((response)=>{
        let aktiveFilme =response.data[0];
        let inaktiveFilme =response.data[1];
    /*      console.log(aktiveFilme);
         console.log(inaktiveFilme); */
        this.setState({aktiveFilme:aktiveFilme,
        inaktiveFilme:inaktiveFilme})
      }).catch(err => {console.log(err)
        var Fehler = err.toString()
        var Fehlerausgabe = Fehler.substring(39,42)
        if(Fehlerausgabe === "403"){
          console.log("Bitte neu anmelden")
          this.setState({Fehler403: true})
          sessionStorage.removeItem('token')
        }
        this.setState({
          filmEntfernen:false,
          vorstellungEntfernen: false, 
          filmBildVisible: false,
          vorstellungBildVisible:false,
          nochNichtEntfernt: false,
          entfernt: false,
        })
       console.log(Fehlerausgabe) 
        
      })


      getAllVorstellungenAPI.getAllVorstellungenAPI().then((response)=>{
        let data = response.data[1]
        let vorstellungsFilmnameZeitDatum="";
        let vorstellungsZeitString="";
        let vorstungsObjekt=[];
        let vorstellungZeitObjektDay =[];
        let vorstellungZeitObjektUrhzeit =[];
        let vorstellungZeitObjektHaelfte =[];
        let vorstellungZeitObjektDate=[];
        let IdDerSchönenVorstellungsanzeige=[];
        let IdDerSchönenVorstellungsanzeigeString="";
        
       /*  console.log(data) */
        this.setState({aktiveVorstellungen: data})

          for (let i=0; i<data.length ; i++){
          vorstellungsFilmnameZeitDatum = data[i].film.name
          vorstellungsFilmnameZeitDatum +=  " in ";
          vorstellungsFilmnameZeitDatum += data[i].saal.name
          vorstellungsFilmnameZeitDatum +=  " am ";
          vorstellungsZeitString = data[i].startZeit // Die Startzeit in Form von "2021-10-06T16:15:00.000+00:00"


          vorstellungZeitObjektHaelfte = vorstellungsZeitString.split("T", 2)
          vorstellungZeitObjektDate = vorstellungZeitObjektHaelfte[0].split("-", 3)
          

          vorstellungZeitObjektUrhzeit = vorstellungZeitObjektHaelfte[1].split(":", 3) // meine Uhrzeit ist auf der 0 und 1 gespeichert 

         /*  vorstellungZeitObjektDay= vorstellungZeitObjektYearAndMonth[3].split("T") */

          vorstellungsFilmnameZeitDatum +=vorstellungZeitObjektDate[2] + "."
          vorstellungsFilmnameZeitDatum +=vorstellungZeitObjektDate[1] + "."
          vorstellungsFilmnameZeitDatum +=vorstellungZeitObjektDate[0]  
          vorstellungsFilmnameZeitDatum += " um "
          vorstellungsFilmnameZeitDatum += vorstellungZeitObjektUrhzeit[0] +":"
          vorstellungsFilmnameZeitDatum += vorstellungZeitObjektUrhzeit[1] +" ("
          vorstellungsFilmnameZeitDatum += data[i].id +")"
          
          IdDerSchönenVorstellungsanzeigeString= data[i].id;

          IdDerSchönenVorstellungsanzeige.push(IdDerSchönenVorstellungsanzeigeString)
          vorstungsObjekt.push(vorstellungsFilmnameZeitDatum)
        }

        this.setState({inaktiveVorstellungenSchoeneAnzeige: vorstungsObjekt,
          IdDerInaktivenSchönenVorstellungsanzeige:IdDerSchönenVorstellungsanzeige})

        //=============================================================================
        //
        //             Jetzt das selbe noch mal für die aktiven vorstellungen
        //
        //===========================================================================


         data = response.data[0]
         vorstellungsFilmnameZeitDatum="";
         vorstellungsZeitString="";
         vorstungsObjekt=[];
         vorstellungZeitObjektDay =[];
         vorstellungZeitObjektUrhzeit =[];
         vorstellungZeitObjektHaelfte =[];
         vorstellungZeitObjektDate=[];
         IdDerSchönenVorstellungsanzeige=[];
         IdDerSchönenVorstellungsanzeigeString="";
        
        /* console.log(data) */
        this.setState({aktiveVorstellungen: data})

          for (let i=0; i<data.length ; i++){
          vorstellungsFilmnameZeitDatum = data[i].film.name
          vorstellungsFilmnameZeitDatum +=  " in ";
          vorstellungsFilmnameZeitDatum += data[i].saal.name
          vorstellungsFilmnameZeitDatum +=  " am ";
          vorstellungsZeitString = data[i].startZeit // Die Startzeit in Form von "2021-10-06T16:15:00.000+00:00"


          vorstellungZeitObjektHaelfte = vorstellungsZeitString.split("T", 2)
          vorstellungZeitObjektDate = vorstellungZeitObjektHaelfte[0].split("-", 3)
          

          vorstellungZeitObjektUrhzeit = vorstellungZeitObjektHaelfte[1].split(":", 3) // meine Uhrzeit ist auf der 0 und 1 gespeichert 

         /*  vorstellungZeitObjektDay= vorstellungZeitObjektYearAndMonth[3].split("T") */

          vorstellungsFilmnameZeitDatum +=vorstellungZeitObjektDate[2] + "."
          vorstellungsFilmnameZeitDatum +=vorstellungZeitObjektDate[1] + "."
          vorstellungsFilmnameZeitDatum +=vorstellungZeitObjektDate[0]  
          vorstellungsFilmnameZeitDatum += " um "
          vorstellungsFilmnameZeitDatum += vorstellungZeitObjektUrhzeit[0] +":"
          vorstellungsFilmnameZeitDatum += vorstellungZeitObjektUrhzeit[1] +" ("
          vorstellungsFilmnameZeitDatum += data[i].id +")"
          
          IdDerSchönenVorstellungsanzeigeString= data[i].id;

          IdDerSchönenVorstellungsanzeige.push(IdDerSchönenVorstellungsanzeigeString)
          vorstungsObjekt.push(vorstellungsFilmnameZeitDatum)
        }

        this.setState({aktiveVorstellungenSchoeneAnzeige: vorstungsObjekt,
          IdDerSchönenVorstellungsanzeige:IdDerSchönenVorstellungsanzeige})



        }//=> arrow function      
      )//.then
    
    
    
    }//component did mount
  


  anzeigeTextWasEntfertWerdenSoll=()=>{
    if (this.state.vorstellungEntfernen==true){
      if(this.state.vorstellungReaktivieren==1){
          return "Wähle die Vorstellung aus, die wieder ins Programm genommen werden soll"
      }    
      if(this.state.vorstellungReaktivieren==0){
          return "Wähle die Vorstellung aus, die aus dem Programm genommen werden soll"
      }
    }
    if (this.state.filmEntfernen==true){
      if(this.state.filmReaktivieren==1){
          return "Wähle den Film aus, der wieder ins Programm genommen werden soll"
      }    
      if(this.state.filmReaktivieren==0){
          return "Wähle den Film aus, der aus dem Programm genommen werden soll"
      }
    } 
      
}
 

  render() {
    return (
     <div className="">
       {this.state.nochNichtEntfernt?<div>
       
          <div className ="doppelButton">
        
        
        <button id ="deaktivieren" className ="DESIGNButton" onClick={this.handleFilmSollEntferntWerden}>Film deaktivieren</button>
        <button id ="deaktivieren" className ="DESIGNButton" onClick={this.handleVorstellungSollEntferntWerden}>Vorstellung deaktivieren</button> 
        

        </div>
        <div className ="doppelButton">
        <button id="film" className ="DESIGNButton" onClick={this.handleReaktivierung}>Film reaktivieren</button>
        <button id ="vorstellung" className ="DESIGNButton" onClick={this.handleReaktivierung}>Vorstellung reaktivieren</button>
              
       
        
        </div>
      

      </div>:null}

      

{/* Für den Fall das FilmEntfernen ausgewählt wurde: */}
      {this.state.filmEntfernen ?
      <div className="filmEntfernen">
      
      <div className="TextAlignMitte">
        <div className ="DESIGNHeadline3">
        {this.anzeigeTextWasEntfertWerdenSoll()}{/* Wähle den Film aus, der aus dem Programm genommen werden soll */}
        </div></div>
        <div className="DropDownMitte"> {/* Dropdown für Filmauswahl */}
          <form onSubmit = {this.handleFilmEntfernen}>
            <label>
            <select className ="SelectGröße" value={this.state.value} onChange={this.handleChoosenMovie}>
            <option className ="DESIGNTextField" >--Select--</option>
            {this.state.filmImDropdown.map((filme)=>
              <option value={filme.name}>{filme.name}</option>
            )}
            </select>
          </label>
            <div className="AuswahlBestätigungSubmit"> {/* Button um die Auswahl zu bestätigen */}

              <input className ="DESIGNButton" type="submit" value="Auswahl Bestätigen" />
              
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
        	<div className="TextAlignMitte">
        <div className ="DESIGNHeadline3">
    
         {this.anzeigeTextWasEntfertWerdenSoll()} {/* Wähle die Vorstellung aus, die aus dem Programm genommen werden soll */}
        </div></div>
        <div className="DropDownMitte"> {/* Dropdown für Vorstellungsauswahl */}
          <form onSubmit = {this.handleVorstellungEntfernen}>
            <label>
            <select className ="SelectGröße" value={this.state.value2} onChange={this.handleChoosenVorstellung}>
            <option className ="DESIGNTextField" /* value="--Select--" */>--Select--</option>
            {this.state.vorstellungenImDropdown.map((vorstellungen)=>  
                  <option  value={vorstellungen}>{vorstellungen}</option>
            
            )}   {/* )}   */}
          
            </select>
          </label>
          <div className="AuswahlBestätigungSubmit"> {/* Button um die Auswahl zu bestätigen */}

            <input className ="DESIGNButton" type="submit" value="Auswahl Bestätigen" />

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
        {
              this.state.Fehler403? <div className ="SonderMeldung"><div className ="DESIGNHeadline3"> Bitte Logen Sie sich erneut an&emsp; 
                            
              </div><br/>
              <Link className="DESIGNButton" to={"/login"}>
                Zum Login
              </Link>
              </div>: null
            }
        
      
      
      

    </div>
  )}
}
export default FilmSuche;


{/* <button className="nextButton" onClick={this.setRedirect} disabled={!this.state.nextButton}>Weiter zur Sitzplatzreservierung</button>

<button key = {vorstellung.vorstellungId} id={vorstellung.vorstellungId} onClick={this.showNext}>{vorstellung.uhrzeit}</button>
 */}