import React, { Component } from "react";
import FilmById from "../../API_Pulls/FilmById";
import VorstellungByFilm from "../../API_Pulls/VorstellungByFilm";
import "./FilmDetails.css";
import { Redirect } from 'react-router-dom';

class FilmDetails extends React.Component {
    constructor(props) {
        super(props);

        let wholeWeek = [];
        let today = new Date();
        let weekDay = today.getDay();
        for(let i=0; i<6; i++) {
            let monat = today.getMonth() + 1;
            if(monat<10){
                monat = "0" + monat;
            }
            let date =(today.getDate()+i) + '.' + monat + '.' + today.getFullYear();
            wholeWeek.push(date);
        }

        this.state = {
            film: "",
            vorstellungen: [],
            weekDates: wholeWeek,
            weekDay: weekDay,
            clickedVorstellung: null,
            nextButton: "",
            redirect: false
        };
        this.showNext = this.showNext.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
    }
    componentDidMount() {
        let url = window.location.href;
        let filmId = url.split("http://localhost:3000/FilmDetails/")[1];
        FilmById.filmById(filmId).then((response) => {
            this.setState({film: response.data});
        })
        VorstellungByFilm.vorstellungByFilm(filmId).then((response) => {
            let vorstellungenNaechsteWoche = [];
            let alleVorstellungenAktiv = [];
            let dat;
            for(let vorstellung in response.data) {
                let startZeit = response.data[vorstellung].startZeit;
                let split = startZeit.split("-");
                let jahr = split[0];
                let monat = split[1];
                let tag = split[2].split("T")[0];
                let uhrzeit = split[2].split("T")[1].split(".")[0];

                let datum = tag + "." + monat + "." + jahr;
                for(dat in this.state.weekDates) {
                    if(this.state.weekDates[dat] == datum) {
                        alleVorstellungenAktiv.push({datum: datum, uhrzeit: uhrzeit, kinosaalId: response.data[vorstellung].saal.id, vorstellungId: response.data[vorstellung].id})
                    }
                }
            } 
            for(dat in this.state.weekDates) {
                let vorst;
                let vorstellungZuDatum = [];
                for(vorst in alleVorstellungenAktiv) {
                    if(this.state.weekDates[dat] == alleVorstellungenAktiv[vorst].datum) {
                        vorstellungZuDatum.push({uhrzeit: alleVorstellungenAktiv[vorst].uhrzeit, kinosaalId: alleVorstellungenAktiv[vorst].kinosaalId, vorstellungId: alleVorstellungenAktiv[vorst].vorstellungId});
                    }
                }
                vorstellungenNaechsteWoche.push({datum: this.state.weekDates[dat], vorstellung: vorstellungZuDatum});
            }
            this.setState({vorstellungen: vorstellungenNaechsteWoche});
        })
    }

    showNext(event) {
        this.setState({clickedVorstellung: event.target.id});
        this.setState({nextButton: "True"});
    }

    setRedirect = (event) => {
        this.setState({redirect: true});
      }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={`/Sitzplatz/${this.state.clickedVorstellung}`} />
        }
      }

    render() {    
        return (
        <div>
            <h1 className="header"> {this.state.film.name} </h1>
            <div className = "wrapper">
                <div className = "inhalt">
                    <img alt=" " className="bild" src={this.state.film.bild}/>
                    <div>
                        <div className = "beschreibung"> {this.state.film.beschreibung} </div>
                        <h1 className="vorstellungen"> Vorstellungen </h1>
                        <div className="VorstellungWrapper">
                            <div className = "Woche">
                                {this.state.vorstellungen.map((daten) => (
                                    <div className="vorstWrapper" key={daten.datum}>
                                        <h2 className="Datum" key={daten.datum}> {daten.datum} </h2>
                                        {daten.vorstellung.map((vorstellung) => (
                                            <div className="vorstButton">
                                                <button key = {vorstellung.vorstellungId} id={vorstellung.vorstellungId} onClick={this.showNext}>{vorstellung.uhrzeit}</button>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="nextButtonWrapper">
                            {this.renderRedirect()}
                            <button className="nextButton" onClick={this.setRedirect} disabled={!this.state.nextButton}>Weiter zur Sitzplatzreservierung</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default FilmDetails;
