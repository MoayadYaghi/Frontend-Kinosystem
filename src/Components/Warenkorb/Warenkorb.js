import React, { Component } from "react";
import "./Warenkorb.css";
import getWarenkorbInfos from "../../API_Pulls/getWarenkorbInfos"  
import { Link, Redirect } from "react-router-dom";

class Warenkorb extends Component {
  constructor(props) {
    super(props);

    this.state = {
        ticket: [],
        value: "",
        vorname: "",
        nachname: "",
        mail:"",
        angemeldet: false,
        ErrorMessage: false,
        tokenLeer: false,
        Karteninhaber: "",
        Kartennummer: "",
        Kreditkartentyp: "", 
        Gültig:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.WarenkorbCheck = this.WarenkorbCheck.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ZahlungsDetails: event.target.value})




    }


  handleChange(event) {
    const target = event.target;
    const Value = target.value;

    const name = target.name;

    this.setState({ [name]: Value });
    /* this.setState({[name]: Pass}); */
  }

  componentDidMount(){
    var  tokenInfo = sessionStorage.getItem('token')
    var ticket
    if(tokenInfo != null){
      
    getWarenkorbInfos.getTickets().then( (response) =>{
    console.log(response)
    ticket = response
    }
    )

    getWarenkorbInfos.getSnacks().then( (response) => 
    console.log(response)
    )


    getWarenkorbInfos.getDrink().then( (response) => 
    console.log(response)
    )
    this.setState({angemeldet: true}) //TESTING
    /* if(ticket === null){
    this.setState({angemeldet: true})
    }else{
      this.setState({tokenLeer: true})
    } */
    }else{
      this.setState({tokenLeer: true})
    }
    
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/Warenkorb`} />
    }
  }

  WarenkorbCheck(){
    if(this.state.nachname === "" || this.state.vorname === "" || this.state.mail ===""){
      this.setState({
        angemeldet: false,
        ErrorMessage: true
      })
      this.renderRedirect()


    }
   
  }

  render() {
   var ProfilLink = "/programm"
    return( <div >
      {
          this.state.angemeldet?(<div ><div className ="Warenkorb">
            
              
             {   //this.state.ticket.map( (tickets) => (
                  <div className ="Links" ><div className="LinkeSeite"><div className ="Tickezs"><div className="WarenkorbTicket" > 
                    Ihr Warenkorb: <br/>

                      </div >
                    <div className="KinoTicket"> 
                        Ticket: {/* tickets.amount */} <br/>
                        Sitzplatz: {/* tickets.seats */}<br/>
                        Datum: {/* {tickets.date} */}<br/>
                        Zeit: {/* {tickets.vorstellung} */}<br/>
                        Preis: {/* {tickets.preis} */}<br/>

                    </div> 
                    <div className="FilmÄndern">
                    <Link  className ="FilmNeu" to={"/programm"}>Film ändern</Link>
                      </div></div>

                    <div className ="WarenkorbSnacks">
                        Weitere Artikel in ihrem Warenkorb:
                        </div> 
                        <div className = "KinoExtras">
                          Snacks: <br/>
                          Getränke: <br/>
                          Gutscheine: <br/>
                        {/*tickets.snacks*/}
                        </div> 
                        <div className="SnackHinzufügen">
                    <Link  className ="SnackNeu" to={"/programm"}>Snack hinzufügen</Link>
                      </div>

                        </div> </div> 

             }
                
            

            <div className ="Rechts">
            <div className="rechteSeite">


             <div className ="ZahlungsdetailSchrift">

                Zahlungsdetails:
              </div>
                <div>
            	 <form on onSubmit={this.handleSubmit}>
                <label>
              <select
                className="ZahlungsdetailsSelect"
                value={this.state.value}
                onChange={this.handleChange}
                name="value"
              >
                <option value="PreisKategorie">Zahlungsmöglichkeit Auswählen</option>
                <option value="Paypal">Paypal</option>
                <option value="Überweisung"> Auf Rechnung</option>
                <option value="Kreditkarte">Kreditkarte</option>
                <option value="KassenZahler">Nur Reservieren</option>

              </select>
            </label>
            </form> 

            <div className ="PersonenSchrift">
              	Angaben zur Person
              </div>

              <div className="AngabenPerson">
              <label>
              <input
                className="InputTextWarenkorb"
                placeholder="Vorname"
                name="vorname"
                type="text"
                value={this.state.vorname}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                className="InputTextWarenkorb"
                placeholder="Nachname"
                name="nachname"
                type="text"
                value={this.state.nachname}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                className="InputTextWarenkorb"
                placeholder="E-Mail Adresse"
                name="mail"
                type="text"
                value={this.state.mail}
                onChange={this.handleChange}
              />
            </label>
            </div>
            <div className="BezahlMethodenText">
              Bezahlmethode
              </div>
              <div>
                {
                  (this.state.value === "")?(<div>Bitte Bezahlmöglichkeit Auswählen</div>):null     
                }
                {
                  (this.state.value ==="Paypal")?(<div>Sie werden nach der Bestellung an die Paypal Seite weitergeleitet</div>):null     
                }
                {
                  (this.state.value ==="Überweisung")?(<div>Sie erhalten im Anschluss eine E-Mail mit der Rechnung, das Ticket wird erst gültig wenn die Bezahlung bei uns eingegangen ist </div>):null     
                }
                {
                  (this.state.value ==="Kreditkarte")?(<div>
                    <div className ="KreditKarteText">
                      Kreditkarten Informationen:</div>




                      <div>
                      <label>
              <input
                className="InputTextWarenkorb"
                placeholder="Kreditkartentyp"
                name="mail"
                type="text"
                value={this.state.Kreditkartentyp}
                onChange={this.handleChange}
              />
            </label></div>
                      <div>
                      <label>
              <input
                className="InputTextWarenkorb"
                placeholder="Karteninhaber"
                name="Karteninhaber"
                type="text"
                value={this.state.Karteninhaber}
                onChange={this.handleChange}
              />
            </label></div>
                      <div>
                      <label>
              <input
                className="InputTextWarenkorb"
                placeholder="Kartennummer"
                name="Kartennummer"
                type="text"
                value={this.state.Kartennummer}
                onChange={this.handleChange}
              />
            </label></div>
                      <div>
                      <label>
              <input
                className="InputTextWarenkorb"
                placeholder="Gültig bis"
                name="Gültig"
                type="text"
                value={this.state.Gültig}
                onChange={this.handleChange}
              />
            </label>
                      </div>
                  </div>):null     
                }
                {
                  (this.state.value ==="KassenZahler")?(<div>Ihr Ausgewähltes Ticket wird gespeichert und wir Ihnen an der Kasse im Kino ausgegeben </div>):null     
                }
              </div>
            </div>


            </div>
             </div>

            </div><button onClick ={this.WarenkorbCheck} >Daten Bestätigen</button>
            
            
            
            </div>):null
  }

{
              this.state.ErrorMessage? <div> Fehler bei der Anmeldung, überprüfen Sie Ihre Eingaben </div>: null
            }
            {
              this.state.tokenLeer? <div className ="SonderMeldung"><div className ="DESIGNHeadline3"> Hier könnte Ihr Ticket stehen&emsp; 
               
              </div><br/>
              <Link className="DESIGNButton" to={ProfilLink}>
                 Zur Filmauswahl
              </Link>
              </div>: null
            }
            </div>
            
            


    )}
}
export default Warenkorb;