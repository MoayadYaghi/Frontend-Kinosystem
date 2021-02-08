import React, { Component } from "react";
import "./Warenkorb.css";
import getWarenkorbInfos from "../../API_Pulls/getWarenkorbInfos";
import { Link, Redirect } from "react-router-dom";
import PostSepa from "../../PostRequest/PostSepa";
import PostBenutzerupdate from"../../PostRequest/PostBenutzerupdate";
import PostTicketentfernen from"../../PostRequest/PostTicketentfernen";



class Warenkorb extends Component {
  constructor(props) {
    super(props);

    this.state = {
        Ticket: [],
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
        Datum: "",
        Zeit:"",
        IBAN:"",
        Fehler403: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.WarenkorbCheck = this.WarenkorbCheck.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ ZahlungsDetails: event.target.value });
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
    var tickets
    if(tokenInfo != null){
      
    getWarenkorbInfos.getTickets().then((respon) => {
      console.log(respon)
      this.setState({Ticket: respon.data}, () =>{
      //console.log(sessionStorage.getItem('token'))
      console.log(this.state.Ticket)})
      console.log(respon)
      
        
      
      }).catch(err => {console.log(err)
        var Fehler = err.toString()
        var Fehlerausgabe = Fehler.substring(39,42)
        if(Fehlerausgabe === "403"){
          console.log("Bitte neu anmelden")
          this.setState({Fehler403: true})
          sessionStorage.removeItem('token')
        }
        this.setState({
          angemeldet: false,
        ErrorMessage: false,
        tokenLeer: false,
        })
       console.log(Fehlerausgabe) 
        
      })
    
    /* .
    
    then((response) =>{
     this.setState({Ticket: response.data}) */
      /* console.log(response)
    tickets = response.data 

    
    }
    )*/

    getWarenkorbInfos.getSnacks().then((response) => 
    console.log(response)
    )


    getWarenkorbInfos.getDrink().then((response) => 
    console.log(response)
    )
    //this.setState({angemeldet: true}) //TESTING
    if(this.state.Ticket !== []){
     this.setState({angemeldet: true})
    }else{
      this.setState({tokenLeer: true})
    } 
    }
     else{
      this.setState({tokenLeer: true})
    } 
    
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/Warenkorb`} />;
    }
  };

  WarenkorbCheck() {
    if (
      this.state.nachname === "" ||
      this.state.vorname === "" ||
      this.state.mail === ""
    ) {
      this.setState({
        angemeldet: false,
        ErrorMessage: true,
      });
    }
    if (
      this.state.value === "SePa" &&
      this.state.mail !== "" &&
      this.state.IBAN !== ""
    ) {
      PostSepa.sendnewSepa(this.state.mail, this.state.IBAN).then((res) => {
        console.log(res);
      });
    }
    var Generiert = sessionStorage.getItem("Generiert");
    if (Generiert === true) {
      if (
        this.state.nachname !== "" ||
        this.state.vorname !== "" ||
        this.state.mail !== ""
      ) {
        PostBenutzerupdate.Postuserupdate(
          this.state.vorname,
          this.state.nachname,
          this.state.mail
        );
      }
    }
  }

  Ticketenfernen(id){
    PostTicketentfernen.sendTicketenfernen(id).then(()=>{
      console.log("Ticket wurde removed")
      window.location.reload();
    })
  }

  render() {

   var ProfilLink = "/programm"
    return( <div >
      {
          this.state.angemeldet?
          (<div ><div className ="Warenkorb"><div className ="Links" > <div className="LinkeSeite">
            
              
             
                 <div><div className ="Tickezs"><div className="WarenkorbTicket" > 
                    Ihr Warenkorb: <br/>


                      </div >
                      {   this.state.Ticket.map( (tickets) => (
                        <div className="DESIGNTextField"><br/>
                    <div className="KinoTicket"> <div className ="WarenkorbTicketReihe"><div className="BeschreibungQWarenkorb">
                        Ticket: </div>{tickets.vorstellung.film.name
                        } </div> 
                        <div className ="WarenkorbTicketReihe"><div className="BeschreibungQWarenkorb">
                        Sitzplatz:</div> Reihe {tickets.vorstellung.saal.reihe}, Sitzplatz {tickets.vorstellung.saal.spalte
                        } </div> <div className ="WarenkorbTicketReihe"><div className="BeschreibungQWarenkorb">
                        Datum: </div>{ ((tickets.vorstellung.startZeit).substring(0,10).split("-"))[2]+"."+
                        ((tickets.vorstellung.startZeit).substring(0,10).split("-"))[1]+"."+((tickets.vorstellung.startZeit).substring(0,10).split("-"))[0]
                        //this.state.Datum
                        } </div> <div className ="WarenkorbTicketReihe"><div className="BeschreibungQWarenkorb">
                        Zeit:</div> {(tickets.vorstellung.startZeit).substring(11,16)+" Uhr"
                        } </div> <div className ="WarenkorbTicketReihe"><div className="BeschreibungQWarenkorb">
                        Preis: </div>{tickets.vorstellung.grundpreis +" Euro"

                        } </div> <div className="" onClick={()=> this.Ticketenfernen(tickets.id)}> <div className="TicketremoveButton">Ticket entfernen</div></div>
</div> 
</div>


                      ))}       </div> 
                    <div className="FilmÄndern">
                      <Link className="FilmNeu" to={"/programm"}>
                        Film ändern
                      </Link>
                    </div>
                  </div>

                  <div className="WarenkorbSnacks">
                    Weitere Artikel in ihrem Warenkorb:
                  </div>
                  <div className="KinoExtras">
                    Snacks: <br />
                    Getränke: <br />
                    Gutscheine: <br />
                    {/*tickets.snacks*/}
                  </div>
                  <div className="SnackHinzufügen">
                    <Link className="SnackNeu" to={"/programm"}>
                      Snack hinzufügen
                    </Link>
                  </div>
                </div>

            <div className ="Rechts">
            <div className="rechteSeite">


             <div className ="ZahlungsdetailSchrift">

                Details der Bezahlung:
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
                <option value="SePa">Lastschriftverfahren</option>
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
              Methode des Bezahlens
              </div>
              <div>
                {
                  (this.state.value === "")?(<div>Bitte Bezahlmöglichkeit Auswählen</div>):null     
                }
                {
                  (this.state.value ==="Paypal")?(<div>Sie werden nach der Bestellung an die Paypal Seite weitergeleitet</div>):null     
                }
                
                {
                  (this.state.value ==="SePa")?(<div> Wir buchen Ihnen im laufe der nöächsten Tage das Geld vom Konto

            <label>
              <input
                className="InputTextWarenkorb"
                placeholder="Iban-Nummer"
                name="IBAN"
                type="text"
                value={this.state.IBAN}
                onChange={this.handleChange}
              />
            </label>
                  </div>):null     
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
                        <select
                          className="ZahlungsdetailsSelect"
                          value={this.state.value}
                          onChange={this.handleChange}
                          name="value"
                        >
                          <option value="PreisKategorie">
                            Zahlungsmöglichkeit Auswählen
                          </option>
                          <option value="Paypal">Paypal</option>
                          <option value="SePa">Lastschriftverfahren</option>
                          <option value="Überweisung"> Auf Rechnung</option>
                          <option value="Kreditkarte">Kreditkarte</option>
                          <option value="KassenZahler">Nur Reservieren</option>
                        </select>
                      </label>
                    </form>

                    <div className="PersonenSchrift">Angaben zur Person</div>

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
                    <div className="BezahlMethodenText">Bezahlmethode</div>
                    <div>
                      {this.state.value === "" ? (
                        <div>Bitte Bezahlmöglichkeit Auswählen</div>
                      ) : null}
                      {this.state.value === "Paypal" ? (
                        <div>
                          Sie werden nach der Bestellung an die Paypal Seite
                          weitergeleitet
                        </div>
                      ) : null}
                      {this.state.value === "SePa" ? (
                        <div>
                          {" "}
                          Wir buchen Ihnen im laufe der nöächsten Tage das Geld
                          vom Konto
                          <label>
                            <input
                              className="InputTextWarenkorb"
                              placeholder="Iban-Nummer"
                              name="IBAN"
                              type="text"
                              value={this.state.IBAN}
                              onChange={this.handleChange}
                            />
                          </label>
                        </div>
                      ) : null}
                      {this.state.value === "Überweisung" ? (
                        <div>
                          Sie erhalten im Anschluss eine E-Mail mit der
                          Rechnung, das Ticket wird erst gültig wenn die
                          Bezahlung bei uns eingegangen ist{" "}
                        </div>
                      ) : null}
                      {this.state.value === "Kreditkarte" ? (
                        <div>
                          <div className="KreditKarteText">
                            Kreditkarten Informationen:
                          </div>

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
                            </label>
                          </div>
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
                            </label>
                          </div>
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
                            </label>
                          </div>
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
                        </div>
                      ) : null}
                      {this.state.value === "KassenZahler" ? (
                        <div>
                          Ihr Ausgewähltes Ticket wird gespeichert und wir Ihnen
                          an der Kasse im Kino ausgegeben{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="DESIGNButton" onClick={this.WarenkorbCheck}>
              Daten Bestätigen
            </button>
          </div>
        ) : //):null}

        null}
        )
        {this.state.ErrorMessage ? (
          <div> Fehler bei der Anmeldung, überprüfen Sie Ihre Eingaben </div>
        ) : null}
        {this.state.tokenLeer ? (
          <div className="SonderMeldung">
            <div className="DESIGNHeadline3">
              {" "}
              Hier könnte Ihr Ticket stehen&emsp;
            </div>
             </div>

            </div><div className ="ButtonAlign"><button className="DESIGNButton" onClick ={this.WarenkorbCheck} >Daten Bestätigen</button></div>
            
            
            
            </div>
            //):null}
  
          ):null})
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
export default Warenkorb;
