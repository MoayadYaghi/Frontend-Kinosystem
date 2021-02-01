import { Component, useState } from "react";
import NewFilmAPI from "../../API_Pulls/NewFilmAPI";
import PostNewMovie from "../../PostRequest/PostNewMovie";
import FilmSucheAPI from "../../API_Pulls/FilmSucheAPI";
import { animateScroll as scroll } from "react-scroll";
import ModalFilmAdmin from "./ModalFilmAdmin";
import "./FilmAufruf.css";

var text;
var id;

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

      console.log(this.state.filme);

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
    this.setState({ clicked: true });
    text = title;
    id = ID;
  }

  betätigungsHandler(Id) {
    this.setState({ visible: false });
    scroll.scrollToTop();

    NewFilmAPI.getnewFilmAPI(Id).then((response) => {
      var FilmInfo = response.data;

      this.setState({ newFilme: response.data });
      console.log(this.state.newFilme);

      var Actors = this.state.newFilme.actorList;

      console.log(Actors);

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
    });
  }

  openModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div>
        {/* <button onClick ={this.openModal}>I am a Modal</button>
          <ModalFilmAdmin showModal={this.state.showModal}/> */}

         {/* <ModalFilmAdmin />  */}

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
                className="ButtonSubmit"
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

                      {this.state.clicked ? (
                        id === filme.id ? (
                          <div className="Infomation">
                            <div className="Bestätigunganfrage">
                              <div className="Ergebnise">
                                Sie haben den Title: {text} ausgewählt. Möchten
                                Sie diesen zu Ihrem Programm hinzufügen?
                              </div>

                              <button
                                className="Bestätigung"
                                onClick={() =>
                                  this.betätigungsHandler(filme.id)
                                }
                              >
                                Bestätigen
                              </button>
                              <br />
                            </div>
                          </div>
                        ) : null
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
          {this.state.FehlerAusgabe ? (
            <div className="FehlerMeldung">
              Das hat Leider nicht geklappt, versuchen Sie es bitte erneut
            </div>
          ) : null}
          {this.state.Ergebnis0 ? (
            <div className="FehlerMeldung">
              Das hat Leider nicht geklappt, es wurden keine Ergebnisse gefunden
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default FilmSuche;
