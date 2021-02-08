import React, { Component } from "react";
import "./Programm.css";
import GetAllFilmAPI from "../../API_Pulls/GetAllFilmAPI";
import { Redirect } from "react-router-dom";

class ProgrammSeite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Ergebnisse',
      genre: 'Alle',
      alleGenre: ["Alle"],
      alter: 'Alle',
      filmName:" ",
      search: "",
      showFilter: false,
      redirect: false,
      filmId: "",
      alleFilme: [],
      filme: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.hideFilter = this.hideFilter.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  componentDidMount() {
    GetAllFilmAPI.getAllFilmAPI().then((response) => {


      let genreList = ["Alle"];

      let aktiveFilme = response.data[0];
      for(let i in aktiveFilme) {

        let checker1 = true;
        let checker2 = true;
        for(let j=0; j<genreList.length; j++) {
          if(genreList[j] == aktiveFilme[i].genre1) {
            checker1 = false;
          }
          if(genreList[j] == aktiveFilme[i].genre2) {
            checker2 = false;
          }
        }
        if(checker1) {
          genreList.push(aktiveFilme[i].genre1);
        }
        if(checker2) {
          genreList.push(aktiveFilme[i].genre2);
        }
      }
      /*let aktiveFilme = [];
      for(let film in response.data) {
        if(response.data[film].aktiv == true) {
          aktiveFilme.push(response.data[film]);
        }

      }*/

      this.setState({ alleGenre: genreList});
      this.setState({ filme: aktiveFilme });
      this.setState({ alleFilme: aktiveFilme });
      
    });
  }

  handleChange(event) {
    if (event.target.id === "searchId") {
      this.setState({ search: event.target.value });
    } else if (event.target.id === "genreId") {
      this.setState({ genre: event.target.value });
    }/* else if (event.target.id === "alterId") {
      this.setState({ alter: event.target.value });
    }*/

    let alleFilme = this.state.alleFilme;

    let filmCounter = 0;
    let genreFilme = [];
    //let alterFilme = [];
    let suchFilme = [];
    let genre = document.getElementById("genreId");
    //let alter = document.getElementById("alterId");
    let search = document.getElementById("searchId");

    for (let film in alleFilme) {
      if (alleFilme[film].name.includes(search.value)) {
        suchFilme.push(alleFilme[film]);
      }
    }
    //this.setState({ filme: suchFilme})
    if (this.state.showFilter === true) {
      if (genre.value === "Alle") {
        genreFilme = suchFilme;
      } else {
        for(let i=0; i<suchFilme.length; i++) {
          let genreList = [];
          genreList.push(suchFilme[i].genre1);
          genreList.push(suchFilme[i].genre2);
          for(let g in genreList) {
  
            if(genreList[g]== genre.value) {
              genreFilme.push(suchFilme[i]);
              break;
            }
          }
        }
      }
      this.setState({filme: genreFilme});
      filmCounter = genreFilme.length;
      /*if (alter.value === "Alle") {
        alterFilme = genreFilme;
      } else {
        for (let i = 0; i < genreFilme.length; i++) {
          let altersfreigabe = genreFilme[i].mindestAlter;
          if (altersfreigabe <= alter.value) {
            alterFilme.push(genreFilme[i]);
          }
        }
      }
      this.setState({ filme: alterFilme });*/
      //filmCounter = alterFilme.length;
    } else {
      this.setState({ filme: suchFilme });
      filmCounter = suchFilme.length;
    }
    if (filmCounter > 0) {
      this.setState({ headline: "Ergebnisse" });
    } else {
      this.setState({
        headline: "Zu diesen Suchkriterien gibt es keine Filme",
      });
    }
  }

  hideFilter() {
    this.setState({ showFilter: !this.state.showFilter });
  }

  setRedirect = (event) => {
    let id = event.target.id;
    this.setState({ redirect: true });
    this.setState({ filmId: id });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/FilmDetails/${this.state.filmId}`} />;
    }
  };

  render() {
    const { showFilter } = this.state;

    return (
      <div className="">
        <div className="wholeFilterSection">
          <div className="searchBar">
            <input
              className="searchField"
              id="searchId"
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
          <div className="filter">
            <button className="DESIGNButton" onClick={() => this.hideFilter()}>
              <div className="Filter">Filter</div>
            </button>
            {showFilter && <div className = "genre">
              <form>
              <label>
                Genre
                <select id="genreId" value={this.state.genre} onChange={this.handleChange}>
                  {this.state.alleGenre.map((genre) => (
                      <option value={genre}>{genre}</option>
                    ))}
                </select>
              </label>
            </form>
            </div>}
          </div>
        </div>
        <h1 className="DESIGNHeadline1"> {this.state.headline} </h1>
        <br />
        <div className="filmListe">
          {this.state.filme.map((film) => (
            <div className="" key={film.id}>
              <div className="ErgebnisDarstellung">
                <img
                  id={film.id}
                  key={film.id}
                  alt=" "
                  className="image"
                  onClick={this.setRedirect}
                  src={film.bild}
                />
              </div>
              {this.renderRedirect()}
              <div id={film.id} className="Title" onClick={this.setRedirect}>
                {" "}
                {film.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  sitzplanGenerieren(reihenAnzahl, spaltenAnzahl) {
    const Sizsplan = [reihenAnzahl, spaltenAnzahl];
    for (var r = 0; r < reihenAnzahl; r++) {
      for (var s = 0; s < spaltenAnzahl; s++) {
        Sizsplan[(r, s)] = <button>Sitz</button>;
      }
    }
    return Sizsplan;
  }

  reihenPlanGenerieren() {}
}

export default ProgrammSeite;
