import React, { Component } from "react";
import "./Programm.css";
import { Link } from "react-router-dom";
import GetAllFilmAPI from "../../API_Pulls/GetAllFilmAPI";

class ProgrammSeite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'Alle',
      alter: 'Alle',
      showGenreFilter: false,
      showAlterFilter: false,
      filme: []};

    this.handleChange = this.handleChange.bind(this);
    this.hideFilter = this.hideFilter.bind(this);
  }

  componentDidMount() {
    GetAllFilmAPI.getAllFilmAPI().then((response) => {
      //var FilmInfo = response.data;

      this.setState({ filme: response.data });
      console.log(this.state.filme);
    });
  }

  handleChange(event) {
    if(event.target.id == "genreId") {
      this.setState({genre: event.target.value});
    }
    else if(event.target.id == "alterId") {
      this.setState({alter: event.target.value});
    }
    GetAllFilmAPI.getAllFilmAPI().then((response) => {
      let alleFilme = response.data;
      let genreFilme = [];
      let alterFilme = [];
      let genre = document.getElementById("genreId");
      let alter = document.getElementById("alterId");
      if(genre.value == "Alle") {
        //this.setState({ filme: filterFilme });
        genreFilme = alleFilme;
      } else {
        for(let i=0; i<alleFilme.length; i++) {
          let genreList = alleFilme[i].genre;
          for(let g in genreList) {
  
            if(genreList[g]== genre.value) {
              genreFilme.push(alleFilme[i]);
              break;
            }
          }
        }
        //this.setState({ filme: filterFilme });
      }
      if(alter.value == "Alle") {
        //this.setState({ filme: filterFilme });
        alterFilme = genreFilme;
      } else {
        for(let i=0; i<genreFilme.length; i++) {
          let altersfreigabe = genreFilme[i].mindestAlter;
          if(altersfreigabe == alter.value) {
            alterFilme.push(genreFilme[i]);
          }
        }
      }
      this.setState({ filme: alterFilme });
    });
  }
  
  hideFilter() {
    this.setState({ showGenreFilter: !this.state.showGenreFilter });
    this.setState({ showAlterFilter: !this.state.showAlterFilter });
  }


  render() {
    const { showGenreFilter, showAlterFilter } = this.state;
    return (
      <div className = "" >
        <div className = "filter">
          <button onClick={() => this.hideFilter()}>
            Filter
          </button>
          {showGenreFilter && <form>
            <label>
            Genre
              <select id="genreId" value={this.state.genre} onChange={this.handleChange}>
                <option value="Alle">Alle</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Animation">Animation</option>
                <option value="Family">Familie</option>
              </select>
            </label>
          </form>}
          {showAlterFilter && <form>
            <label>
            Altersfreigabe
              <select id="alterId" value={this.state.alter} onChange={this.handleChange}>
                <option value="Alle">Alle</option>
                <option value="6">ab 6 Jahren</option>
                <option value="12">ab 12 Jahren</option>
                <option value="16">ab 16 Jahren</option>
                <option value="18">ab 18 Jahren</option>
              </select>
            </label>
          </form>}
        </div>
        <h1 className="text-center"> Ergebnisse </h1>
        <div className="filmListe">
          {this.state.filme.map((film) => (
          <div className="" key={film.id}>
            <div className="ErgebnisDarstellung">
              <img key={film.id} alt=" " className="image" src={film.bild}/>
            </div>
            <div className="Title">
              {" "}
              {film.name}
            </div>
          </div>))}
        </div>
      </div>
    );
  }
}
export default ProgrammSeite;