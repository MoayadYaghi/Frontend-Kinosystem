import React, { Component} from "react";
import SaalByVorstellung from "../../API_Pulls/SaalByVorstellung";
import SitzByVorstellung from "../../API_Pulls/SitzByVorstellung";
import "./Sitzplatzreservierung.css";

class Sitzplatzreservierung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reihenAnzahl: "",
      spaltenAnzahl: "",
      vorstellungId: "",
      saalStruktur: [],
      sitzeGewaehlt: [],
      normal: 0,
      kind: 0,
      student: 0,
      senior: 0,
      behindert: 0,
      begleitperson: 0,
      belegt: [],
      frei: [],
      error: "Es wurden nur 0 Sitze gewählt",
      errorSichtbar: false
    };
    this.selectSitz = this.selectSitz.bind(this);
    this.addToInput = this.addToInput.bind(this);
  }
  componentDidMount() {
    let url = window.location.href;
    let vorstellungId = url.split("http://localhost:3000/Sitzplatz/")[1];
    this.setState({vorstellungId: vorstellungId});
    SaalByVorstellung.saalByVorstellung(vorstellungId).then((response) => {
        let reihenAnzahl = response.data.reihe;
        let saalStruktur = []; 
        let reihenBreite = response.data.spalte;
        this.setState({spaltenAnzahl: reihenBreite});
        let id = 0
        for(let j = 0; j < reihenAnzahl; j++) {
          let reihe = [];
          let sitzReihe = String.fromCharCode(97 + j);
          for(let i = 0; i < reihenBreite; i++) {
            let sitzPlatz = "";
            reihe.push(<button id = {id} onClick={this.selectSitz} style={{borderColor: 'black',borderRadius: "5px", backgroundColor: 'green', width: "1rem", height: "1rem"}}>{sitzPlatz}</button>);
            id++;
          }
          saalStruktur.push(reihe);
        }
        this.setState({saalStruktur: saalStruktur});
        SitzByVorstellung.sitzeByVorstellung(vorstellungId).then((response) => {
          let alleSitze = response.data;
          let belegtSitze = [];
          let freiSitze = [];
          for(let sitz in alleSitze) {
            if(alleSitze[sitz].isBesetzt == true) {
              belegtSitze.push({reihe: alleSitze[sitz].sitz.reihe, spalte: alleSitze[sitz].sitz.spalte});
            }
            else {
              freiSitze.push({reihe: alleSitze[sitz].sitz.reihe, spalte: alleSitze[sitz].sitz.spalte});
            }
          }
          this.setState({frei: freiSitze});
          this.setState({belegt: belegtSitze});
          for(let belegt in belegtSitze) {
            let sitz = belegtSitze[belegt];
            let reihe = sitz.reihe;
            let spalte = sitz.spalte;
            let sitzId = ((reihe - 1) * this.state.spaltenAnzahl) + spalte - 1;
            document.getElementById(sitzId).style.backgroundColor = 'red';
            document.getElementById(sitzId).disabled = true;
          }
        })
    })
  }

  selectSitz(event) {
    let spaltenAnzahl = this.state.spaltenAnzahl;
    let reihe = 1;
    let id = parseInt(event.target.id, 10) + 1;
    while(id > spaltenAnzahl) {
      id = id - spaltenAnzahl;
      reihe++;
    }
    let spalte = id;
    let sitzeBelegt = this.state.sitzeGewaehlt;
    if(event.target.style.backgroundColor == 'blue') {
      event.target.style.backgroundColor = 'green';
      for(let sitz in sitzeBelegt) {
        if(sitzeBelegt[sitz].reihe == reihe && sitzeBelegt[sitz].spalte == spalte) {
          sitzeBelegt.splice(parseInt(sitz, 10), 1);
          break;
        }
      }
      this.setState({sitzeGewaehlt : sitzeBelegt});
      this.setState({normal : 0, kind: 0, student: 0, senior: 0, behindert: 0, begleitperson: 0});
      this.setState({errorSichtbar: false});
    }
    else {
      event.target.style.backgroundColor = 'blue';
      let sitz = {reihe: reihe, spalte: spalte};
      sitzeBelegt.push(sitz);
      this.setState({sitzeGewaehlt: sitzeBelegt});
      this.setState({errorSichtbar: false});
    }
    let errorNachricht = "Es wurden nur " + sitzeBelegt.length + " Sitze gewählt";
    this.setState({error: errorNachricht});
    this.setState({prevBtn: event.target.id});

  }

  sitzplanGenerieren() {
    let sitzplan = this.state.saalStruktur;
    return sitzplan;
  }

  addToInput(event, addToInput) {
    let btnId = event.target.id;
    let gewaehlt = this.state.normal + this.state.kind + this.state.student + this.state.senior + this.state.behindert + this.state.begleitperson;
    if(gewaehlt == this.state.sitzeGewaehlt.length && addToInput > 0) {
      this.setState({errorSichtbar: true});
    }
    else {
      switch(btnId) {
        case "addNormal": case "subtractNormal":
          if(this.state.normal == 0 && addToInput < 0) {}
          else{
            this.setState({normal: (this.state.normal + addToInput)});
          }
          break;
        case "addKind": case "subtractKind":
          if(this.state.kind == 0 && addToInput < 0) {}
          else{
            this.setState({kind: (this.state.kind + addToInput)});
          }
          break;
        case "addStudent": case "subtractStudent":
          if(this.state.student == 0 && addToInput < 0) {}
          else{
            this.setState({student: (this.state.student + addToInput)});
          }
          break;
        case "addSenior": case "subtractSenior":
          if(this.state.senior == 0 && addToInput < 0) {}
          else{
            this.setState({senior: (this.state.senior + addToInput)});
          }
          break;
        case "addBehindert": case "subtractBehindert":
          if(this.state.behindert == 0 && addToInput < 0) {}
          else{
            this.setState({behindert: (this.state.behindert + addToInput)});
          }
          break;
        case "addBegleitperson": case "subtractBegleitperson":
          if(this.state.begleitperson == 0 && addToInput < 0) {}
          else{
            this.setState({begleitperson: (this.state.begleitperson + addToInput)});
          }
          break;
      }
      this.setState({errorSichtbar: false});
    }
  }

  render() {
    return (
      <div className="SitzplanSeite">
        <div className="Sitzplan">
          <div className="SitzplatzreservierungÜberschrift">
            Sitzplatzreservierung<br></br>
          </div>
          <div style={{display: "flex", alignContent: "center", justifyContent: "center", marginTop:"1rem"}}>Leinwand</div>
          <div style={{display: "flex", alignContent: "center", justifyContent: "center"}}>
            <table className="ReactTable">
              <tbody>
                {this.state.saalStruktur.slice(0, this.state.saalStruktur.length).map((item, index) => {
                  return (
                    <tr>
                      {item.map((reihe) => (
                          <td className="TableElement">{reihe}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="Rest">
          <button id="SnacksButton"> Snacks hinzufügen </button>
          <div className="Tickets">
            {" "}
            <div className="TicketArt">Ticketart</div>
            { this.state.errorSichtbar 
                    ? <div className="errorNachricht">{this.state.error}</div>
                    : <br></br>
                }
            <table className="TicketTable">
                <tbody>
                  <tr>
                    <td className="ticketElement">
                      <label className="TicketLabels"> Erwachsen </label>
                    </td>
                    <td className="ticketElement">
                      <button className="anzahlBtn" id="subtractNormal" type="button" onClick={(e) => {this.addToInput(e,-1)}}>-</button>
                      <input className="anzahlInput" id="normalId" readOnly type="number" value={this.state.normal} />
                      <button className="anzahlBtn" id="addNormal" type="button" onClick={(e) => {this.addToInput(e, +1)}}>+</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="ticketElement">
                      <label className="TicketLabels"> Kind </label>
                    </td>
                    <td className="ticketElement">
                      <button className="anzahlBtn" id="subtractKind" type="button" onClick={(e) => {this.addToInput(e,-1)}}>-</button>
                      <input className="anzahlInput" id="kindId" readOnly type="number" value={this.state.kind}/>
                      <button className="anzahlBtn" id="addKind" type="button" onClick={(e) => {this.addToInput(e, +1)}}>+</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="ticketElement">
                      <label className="TicketLabels"> Student </label>
                    </td>
                    <td className="ticketElement">
                      <button className="anzahlBtn" id="subtractStudent" type="button" onClick={(e) => {this.addToInput(e,-1)}}>-</button>
                      <input className="anzahlInput" id="studentId" readOnly type="number" value={this.state.student}/>
                      <button className="anzahlBtn" id="addStudent" type="button" onClick={(e) => {this.addToInput(e, +1)}}>+</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="ticketElement">
                      <label className="TicketLabels"> Senior </label>
                    </td>
                    <td className="ticketElement">
                      <button className="anzahlBtn" id="subtractSenior" type="button" onClick={(e) => {this.addToInput(e,-1)}}>-</button>
                      <input className="anzahlInput" id="seniorId" readOnly type="number" value={this.state.senior}/>
                      <button className="anzahlBtn" id="addSenior" type="button" onClick={(e) => {this.addToInput(e, +1)}}>+</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="ticketElement">
                      <label className="TicketLabels"> Behindert </label>
                    </td>
                    <td className="ticketElement">
                      <button className="anzahlBtn" id="subtractBehindert" type="button" onClick={(e) => {this.addToInput(e,-1)}}>-</button>
                      <input className="anzahlInput" id="behindertId" readOnly type="number" value={this.state.behindert}/>
                      <button className="anzahlBtn" id="addBehindert" type="button" onClick={(e) => {this.addToInput(e, +1)}}>+</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="ticketElement">
                      <label className="TicketLabels"> Begleitperson </label>
                    </td>
                    <td className="ticketElement">
                      <button className="anzahlBtn" id="subtractBegleitperson" type="button" onClick={(e) => {this.addToInput(e,-1)}}>-</button>
                      <input className="anzahlInput" id="begleitpersonId" readOnly type="number" value={this.state.begleitperson}/>
                      <button className="anzahlBtn" id="addBegleitperson" type="button" onClick={(e) => {this.addToInput(e, +1)}}>+</button>
                    </td>
                  </tr>
                </tbody>
            </table>
          </div>
          <button> Zum Warenkorb hinzufügen </button>
        </div>
      </div>
    );
  }
};

export default Sitzplatzreservierung;
