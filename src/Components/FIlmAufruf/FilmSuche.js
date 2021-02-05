import { Component, useState } from "react";
import NewFilmAPI from "../../API_Pulls/NewFilmAPI";
import PostNewMovie from "../../PostRequest/PostNewMovie";
import FilmSucheAPI from "../../API_Pulls/FilmSucheAPI";
import GetAllFilmAPI from "../../API_Pulls/GetAllFilmAPI";
import { animateScroll as scroll } from "react-scroll";
import ModalFilmAdmin from "./ModalFilmAdmin";
import "./FilmAufruf.css";
import Modal from "react-bootstrap/Modal";

var text;
var id;
var fehler = false;

class FilmSuche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",

      filme: [],
      visible: false,
      FehlerAusgabe: false,
      Ergebnis0: false,
      clicked: false,
      newFilme: [],
      showModal: false,
      Error: false,
      success: false,
      Datenbank: [],
      vorhanden: false,
      Fehler: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.betätigungsHandler = this.betätigungsHandler(this);

    /* this.APIaufruf= this.APIaufruf.bind(this) */
  }

  // axios.post('http://localhost:3000/admin', this.state)

  handleChange(event) {
    const target = event.target;
    const value =
      target.value; /*  === 'text' ? target.checked : target.value;  */
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    /*       alert('Folgender Text wurde hinzugefügt: ' + this.state.value /* + ' || and also a fruit: ' + this.state.obst );
       console.log(this.state.value) */
    event.preventDefault();

    FilmSucheAPI.getFilmSucheAPI(this.state.value).then((response) => {
      let movies = response.data.results;

      this.setState({ filme: movies });

      //console.log(this.state.filme);

      /*  await  */
      if (this.state.filme === null) {
        this.setState({ visible: false });
        this.setState({ FehlerAusgabe: true });
        this.setState({ Ergebnis0: false });
      } else if (this.state.filme.length === 0) {
        this.setState({ Ergebnis0: true });
        this.setState({ visible: false });
        this.setState({ FehlerAusgabe: false });
      } else if (this.state.filme.length > 0) {
        this.setState({ visible: true });
        this.setState({ Ergebnis0: false });
        this.setState({ FehlerAusgabe: false });
      }
    });
  }

  // axios.post('http://localhost:3000/admin', this.state)

  clickHandler(title, ID) {
    this.setState({ clicked: true, showModal: true });

    text = title;
    id = ID;
  }

  betätigungsHandler(Id) {
    //console.log(Id)
    this.setState({ visible: false, showModal: false });
    scroll.scrollToTop();

    //console.log(this.state.Datenbank)

    //console.log(DatenbankLänge)
    this.state.Datenbank.map((Daten) => {
      if (Daten.name === text) {
        this.setState({ vorhanden: true, Fehler: true });
        fehler = true;
      }
    });
    if (fehler !== true) {
      NewFilmAPI.getnewFilmAPI(Id).then((response) => {
        var FilmInfo = response.data;
        this.setState({ newFilme: response.data });
        // console.log(this.state.newFilme);
        var Actors = this.state.newFilme.actorList;
        // console.log(Actors);
        if (FilmInfo.runtimeMins === "") {
          FilmInfo.runtimeMins = "0";
        }

        PostNewMovie.sendDatatoBackend(
          FilmInfo.id,
          FilmInfo.title,
          FilmInfo.awards,
          FilmInfo.directors,
          FilmInfo.genreList,
          FilmInfo.plotLocal,
          FilmInfo.runtimeMins,
          FilmInfo.image
        );
        setTimeout(() => {
          var RückmeldungFehler;
          var Rückmeldung = sessionStorage.getItem("Rückmeldung");
          sessionStorage.removeItem("Rückmeldung");
          // console.log(Rückmeldung)
          RückmeldungFehler = Rückmeldung.substring(0, 5);
          //  console.log(RückmeldungFehler)

          if (RückmeldungFehler === "Error") {
            if (!this.state.vohanden) {
              this.setState({ Error: true });
            }
          } else {
            this.setState({ success: true });
          }
        }, 2000);
      });
    }
  }

  handleClose = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    GetAllFilmAPI.getAllFilmAPI().then((respo) => {
      this.setState({ Datenbank: respo.data });
      // console.log(respo)
    });
  }

  render() {
    return (
      <div>
        <div className="Suche">
          <form className="Form" onSubmit={this.handleSubmit}>
            <div className="Textfield">
              <label>
                <input
                  className="InputText"
                  placeholder="Suchbegriff"
                  git
                  name="value"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br />
            <div className="Submit">
              <input
                className="DESIGNButton"
                type="submit"
                value=" Film Suchen"
              />
            </div>
          </form>
        </div>

        <div>
          {/* (this.state.FehlerAusgabe) ? null: */}
          {this.state.visible ? (
            <div>
              <h1 className="text-center"> Ergebnisse </h1>

              <div className="ErgebnisBox">
                <br />
                <div className="MaxHeight">
                  {this.state.filme.map((filme) => (
                    <div
                      className=""
                      key={filme.id}
                      onClick={() => this.clickHandler(filme.title, filme.id)}
                    >
                      <div className="ErgebnisDarstellung">
                        <img
                          key={filme.id}
                          alt=" "
                          className="image"
                          src={filme.image}
                        />
                      </div>
                      <div className="Title">
                        {" "}
                        {filme.title} {filme.description}
                      </div>
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
          {this.state.FehlerAusgabe ? (
            <div className="FehlerMeldung">
              <div className="DESIGNHeadline3">
                {" "}
                Das hat Leider nicht geklappt, versuchen Sie es bitte erneut
              </div>
            </div>
          ) : null}
          {this.state.Ergebnis0 ? (
            <div className="FehlerMeldung">
              <div className="DESIGNHeadline3">
                {" "}
                Das hat Leider nicht geklappt, es wurden keine Ergebnisse
                gefunden
              </div>
            </div>
          ) : null}
          {this.state.vorhanden ? (
            <div className="FehlerMeldung">
              <div className="DESIGNHeadline3">
                {" "}
                Das hat Leider nicht geklappt, den Film gibt es bereits
              </div>
            </div>
          ) : null}
        </div>
        {this.state.Error ? (
          <div className="ErfolgreichFilm">
            {" "}
            <div className="DESIGNHeadline3">
              Es gab einen Fehler, bitte versuchen Sie es erneut{" "}
            </div>
          </div>
        ) : null}
        {this.state.success ? (
          <div className="ErfolgreichFilm">
            <div className="DESIGNHeadline3">
              {" "}
              Ihr FIlm wurde automatisch zu Ihrem Programm hinzugefügt{" "}
            </div>
          </div>
        ) : null}

        <div>
          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Der Film: {text} wurde ausgewählt</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Möchten Sie den Film zu Ihrem Programm hinzufügen?{" "}
            </Modal.Body>
            <Modal.Footer>
              <button variant="secondary" onClick={this.handleClose}>
                Abbrechen
              </button>
              <button
                variant="primary"
                onClick={() => this.betätigungsHandler(id)}
              >
                Bestätigen
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
export default FilmSuche;
