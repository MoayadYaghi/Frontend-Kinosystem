import React, { Component } from "react";
import "./Programm.css";

import { Link } from "react-router-dom";
import GetAllFilmAPI from "../../API_Pulls/GetAllFilmAPI";
import { Redirect } from 'react-router-dom';

class ProgrammSeite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'Alle',
      alter: 'Alle',
      filmName:" ",
      search: "",
      showFilter: false,
      redirect: false,
      alleFilme: [],
      filme: []};

    this.handleChange = this.handleChange.bind(this);
    this.hideFilter = this.hideFilter.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  componentDidMount() {
    GetAllFilmAPI.getAllFilmAPI().then((response) => {

      this.setState({ filme: response.data });
      this.setState({ alleFilme: response.data });
      console.log(this.state.filme);
    });
  }

  handleChange(event) {
    if(event.target.id == "searchId") {
      this.setState({search: event.target.value})
    }
    else if(event.target.id == "genreId") {
      this.setState({genre: event.target.value});
    }
    else if(event.target.id == "alterId") {
      this.setState({alter: event.target.value});
    }

    let alleFilme = this.state.alleFilme;

    let genreFilme = [];
    let alterFilme = [];
    let suchFilme = [];
    let genre = document.getElementById("genreId");
    let alter = document.getElementById("alterId");
    let search = document.getElementById("searchId")

    for(let film in alleFilme) {
      if(alleFilme[film].name.includes(search.value)) {
        suchFilme.push(alleFilme[film]);
      }
    }
    //this.setState({ filme: suchFilme})
    if(this.state.showFilter === true) {
      if(genre.value == "Alle") {
        genreFilme = suchFilme;
      } else {
        for(let i=0; i<suchFilme.length; i++) {
          let genreList = suchFilme[i].genre;
          for(let g in genreList) {
  
            if(genreList[g]== genre.value) {
              genreFilme.push(suchFilme[i]);
              break;
            }
          }
        }
      }
      if(alter.value == "Alle") {
        alterFilme = genreFilme;
      } else {
        for(let i=0; i<genreFilme.length; i++) {
          let altersfreigabe = genreFilme[i].mindestAlter;
          if(altersfreigabe <= alter.value) {
            alterFilme.push(genreFilme[i]);
          }
        }
      }
      this.setState({ filme: alterFilme });
    } else {
      this.setState({ filme: suchFilme });
    }
  }

  hideFilter() {
    this.setState({ showFilter: !this.state.showFilter });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/FilmDetails' />
    }
  }

  render() {
    const { showFilter } = this.state;

    return (
      <div className = "" >
        <div className = "wholeFilterSection">
          <div className = "searchBar">
            <input className = "searchField" id="searchId" type="text" placeholder="Search" value={this.state.search} onChange={this.handleChange}/>
          </div>
          <div className = "filter">
            <button onClick={() => this.hideFilter()}>
              Filter
            </button>
            {showFilter && <div className = "genre">
              <form>
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
            </form>
            </div>}
            {showFilter && <div className = "alter">
              <form>
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
            </form>
            </div>}
          </div>
        </div>
        <h1 className="text-center"> Ergebnisse </h1>
        <div className="filmListe">
          {this.state.filme.map((film) => (
          <div className="" key={film.id}>
            <div className="ErgebnisDarstellung">
              <img key={film.id} alt=" " className="image" src={film.bild}/>
            </div>
            {this.renderRedirect()}
            <div className="Title" onClick={this.setRedirect}>
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
